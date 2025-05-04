$(document).ready(function () {
    const $menu = $('#category-menu');
    const $loader = $('#category-loader');
    const $subMenu = $('#category-subMenu');
  
    // Сховати все, крім спінера
    $menu.children().not($loader).hide();
    $loader.show();
  
    $.ajax({
      url: 'https://crm-raftel.vercel.app/api/categories',
      method: 'GET',
      success: function (data) {
        const categories = data.categories;
  
        if (Array.isArray(categories)) {
          $subMenu.empty(); // Очистити попередній вміст
  
          categories.forEach(category => {
            const $a = $('<a></a>').attr('href', "list.html?category=" + category.name);
            const $p = $('<p></p>').addClass('window_menu_box_list_link').text(category.name);
            $a.append($p);
            $subMenu.append($a);
          });
        } else {
          console.error('Невірний формат даних категорій:', data);
        }
  
        // Після завантаження: показати весь контент і сховати спінер
        $loader.hide();
        $menu.children().not($loader).show();
      },
      error: function (err) {
        console.error('Помилка при отриманні категорій:', err);
        $loader.hide();
        $menu.children().not($loader).show(); // Все одно показати все
      }
    });
  });
  