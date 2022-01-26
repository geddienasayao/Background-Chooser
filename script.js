$(document).ready(function(){
	$('#main_box').click(function(){
	   $('.mini_boxes').removeClass('add_border')
	   $(this).css('background-image', 'none');

	})
	$('.mini_boxes').click(function(event){
	   event.stopPropagation();
	   $('.mini_boxes').removeClass('add_border')
	   $(this).addClass('add_border');
	   $(main_box).css('background-image', 'url('+ $(this).attr("src") +')');
	})
 });