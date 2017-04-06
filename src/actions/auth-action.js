
export const login = (username, password) => (
  (dispatch) => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { token: '4713e3D' }
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE'
        });
      }
    }, 1000);
  }
);

export const logout = () => ({
  type: 'LOGOUT',
  payload: null
});
