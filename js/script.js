document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navMenu = document.querySelector('header nav ul');

    hamburgerButton.addEventListener('click', function () {
        navMenu.classList.toggle('menu-open');
        
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !isExpanded);
    });

    const dropdownLi = navMenu.querySelector('.has-dropdown');
    const dropdownToggle = dropdownLi ? dropdownLi.querySelector('a') : null;

    if (dropdownToggle && window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', function (e) {
            if (e.currentTarget.parentElement.classList.contains('has-dropdown')) {
                e.preventDefault(); 
                dropdownLi.classList.toggle('is-open');
            }
        });
    }

    const modal = document.getElementById('cadastro-sucesso-modal');
    if (modal) {
        const closeModalBtn = modal.querySelector('.close-modal-btn');
        const submitForms = document.querySelectorAll('form');
        
        submitForms.forEach(form => {
            form.addEventListener('submit', function (e) {
                e.preventDefault(); 
                
                modal.classList.add('is-open');

                form.reset();
            });
        });
        
    
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('is-open');
        });

      
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('is-open');
            }
        });
    }
});