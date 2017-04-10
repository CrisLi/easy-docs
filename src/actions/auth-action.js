import { setToken, deleteToken } from '../lib/auth';

export const login = (username, password) => (
  (dispatch) => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        setToken('4713e3D');
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { token: '4713e3D' }
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: { message: 'Invalid username or password!' }
        });
      }
    }, 1000);
  }
);

export const logout = () => {
  deleteToken();
  return {
    type: 'LOGOUT',
    payload: null
  };
};
