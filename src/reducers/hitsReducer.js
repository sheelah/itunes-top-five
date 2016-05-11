import * as types from '../actions/actionTypes';

const initialState = {
  albums: {},
  inProgress: false,
  error: null
};

const hitsReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.GET_HITS_REQUEST:
      return {
        ...state,
        inProgress: true,
        error: null
      };
    case types.GET_HITS_SUCCESS:
      return {
        ...state,
        albums: {
          ...state.albums,
          [action.genre]: action.response
        },
        inProgress: false,
        error: null
      };
    case types.GET_HITS_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.err.message
      };
    default:
      return state;
  }

};

export default hitsReducer;