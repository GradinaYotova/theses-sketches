var controller = new ScrollMagic.Controller();

		new ScrollMagic.Scene({
			triggerElement: "#TriggerReveal1",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal1", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#reveal2",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal2", "visible") // add class to reveal
			.addTo(controller);


			new ScrollMagic.Scene({
			triggerElement: "#reveal3",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal3", "visible") // add class to reveal
			.addTo(controller);


			new ScrollMagic.Scene({
			triggerElement: "#reveal4",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal4", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#reveal5",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal5", "visible") // add class to reveal
			.addTo(controller);

			new ScrollMagic.Scene({
			triggerElement: "#reveal6",
			triggerHook: 0.4, // show, when scrolled 10% into view
			duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
			offset: 10 // move trigger to center of element
			})
			.setClassToggle("#reveal6", "visible") // add class to reveal
			.addTo(controller);


var popup = $('#reveal1');
var popuptwo = $('#reveal2');
var popupthree = $('#reveal3');
var popupfour = $('#reveal4');
var popupfive = $('#reveal5');
var popupsix = $('#reveal6');



	$( '.cross' ).click(function() {
	  	popup.css('display', 'none');
	});
	
	$( '.crosstwo' ).click(function() {
		popuptwo.css('display', 'none');
	});

	$( '.crossthree' ).click(function() {
		popupthree.css('display', 'none');
	});

	$( '.crossfour' ).click(function() {
		popupfour.css('display', 'none');
	});

	$( '.crossfive' ).click(function() {
		popupfive.css('display', 'none');
	});


	$( '.crosssix' ).click(function() {
		popupsix.css('display', 'none');
	});



