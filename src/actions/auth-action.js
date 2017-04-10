import { post } from './api';

export const login = (username, password) => {
  const body = {
    username,
    password,
    client_id: 'P4oZ6O93FslFuOsFG2RoudyJdELIUwBf',
    connection: 'Username-Password-Authentication',
    scope: 'openid'
  };
  const options = {
    endpoint: 'https://chris-li.auth0.com/oauth/ro',
    method: 'POST'
  };
  return post('LOGIN')(body, options);
};

export const logout = () => ({
  type: 'LOGOUT',
  payload: null
});
