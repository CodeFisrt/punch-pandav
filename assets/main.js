    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
    // Custom buttons
    document.getElementById("prevSlide").addEventListener("click", () => swiper.slidePrev());
    document.getElementById("nextSlide").addEventListener("click", () => swiper.slideNext());

    const ourWorkSwiper = new Swiper('.our-work-swiper', {
      slidesPerView: 3,
      spaceBetween:16,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
    // Custom buttons
    document.querySelector(".our-work-left-btn").addEventListener("click", () => swiper.slidePrev());
    document.querySelector(".our-work-right-btn").addEventListener("click", () => swiper.slideNext());

    