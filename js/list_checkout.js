const deliveryBlock = document.querySelector('.main_flex_delivery');

function renderCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Перевірка на порожній кошик
    if (cartItems.length === 0) {
        deliveryBlock.innerHTML = '<p>Кошик порожній.</p>';
        return;
    }

    // Створюємо HTML для кошика
    deliveryBlock.innerHTML = '<h3>Ваше замовлення:</h3>';
    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('checkout-item');

        // Створюємо URL для сторінки товару
        const productUrl = `product.html?id=${item._id}`; // Адаптуй URL залежно від структури твого сайту

        itemDiv.innerHTML = `
            <div class="checkout-item-details">
                <a href="${productUrl}">
                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image"> <!-- Відображення картинки, обернуто в посилання -->
                </a>
                <div class="checkout-item-info">
                    <p><strong>${item.article}</p>
                    <p><strong>Товар:</strong> <a href="${productUrl}" class="product-link">${item.name}</a></p>
                    <p><strong>Колір:</strong> ${item.color}</p>
                    <p><strong>Розмір:</strong> ${item.size}</p>
                    <p><strong>Кількість:</strong> ${item.quantity}</p>
                    <button onclick="removeItem(${index})">❌ Видалити</button>
                </div>
            </div>
            <hr class="divider"> <!-- Розділювальна лінія -->
        `;
        deliveryBlock.appendChild(itemDiv);
    });
}

// Видалення товару з кошика
function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart(); // Перерендер кошика
}

renderCart();
