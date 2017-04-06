export default function(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}
