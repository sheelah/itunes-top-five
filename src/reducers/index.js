import { combineReducers } from 'redux';

// Reducers
import genreReducer from './genreReducer';
import hitsReducer from './hitsReducer';

// Combine Reducers
const rootReducer = combineReducers({
  genreState: genreReducer,
  albumState: hitsReducer
});

export default rootReducer;