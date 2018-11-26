import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import registration from './modules/registration';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

const store = new Vuex.Store({
  strict: true,
  modules: {
    registration,
  },
  plugins: [vuexLocalStorage.plugin],
});

if (module.hot) {
  module.hot.accept(['./modules/registration'], () => {
    store.hotUpdate({
      modules: {
        registration,
      },
    });
  });
}

export default store;
