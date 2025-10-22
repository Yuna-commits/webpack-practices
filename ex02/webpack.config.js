const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve("src/index.js"),
    output: {
        path: path.resolve("public"), // 번들 결과 파일을 public 아래로
        filename: "assets/js/main.js",
    },
};
