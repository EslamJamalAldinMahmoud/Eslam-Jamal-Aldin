// JavaScript Document
/* global $, window, document */
$(function () {
  'use strict';
  
  //////////////// NavBar Padding Animation ///////////////
  var navBar = $('.navbar');
  $(window).scroll(function(){
    if($(this).scrollTop() >= 50){
      navBar.css({
        padding:'5px',
        backgroundColor:'#2D2D2D',
        borderBottom:'3px solid rgba(0,139,159,1)',
        boxShadow: '-2px 5px 39px -10px #000000'
      });
      $('.navbar .switch-lang').css('top', 20);
    }
    if($(this).scrollTop() <= 50){
      navBar.css({
        padding:'30px 5px',
        backgroundColor:'rgba(53,53,53,.8)',
        borderBottom:'none',
        boxShadow: 'none'
      });
      $('.navbar .switch-lang').css({
        top:45
      });
    }
  });
  
  //////////////// Sync Navbar Links With Section //////////////
  $(window).scroll(function () {
    $('.blockid').each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 200) {
        var blockId = $(this).attr('id');
        $('.navbar .nav-item a').parent('li').siblings().removeClass('active');
        $('.navbar .nav-item a[data-value="' + blockId + '"]').parent('li').addClass('active');
      }
    });
  });
  
  //////////////// Smooth Scroll To Section //////////////
  $('.navbar .nav-item a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top
    }, 700);
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
  });
  
  /////////////// Slider Arrow Function ///////////////////
  $('.slider .carousel .go-down i').click(function () {
    $('html, body').animate({
      scrollTop: $('.about-me').offset().top
    }, 800);
  });
  ///////////////// Scroll Top Icon /////////////////
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      scrollButton.fadeIn(300);
    } else {
      scrollButton.fadeOut(300);
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
  });
  /////////////// Section About Animation /////////////////
  $(window).scroll(function() {
    if($(this).scrollTop() >= $('.about-me').offset().top - 200){
      $('.about-me').find('.photo-1 img').animate({
        right: '0%',
        opacity: 1
      }, 600);
      $('.about-me').find('.about-1 p').animate({
        marginLeft: '0%',
        opacity: 1
      }, 600);
    }
    if($(this).scrollTop() >= $('.about-me').offset().top + 100){
      $('.about-me').find('.photo-2 img').animate({
        left: '0%',
        opacity: 1
      }, 600);
      $('.about-me').find('.about-2 p').animate({
        marginLeft: '0%',
        opacity: 1
      }, 600);
    }
  });
  ////////////// Skills Bars ///////////////
  $(window).scroll(function (){
    if($(this).scrollTop() >= $('.skills').offset().top - 150){
      $('.skills .skills-section').fadeIn(300);
      $('.skills .skill-img').fadeIn(300);
      $('.skills .skill-det .bar-1').delay(200).animate({
          left: '0%'
        }, 1700);
      $('.skills .skill-det .bar-2').delay(200).animate({
          left: '0%'
        }, 1500);
      $('.skills .skill-det .bar-3').delay(200).animate({
          left: '0%'
        }, 1300);
      $('.skills .skill-det .bar-4').delay(200).animate({
          left: '0%'
        }, 1100);
      $('.skills .skill-det .bar-5').delay(200).animate({
          right: '0%'
        }, 1700);
      $('.skills .skill-det .bar-6').delay(200).animate({
          right: '0%'
        }, 1500);
      $('.skills .skill-det .bar-7').delay(200).animate({
          right: '0%'
        }, 1300);
      $('.skills .skill-det .bar-8').delay(200).animate({
          right: '0%'
        }, 1100);
    }
  });
  /////////////// My Work images  //////////////
  $('.my-work .work .col-before').hover(function() {
    $(this).children('.before').find('img').css('transform', 'scale(1.25)');
    $(this).children('.before').find('span').css({backgroundColor:'#191919'});
  });
  $('.my-work .work .col-before').mouseleave(function() {
    $(this).children('.before').find('img').css('transform', 'scale(1)');
    $(this).children('.before').find('span').css({backgroundColor:'transparent'});
  })
  $('.my-work .work .col-after').hover(function() {
    $(this).children('.after').find('img').css('transform', 'scale(1.25)');
    $(this).children('.after').find('span').css({backgroundColor:'#191919'});
  });
  $('.my-work .work .col-after').mouseleave(function() {
    $(this).children('.after').find('img').css('transform', 'scale(1)');
    $(this).children('.after').find('span').css({backgroundColor:'transparent'});
  })
  //////////////////// Sction Image Animation /////////////
  $(window).scroll(function (){
    if($(this).scrollTop() >= $('.image').offset().top - 200 ){
      $('.image').animate({
        height: '40vh',
      }, 200);
      $('.image h3').animate({lineHeight:'40vh'}, 400);
    }
  });
  ///////////////////// Section Testimonials ////////////////
  $(window).scroll(function() {
    if($(this).scrollTop() >= $('.testimonials').offset().top - 150 ){
      $('.testimonials').find('.client-say-1').slideDown(400);
      $('.testimonials').find('.client-say-2').delay(200).slideDown(400);
      $('.testimonials').find('.client-say-3').delay(500).slideDown(400);
      $('.testimonials').find('.media-1').delay(200).fadeIn(400);
      $('.testimonials').find('.media-2').delay(400).fadeIn(400);
      $('.testimonials').find('.media-3').delay(600).fadeIn(400);
    }
  });
});