
import crypto from 'crypto-js';

const { SHA256, HmacSHA256: hmacSHA256 } = crypto;

import qs from 'querystring';

const util = {
  hmac(key, string) {
    return hmacSHA256(string, key);
  },
  sha256(data) {
    return SHA256(data);
  },
}

const unsignableHeaders = [
  'authorization',
  'content-type',
  'content-length',
  'user-agent',
  'presigned-expires',
  'expect',
  'x-amzn-trace-id',
];

const uriEscape = (str) => {
  try {
    return encodeURIComponent(str)
      .replace(/[^A-Za-z0-9_.~\-%]+/g, qs.escape)
      .replace(
        /[*]/g,
        ch =>
          `%${ch
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()}`,
      );
  } catch (e) {
    return '';
  }
};

const queryParamsToString = (params) =>
  Object.keys(params).sort()
    .map((key) => {
      const val = params[key];
      if (typeof val === 'undefined' || val === null) {
        return;
      }
      const escapedKey = uriEscape(key);
      if (!escapedKey) {
        return;
      }
      if (Array.isArray(val)) {
        return `${escapedKey}=${val
          .map(uriEscape)
          .sort()
          .join(`&${escapedKey}=`)}`;
      }
      return `${escapedKey}=${uriEscape(val)}`;
    })
    .filter(v => v)
    .join('&');

class Signer {
  constructor(request, serviceName, options) {
    this.request = request;
    this.request.headers = request.headers || {};
    this.serviceName = serviceName;
    options = options || {};
    this.signatureCache = typeof options.signatureCache === 'boolean' ? options.signatureCache : true;
    this.operation = options.operation;
    this.signatureVersion = options.signatureVersion;
    this.constant = options.isVolcengine ? {
      algorithm: 'HMAC-SHA256',
      v4Identifier: 'request',
      dateHeader: 'X-Date',
      tokenHeader: 'x-security-token',
      contentSha256Header: 'X-Content-Sha256',
      kDatePrefix: '',
    } : {
      algorithm: 'AWS4-HMAC-SHA256',
      v4Identifier: 'aws4_request',
      dateHeader: 'X-Amz-Date',
      tokenHeader: 'x-amz-security-token',
      contentSha256Header: 'X-Amz-Content-Sha256',
      kDatePrefix: 'AWS4',
    };
    this.bodySha256 = options.bodySha256;
  }
  addAuthorization(credentials, date) {
    const datetime = this.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');
    this.addHeaders(credentials, datetime);
    this.request.headers['Authorization'] = this.authorization(credentials, datetime);
  }
  addHeaders(credentials, datetime) {
    this.request.headers[this.constant.dateHeader] = datetime;
    if (credentials.sessionToken) {
      this.request.headers[this.constant.tokenHeader] = credentials.sessionToken;
    }
    if (this.request.body) {
      let body = this.request.body;
      if (typeof body !== 'string') {
        if (body instanceof URLSearchParams) {
          body = body.toString();
        } else {
          body = JSON.stringify(body);
        }
      }
      this.request.headers[this.constant.contentSha256Header] = this.bodySha256 || util.sha256(body).toString();
    }
  }
  authorization(credentials, datetime) {
    const parts = [];
    const credString = this.credentialString(datetime);
    parts.push(`${this.constant.algorithm} Credential=${credentials.accessKeyId}/${credString}`);
    parts.push(`SignedHeaders=${this.signedHeaders()}`);
    parts.push(`Signature=${this.signature(credentials, datetime)}`);
    return parts.join(', ');
  }
  signature(credentials, datetime) {
    const signingKey = this.getSigningKey(
      credentials,
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName,
      this.signatureCache,
    );
    return util.hmac(signingKey, this.stringToSign(datetime), 'hex');
  }
  stringToSign(datetime) {
    const parts = [];
    parts.push(this.constant.algorithm);
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  }
  canonicalString() {
    const parts = [], pathname = this.request.pathname || '/';
    parts.push(this.request.method.toUpperCase());
    parts.push(pathname);
    parts.push(queryParamsToString(this.request.params) || '');
    parts.push(`${this.canonicalHeaders()}\n`);
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedBodyHash());
    return parts.join('\n');
  }
  canonicalHeaders() {
    const headers = [];
    Object.keys(this.request.headers).forEach((key) => {
      headers.push([key, this.request.headers[key]]);
    });
    headers.sort((a, b) => a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1);
    const parts = [];
    headers.forEach((item) => {
      const key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        const value = item[1];
        if (typeof value === 'undefined' || value === null || typeof value.toString !== 'function') {
          throw new Error(`Header ${key} contains invalid value`);
        }
        parts.push(`${key}:${this.canonicalHeaderValues(value.toString())}`);
      }
    });
    return parts.join('\n');
  }
  canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  }
  signedHeaders() {
    const keys = [];
    Object.keys(this.request.headers).forEach((key) => {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) {
        keys.push(key);
      }
    });
    return keys.sort().join(';');
  }
  credentialString(datetime) {
    return this.createScope(
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName,
    );
  }
  hexEncodedHash(string) {
    return util.sha256(string);
  }
  hexEncodedBodyHash() {
    if (this.request.headers[this.constant.contentSha256Header]) {
      return this.request.headers[this.constant.contentSha256Header];
    }
    if (this.request.body) {
      return this.hexEncodedHash(queryParamsToString(this.request.body));
    }
    return this.hexEncodedHash('');
  }
  isSignableHeader(key) {
    if (key.toLowerCase().indexOf('x-amz-') === 0) {
      return true;
    }
    return unsignableHeaders.indexOf(key) < 0;
  }
  iso8601(date) {
    if (date === undefined) {
      date = new Date();
    }
    return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
  }
  getSigningKey(
    credentials,
    date,
    region,
    service,
  ) {
    const kDate = util.hmac(
      `${this.constant.kDatePrefix}${credentials.secretAccessKey}`,
      date,
    );
    const kRegion = util.hmac(kDate, region);
    const kService = util.hmac(kRegion, service);
    const signingKey = util.hmac(kService, this.constant.v4Identifier);
    return signingKey;
  }
  createScope(date, region, serviceName) {
    return [
      date.substr(0, 8),
      region,
      serviceName,
      this.constant.v4Identifier,
    ].join('/');
  }
}


