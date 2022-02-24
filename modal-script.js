$( "#indexImg" ).click(function() {
	$('.wrapper').css('overflow', 'hidden');
	$('.popuplayer').css('z-index', '5');
	$('#myIndex').css('display', 'block');			
});

$( ".close" ).click(function() {
	$('.wrapper').css('overflow', 'visible');
	$('.popuplayer').css('z-index', '10');
	$('.myIndex').css('display', 'none');			
});


$( ".index-title" ).click(function() {
	$('.wrapper').css('overflow', 'visible');
	$('.popuplayer').css('z-index', '10');
	$(".myIndex").hide();
});