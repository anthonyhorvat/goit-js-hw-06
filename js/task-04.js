let counterValue = 0;
const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action = "increment"]`
);
let counter = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});
