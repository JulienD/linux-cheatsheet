jQuery.fn.topLink=function(a){a=jQuery.extend({min:1,fadeSpeed:200},a);return this.each(function(){var b=$(this);b.hide();$(window).scroll(function(){if($(window).scrollTop()>=a.min){b.fadeIn(a.fadeSpeed)}else{b.fadeOut(a.fadeSpeed)}})})};(function(){$(document).ready(function(){$("#top-link").topLink({min:400,fadeSpeed:400});$("#top-link").on("click",function(a){$("html, body").animate({scrollTop:0});return false});$(".navlist a").on("click",function(a){a.preventDefault();var b=$(this).attr("href");var c=$(b).offset().top;$("html, body").animate({scrollTop:c},function(){window.location.hash=b});return false})})})()