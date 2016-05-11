import axios from 'axios';
import genreIds from '../genres';
import store from '../store';
import * as hitsActions from '../actions/hitsActions';

/**
 * Get top hits
 */
export function getCurrentHits(genre) {
  store.dispatch(hitsActions.getHits(genre));

  const url = 'https://itunes.apple.com/us/rss/topalbums/limit=5/genre=' + genreIds[genre] + '/explicit=true/json';
  return axios.get(url)
    .then(response => {
      store.dispatch(hitsActions.getHitsSuccess(genre, response));
    })
    .catch((err) => {
      console.log("An error occured.");
      store.dispatch(hitsActions.getHitsFailure(err));
    });
}