$(document).ready(function() {
  // Спочатку заміняємо вміст .slider на спінер
  $('.slider').html(`
    <div id="loader" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div class="spinner"></div>
    </div>
  `);

  // Отримуємо продукти
  $.ajax({
    url: 'https://crm-raftel.vercel.app/api/products',
    method: 'GET',
    success: function(data) {
      console.log(data);  // Перевіряємо, що саме приходить від API
      if (Array.isArray(data.products)) {
        const filteredProducts = data.products.filter(product => product.category === 'Сукні');
        
        // Очищаємо .slider перед додаванням нових елементів
        $('.slider').empty();

        filteredProducts.forEach(product => {
          const image = product.images?.[0] || 'image/default.jpg';
          const slide = `
            <a href='product.html?productId=${product._id}' class="slider_boxik">
              <div class="list_box">
                <img src="${image}" alt="">
                <nav class="slider_boxik_artikul">Артикул: ${product.article}</nav>
                <p class="slider_boxik_name">${product.name}</p>
                <h2 class="slider_boxik_price">${product.price} грн</h2>
                <button class="slider_boxik_button">Купити</button>
              </div>
            </a>
          `;
          $('.slider').append(slide);
        });

        // Запускаємо slick після додавання товарів
        $('.slider').slick({
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          centerMode: false,
          variableWidth: false,
          autoplay: true,
          adaptiveHeight: true,
          speed: 2000,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1257,
              settings: { slidesToShow: 3, slidesToScroll: 3 }
            },
            {
              breakpoint: 990,
              settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
              breakpoint: 700,
              settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
          ]
        });
      } else {
        console.error('Очікувано масив під ключем "products", але отримано:', data);
        // Якщо немає даних, замінюємо спінер на повідомлення про помилку
        $('.slider').html('<p>Не вдалося завантажити продукти. Спробуйте пізніше.</p>');
      }
    },
    error: function(err) {
      console.error('Помилка при завантаженні продуктів:', err);
      // Якщо сталася помилка, замінюємо спінер на повідомлення про помилку
      $('.slider').html('<p>Сталася помилка при завантаженні продуктів. Спробуйте ще раз пізніше.</p>');
    }
  });
});
