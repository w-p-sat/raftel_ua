const rangeInput = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");

rangeInput.addEventListener("input", () => {
  priceValue.textContent = rangeInput.value;
});

