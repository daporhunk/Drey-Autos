// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navInner = document.querySelector('.nav-inner');
const heroSection = document.querySelector('.hero-section');

navToggle?.addEventListener('click', () => {
  navInner.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-inner a').forEach(link => {
  link.addEventListener('click', () => {
    navInner.classList.remove('open');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 24) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.18 }
);

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

// Smooth page transitions
window.addEventListener('load', () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

// Add smooth transition on navigation
document.querySelectorAll('a[href^="./"], a[href*=".html"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Only apply transition for page navigation
    if (href && !href.startsWith('#') && href.endsWith('.html')) {
      // Allow default navigation with fade effect
      const pageShell = document.querySelector('.page-shell');
      if (pageShell) {
        pageShell.style.opacity = '0.95';
        pageShell.style.transform = 'translateY(0)';
      }
    }
  });
});

// Button hover effects
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Add interactive effect to cards
document.querySelectorAll('.feature-card, .value-card, .info-card, .stat-box').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 24px 80px';
  });
});

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.id = 'scrollToTop';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 15;
  font-size: 24px;
  font-weight: bold;
  transition: all 0.3s ease;
  opacity: 0.8;
`;

scrollToTopBtn.addEventListener('mouseover', () => {
  scrollToTopBtn.style.opacity = '1';
  scrollToTopBtn.style.transform = 'translateY(-4px)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
  scrollToTopBtn.style.opacity = '0.8';
  scrollToTopBtn.style.transform = 'translateY(0)';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
