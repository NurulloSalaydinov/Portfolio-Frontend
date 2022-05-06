const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    1115: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// const scroller = new LocomotiveScroll({
//   el: document.querySelector("#scrollContainer"),
//   smooth: true,
//   multiplier: 1000,

// });

var typed = new Typed('.typing', {
  strings: [
    'Web Developer',
    'Python Developer',
    'Javascript Developer',
    'UI | UIX Designer',
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
})

var rubber = document.querySelectorAll('.rubber-animation > span');
var rubber_img = document.querySelector('.rubber-animation > img');

rubber_img.addEventListener('mouseover', () => {
  rubber_img.setAttribute('style', 'animation-duration: 1s;animation-name: rubberBand;')
  setTimeout(() => {
    rubber_img.removeAttribute('style')
  }, 1000)
})

rubber.forEach(elem => {
  elem.addEventListener('mouseover', () => {
    elem.setAttribute('style', 'animation-duration: 1s;animation-name: rubberBand;')
    setTimeout(() => {
      elem.removeAttribute('style')
    }, 1000)
  })
})

const container = '.tagcloud';
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
const options = {
  radius: 230,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true
};

TagCloud(container, texts, options);

console.log('no bugs found');