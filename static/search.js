$(document).ready(function(){
	$('.ui.accordion').accordion();
	$("img").popup();
	$('.title').mouseenter(function(){
		jQuery(this).find(".good").addClass('after');
		jQuery(this).find(".bad").addClass('after');
	}).mouseleave(function(){
		jQuery(this).find(".good").removeClass('after');
		jQuery(this).find(".bad").removeClass('after');
	});
});