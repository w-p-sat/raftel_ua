// js/slick_tovar.js

// Ініціалізація слайдера
window.initSlider = function () {
  if (typeof $ === 'undefined' || !$('.slider_tovar').length) {
    console.warn('jQuery або .slider_tovar не знайдені');
    return;
  }

  $('.slider_tovar').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: true,
  });
};

// Функція для підставляння картинок у слайдер
window.loadSliderImages = function (images) {
  if (!Array.isArray(images) || images.length === 0) {
    console.warn('Немає картинок для слайдера');
    return;
  }

  const sliderContainer = document.querySelector('.slider_tovar');
  if (!sliderContainer) {
    console.warn('Контейнер слайдера не знайдений');
    return;
  }

  // Очищаємо контейнер перед вставкою
  sliderContainer.innerHTML = '';

  // Додаємо всі картинки
  images.forEach((imgUrl, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slider_boxik';
    slideDiv.innerHTML = `<img src="${imgUrl}" alt="Фото ${index + 1}">`;
    sliderContainer.appendChild(slideDiv);
  });

  // Ініціалізуємо slick після вставки картинок
  window.initSlider();
};
