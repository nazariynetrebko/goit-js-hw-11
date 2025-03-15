import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = `49351008-1bfee9cf32a9c846c40651839`;
const BASE_URL = `'https://pixabay.com/api/`;

export function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: `photo`,
    orientation: `horizontal`,
    per_page: `20`,
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => {
      if (!response.data.hits.length) {
        showError(`Sorry, there are no images matching your search query.`);
        return [];
      }
      return response.data.hits;
    })
    .catch(error => {
      showError(`Sorry, there are no images matching your search query.`);
      return [];
    });
}

function showError(message) {
  iziToast.error({
    title: `Error`,
    message: message,
    position: `topRight`,
  });
}
