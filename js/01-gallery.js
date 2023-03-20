// ! 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// * 2.Реализация делегирования на ul.gallery и получение url большого изображения.
// ? 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// ! 4.Открытие модального окна по клику на элементе галереи.Для этого ознакомься с документацией и примерами.
// * 5.Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


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
