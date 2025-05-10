document.getElementById('buy_bliad').addEventListener('click', () => {
    const botToken = '8194429089:AAGZst6Z6zr0IncIpx5v0K7U3LSWy7f_RjQ';
    const chatId = '5148446547';
    const message = 'Користувач натиснув кнопку "Купити нажали"';

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => {
        console.log('Відповідь Telegram:', data);
      })
      .catch(error => {
        console.error('Помилка:', error);
      });
  });
