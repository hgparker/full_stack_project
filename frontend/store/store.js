import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

// logger from Redux Middleware Tutorial
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export default configureStore;