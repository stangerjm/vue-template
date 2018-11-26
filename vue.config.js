const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../wwwroot'),
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
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  },
  chainWebpack: (config) => {
    // use vue compiler
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js');
  },
};
