import { get, post } from './api';
import config from '../lib/config';

const { mlab: { url, apiKey } } = config.api;
const endpoint = `${url}/projects`;

export const create = (project) => {
  const options = {
    endpoint,
    query: { apiKey }
  };
  return post('CREATE_PROJECT')(project, options);
};

export const find = (params) => {
  const options = {
    endpoint,
    query: { ...params, apiKey }
  };
  return get('FIND_PROJECTS')(options);
};
