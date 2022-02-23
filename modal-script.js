var modal = document.getElementById("myIndex");

	var btn = document.getElementById("indexImg");

	var span = document.getElementsByClassName("close")[0];

	var body = document.querySelector("body"); 

	btn.onclick = function() {
	  modal.style.display = "block";
	}


	span.onclick = function() {
	  modal.style.display = "none";
	}

	// window.onclick = function(event) {
	//   if (event.target == modal) {
	//     modal.style.display = "none";
	//   }
	// }


$( ".index-title" ).click(function() {
  			$(".myIndex").hide();
});


$( "#indexImg" ).click(function() {
	$('.layertwo').css('z-index', '5');			
});

$( ".close" ).click(function() {
					
});
