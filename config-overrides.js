const {
  override,
  addWebpackAlias,
  addBabelPlugin,
  overrideDevServer,
} = require("customize-cra");
const path = require("path");
const effectorPlugin = require("effector/babel-plugin");

const addProxy = (proxy) => (config) => {
  config.proxy = proxy;
  return config;
};

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@gui/assets": path.resolve(__dirname, "./src/assets"),
      "@gui/ui": path.resolve(__dirname, "./src/ui"),
      "@gui/features": path.resolve(__dirname, "./src/features"),
      "@gui/lib": path.resolve(__dirname, "./src/lib"),
      "@gui/types": path.resolve(__dirname, "./src/typings"),
    }),
    addBabelPlugin(effectorPlugin)
  ),
};