async function doRequest() {
  const params = {
    Version: '2020-01-01',
    Action: 'SendSmsVerifyCode',
  };
  const Region = 'cn-north-1';

  const AccessKey = 'AKLTNTQ4ZWY1ODkxOGQwNGJjNzk3ZTFmNGE4YmEwZDVhNzM';
  const SecretKey = 'TUdVek9XWTRORE15TVdZMU5ESmpaV0kzTVRReVpqTXhaV1E0WVRNd1pqZw==';
  let isVolcEngine = 'true'
  const ServiceName = 'volcSMS';
  const headers = new Headers();

  const signObj = {
    region: Region,
    headers,
    params,
    method: 'POST',
    body: JSON.stringify({
      SmsAccount: '7555c16e',
      Sign: '顶糖科技',
      Tag: "测试",
      TemplateID: 'ST_7555b0df',
      Scene: '注册验证码',
      CodeType: 6,
      ExpireTime: 60,
      TryCount: 1,
      PhoneNumber: '15658001296'
    })
  };

  const signer = new Signer(signObj, ServiceName, {
    isVolcengine: isVolcEngine !== 'false'
  });

  signer.addAuthorization({
    accessKeyId: AccessKey,
    secretAccessKey: SecretKey
  });

  const res = await fetch(`https://sms.volcengineapi.com/?${qs.stringify(params)}`, {
    headers: {
      ...signer.request.headers,
      'Content-Type': 'application/json;charset=utf-8'
    },
    method: 'POST',
    body: signObj.body
  });
  const responseText = await res.text();
  console.log(responseText);
}

doRequest();

