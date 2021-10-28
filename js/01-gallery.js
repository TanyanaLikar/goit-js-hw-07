import { galleryItems } from './gallery-items.js';
// Change code below this line

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
    
};
   

galleryContainer.addEventListener('click', onOpenModal);

const instance = basicLightbox.create(`    
    <img src= "" width="800" height="600"/>`,{
onShow: () => {
window.addEventListener('keydown', onEscKeyPress);
 },
 onClose: () => {
    window.removeEventListener('keydown', onEscKeyPress);
  },
});

function onEscKeyPress(event){
    if(event.code === 'Escape'){
        instance.close();
        return ;           
    }     
}
function onOpenModal(event){
    event.preventDefault();
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show() 
}
       
    

console.log(galleryItems);
  


