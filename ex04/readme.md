## ex04: Bundling II: CSS Module

0. Init. Project

```sh
 # npm init -y
```

1. Install Packages

```sh
 # npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader
```

2. NPM Scripting

```json
"scripts": {
  "start": "npx webpack serve --progress",
  "build": "npx webpack"
}
```

3. Webpack Configuration

1) entry
2) output
3) devServer
4) module

```js
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
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
