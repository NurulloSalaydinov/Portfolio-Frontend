const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
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


  const scroller = new LocomotiveScroll({
    el: document.querySelector("#scrollContainer"),
    smooth: true,
    multiplier: 1000,
   
});


  console.log('no bugs found');