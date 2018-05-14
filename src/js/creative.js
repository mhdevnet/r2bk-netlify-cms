import React from 'react';
import $ from 'jquery';
import jQueryUi from 'jqueryui';
import ScrollReveal from 'scrollreveal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    console.debug("Initing app...");
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 57)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 57
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();

    // Magnific popup calls
    // $('.popup-gallery').magnificPopup({
    //   delegate: 'a',
    //   type: 'image',
    //   tLoading: 'Loading image #%curr%...',
    //   mainClass: 'mfp-img-mobile',
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0, 1]
    //   },
    //   image: {
    //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //   }
    // });
  }
}

export default App;