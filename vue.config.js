const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const appConfig = require('./app.config');

process.env.VUE_APP_TITLE = appConfig.appTitle;

module.exports = {
  outputDir: path.resolve(__dirname, appConfig.buildDirectory),
  // outputDir: path.resolve(__dirname, '../wwwroot'),
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
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:5000',
    //   },
    // },
  },
  chainWebpack: (config) => {
    // use vue compiler
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
  },
};
