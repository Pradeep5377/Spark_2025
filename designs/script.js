let currentSlide = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    const offset = -currentSlide * 760; // Calculate the offset for the slide
    slides.style.transform = `translateX(${offset}px)`; // Move the slider
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds