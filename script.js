// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('show');
  });

  // Close mobile menu when link clicked and smooth scroll handled by CSS scroll-behavior
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
      }
    });
  });
});
