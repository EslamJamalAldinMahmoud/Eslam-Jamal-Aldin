//Java Script Document
/* global $, window, document */
$(function () {
  'use strict';
  
 // 1. Simple mode, it styles document scrollbar:
  $(function() {  
      $("body").niceScroll({
        cursorcolor: "#DB9A49",
        cursorborder: "none",
        cursorwidth: "8px",
        zindex: "9999",
        cursorminheight: 82,
      });
  });
  $(window).ready(function(){
    $('.spinner').delay(2500).fadeOut(100)
  })
  ///////////// Scroll Top Icon ///////////////
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
        scrollButton.fadeIn(300);
      $('.footer .social-icons').css('left', '0px')
    } else {
      scrollButton.fadeOut(300);
      $('.footer .social-icons').css('left', '-100px')
    }
    });
  scrollButton.click(function () {
    $("html,body").animate({scrollTop : 0}, 600);
  });
  
  /////////////////// Start Navbar Effects /////////////////
  $(window).scroll(function(){
    if($(window).scrollTop() >= $('.navbar-me').height()){
      $('.navbar-me').css('transform','translateY(-70px)')
    }else{
      $('.navbar-me').css('transform','translateY(0px)')
    }
    if($(window).scrollTop() >= $('.skills').offset().top){
      $('.navbar-me').css({
        position: 'fixed',
        transform: 'translateY(0px)',
        boxShadow:'0px 0px 25px 2px #111',
        background: '#111'
      })
      $('.navbar-me .logo').css('display', 'flex')
    }else{
      $('.navbar-me .logo').css('display', 'none')
      $('.navbar-me').css({
        boxShadow:'none',
        background: '#000'
      })
    }
  })
  $(window).ready(function(){
    $('.navbar-me').delay(3000).animate({opacity:1}, 700)
    if ($(window).width() <= 768){
      $('nav ul li a').click(function(){
        $('nav').fadeToggle(400);
        $('.home-page .navbar-me i').toggleClass('active');
      })
    }
  })
  $('.navbar-me .menu-toggle').click(function(){
    $(this).children('i').toggleClass('active');
    $(this).siblings('nav').slideToggle(300);

  })
  //////////////// Smooth Scroll To Section //////////////
	$('nav li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 700);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
	});
  //////////////// Sync Navbar Links With Section //////////////
	$(window).scroll(function () {
		$('.blockid').each(function () {
			if ($(window).scrollTop() >= $(this).offset().top - 200) {
				var blockId = $(this).attr('id');
				$('nav li a').parent('li').siblings().removeClass('active');
				$('nav li a[data-value="' + blockId + '"]').parent('li').addClass('active');
			}
		});
	});
  ///////////////////// Home Page Animation /////////////////////
  $(window).ready(function(){
    $('.home-page .img').delay(5500).animate({
      right: '0%',
      opacity: 1,
    }, 900)
    $('.home-page .content .hello').delay(4000).slideDown(1000)
    $('.home-page .content .name').delay(4050).slideDown(1000)
    $('.home-page .content .name span').delay(4400).fadeIn(1000)
    if ($(window).width() <= 576){
      $('.home-page .content .job').delay(4800).animate({
        right: '30px',
        opacity: 1,
      }, 1000)
    } else if ($(window).width() <= 768){
      $('.home-page .content .job').delay(4800).animate({
        right: '205px',
        opacity: 1,
      }, 1000)
    } else if ($(window).width() <= 992){
      $('.home-page .content .job').delay(4800).animate({
        right: '-5px',
        opacity: 1,
      }, 1000)
    } else {
      $('.home-page .content .job').delay(4800).animate({
        right: '20px',
        opacity: 1,
      }, 1000)
    }
    
    $('.home-page button').delay(6000).animate({opacity:1}, 700)
  })
  /////////////////// View More Animation ////////////////////
  $('.home-page button').click(function(){
    $('html, body').animate({
      scrollTop: $('.skills').offset().top
    }, 500);
  });
  
  //////////////// Skill Section Animation /////////////////////
  $(window).scroll(function(){
    if($(window).scrollTop() >= $('.skills').offset().top - 200){
      $('.skills .container').css('transform','translateY(0px)').animate({
        opacity:1
      }, 1200)
      $('.skills .skill-content .skill .number').delay(1700).animate({
        opacity:1
      }, 500)
      $('.home-page .img').css('display','none');
      $('.skills .skill').find('.skill-per').each(function(){
      var $this = $(this);
      var per = $(this).attr('per');
      $(this).css("width",per + '%');
      $({animatedValue: 0}).animate({animatedValue: per},{
        step: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        } 
      });
    });
    }else{
      $('.home-page .img').css('display','block');
    }
  });
  //////////////// About Me Section Animation ///////////////
  $(window).scroll(function(){
    if ($(window).scrollTop() >= $('.about-me').offset().top - 200){
      $('.about-me .a-left').css('transform','translateX(0px)').animate({
        opacity:1
      }, 1100)
      $('.about-me .a-right').css('transform','translateX(0px)').animate({
        opacity:1
      }, 1100)
    }
  })
  ////////////////// Features Section Animation /////////////////
  $(window).scroll(function(){
    if ($(this).scrollTop() >= $('.features').offset().top - 200){
      $('.features .fast').css('transform','translateX(0px)').animate({
        opacity:1
      }, 1100)
      $('.features .respons').css('transform','translateY(0px)').animate({
        opacity:1
      }, 1100)
      $('.features .dynamic').css('transform','translateY(0px)').animate({
        opacity:1
      }, 1100)
      $('.features .seo').css('transform','translateX(0px)').animate({
        opacity:1
      }, 1100)
    }
  })
  //////////////////////// Projects Section Animation ///////////////
  $(window).scroll(function(){
    if ($(this).scrollTop() >= $('.projects').offset().top - 200){
      $('.projects .project').css('transform','scale(1)').animate({
        opacity:1
      }, 1500)
    }
  })
});