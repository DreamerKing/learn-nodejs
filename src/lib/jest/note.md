安装 Jest

```bash
yarn add jest -D
```

生成配置文件

```bash
jest --init
```

添加 TypeScript 支持

```bash
yarn add ts-node -D
yarn add typescript -D
yarn add @babel/core @babel/preset-env  @babel/preset-typescript -D
```

若要支持 TypeScript 写测试用例，需要使用`ts-jest`运行。

```bash
yarn add --dev ts-jest @types/jest
// 创建配置文件
yarn ts-jest config:init
yarn test or yarn jest
```

配置 Babel
`.babelrc`

```json
{
  "presets": [
    ["@babel/preset-env", { "targets": { "node": "current" } }],
    "@babel/preset-typescript"
  ]
}
```
