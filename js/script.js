$(function () {

  "use strict"
  // banner slider start
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  });
  // banner slider end


  // counter up
  $('.counterr').counterUp({
    delay: 10,
    time: 1000,
  });
  // counter up

  // client_logo
  $('.client_logo_main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
    prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });
  // client_logo

  // filter menu start
  var containerEl = document.querySelector('.filter_img');
  var mixer = mixitup(containerEl);
  // filter menu end

  // client_slider

  $('.client_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // client_slider


  AOS.init();




});