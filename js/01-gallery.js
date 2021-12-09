import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", galleryAddMarkup(galleryItems));

function galleryAddMarkup(imageItems) {
  return imageItems
    .map((imageItem) => {
      return `
        <li class="gallery__item">
            <a href="#">
                <img data-lightbox="gallery1" class ="gallery__image" src="${imageItem.preview}" alt="${imageItem.description}"/>
            </a>
        </li>`;
    })
    .join("");
}

galleryRef.addEventListener("click", onPhotoClick);

function onPhotoClick(e) {
  e.preventDefault();

  const isGalleryImageRef = e.target.classList.contains("gallery__image");

  if (!isGalleryImageRef) {
    return;
  }

  let imagePreviewSrc = e.target.src;
  let originalPhotoSrc = getOriginalPhotoSrc(galleryItems, imagePreviewSrc);

  const instance = basicLightbox.create(`<img />`, {
    onShow: (instance) => {
      "onShow", instance;
      window.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
          instance.close();
        }
      });
    },

    onClose: (instance) => {
      "onClose", instance;
    },
  });

  instance.element().querySelector("img").src = originalPhotoSrc;
  instance.show();
}

function getOriginalPhotoSrc(imageItems, imagePreviewSrc) {
  return imageItems.find((imageItem) => {
    return imageItem.preview === imagePreviewSrc;
  }).original;
}

// console.log(galleryItems);
