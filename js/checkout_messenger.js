document.getElementById('send-to-messenger').addEventListener('click', function () {
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const novaPochta = document.getElementById('nova_pochta').value;

    if (!fullname || !phone || !city || !novaPochta) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartText = '';

    if (cartItems.length === 0) {
        cartText = 'Кошик порожній.';
    } else {
        cartItems.forEach((item, i) => {
            cartText += `\n--- Товар ${i + 1} ---\n`;
            cartText += `Артикул: ${item.article}\n`;
            cartText += `Назва: ${item.name}\n`;
            cartText += `Колір: ${item.color}\n`;
            cartText += `Розмір: ${item.size}\n`;
            cartText += `Кількість: ${item.quantity}\n`;
        });
    }

    const message = `Доброго дня! Хочу зробити замовлення:\n\nІм'я: ${fullname}\nТелефон: ${phone}\nМісто: ${city}\nВідділення НП: ${novaPochta}\n\nТовари:${cartText}`;

    // Підготовка URL для відкриття чату в Messenger
    const messengerURL = `https://m.me/61559734116983?text=${encodeURIComponent(message)}`;
    
    // Перехід на сторінку Facebook Messenger
    window.location.href = messengerURL;
});
