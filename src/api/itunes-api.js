import axios from 'axios';
import genreIds from '../genres';

/**
 * Get top hits
 */
export function getCurrentHits(genre) {
  const url = 'https://itunes.apple.com/us/rss/topalbums/limit=5/genre=' + genreIds[genre] + '/explicit=true/json';
  return axios.get(url)
    .then(response => response.data);
}