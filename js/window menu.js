let header_burgerMenu = document.getElementById("header_burgerMenu");
let window_menu = document.getElementById("window_menu");
let window_menu_box = document.getElementById("window_menu_box");
let window_menu_closed = document.getElementById("window_menu_closed"); // Додано для кнопки закриття

// Кнопка для відкриття/закриття меню
header_burgerMenu.addEventListener("click", () => {
    window_menu.classList.toggle("active"); // Включаємо/вимикаємо меню

    // Вимикаємо або вмикаємо прокручування
    if (window_menu.classList.contains("active")) {
        document.body.classList.add("no-scroll"); // Вимикаємо прокручування
    } else {
        document.body.classList.remove("no-scroll"); // Включаємо прокручування
    }
});

// Кнопка закриття меню
window_menu_closed.addEventListener("click", function () {
    window_menu.classList.remove("active"); // Закриваємо меню
    document.body.classList.remove("no-scroll"); // Включаємо прокручування
});

// Закриття меню, якщо клікнути поза його межами
document.addEventListener('mousedown', function(event) {
    if (!window_menu_box.contains(event.target) && window_menu.classList.contains("active")) {
        window_menu.classList.remove("active"); // Закриваємо меню
        document.body.classList.remove("no-scroll"); // Включаємо прокручування
    }
});

function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
  }
  