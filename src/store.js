import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';

/*
  Default starting state, like React's getInitialState
 */
const defaultState = {
  genreState: {
    genreChoice: 'alternative'
  },
  albumState: {
    albums: {},
    inProgress: false,
    error: null
  }
};

/*
  Enable Chrome Redux DevTools extension
 */
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

/*
  Enable Hot Reloading for the reducers
  We re-require() the reducers whenever any new code has been written.
  Webpack will handle the rest
*/

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;