const slides = document.querySelector('.slides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % 5;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + 5) % 5;
    updateSlide();
});

function autoSlide() {
    index = (index + 1) % 5;
    updateSlide();
}

setInterval(autoSlide, 4500);
