const typescript = require('@kelpjs/build/plugins/typescript');

exports.output = {
  publicPath: 'dist/'
};

exports.style = {
  px2rem: false,
};

exports.react = {
  useExternals: false
};

exports.plugins = [
  typescript()
];