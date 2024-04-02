const toggleBtn = document.getElementById('toggle-btn');
        const sidebar = document.getElementById('sidebar');
        const closeBtn = document.getElementById('close-btn');
        
        toggleBtn.addEventListener('click', () => {
          sidebar.classList.toggle('show');
          toggleBtn.style.display = sidebar.classList.contains('show') ? 'none' : 'block';
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('show');
            toggleBtn.style.display = 'block';
          });