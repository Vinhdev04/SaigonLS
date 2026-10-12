/**
 * CÔNG TY TNHH XÂY DỰNG SÀI GÒN LS
 * Thư viện tương tác bộ lọc hạng mục thi công công trình thực tế
 */

document.addEventListener('DOMContentLoaded', () => {
  // Bộ lọc Gallery Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');

  if (filterBtns.length > 0 && galleryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Cập nhật trạng thái active cho nút tab
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Lọc hiển thị card tương ứng
        const filterValue = btn.getAttribute('data-filter');
        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
