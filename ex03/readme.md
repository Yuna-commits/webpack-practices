## ex03: Webpack Development Server

0.  Init. Project

```sh
# npm init -y
```

1.  Install Packages

```sh
# npm i -D webpack webpack-cli webpack-dev-server
```

2.  NPM Scripting

```json
"scripts": {
  "start": "npx webpack serve --progress",
  "build": "npx webpack"
},
```

3.  Webpack Configuration

4.  entry

5.  output

6.  devServer

```js
devServer: {
  host: '0.0.0.0',
  port: 9090,
  liveReload: true,
  compress: true,
  hot: false
},
```

7.  Build(Bundling)

```sh
# npm run build
```

8.  Test

```sh
# npm start
```
