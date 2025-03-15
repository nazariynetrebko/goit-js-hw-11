import { fetchImages } from './js/pixabay-api.js';
import {
  showLoader,
  hideLoader,
  clearGallery,
  renderGallery,
} from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchQuery = e.target.elements['search-text'].value.trim();

  if (!searchQuery) return;

  console.log(refs.loader);
  showLoader(refs.loader);
  clearGallery(refs.gallery);

  fetchImages(searchQuery)
    .then(images => renderGallery(images, refs.gallery))
    .catch(error => console.error(error))
    .finally(() => setTimeout(() => hideLoader(refs.loader), 1000));

  e.target.reset();
}
