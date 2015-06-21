if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}


	// SECTION 2
	var section2Parallax = new TimelineMax({paused: true});
	
	section2Parallax.to(".section-2 .content-box", 1, { autoAlpha: 1, left: "50%"});
	section2Parallax.to(".section-2 .content-box", 0.25, { autoAlpha: 0, display: "none" });

	//section2Parallax.to(".section-2 .content-box" , 1, { autoAlpha: 1, left: "50%" });

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 2000;

		$(".section-2").waypoint(function() {
			console.log("section2 hit");
			section2Parallax.seek(parallaxTiming);

		}, { offset: "50%" });
	});

	// SECTION 3
	var section3Parallax = new TimelineMax({paused: true});
	
	section3Parallax.to(".section-3 .content-box", 1, { autoAlpha: 1, left: "50%"});
	section3Parallax.to(".section-3 .content-box", 0.25, { autoAlpha: 0, display: "none" });

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 3000;

		$(".section-3").waypoint(function() {
			console.log("section3 hit");
			section3Parallax.seek(parallaxTiming);

		}, { offset: "50%" });
	});

	$(".section-4").waypoint(function() {

		// TweenMax.to(".myElement" , 0.75, {
		// 	autoAlpha: 0,
		// 	ease: Quad.easeInOut
		// });
		console.log("section4 hit");

	}, { offset: "10%" });

	// VIDEO SCRUBBER
	totalFrames = 1016;

	for(i = 0; i < totalFrames; i++) { // loop for each image in sequence
	    images[i] =  new Image(); // add image object to array
	    images[i].src = "./assets/frames/image_"+pad(i, 6)+".jpg"; // set the source of the image object
	}

	var switchTo5x=true;
	// END VIDEO SCRUBBER

	// INIT
	var init = function() {

		$("body").on("load", function(){
			resizeAdjustments();
		});

		$("body").on("onresize", function(){
			resizeAdjustments();
		});

		$("body").on("onorientationchange", function(){
			resizeAdjustments();
		});

	};

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();
	resizeAdjustments();
});
