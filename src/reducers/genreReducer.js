import * as types from '../actions/actionTypes';

const initialState = {
  genreChoice: 'alternative'
};

const genreReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.SELECT_GENRE:
      return {
        ...state,
        genreChoice: action.genre
      };
    default:
      return state;
  }

};

export default genreReducer;