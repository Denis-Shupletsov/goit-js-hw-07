//! 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.Используй готовый код из первого задания.
//* 2.Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
//? 3.Инициализация библиотеки после того как элементы галереи созданы и добавлены в ul.gallery.Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
//! 4.Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.


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
