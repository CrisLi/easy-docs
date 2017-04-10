export default function(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        isProcessing: true
      };
    case 'LOGIN_SUCCESS':
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
          message: action.payload.message
        }
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
