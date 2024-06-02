document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            const moreProducts = category.querySelector('.more-products');
            const icon = category.querySelector('i');

            if (moreProducts.classList.contains('d-none')) {
                moreProducts.classList.remove('d-none');
                icon.classList.remove('fa-angle-down');
                icon.classList.add('fa-angle-up');
            } else {
                moreProducts.classList.add('d-none');
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
            }
        });
    });

    // Existing theme toggle code
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});
