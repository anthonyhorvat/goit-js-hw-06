// const categoriesEl = document.querySelectorAll(".item");
// console.log("Number of categories: ", categoriesEl.length);
// const categoriesDetails = categoriesEl.forEach((category) => {
//   console.log("Category;", category.firstElementChild.textContent);
//   console.log("Elements:", category.querySelectorAll("li").length);
// });

const counter = (parent) => {
  return parent.childElementCount;
};
const message = (elements) => {
  elements.forEach((element) => {
    const firstEl = element.firstElementChild;
    const secondElem = firstEl.nextElementSibling;
    console.log(`Category: ${firstEl.textContent}`);
    console.log(`Elements: ${counter(secondElem)}`);
  });
};
const categories = document.querySelector("#categories");
const subCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${counter(categories)}`);
message(subCategories);
