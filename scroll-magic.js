var controller = new ScrollMagic.Controller();

		new ScrollMagic.Scene({
			triggerElement: "#reveal1",
			triggerHook: 0.9, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal1", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#reveal2",
			triggerHook: 0.9, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal2", "visible") // add class to reveal
			.addTo(controller);



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
