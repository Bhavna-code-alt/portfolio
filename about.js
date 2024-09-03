document.addEventListener('DOMContentLoaded', function () {
    var carouselItems = document.querySelectorAll('.carousel-item');
    var currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach(function (item, i) {
            item.classList.remove('active');
            item.style.opacity = '0';
            if (i === index) {
                item.classList.add('active');
                setTimeout(function () {
                    item.style.opacity = '1';
                }, 50);
            }
        });
    }

    document.querySelector('.carousel-control-next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    });

    showItem(currentIndex); // Initialize the carousel with the first item
});