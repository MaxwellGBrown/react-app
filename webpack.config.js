const path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist") ,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ["es2016", "react", "stage-0"]
          }
        },
        exclude: /node_modules/,
      }
    ] 
  }
};
