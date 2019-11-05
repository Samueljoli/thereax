import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';
import { initialState } from './state';

export default () => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}
