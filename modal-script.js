$( "#indexImg" ).click(function() {
	$('.popuplayer').css('z-index', '5');
	$('#myIndex').css('display', 'block');
	$('.myBody').css('position', 'fixed');			
});

$( ".close" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$('.myIndex').css('display', 'none');
	$('.myBody').css('position', 'relative');		
});


$( ".index-title" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$(".myIndex").hide();
	$('.myBody').css('position', 'relative');
});
