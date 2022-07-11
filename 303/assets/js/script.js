function eventResponsiveMovement(keyword) {
  $(`#${keyword}-time-left`).appendTo(`#${keyword}`);
  $(`#${keyword} img`).insertBefore(`#${keyword}`);
  $(`#${keyword}`).parent().removeClass('justify-content-between');
  $(`#${keyword} p:first`).removeClass('ms-2');
  $(`#${keyword}`).addClass('ms-3');
}

$(document).ready(() => {
  // Header Carousel
  let headerSlider = $('.header-slider').owlCarousel({
    loop: true,
    items: 1,
    dots: true,
    dotsData: true,
    nav: true,
    navText: [
      "<img class='header-prev' src='assets/images/prev.png'>",
      "<img class='header-next' src='assets/images/next.png'>",
    ],
  });
  // making nav next button align where pagination ends
  let paginationWidth = $('.header-slider .owl-dots').width();

  setTimeout(function () {
    let navWidth = $('.header-slider .owl-nav').width();

    // function 12
    if ($(window).width() <= 991) {
      let mainImageWidth = $('.single-slide__img img').width();
      console.log(mainImageWidth);
      $('.header-slider .owl-next').css({
        left: mainImageWidth - navWidth * 2,
      });
    } else {
      $('.header-slider .owl-next').css({
        left: paginationWidth + navWidth * 2,
      });
    }

    $(window).resize(() => {
      // function 12
      if ($(window).width() <= 991) {
        let mainImageWidth = $('.single-slide__img img').width();
        console.log(mainImageWidth);
        $('.header-slider .owl-next').css({
          left: mainImageWidth - navWidth * 2,
        });
      } else {
        // console.log(123);
        $('.header-slider .owl-next').css({
          left: paginationWidth + navWidth * 2,
        });
      }
    });
  }, 0);

  // making dots work
  $('.owl-dot').click(function () {
    headerSlider.trigger('to.owl.carousel', [$(this).index(), 1000]);
  });

  // Courses Carousel
  $('.courses-carousel').owlCarousel({
    loop: false,
    items: 1,
    nav: true,
    navText: ["<img src='assets/images/nav-prev.png'>", "<img src='assets/images/nav-next.png'>"],
    // navText
  });
  // making nav align to title
  let coursesTitleHeight = $('.section-header').height();
  let coursesNavHeight = $('.courses-carousel .owl-nav').height();
  // console.log(coursesNavHeight, coursesTitleHeight);
  setTimeout(function () {
    let navWidth = $('.courses-carousel .owl-nav').width();
    $('.courses-carousel .owl-nav').css({
      top: -(coursesTitleHeight + 34),
    });
  }, 0);

  // Suggestions carousel\
  $('.suggestions-carousel').owlCarousel({
    loop: false,
    items: 1,
    nav: true,
    navText: ["<img src='assets/images/nav-prev.png'>", "<img src='assets/images/nav-next.png'>"],
    margin: 30,
    responsiveClass: true,
    responsive: {
      991: {
        items: 3,
      },
    },
    // navText
  });

  // making nav align to title
  let suggestionsTitleHeight = $('.section-header').height();
  let suggestionsNavHeight = $('.suggestions-carousel .owl-nav').height();
  // console.log(suggestionsNavHeight, suggestionsTitleHeight);
  setTimeout(function () {
    // let navWidth = $(".suggestions-carousel .owl-nav").width();
    $('.suggestions-carousel .owl-nav').css({
      top: -(suggestionsTitleHeight + 50),
    });
  }, 0);

  // Dropdown width
  const innitialWidth = $('.navbar-nav').width();
  $(window).resize(function () {
    if ($(window).width() <= 991) {
      let dropDownNavwidth = $('.navbar').width();
      $('.navbar-nav').css({
        width: dropDownNavwidth,
      });
    } else {
      $('.navbar-nav').css({
        width: innitialWidth,
      });
    }
  });
  if ($(window).width() <= 991) {
    let dropDownNavwidth = $('.navbar').width();
    $('.navbar-nav').css({
      width: dropDownNavwidth,
    });
  } else {
    $('.navbar-nav').css({
      width: innitialWidth,
    });
  }

  //attach-deattach bg
  let innitialNavHeight = $('header').height();
  let windowHeight = $(document).height();
  $('.navbar-toggler').click(function () {
    $('.bg-overlay').toggleClass('active');
  });
  // Recomended Courses Carousel
  $('.recommended-courses-carousel').owlCarousel({
    loop: false,
    items: 1,
    margin: 30,
    nav: true,
    navText: ["<img src='assets/images/nav-prev.png'>", "<img src='assets/images/nav-next.png'>"],
    responsiveClass: true,
    responsive: {
      991: {
        items: 2,
      },
    },
  });
  let recNavHeight = $('.recommended-courses-carousel .owl-nav').height();
  // console.log(recNavHeight);
  $('.recommended-courses-carousel .owl-nav').css({
    top: -(recNavHeight + 34),
  });

  if ($(window).width() <= 991) {
    $('#see-all-courses').insertBefore('.recommended-courses-carousel .owl-dots');
    $('.lang').insertAfter('.navbar-brand');
    // $(".navbar-nav").hide();
    let navbarAuth = $('.navbar .auth');
    console.log(navbarAuth);
    // $(".navbar-nav").append(`<li class="nav-item">navbarAuth</li>`)
    $('.navbar .auth').appendTo('.navbar-nav').removeClass('ms-3');
  }

  // Open auth modal
  $('.auth').click(function () {
    $('#authModal').modal('show');
  });
  // changing floating label style
  $('.register-form').on('focusin', function () {
    $(this).siblings('label').css({
      color: '#000',
    });
  });
  $('.register-form').on('focusout', function () {
    $(this).siblings('label').css({
      color: '#000',
    });
  });
  // Append X icon to modal and add modal close event on click
  $('.modal-header .close').prepend('<img src="assets/images/close-btn-grey.svg" />');
  $('.modal-header .close').click(function () {
    $('#authModal').modal('hide');
  });

  // Main page main course element styles
  $(window).resize(() => {
    if ($(window).width() < 1173 && $(window).width() > 1100) {
      $('.courses-footer').removeClass('d-flex position-absolute');
    } else if ($(window).width() < 1093 && $(window).width() > 991) {
      $('.courses-footer').removeClass('d-flex position-absolute');
    } else if ($(window).width() < 992 && $(window).width() > 519 ) {
      $('.courses-footer').removeClass('position-absolute');
    } else if ($(window).width() < 519) {
      $('.courses-footer').removeClass('d-flex position-absolute');
    } else {
      $('.courses-footer').addClass('d-flex position-absolute');
    }
  });
  if ($(window).width() < 1173 && $(window).width() > 1100) {
    $('.courses-footer').removeClass('d-flex position-absolute');
  } else if ($(window).width() < 1093 && $(window).width() > 991) {
    $('.courses-footer').removeClass('d-flex position-absolute');
  } else if ($(window).width() < 992 && $(window).width() > 519 ) {
    $('.courses-footer').removeClass('position-absolute');
  } else if ($(window).width() < 519) {
    $('.courses-footer').removeClass('d-flex position-absolute');
  } else {
    $('.courses-footer').addClass('d-flex position-absolute');
  }

  // centering discount percentage on mobile resolutions
  if ($(window).width() <= 476) {
    $('.course-discount p, .sg-course-discount p').removeClass('top-n1px');
    $('.sg-course-discount p').removeClass('top-n2px');
  }

  //========================================================
  // Course Inner Page
  // Hide all author names
  $('.tutor-name').hide();
  // show/hide tutor text on hover
  $('.tutor-img').mouseenter(function () {
    let id = $(this).attr('id');
    $(`#tutor_${id}`).show();
  });
  $('.tutor-img').mouseleave(function () {
    let id = $(this).attr('id');
    $(`#tutor_${id}`).hide();
  });

  // Header slider background
  let singleSlideTextHeight = $('.single-slide__text').height();
  $('.slide-overlay').css({
    background: `linear-gradient(to top, rgb(0, 0, 0) 3px,  rgba(0, 0, 0, 0.616) ${singleSlideTextHeight}px, rgba(255, 255, 255, 0.05) ${
      singleSlideTextHeight + 25
    }px)`,
  });

  // display child categories on parent click

  $('.parent-category').click(function (event) {
    let childId = event.target.id;
    // console.log(childId);
    $('.child-category').hide();
    $(`#child_${childId}`).show();
  });

  // Profile Page
  $(window).resize(() => {
    if ($(window).width() <= 991) {
      $('.text-blue').appendTo('#prof-courses__footer');
      $('.invoice-btn').appendTo('#prof-courses .bg-white');
      $('.invoice-btn').addClass('text-center border-top-grey mt-4 pt-4');
    } else {
      $('.text-blue').appendTo('.status');
      $('.invoice-btn').removeClass('text-center border-top-grey mt-4 pt-4');
      $('.invoice-btn').appendTo('#prof-courses__footer');
    }
  });
  if ($(window).width() <= 991) {
    $('.text-blue').appendTo('#prof-courses__footer');
    $('.invoice-btn').appendTo('#prof-courses .bg-white');
    $('.invoice-btn').addClass('text-center border-top-grey mt-4 pt-4');
  }

  // Course inner
  if ($(window).width() <= 991) {
    $('#time-left').insertAfter('.course-img');
    $('#time-left').addClass('justify-content-between');
    $('#old-price').prependTo('.new-price');
    $('.new-price').addClass('d-flex');
    $('.old-price').css({ marginTop: 0, marginRight: 10 });
    $('#course-options').addClass('justify-content-between mt-3');
  }

  // make navbar sticky
  $(document).scroll(() => {
    let dividerPosition = $('.white-separator').offset().top;
    let windowTop = $(window).scrollTop();
    console.log(dividerPosition - windowTop);
    if (dividerPosition - windowTop <= 0) {
      $('.sticky-nav').css({ top: 0 });
    } else {
      $('.sticky-nav').css({ bottom: 0, top: 'unset' });
    }
  });
  // event main page responsive
  if ($(window).width() < 1489){
    $(".event-details").removeClass("position-absolute w-100 bottom-0");
    $(".event-details").addClass("mt-3")
  }
  if($(window).width() < 1278){
    $(".auth").removeClass("position-absolute w-100 bottom-0");
  }
  if($(window).width() < 992){
    // $(".search").hide();
    $("#search").removeClass("center-vertically");
    $("#search").addClass("w-100 mt-2");
    $("#search input").addClass("w-100");
    $("#search").parent().insertAfter($(".navbar-nav .auth"));
  }
  if ($(window).width() < 510) {
    eventResponsiveMovement('award');
    eventResponsiveMovement('event-date');
    eventResponsiveMovement('event');
  }
});
