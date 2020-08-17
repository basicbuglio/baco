const navbar = document.querySelector('.navigation');
const header = document.querySelector('.header');
const navList = document.querySelector('.navigation__list');
const hamburger = document.querySelector('.navigation__hamburger');

const options = {
  root: document,
  threshold : [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
}

const observer = new IntersectionObserver((payload) => {
  if (payload[0].intersectionRatio < 1) {
    navbar.classList.add('navigation-scrolled');
  } else if (payload[0].intersectionRatio === 1) {
    navbar.classList.remove('navigation-scrolled');
  }
}, options);

observer.observe(header);

const toggleMenu = () => {
  if (navList.style.display !== 'none') {
    navList.style.display = 'none';
  }
  else {
    navList.style.display = 'flex';
  }
}

hamburger.addEventListener('click', toggleMenu)

