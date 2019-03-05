'use strict'

$(document).ready(function(){

    // Scroll
    $("a").on("click", function(event) {
        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $("html, body").animate(
            {
            scrollTop: $(hash).offset().top
            },
            1000,
            function() {
            window.location.hash = hash;
            }
        );
        }
    });

    // Header menu

    var menuBtn = $('.js-header-menu');
    var menu = $('.js-menu');
    var homeBtn = $('.js-home');
    var aboutBtn = $('.js-about');
    var worksBtn = $('.js-works');
    var servicesBtn = $('.js-services');
    var teamBtn = $('js-team');
    var contactBtn = $('.js-contact');

    menuBtn.on('click', function(){
        menu.toggleClass('modal__menu--is-active')
    });

    homeBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    aboutBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    worksBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    servicesBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    teamBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    contactBtn.on('click', function(){
        menu.removeClass('modal__menu--is-active')
    });

    // Home modal btn

    var homeMadalBtn = $('.js-modal-btn');
    var modalBox = $('.js-modal-box');
    var sendBtn = $('.js-btn-send');
    var closeBtn = $('.js-btn-close');

    homeMadalBtn.on('click', function(){
        modalBox.toggleClass('modal__btn-box--is-active');
    });

    sendBtn.on('click', function(){
        modalBox.removeClass('modal__btn-box--is-active');
    });

    closeBtn.on('click', function(){
        modalBox.removeClass('modal__btn-box--is-active');
    });

    // Slider section about

    $('.about__slider').slick({
        centerMode:false,     
        draggable:false,    
        arrows:false,    
        autoplay:true,
        autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:true,

    });

     // Slider section team-say

     $('.team-say__slider').slick({
        centerMode:false,     
        draggable:false,    
        arrows:false,    
        autoplay:false,
        autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:true,

    });

    $('.comment-slider').slick({
        centerMode:false,     
        draggable:false,    
        arrows:false,    
        autoplay:false,
        autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:false,
    });



    // Slider arrow
    $('.left-arrow').click(function(){
        $('.team-say__slider').slick('slickPrev');
    })
    
    $('.right-arrow').click(function(){
        $('.team-say__slider').slick('slickNext');
    });

    $('.left-arrow').click(function(){
        $('.comment-slider').slick('slickPrev');
    })
    
    $('.right-arrow').click(function(){
        $('.comment-slider').slick('slickNext');
    });

    // Rating 1

    var rating1 = function(nowPos1) {
        // У всех убираем active
        $('.rating-1 .rating-1__star').removeClass('rating-1__star--active');
        
        for (var i = 0; nowPos1 + 1 > i; i++) {
          $('.rating-1 .rating-1__star').eq(i).toggleClass('rating-1__star--active');
        }
      }
      // переменная содержит количество активных звезд
      var starsCount1 = $('.rating-1__star.rating-1__star--active').length; 
      
      // При наведении
      $('.rating-1 .rating-1__star').hover(function() {
        rating1($(this).index());
      });
      
      // При клике
      $('.rating-1 .rating-1__star').click(function() {
        rating1($(this).index());
        // меняем количество по клику
        starsCount1 = $('rating-1__star.rating-1__star--active').length; 
      });
      
      // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
      $('.rating-1 .rating-1__star').on('mouseleave', function() {
        rating1(+starsCount1 - 1);
      });

    // Rating2
    

    var rating2 = function(nowPos2) {
      // У всех убираем active
      $('.rating-2 .rating-2__star').removeClass('rating-2__star--active');
      
      for (var i = 0; nowPos2 + 1 > i; i++) {
        $('.rating-2 .rating-2__star').eq(i).toggleClass('rating-2__star--active');
      }
    }
    // переменная содержит количество активных звезд
    var starsCount2 = $('.rating-2__star.rating-2__star--active').length; 
    
    // При наведении
    $('.rating-2 .rating-2__star').hover(function() {
      rating2($(this).index());
    });
    
    // При клике
    $('.rating-2 .rating-2__star').click(function() {
      rating2($(this).index());
      // меняем количество по клику
      starsCount2 = $('rating-2__star.rating-2__star--active').length; 
    });
    
    // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
    $('.rating-2 .rating-2__star').on('mouseleave', function() {
      rating2(+starsCount2 - 1);
    });

    // Rating 3


    var rating3 = function(nowPos3) {
      // У всех убираем active
      $('.rating-3 .rating-3__star').removeClass('rating-3__star--active');
      
      for (var i = 0; nowPos3 + 1 > i; i++) {
        $('.rating-3 .rating-3__star').eq(i).toggleClass('rating-3__star--active');
      }
    }
    // переменная содержит количество активных звезд
    var starsCount3 = $('.rating-3__star.rating-3__star--active').length; 
    
    // При наведении
    $('.rating-3 .rating-3__star').hover(function() {
      rating3($(this).index());
    });
    
    // При клике
    $('.rating-3 .rating-3__star').click(function() {
      rating3($(this).index());
      // меняем количество по клику
      starsCount3 = $('rating-3__star.rating-3__star--active').length; 
    });
    
    // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
    $('.rating-3 .rating-3__star').on('mouseleave', function() {
      rating3(+starsCount3 - 1);
    });

    // Rating 4

    var rating4 = function(nowPos4) {
      // У всех убираем active
      $('.rating-4 .rating-4__star').removeClass('rating-4__star--active');
      
      for (var i = 0; nowPos4 + 1 > i; i++) {
        $('.rating-4 .rating-4__star').eq(i).toggleClass('rating-4__star--active');
      }
    }
    // переменная содержит количество активных звезд
    var starsCount4 = $('.rating-4__star.rating-4__star--active').length; 
    
    // При наведении
    $('.rating-4 .rating-4__star').hover(function() {
      rating4($(this).index());
    });
    
    // При клике
    $('.rating-4 .rating-4__star').click(function() {
      rating4($(this).index());
      // меняем количество по клику
      starsCount4 = $('rating-4__star.rating-4__star--active').length; 
    });
    
    // Как только отводим мышку, возвращаем количество активных айтемов, которые были изначально
    $('.rating-4 .rating-4__star').on('mouseleave', function() {
      rating4(+starsCount4 - 1);
    });

    // Btn section services

    var blogOpenFirst = $('.js-blog-open-first');
    var blogOpenSecond = $('.js-blog-open-second');
    var blogOpenThird = $('.js-blog-open-third');
    var blogOpenFourth = $('.js-blog-open-fourth');
    var blogOpenFifth = $('.js-blog-open-fifth');
    var blogOpenSixth = $('.js-blog-open-sixth');
    var blogClose = $('.js-blog-close');
    var blogPopupFirst = $('.js-popup-first');
    var blogPopupSecond = $('.js-popup-second');
    var blogPopupThird = $('.js-popup-third');
    var blogPopupFourth = $('.js-popup-fourth');
    var blogPopupFifth = $('.js-popup-fifth');
    var blogPopupSixth = $('.js-popup-sixth');
    var blogPopup = $('.blog__popup');

    blogOpenFirst.on('click', function(){
        blogPopupFirst.removeClass('blog__popup--is-active');
        blogPopupFirst.addClass('blog__popup--is-active');
    });

    blogOpenSecond.on('click', function(){
        blogPopupSecond.removeClass('blog__popup--is-active');
        blogPopupSecond.addClass('blog__popup--is-active');
    });

    blogOpenThird.on('click', function(){
        blogPopupThird.removeClass('blog__popup--is-active');
        blogPopupThird.addClass('blog__popup--is-active');
    });

    blogOpenFourth.on('click', function(){
        blogPopupFourth.removeClass('blog__popup--is-active');
        blogPopupFourth.addClass('blog__popup--is-active');
    });

    blogOpenFifth.on('click', function(){
        blogPopupFifth.removeClass('blog__popup--is-active');
        blogPopupFifth.addClass('blog__popup--is-active');
    });

    blogOpenSixth.on('click', function(){
        blogPopupSixth.removeClass('blog__popup--is-active');
        blogPopupSixth.addClass('blog__popup--is-active');
    });

    blogClose.on('click', function(){
        blogPopup.removeClass('blog__popup--is-active');
    });

    // Google map

    $(document).ready(function() {
        var map;
        var mapConteiner = $('#map')[0];
        var mapCenter = {lat: 51.4904732, lng: 31.3050769};
    
        map = new google.maps.Map(mapConteiner, {
            center: mapCenter,
            zoom: 15,
            disableDefaultUI: true
        });
    });

});