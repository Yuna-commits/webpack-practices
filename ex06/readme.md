## ex06: Bundling IV: Image Module

0. Init. Project

```sh
# npm init -y
```

1. Install Packages

```sh
# npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader sass
```

2. NPM Scripting

```json
"scripts": {
  "start": "npx webpack serve  --progress",
  "build": "npx webpack"
}
```

3. Webpack Configuration

1) entry
2) output

```js
output: {
    assetModuleFilename: "assets/images/[hash][ext]";
}
```

3. devServer
4. module

```js
module: {
    rules: [
        {...},
        {
            test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
            type: "asset/resource",
        },
    ];
}
```

4. Build(Bundling)

```sh
# npm run build
```

5. Test

```sh
# npm start
```
