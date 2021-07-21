/*global $, window, document, value, setTimeout*/
// JavaScript Document

$(function () {
	'use strict';

	///////////////// switch background color of navbar ///////////////////
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 50) {
			$('.navbar').css('background', 'rgba(0,0,0,.400)');
			$('.navbar').css('border-bottom', '1px solid #ff7743')
		} else {
			$('.navbar').css('background', 'transparent');
			$('.navbar').css('border-bottom', 'none')
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 150) {
			$('.navbar').css('background', 'rgba(0,0,0,.600)');
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 250) {
			$('.navbar').css('background', 'rgba(0,0,0,.800)');
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 350) {
			$('.navbar').css('background', 'rgba(0,0,0,1)');
		}
	});
	
	
	///////////////// Slider ///////////////////
	var slideCount = document.querySelectorAll('.slider .slide-item').length;
	var slideWidth = document.querySelectorAll('.slider-outer')[0].offsetWidth;
	var slideHeight = document.querySelectorAll(".slider-outer")[0].offsetHeight;

	var sliderUlWidth = slideCount * slideWidth;
	document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px";

	for (var i = 0; i < slideCount; i++) {
		document.querySelectorAll('.slide-item')[i].style.cssText = "width:" + slideWidth + "px;height:" + slideHeight + "px";
	}

	setInterval(function () {
		moveRight();
	}, 6000);
	var counter = 1;

	function moveRight() {
		var slideNum = counter++
			if (slideNum < slideCount) {
				var transformSize = slideWidth * slideNum;
				document.querySelectorAll('.slider')[0].style.cssText =
					"width:" + sliderUlWidth + "px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-" + transformSize + "px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-" + transformSize + "px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-" + transformSize + "px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";

			} else {
				counter = 1;
				document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)";
			}

	}
	
	///////////////// Big Section Effect ///////////////////
	$('.big button').click(function () {
		$('html body').load('About.html');
	});

    
	
});
