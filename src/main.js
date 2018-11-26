import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

require('smart-x-vue/src/styles/sass/base/_base.scss');
require('smart-x-vue');
require('es6-promise/auto');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // Fetch data from API
  },
}).$mount('#app');
