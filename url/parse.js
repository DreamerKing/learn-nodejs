const url = require('url');

console.log(url.parse('//nodejs.org/dist/latest-v13.x/docs/api/url.html?a=12&b=23#url_url_parse_urlstring_parsequerystring_slashesdenotehost', true, true));
console.log(url.parse('//foo/bar', false, true));

// parse(urlString, [, parseQueryString [, slashesDenoteHost]]);
// parseQueryString 是否解析query为对象
// slashesDenoteHost 是否将//后的字符解析为host

let u = {
    protocol: "http",
    slashes: true,
    auth: null,
    host: 'nodejs.org',
    port: null,
    hostname: 'nodejs.org',
    hash: '#url_url_parse_urlstring_parsequerystring_slashesdenotehost',
    search: '?a=12&b=23',
    query: { a: '12', b: '23' },
    pathname: '/dist/latest-v13.x/docs/api/url.html',
    path: '/dist/latest-v13.x/docs/api/url.html?a=12&b=23',
    href: '//nodejs.org/dist/latest-v13.x/docs/api/url.html?a=12&b=23#url_url_parse_urlstring_parsequerystring_slashesdenotehost'
};

console.log(url.format(u));

