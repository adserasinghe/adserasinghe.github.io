const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let counter = 0;

setInterval(() => {
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(-${counter * 100}%)`;
  counter++;

  if (counter === slides.length) {
    setTimeout(() => {
      carousel.style.transition = 'none';
      counter = 0;
      carousel.style.transform = `translateX(-${counter * 100}%)`;
    }, 500);
  }
}, 2000);
