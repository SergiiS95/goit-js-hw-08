// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryImg = galleryItems
  .map(
    galleryItem =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
   </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryImg);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});