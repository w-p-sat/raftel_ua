const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const quantityDisplay = document.getElementById('quantity');

let quantity = 1;

minusBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

plusBtn.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

