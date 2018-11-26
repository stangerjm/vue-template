import * as getters from './lib/getters';
import * as actions from './lib/actions';
import * as mutations from './lib/mutations';

const registration = {
  namespaced: true,
  state: {
    account: {},
    errors: [],
  },
  getters,
  actions,
  mutations,
};

export default registration;
