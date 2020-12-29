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

let userAgent = window.navigator.userAgent;

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  document.querySelector('.navbar').classList.add('iPhone');
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    autoplayTimeout: 1500,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        autoplayTimeout: 5000
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3
      }
    }
  });
});