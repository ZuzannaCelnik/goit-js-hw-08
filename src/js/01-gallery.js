// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList =  document.querySelector(".gallery");

const galleryItemsElement = galleryItems.map(element => {
            const image = `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}" >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
      return image;
      })
      .join(" ");

      
galleryList.insertAdjacentHTML("beforeend", galleryItemsElement);  

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionClass: "bottom",
    captionDelay: "250",
});
