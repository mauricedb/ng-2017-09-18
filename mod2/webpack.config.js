module.exports = {
  entry: "./calculator-ui.ts",
  output: {
    filename: "calculator-bundle.js"
  },
  module: {
    loaders: [
      {
        rules: [{ test: /\.ts$/, use: "ts-loader" }]
      }
    ]
  },
  resolve:{
    extensions: [".ts",".js", ".json"]
  }
};
