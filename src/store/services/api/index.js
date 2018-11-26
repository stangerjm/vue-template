import axios from 'axios';
import config from '../../../../app.config';

const {
  proxy: {
    alias = '/api',
  } = {},
} = config;

export default () => axios.create({ baseURL: alias });
