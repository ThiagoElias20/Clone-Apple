const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  slidesPerView: 1.5,
  centeredSlides : true,
  spaceBetween: 19,
  watchSlidesProgress: true,
  autoplay: {                         //autoplay
      delay: 4000,  
  },   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
      clickable: 'true',
  },
})