const webpack = require("webpack");

module.exports = {
  output: {
    filename: "[name].[contentHash].bundle.js",
  },
  mode: "production",
};
