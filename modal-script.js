$( "#icon" ).click(function() {
	// $('.popuplayer').css('z-index', '5');
	$('#myIndex').css('display', 'block');	
	$('body').css({'overflow-y':'hidden'});	
});

$( ".close" ).click(function() {
	// $('.popuplayer').css('z-index', '10');
	$('.myIndex').css('display', 'none');	
	$('body').css({'overflow-y':'visible'});	
});


$( ".index-title" ).click(function() {
	// $('.popuplayer').css('z-index', '10');
	$(".myIndex").hide();
	$('body').css({'overflow-y':'visible'});	
});