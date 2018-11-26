import axios from 'axios';

const { config } = require('../../../../app.config');

const {
  proxy: {
    alias = '/api',
  } = {},
} = config;

export default () => axios.create({ baseURL: alias });
