// JavaScript Document
/* global $, window, document */
$(function () {
	'use strict';
	
	//////////////////// Triger NiceScroll ////////////////////
	$('html').niceScroll({
		cursorcolor: "#f5cb5c",
		cursorwidth: "10px",
		cursorborder: "none",
		cursorminheight: 120,
	});
	
	//////////////// Navbar Background Transform //////////////
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50){
			$('.navbar').fadeIn(1000);
		} 
	});
	
	//////////////// Smooth Scroll To Section //////////////
	$('.navbar-inverse .navbar-nav li a').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top
		});
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
	});
	
	//////////////// Sync Navbar Links With Section //////////////
	$(window).scroll(function () {
		$('.blockid').each(function () {
			if ($(window).scrollTop() >= $(this).offset().top - 70) {
				var blockId = $(this).attr('id');
				$('.navbar-inverse .navbar-nav li a').parent('li').siblings().removeClass('active');
				$('.navbar-inverse .navbar-nav li a[data-value="' + blockId + '"]').parent('li').addClass('active');
			}
		});
	});
	
	//////////////// switch tabs And Content //////////////////////
	$('.tabs-key li').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.tabs-section .tabs-content > div').hide();
		$($(this).data('class')).fadeIn(1000);
	});
});