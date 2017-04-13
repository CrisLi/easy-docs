export default function(state = { list: [] }, action) {
  switch (action.type) {
    case 'FIND_PROJECTS_SUCCESS':
      return {
        ...state,
        list: action.payload,
      };
    case 'CREATE_PROJECT_REQUEST':
      return {
        ...state,
        isProcessing: true
      };
    case 'CREATE_PROJECT_SUCCESS':
      return {
        ...state,
        list: [...state.list, action.payload],
        isProcessing: false
      };
    case 'CREATE_PROJECT_FAILURE':
      return {
        ...state,
        error: {
          message: action.payload.response.message
        },
        isProcessing: false
      };
    default:
      return state;
  }
}
