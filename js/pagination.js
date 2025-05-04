let currentPage = 1;
  const itemsPerPage = 9;

  function changePage(direction) {
    const products = document.querySelectorAll('.list_box');
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Оновити поточну сторінку
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    // Показати тільки ті товари, що на поточній сторінці
    products.forEach((product, index) => {
      if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });

    // Оновити номер сторінки
    document.getElementById('pageNumber').textContent = currentPage;

    // Заблокувати кнопки, якщо на межі
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
  }

  // Показати першу сторінку при завантаженні
  document.addEventListener('DOMContentLoaded', function () {
    changePage(0);
  });