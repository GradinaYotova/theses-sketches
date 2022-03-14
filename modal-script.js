$( "#indexImg" ).click(function() {
	$('.popuplayer').css('z-index', '5');
	$('#myIndex').css('display', 'block');
	$('body').css('position', 'fixed');			
});

$( ".close" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$('.myIndex').css('display', 'none');
	('body').css('position', 'relative');		
});


$( ".index-title" ).click(function() {
	$('.popuplayer').css('z-index', '10');
	$(".myIndex").hide();
	('body').css('position', 'relative');
});
