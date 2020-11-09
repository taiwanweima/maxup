'use strict'

let app = {
  _constructorSlider(container) {
    $(container).on('init', function (event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    }).slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      mobileFirst: true,
      arrows: false,
	  rtl: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            infinite: true,
            //adaptiveHeight: true,
            dots: false,
            arrows: true,
          }
        }
      ]
    });
  },
  _scroll(triger, element) {
    $(triger).click(function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $(element).offset().top
      }, 1000);
    });
  },
  init() {
    this._constructorSlider('.reviews');
    this._scroll('.scroll-review', '#reviews');
  }
};

$(document).ready(function () {
  app.init();
  var clock = new FlipClock($('.timer'), 840, {
    countdown: true,
    language:'ar-ar',
  });
  $('a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('form').offset().top - 100}, 700)
  })
});