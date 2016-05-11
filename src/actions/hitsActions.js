import * as types from './actionTypes';

export function getHits(genre) {
  return {
    type: 'GET_HITS_REQUEST',
    genre
  };
};

export function getHitsSuccess(genre, response) {
  return {
    type: 'GET_HITS_SUCCESS',
    genre,
    response: response.data.feed.entry
  };
};

export function getHitsFailure(err) {
  return {
    type: 'GET_HITS_FAILURE',
    err
  };
};