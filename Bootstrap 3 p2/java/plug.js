/*global $, window, document, value, setTimeout*/
// JavaScript Document

$(function () {
	'use strict';
	//////////////////// Triger NiceScroll ////////////////////
	$('html').niceScroll({
		cursorcolor: "#FF8600",
		cursorwidth: "10px",
		cursorborder: "none",
		scrollspeed: 100,
		mousescrollstep: 90,
		cursorminheight: 130,
	});
	///////////////// switch background color of navbar ///////////////////
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('.navbar').css('background','#012636');
			$('.navbar').css('border-bottom','1px solid #E8E8E8');
			
		} else {
			$('.navbar').css('background','transparent');
			$('.navbar').css('border-bottom','none');
		}
	});
	
	//////////////// switch tabs And Content //////////////////////
	$('.tabs-key li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.tabs-section .tabs-content > div').hide();
		$($(this).data('class')).fadeIn(1000);
	});
});