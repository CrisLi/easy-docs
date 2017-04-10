import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
});

const middlewares = [thunk, apiMiddleware];

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
