import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend',cardsMarkup);

function createGalleryMarkup(galleryItems){
   return galleryItems
   .map(({preview, original,description}) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>`;
    })
    .join(''); 
    
}
const image = event.target.dataset.source
    const instance = basicLightbox.create(`<img src=“${image}” width=“800" height=“600”>`)

// console.log(createGalleryMarkup(galleryItems));