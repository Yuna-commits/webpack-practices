## ex01: Bundling I: JS Module

0. Init. Project

```sh
# npm init -y
```

1. Install Packages

```sh
# npm i -D webpack webpack-cli express
```

2. NPM Scripting

```json
  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }
```

3. Build(Bundling)

```sh
# npm run build
```

4. Test

```sh
# npm start
```
