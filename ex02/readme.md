## ex02: Bundling Environment Configuration : webpack.config.js

0. Init. Project

```sh
  $ npm init -y
```

1. Install Packages

```sh
  $ npm i -D webpack webpack-cli express
```

2. NPM Scripting

```json
  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack"
   },
```

3. Webpack Configuration

1. entry

```js
entry: path.resolve("src/index.js");
```

2. output

```js
  output: {
    path: path.resolve('public'),
    filename: 'assets/js/main.js'
  },
```

4. Build(Bundling)

```sh
  $ npm run build
```

5. Test

```sh
  $ npm start
```
