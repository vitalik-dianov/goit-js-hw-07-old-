import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(imageItems) {
    return imageItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                    </a>
                </li>`;
    })
    .join("")
};
    
galleryRef.addEventListener("click", onPhotoClick);


function onPhotoClick(e) {

    e.preventDefault();
    
    const isGalleryImageRef = e.target.classList.contains("gallery__image");
    
    if (!isGalleryImageRef) {
        return;
    }

    let gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
    });

    gallery.on('show.simplelightbox', function () {

    })
}

// console.log(galleryItems);