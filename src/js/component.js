$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 80
    }, 1500);

  });




  if ($(window).width() < 1200) {
    $('.partners-list, .header-logo').addClass('marquee');
    $('.marquee').marquee({
      duration: 7500,
      startVisible: true,
      duplicated: true
    });

    $('.reviews_one-item').each(function (index) {
      $(this).attr('href', 'images/' + (index + 1) + 'a.jpg');
    })

  }

  $('.reviews_one-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    items: 1
  });

  $('.reviews_two-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 42,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  })

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(300);
  })

  $('nav').hover(function () {
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  })

  $('.mob-btn').click(function () {
    $('.menu').slideToggle(300);
    $('img[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    })
  })

  var observer = lozad();
  observer.observe();
});