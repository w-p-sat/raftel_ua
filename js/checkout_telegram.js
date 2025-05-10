document.getElementById('send-to-telegram').addEventListener('click', function () {
    // Дані з форми
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const novaPochta = document.getElementById('nova_pochta').value;

    if (!fullname || !phone || !city || !novaPochta) {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    // Дані з кошика
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

    // Повне повідомлення
    const message = `Доброго дня! Хочу зробити замовлення:\n\nІм'я: ${fullname}\nТелефон: ${phone}\nМісто: ${city}\nВідділення НП: ${novaPochta}\n\nТовари:${cartText}`;

    // Відправка в Telegram
    const telegramUsername = 'raftel_ua'; // ← твій username
    const telegramURL = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;

    window.location.href = telegramURL;
});



document.getElementById('send-to-telegram').addEventListener('click', () => {
    const botToken = '8194429089:AAGZst6Z6zr0IncIpx5v0K7U3LSWy7f_RjQ';
    const chatId = '5148446547';
    const message = 'Користувач натиснув кнопку "Підтвердити Замовлення в Telegram"';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => {
        console.log('Відповідь Telegram:', data);
      })
      .catch(error => {
        console.error('Помилка:', error);
      });
  });
