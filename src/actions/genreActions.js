import * as types from './actionTypes';

export function selectGenre(genre) {
  return {
    type: 'SELECT_GENRE',
    genre
  };
};