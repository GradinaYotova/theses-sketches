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



var popup = $('.popup');
$(window).scroll(function(){
   
  if($(window).scrollTop() > $(document).height()/6){
    popup.addClass('popup_show'); 
  };
  
  $( '.cross' ).click(function() {
  		popup.css('display', 'none');
	});
  
  
});



