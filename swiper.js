
const swiper_header = new Swiper('.swiper_header', {
    // Optional parameters
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
        delay: 8000,
    },
  });
  const swiper_collection_right = new Swiper('.swiper_collection_right', {
    direction:'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type:'custom',
      clickable:true,
    },
    autoplay: {
      delay: 4000,
  },
  })

  const swiper_product = new Swiper('.swiper_product', {
    direction:'horizontal',

    breakpoints: {
      400: {
        slidesPerView:1,
      },
      600: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
      },
      1500: {
        slidesPerView: 4,

      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay:4000,
    },
  })
  const swiper_logo = new Swiper('.swiper_logo', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      500: {
        slidesPerView:1,
      },
      600: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,

      },
    },
  })