// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when selecting a menu item
const menuItems = document.querySelectorAll('.mobile-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Remove this if you want to keep the href functionality
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        // Add your page navigation logic here
    });
});

// Autohide Navigation
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Hero Slider Functionality
const heroSlider = document.querySelector('.hero .slider-container');
const slides = heroSlider.querySelectorAll('.slide');
let currentIndex = 0;
let autoSlideInterval;

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
    slides[currentIndex].classList.add('active');
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Pause on hover
heroSlider.addEventListener('mouseenter', stopAutoSlide);
heroSlider.addEventListener('mouseleave', startAutoSlide);

// Initialize AOS
AOS.init({
    duration: 1200,
    once: true
});

// Handle window resize for hero slider
window.addEventListener('resize', () => {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
    
    if(window.innerWidth <= 767) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
});

// Start automatic sliding when page loads
startAutoSlide();

// About Section Image Slider
document.addEventListener('DOMContentLoaded', function() {
    const aboutSlider = document.querySelector('.about .slider');
    const aboutSlides = aboutSlider.querySelectorAll('.slide');
    let aboutIndex = 0;

    function updateAboutSlider() {
        aboutSlides.forEach((slide, index) => {
            slide.style.opacity = index === aboutIndex ? 1 : 0;
        });
    }

    function nextAboutSlide() {
        aboutIndex = (aboutIndex + 1) % aboutSlides.length;
        updateAboutSlider();
    }

    aboutSlider.addEventListener('mouseenter', stopAutoSlide);
    aboutSlider.addEventListener('mouseleave', startAutoSlide);

    setInterval(nextAboutSlide, 8000);

    // Force first slide to be visible immediately
    aboutSlides[0].style.opacity = 1;
    updateAboutSlider();
});

AOS.init({
    duration: 1000,
    once: true
});