export default function(state = { showSpinner: false }, action) {
  switch (action.type) {
    case 'TOGGLE_SPINNER':
      return {
        ...state,
        showSpinner: !state.showSpinner
      };
    default:
      return state;
  }
}
