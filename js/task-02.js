const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");

const addIngrediensEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add(".item");
  itemEl.textContent = ingredient;
  return itemEl;
});
list.append(...addIngrediensEl);
