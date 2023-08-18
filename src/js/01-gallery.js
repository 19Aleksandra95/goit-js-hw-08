// Add imports above this line
import { galleryItems } from './gallery-items';
console.log('galleryItems', galleryItems);
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryListRefs = document.querySelector('.gallery');
const markapList = galleryItems
  .map(img => {
    return `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`;
  })
  .join('');
galleryListRefs.innerHTML = markapList;

galleryListRefs.addEventListener('click', openModal);

function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});