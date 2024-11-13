const carousel = document.querySelector('.logo-carousel');
let isAnimationPaused = false;

// Navigation button functionality
document.querySelector('.prev').addEventListener('click', () => {
    if (!isAnimationPaused) {
        isAnimationPaused = true;
        carousel.style.animationPlayState = 'paused';
        carousel.style.transform = 'translateX(100px)';
        
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = '';
            carousel.style.animationPlayState = 'running';
            isAnimationPaused = false;
        }, 500);
    }
});

document.querySelector('.next').addEventListener('click', () => {
    if (!isAnimationPaused) {
        isAnimationPaused = true;
        carousel.style.animationPlayState = 'paused';
        carousel.style.transform = 'translateX(-100px)';
        
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = '';
            carousel.style.animationPlayState = 'running';
            isAnimationPaused = false;
        }, 500);
    }
});

// Touch events for mobile swipe
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swipe left
            document.querySelector('.next').click();
        } else {
            // Swipe right
            document.querySelector('.prev').click();
        }
    }
}