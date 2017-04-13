import { bindActionCreators } from 'redux';
import { addNotification as notify } from 'reapop';
import * as authAction from './auth-action';
import * as appAction from './app-action';
import * as projectAction from './project-action';

function wrap(actionCreators) {
  return function(dispatch) {
    return {
      actions: bindActionCreators({ ...actionCreators, notify }, dispatch)
    };
  };
}

export const auth = wrap(authAction);
export const app = wrap(appAction);
export const project = wrap(projectAction);
