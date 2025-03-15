import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function showLoader(loader) {
  loader.style.display = 'block';
  loader.classList.remove(`hidden`);
}

export function hideLoader(loader) {
  loader.classList.add(`hidden`);
}

export function clearGallery(gallery) {
  gallery.innerHTML = ` `;
}

export function renderGallery(images, gallery) {
  const markup = images.map(createImageCard).join(``);
  gallery.insertAdjacentHTML(`beforeend`, markup);
  initLightbox();
}

function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${likes}</p>
        <p class="info-item"><b>Views</b>${views}</p>
        <p class="info-item"><b>Comments</b>${comments}</p>
        <p class="info-item"><b>Downloads</b>${downloads}</p>
      </div>
    </li>
  `;
}

function initLightbox() {
  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
