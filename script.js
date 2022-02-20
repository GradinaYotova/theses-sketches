var modal = document.getElementById("myIndex");

	var btn = document.getElementById("indexImg");

	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	  modal.style.display = "block";
	}

	span.onclick = function() {
	  modal.style.display = "none";
	}

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}



var popup = $('#reveal1');
var popuptwo = $('#reveal2');
$(window).scroll(function(){  

	$( '.cross' ).click(function() {
	  	popup.css('display', 'none');
	});
		$( '.crosstwo' ).click(function() {
	  	popuptwo.css('display', 'none');
	});
});



