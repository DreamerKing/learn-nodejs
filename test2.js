import { iam } from '@volcengine/openapi';

async function main(AccessKeyId, SecretKey) {
  // Use the default service instance. You can also create a new instance.
  // `const iamService = new iam.IamService();`
  const iamService = iam.defaultService;

  // set aksk
  iamService.setAccessKeyId(AccessKeyId);
  iamService.setSecretKey(SecretKey);

  // Request OpenAPI
  const usersResponse = await iamService.ListUsers({
    Limit: 10,
    Offset: 0,
  });
}

main('AKLTNTQ4ZWY1ODkxOGQwNGJjNzk3ZTFmNGE4YmEwZDVhNzM', 'TUdVek9XWTRORE15TVdZMU5ESmpaV0kzTVRReVpqTXhaV1E0WVRNd1pqZw==').then((res) => {
  console.log(res);
})