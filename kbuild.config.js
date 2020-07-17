const typescript = require('@kelpjs/build/plugins/typescript');

exports.output = {
  publicPath: 'dist/'
};

exports.style = {
  px2rem: false,
};

exports.plugins = [
  typescript()
];