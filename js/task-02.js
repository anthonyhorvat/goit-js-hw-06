const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.innerText = ingredient;
  li.classList.add("item");
  list.appendChild(li);
});
