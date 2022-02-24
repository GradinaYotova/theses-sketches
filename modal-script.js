$( "#indexImg" ).click(function() {
	$('.popuplayer').css('z-index', '5');
	$('.wrapper').css('overflow', 'hidden');
	$('#myIndex').css('display', 'block');			
});

$( ".close" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$('.wrapper').css('overflow', 'visible');
	$('.myIndex').css('display', 'none');			
});


$( ".index-title" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$('.wrapper').css('overflow', 'visible');
	$(".myIndex").hide();
});