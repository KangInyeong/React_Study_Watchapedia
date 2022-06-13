const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@component": path.resolve(__dirname, "src/component")
  })
);
