(function() {
  var checkEmptyFields, generateMosaicGallery;

  checkEmptyFields = function() {
    return $('[data-check]').on('change', function() {
      if ($(this).val()) {
        return $(this).addClass('has-value');
      } else {
        return $(this).removeClass('has-value');
      }
    });
  };

  generateMosaicGallery = function() {
    var albumContainer, albumGridOffset, albumGridWidth, albumGridWidthAllowedSpace, albumLastElement, albumLastElementEmptySpace, albumLastElementMargin, albumLastElementOffset, albumLastElementWidth, windowWidth;
    $('.album-mosaic').each(function(_, el) {
      var fldGrd;
      return fldGrd = new FldGrd(el, {
        rowHeight: 450,
        rowHeightOrphan: function() {
          return 450;
        },
        itemSelector: '.album-mosaic-item',
        objSelector: 'img'
      });
    });
    albumContainer = $('.album-mosaic');
    albumLastElement = albumContainer.find('.album-mosaic-item:last-child');
    albumContainer.removeClass('album-mosaic-flex-grow');
    windowWidth = $(window).width();
    albumGridWidth = albumContainer.width();
    albumGridOffset = albumContainer.offset().left;
    albumLastElementOffset = albumLastElement.offset().left;
    albumLastElementWidth = albumLastElement.outerWidth();
    albumLastElementMargin = parseInt(albumLastElement.css('margin-left'), 10) + parseInt(albumLastElement.css('margin-right'), 10);
    albumLastElementEmptySpace = Math.round(windowWidth - albumLastElementOffset - albumLastElementWidth - albumGridOffset - albumLastElementMargin * 2);
    albumGridWidthAllowedSpace = Math.round(albumGridWidth * .1);
    if (albumGridWidthAllowedSpace >= albumLastElementEmptySpace) {
      return albumContainer.addClass('album-mosaic-flex-grow');
    } else {
      return albumContainer.removeClass('album-mosaic-flex-grow');
    }
  };

  $(document).ready(function() {
    var container, ps;
    container = document.querySelector('#ps');
    if (container) {
      ps = new PerfectScrollbar(container);
    }
    $('.js-product-files-toggle').on('click', function() {
      $(this).closest('.js-product-files').toggleClass('is-open');
      return false;
    });
    $('.toggle-mobile-portfolio').on('click', function() {
      $(this).toggleClass('active');
      $(this).siblings('.header-subnav').slideToggle();
      return false;
    });
    $('.site-header-btn').on('click', function() {
      $('.header-nav').fadeToggle('fast');
      $('body').addClass('body-fixed header-nav-active');
      $('.site-footer-s').addClass('site-footer-s-fixed');
      return false;
    });
    $('.header-nav-close').on('click', function() {
      $('.header-nav').fadeToggle('fast');
      $('body').removeClass('body-fixed header-nav-active');
      $('.site-footer-s').removeClass('site-footer-s-fixed');
      return false;
    });
    $('.loader').hide();
    if ($('.album-mosaic').length > 0) {
      utils.detectIEEdge();
      $('.album-mosaic').animate({
        opacity: 1
      }, 500);
      generateMosaicGallery();
    }
    if ($(".password-page").length > 0) {
      checkEmptyFields();
    }
    if ($(".contact-page").length > 0) {
      checkEmptyFields();
      $('textarea.js-auto-size').textareaAutoSize();
      $.each($("#contact_form input, #contact_form textarea"), function(_, input) {
        if (!($(input).val().lenght > 0)) {
          return $(input).prev("label").removeClass("focus");
        }
      });
      $("#contact_form input, #contact_form textarea").on("focus", function() {
        return $(this).prev("label").addClass("focus");
      });
      $("#contact_form input, #contact_form textarea").on("focusout", function() {
        if (!($(this).val().length > 0)) {
          return $(this).prev("label").removeClass("focus");
        }
      });
      return $("#contact_form").on("submit", function(e) {
        window.contactForm.submit();
        return e.preventDefault();
      });
    }
  });

  $(window).resize(function() {
    if ($('.album-mosaic').length > 0) {
      return generateMosaicGallery();
    }
  });

  $(window).on("load", function() {
    if ($('.album-mosaic').length > 0) {
      return generateMosaicGallery();
    }
  });

}).call(this);
