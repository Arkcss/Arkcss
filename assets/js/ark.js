function whichTransitionEvent(){
	var t,
	el = document.createElement("fakeelement");
	var transitions = {
		"transition"      : "transitionend",
		"OTransition"     : "oTransitionEnd",
		"MozTransition"   : "transitionend",
		"WebkitTransition": "webkitTransitionEnd"
	}
	for (t in transitions){
		if (el.style[t] !== undefined){
		  return transitions[t];
		}
	}
}
function preloader() {
	//var dom = document.getElementsByTagName("*");
	var dom = document.querySelector("*");
	
	var elem_percent = 100 / dom.length;
	var loaded_percent = 0;
	
	var ark_preloader = document.getElementById("ark-preloader");
	var loading_bar = ark_preloader.getElementsByClassName("bar")[0];
	for (var i = 0; i < dom.length; i++) {
		dom[i].onload = function() {
			loaded_percent += elem_percent;
			loading_bar.style.width = loaded_percent + "%";
		}
	}
}
(function() {
	preloader();
})();

function complete_and_hide_loading_bar() {
	var ark_preloader = document.getElementById("ark-preloader");
	var loading_bar = ark_preloader.getElementsByClassName("bar")[0];
	function hide_loading_bar() {
		ark_preloader.style.opacity = 0;
	}
	var transitionEvent = whichTransitionEvent();
	loading_bar.addEventListener(transitionEvent, function() {
		hide_loading_bar();
	});
	loading_bar.style.width = "100%";
}

window.onload = function() {
	complete_and_hide_loading_bar(); // Hide loading bar when loading has been completed
}

/* jQuery document ready */
$(function() {
	
});