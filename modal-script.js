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


// $( "#indexImg" ).click(function() {
// 	$('.wrapper').css('pointer-events', 'none');			
// });

// $( ".close" ).click(function() {
// 	$('.wrapper').css('pointer-events', 'auto');				
// });
