$(function(){$(window).scroll(function(){var height=$(window).scrollTop();if(height>375){$("#sticky-header-container").addClass("show animated slideInDown");$("#sticky-header-container").removeClass("slideInUp")}else{if($("#sticky-header-container").hasClass("slideInDown")){$("#sticky-header-container").removeClass("show slideInDown");$("#sticky-header-container").addClass("slideInUp")}}})});