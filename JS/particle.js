// Select the canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas dynamically on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles(); // Reinitialize particles
});

// Particle properties
const particlesArray = [];
const numberOfParticles = 100;

class Particle {
  constructor(x, y, size, color, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Bounce on canvas edges
    if (this.x <= 0 || this.x >= canvas.width) this.velocity.x *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.velocity.y *= -1;

    this.draw();
  }
}

// Initialize particles
function initParticles() {
  particlesArray.length = 0;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = '#4b0000';
    const velocity = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    };

    particlesArray.push(new Particle(x, y, size, color, velocity));
  }
}

// Animate particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => particle.update());
  requestAnimationFrame(animateParticles);
}

// Mouse interaction
canvas.addEventListener('mousemove', (event) => {
  particlesArray.forEach(particle => {
    const dx = particle.x - event.clientX;
    const dy = particle.y - event.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      particle.velocity.x = (particle.x - event.clientX) / 50;
      particle.velocity.y = (particle.y - event.clientY) / 50;
    }
  });
});

// Initialize and animate
initParticles();
animateParticles();
