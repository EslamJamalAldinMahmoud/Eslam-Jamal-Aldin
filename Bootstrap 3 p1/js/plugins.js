/*global $, window*/
// JavaScript Document

$(document).ready(function () {
	$('.carousel').carousel({
		interval:4000
	});
    
    // Show Colors Option
    $('.color-check').click(function () {
        $(".color-box").fadeToggle();
    });
    // Change Themes Color On Click
    var colorLi = $('.color-box ul li');
    colorLi
    .eq(0).css("backgroundColor","#fd3f1d").end()
    .eq(1).css("backgroundColor","#79d70f").end()
    .eq(2).css("backgroundColor","#1D75FD").end()
    .eq(3).css("backgroundColor","#FDA11D");
    colorLi.click(function () {
        $("link[href*='Theme']").attr("href",$(this).attr("data-value"));
    });
    // Loading Screen
    $(window).load(function () {
        $('.loading').delay(2000).fadeOut(500,function () {
            $('body').css("overflow","auto");
            $(this).remove();
        });
        $('.loading h1').fadeIn(900).css("display","inline-block");
        $('.lds-dual-ring').fadeIn(900).css("display","inline-block");
    });
    // Scroll Top Icon
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            scrollButton.fadeIn(300);
            } else {
                scrollButton.fadeOut(300);
            }
    });
    scrollButton.click(function () {
            $("html,body").animate({scrollTop : 0}, 600);
        });
});

