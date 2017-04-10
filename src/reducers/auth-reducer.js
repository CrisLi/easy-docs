import { setToken, deleteToken } from '../lib/auth';

export default function(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isProcessing: true
      };
    case 'LOGIN_SUCCESS':
      setToken(action.payload.id_token);
      return {
        ...state,
        isAuthenticated: true,
        isProcessing: false
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        isProcessing: false,
        error: {
          message: action.payload.response.error_description
        }
      };
    case 'LOGOUT':
      deleteToken();
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
