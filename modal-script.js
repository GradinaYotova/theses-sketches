$( "#indexImg" ).click(function() {
	$('#myIndex').css('display', 'block');
	$('.layertwo').css('z-index', '5');				
});

$( ".close" ).click(function() {
	$('.myIndex').css('display', 'none');
	$('.layertwo').css('z-index', '10');			
});


$( ".index-title" ).click(function() {
	$(".myIndex").hide();
	$('.layertwo').css('z-index', '10');
});
