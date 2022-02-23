var modal = document.getElementById("myIndex");

	var btn = document.getElementById("indexImg");

	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	  modal.style.display = "block";
	}

	span.onclick = function() {
	  modal.style.display = "none";
	}


$( ".index-title" ).click(function() {
  		$(".myIndex").hide();
});


$( "#indexImg" ).click(function() {
	$('.layertwo').css('z-index', '5');				
});

$( ".close" ).click(function() {
	$('.layertwo').css('z-index', '10');			
});


$( ".index-title" ).click(function() {
	$('.layertwo').css('z-index', '10');
	$('.layertwo').css('left', '0');
});