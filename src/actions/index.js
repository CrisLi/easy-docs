import { bindActionCreators } from 'redux';
import * as authAction from './auth-action';
import * as appAction from './app-action';

function wrap(actionCreators) {
  return function(dispatch) {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    };
  };
}

export const auth = wrap(authAction);
export const app = wrap(appAction);
