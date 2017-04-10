import config from './config';

const { localTokenKey: TOKEN_KEY } = config.auth;

const auth = {
  token: null
};

export const setToken = (token) => {
  auth.token = token;
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  if (auth.token) {
    return auth.token;
  }
  return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
  auth.token = null;
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  const token = getToken();
  // check token valid
  return !!token;
};

export const authMiddleware = () => next => (action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      setToken(action.payload.id_token);
      break;
    case 'LOGOUT':
      deleteToken();
      break;
    default:
      break;
  }
  return next(action);
};
