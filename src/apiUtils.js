import KEY from './APIKEY.js';

const baseURL = 'http://api.wunderground.com/api/46e582fc6c7199a1/geolookup/q/';

export function getWeatherData(userLocation) {
  return fetch(`${baseURL}${userlocation}.json`).then(response => response.json())
}
