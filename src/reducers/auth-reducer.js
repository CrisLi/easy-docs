export default function(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
