import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src=${preview} alt=${description} />
    </a>
 </li>`
  )
  .join('');

list.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  captionsData: 'alt',
  captionSelector: 'img',
  overlayOpacity: 0.9,
  alertErrorMessage: 'Image not found, next image will be loaded',
});
