const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");

const makeGallery = images
  .map(
    (image) =>
      `<li class="list"><img class="gallery-image" src = ${image.url} width = "400" alt = ${image.alt}"></img></li>`
  )
  .join("");
galleryEl.style.display = "flex";
galleryEl.style.gap = "10px";
galleryEl.style.listStyleType = "none";
galleryEl.style.justifyContent = "center";

galleryEl.insertAdjacentHTML("beforeend", makeGallery);
// const makeGallery = (images) => {
//   return images.map((image) => {
//     const listItem = document.createElement("li");
//     const listItemImage = document.createElement("img");
//     listItem.append(listItemImage);
//     listItemImage.src = image.url;
//     listItemImage.alt = image.alt;
//     listItemImage.width = 320;
//     return listItem;
//   });
// };

// const listEl = makeGallery(images);
// galleryEl.append(...listEl);

// galleryEl.style.display = "flex";
// galleryEl.style.gap = "10px";
// galleryEl.style.listStyleType = "none";
// galleryEl.style.justifyContent = "center";
