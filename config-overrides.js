const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  // config.resolve.fallback = { path: require.resolve("path-browserify") };
  // config.resolve.fallback = {"os": require.resolve("os-browserify/browser")}
  // config.resolve.fallback = {"os":false};
  // config.resolve.fallback = {  "path": false };
  // config.resolve.fallback = {  "fs": false };
  config.resolve = {
    ...config.resolve,
    fallback: {
      "fs": false,
      "path": false,
      "os": false,
    }
  }
  return config;
};
