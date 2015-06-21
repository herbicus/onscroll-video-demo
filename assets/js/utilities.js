var myUtilitiesAPI = (function(options) {
	var shared = {};

	// -------------------------------------
	//   SHUFFLE (array)
	// -------------------------------------
	// -------------------------------------
	// -------------------------------------


	Array.prototype.shuffle = function() {
		var input = this;

		for (var i = input.length -1; i >= 0; i--) {

			var randomIndex = Math.floor(Math.random()*(i+1));
			var itemAtIndex = input[randomIndex];

			input[randomIndex] = input[i];
			input[i] = itemAtIndex;
		}
		return input;
	}

	// ----------- END SHUFFLE -------------

	// -------------------------------------
	//   PRELOADER (images)
	// -------------------------------------
	// -------------------------------------
	// -------------------------------------

	var AceLoadImages = AceLoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	AceLoadImages([
		'assets/frames/image_000000.jpg',
		'assets/frames/image_000001.jpg',
		'assets/frames/image_000002.jpg',
		'assets/frames/image_000003.jpg',
		'assets/frames/image_000004.jpg',
		'assets/frames/image_000005.jpg',
		'assets/frames/image_000006.jpg',
		'assets/frames/image_000007.jpg',
		'assets/frames/image_000008.jpg',
		'assets/frames/image_000009.jpg',
		'assets/frames/image_000010.jpg',
		'assets/frames/image_000011.jpg',
		'assets/frames/image_000012.jpg',
		'assets/frames/image_000013.jpg',
		'assets/frames/image_000014.jpg',
		'assets/frames/image_000015.jpg',
		'assets/frames/image_000016.jpg',
		'assets/frames/image_000017.jpg',
		'assets/frames/image_000018.jpg',
		'assets/frames/image_000019.jpg',
		'assets/frames/image_000020.jpg',
		'assets/frames/image_000021.jpg',
		'assets/frames/image_000022.jpg',
		'assets/frames/image_000023.jpg',
		'assets/frames/image_000024.jpg',
		'assets/frames/image_000025.jpg'
	], imagesAreLoaded);

	function imagesAreLoaded() {
	  	TweenMax.to(".l-preload-overlay" , 0.5, {
	  		autoAlpha: 0,
	  		display: "none",
	  		ease: Back.easeInOut
	  	});
	}

	// ----------- END PRELOADER -------------

	// init
	var init = function() {

	};
	
	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	myUtilitiesAPI.init();
});
