
 function toggleProjects(id) {
      const grids = document.querySelectorAll('.project-grid');
      grids.forEach(g => g.style.display = 'none');
      const target = document.getElementById(id + '-projects');
      if (target) target.style.display = 'grid';
    }


    const modal = document.getElementById('modal');
    const openBtn = document.querySelector('.open-modal-btn');
    const closeBtn = document.querySelector('.close-btn');

    openBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Close when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
