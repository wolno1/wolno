// IndexScript.js

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        const translateValue = -index * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds

    // Optional: Add event listeners for navigation buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});
