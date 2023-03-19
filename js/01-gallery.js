import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const imagesMarkup = createItemsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);

function createItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original.value}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
</li>`;
    }).join('');
};

const onClickContainer = (event) => {
    event.preventDefault();

    const targetEl = event.target;
    if (targetEl.classList.contains('gallery')) return;
    const source = event.target.dataset.source;

    const sample = basicLightbox.create(`<img src="${source}"width='800' height='600'>`);

    sample.show();
};

galleryRef.addEventListener('click', onClickContainer);
