const burger = document.querySelectorAll('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');

burger.forEach(element => {
  element.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    element.classList.toggle('burger-open');
    navLink.forEach(link => {
      link.classList.toggle('nav-link-open');
    })
  });
});