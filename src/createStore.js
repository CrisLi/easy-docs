import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { reducer as formReducer } from 'redux-form';
import { createLogger } from 'redux-logger';
import { authMiddleware } from './lib/auth';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  form: formReducer
});

const middlewares = [thunk, apiMiddleware, authMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default (initialState = {}) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  )
);
