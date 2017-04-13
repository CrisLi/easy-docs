import { post } from './api';
import config from '../lib/config';

const { auth: { endpoint, client_id, connection, scope } } = config;

export const login = (username, password) => {
  const body = {
    username,
    password,
    client_id,
    connection,
    scope
  };
  const options = {
    endpoint
  };
  return post('LOGIN')(body, options);
};

export const logout = () => ({
  type: 'LOGOUT',
  payload: null
});
