// the application level actions

export const toggleSpinner = () => ({
  type: 'TOGGLE_SPINNER'
});

export const showMessage = ({ message = null, type = 'info' }) => ({
  type: 'SHOW_MESSAGE',
  payload: {
    message,
    type
  }
});
