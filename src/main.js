import { fetchImages } from './pixabay-api.js';
import {
  showLoader,
  hideLoader,
  clearGallery,
  renderGallery,
} from './render-functions.js';

const refs = {
  form: document.querySelector(`.form`),
  loader: document.querySelector(`.loader`),
  gallery: document.querySelector(`.gallery`),
};

refs.form.addEventListener(`submit`, handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchQuery = e.target.elements.searchText.value.trim();

  if (!searchQuery) return;

  showLoader(refs.loader);
  clearGallery(refs.gallery);

  fetchImages(searchQuery)
    .then(images => renderGallery(images, refs.gallery))
    .catch(error => console.error(error))
    .finally(() => hideLoader(refs.loader));

  e.target.reset();
}
