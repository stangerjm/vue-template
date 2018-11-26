const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const { config: appConfig } = require('./app.config');

module.exports = {
  outputDir: path.resolve(__dirname, appConfig.outputDirectory),
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: './report/report.html',
      }),
    ],
  },
  devServer: {
    proxy: {
      [appConfig.proxy.alias]: {
        target: appConfig.proxy.target,
      },
    },
  },
  chainWebpack: (config) => {
    // use vue compiler
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
  },
};
