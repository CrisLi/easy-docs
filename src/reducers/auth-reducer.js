export default function(state = { isAuthenticated: false }, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true
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
