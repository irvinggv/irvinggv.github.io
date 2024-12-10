let currentSlideMotivation = 0;
let currentSlideOnlineStudy = 0;

const slidesMotivation = document.querySelectorAll('#motivation-slideshow .slide');
const slidesOnlineStudy = document.querySelectorAll('#online-study-slideshow .slide');

function showSlide(index, slideshowId) {
    let slides;
    if (slideshowId === 'motivation') {
        slides = slidesMotivation;
    } else if (slideshowId === 'online-study') {
        slides = slidesOnlineStudy;
    }

    // Hide the current slide
    if (slideshowId === 'motivation') {
        slidesMotivation[currentSlideMotivation].classList.remove('active');
        currentSlideMotivation = (index + slides.length) % slides.length;
        slidesMotivation[currentSlideMotivation].classList.add('active');
    } else if (slideshowId === 'online-study') {
        slidesOnlineStudy[currentSlideOnlineStudy].classList.remove('active');
        currentSlideOnlineStudy = (index + slides.length) % slides.length;
        slidesOnlineStudy[currentSlideOnlineStudy].classList.add('active');
    }
}

function changeSlide(direction, slideshowId) {
    if (slideshowId === 'motivation') {
        showSlide(currentSlideMotivation + direction, 'motivation');
    } else if (slideshowId === 'online-study') {
        showSlide(currentSlideOnlineStudy + direction, 'online-study');
    }
}

// Initialize the slideshows
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0, 'motivation');
    showSlide(0, 'online-study');
});
