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
let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || isSafari) {
  document.querySelector('.navbar').classList.add('iPhone');
}

$(document).ready(function () {
  let timeC = parseInt(document.querySelector('[data-timer]').dataset.timer, 10);
  $('.owl-carousel').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    autoplayTimeout: timeC,
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
});

function inputHandler(masks, max, event) {
  var c = event.target;
  var v = c.value.replace(/\D/g, '');
  var m = c.value.length > max ? 1 : 0;
  VMasker(c).unMask();
  VMasker(c).maskPattern(masks[m]);
  c.value = VMasker.toPattern(v, masks[m]);
}

var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
var tel = document.querySelector('input[attrname=tel]');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);

var docMask = ['999.999.999-99'];
var doc = document.querySelector('input[attrname=cpf]');
VMasker(doc).maskPattern(docMask[0]);
doc.addEventListener('input', inputHandler.bind(undefined, docMask, 15), false);