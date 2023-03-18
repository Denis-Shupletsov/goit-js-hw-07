import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="small-image.jpg"
                data-source="large-image.jpg"
                alt="Image description"
            />
        </a>
</li>`;
    }).join('');

}
console.log(galleryItems);
