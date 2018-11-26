import api from './api';

export default {
  login(model) {
    return api().post('Account/Login', model);
  },
};
