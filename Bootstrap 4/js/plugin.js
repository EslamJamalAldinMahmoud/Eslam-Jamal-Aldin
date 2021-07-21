// JavaScript Document
/* global $, window, document */
$(function () {
	'use strict';
	
	///////////////////// Adjust Slider Height ////////////////////
	var winH   = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH   = $('.navbar').innerHeight();
	$('.slider, .carousel-item').height(winH - ( upperH + navH ));
	
	
	//////////////////// Show Images Buttons //////////////////////
	$('.featured-work .shuffle .info').hover(function () {
		$(this).children('.overlay').animate({
			left: '0%'
		}, 500);
	}, $('.featured-work .shuffle .info').mouseleave(function () {
		$('.featured-work .shuffle .overlay').animate({
			left: '100%'
		}, 500);
	}));
	
	
	//////////////////// Featured Work Shuffle ////////////////////
	$('.featured-work ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('class') === 'all') {
			$('.featured-work .shuffle-img .info').css('opacity', 1);
		} else {
			$('.featured-work .shuffle-img .info').css('opacity', .03);
			$($(this).data('class')).parent().css('opacity', 1);
		}
	});
	
});