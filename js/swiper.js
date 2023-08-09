const swiper = new Swiper('.swiper', {


    loop: true,
    
    speed: 2000,

    slidesPerView: 3,      

    autoplay: {
        delay: 0,
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      bulletActiveClass,
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


    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },


    virtual: {
      enabled: true,
  },

    
  });