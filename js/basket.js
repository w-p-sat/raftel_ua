function initCartActions() {
    const cartCountDisplay = document.getElementById('cart-count');
    let cartCount = 0;

    const box = document.querySelector('.box_buy');
    const productContainer = document.querySelector('.main_product');

    if (!box || !productContainer) return; // ⛔ захист

    const minusBtn = box.querySelector('.minus-btn');
    const plusBtn = box.querySelector('.plus-btn');
    const quantityDisplay = box.querySelector('.quantity');
    const buyBtn = box.querySelector('.buy');

    let selectedColor = null;
    let selectedSize = null;

    // Функція для оновлення кількості товарів у кошику
    function updateCartCount() {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Підраховуємо всі товари за кількістю
        if (cartCountDisplay) {
            cartCountDisplay.innerText = cartCount; // Виводимо кількість у відповідний елемент
        }
    }

    // Оновлюємо кількість товарів у кошику при завантаженні сторінки
    updateCartCount();

    productContainer.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            productContainer.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedColor = btn.innerText;
        });
    });

    productContainer.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            productContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedSize = btn.innerText;
        });
    });

    plusBtn.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.innerText);
        quantityDisplay.innerText = current + 1;
    });

    minusBtn.addEventListener('click', () => {
        let current = parseInt(quantityDisplay.innerText);
        if (current > 1) {
            quantityDisplay.innerText = current - 1;
        }
    });

    buyBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityDisplay.innerText);
        const articleName = document.querySelector('.article').innerText;
        const productName = document.querySelector('.product-name').innerText;
        const productImage = document.querySelector('#main-image').getAttribute('src');

        if (!selectedColor) {
            alert("Будь ласка, оберіть колір.");
            return;
        }

        if (!selectedSize) {
            alert("Будь ласка, оберіть розмір.");
            return;
        }

        const product = {
            article: articleName,
            name: productName,
            image: productImage,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
        };

        // Отримуємо поточний кошик з localStorage
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));

        alert(`Товар додано до кошика:\n${productName}\n${articleName}\nКількість: ${quantity}\nКолір: ${selectedColor}\nРозмір: ${selectedSize}`);

        quantityDisplay.innerText = 1;
        productContainer.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
        productContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        selectedColor = null;
        selectedSize = null;

        // Оновлюємо кількість товарів у кошику
        updateCartCount(); // Оновлюємо кількість товарів у кошику
    });
}
