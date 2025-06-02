// Animações ao rolar (fade-in/slide-in)
document.addEventListener('DOMContentLoaded', function() {
  // Anima os cards de 'about'
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('show'), 150 + i*180);
  });
  // Anima os depoimentos
  document.querySelectorAll('.slide-in').forEach((el, i) => {
    setTimeout(() => el.style.opacity = 1, 200 + i*300);
    setTimeout(() => el.style.transform = 'none', 200 + i*300);
  });
});
