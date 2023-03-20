import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<ul class="gallery">
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a></li>
</ul>`;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'alt'
});
