import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
});

const middlewares = [];

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
