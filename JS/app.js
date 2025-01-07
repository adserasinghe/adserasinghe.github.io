// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('fade-out');
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.textContent = document.body.dataset.theme === 'dark' ? '🌞' : '🌙';
});

// Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.textContent = '☰';
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.about, .projects, .contact');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Copy URL in footer
function copyCurrentURL() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.classList.add('success');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            btn.classList.remove('success');
            btn.innerHTML = '<i class="fas fa-copy"></i> Copy URL';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}
