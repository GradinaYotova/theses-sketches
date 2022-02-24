$( "#indexImg" ).click(function() {
	$('.myBody').css('overflow', 'hidden');
	$('.popuplayer').css('z-index', '5');
	$('#myIndex').css('display', 'block');			
});

$( ".close" ).click(function() {
	$('.myBody').css('overflow', 'visible');
	$('.popuplayer').css('z-index', '10');
	$('.myIndex').css('display', 'none');			
});


$( ".index-title" ).click(function() {
	$('.myBody').css('overflow', 'visible');
	$('.popuplayer').css('z-index', '10');
	$(".myIndex").hide();
});