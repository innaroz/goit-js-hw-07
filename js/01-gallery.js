import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');

const galleryItemTemplate = (item) => `
  <div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>
`;

galleryItems.forEach((item) => galleryWrapper.insertAdjacentHTML('beforeend', galleryItemTemplate(item)));

const instance = basicLightbox.create(`
  <img src="" class="image-modal" width="800" height="600">
`);

document.querySelectorAll(".gallery__image").forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    instance.element().querySelector('.image-modal').setAttribute('src', image.dataset.source);
    instance.show();
  });
});

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) {
    instance.close();
  }
});
