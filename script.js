const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const menu = $('.menu-toggle');
const navLinks = $('.nav-links');
menu?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
$$('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const themeBtn = $('#themeBtn');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') document.body.classList.add('light');
themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
  themeBtn.textContent = light ? '☀' : '☾';
});

const progress = $('.progress-bar');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, {passive:true});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
$$('.reveal').forEach(el => observer.observe(el));

const glow = $('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
}, {passive:true});

$('#year').textContent = new Date().getFullYear();

$$('.disabled-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('Add your real GitHub/Live Demo URL here before publishing.');
  });
});
