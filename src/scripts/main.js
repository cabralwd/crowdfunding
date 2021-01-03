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

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tabs[0].classList.add('activeTab');
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.style.display = "none";
      tabContent.style.transform = "translateY(30px)";
      tabContent.style.opacity = "0";

      tabs.forEach(thow => {
        thow.classList.remove('activeTab');

        if (!tab.classList.contains('activeTab')) {
          tab.classList.add('activeTab');
        }
      })
    });

    target.style.display = "block";
    setTimeout(() => {
      target.style.opacity = "1";
      target.style.transform = "translateY(0px)";
    }, 100)
  })
})