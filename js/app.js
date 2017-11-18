var APP = {
	init: function(){
		if(navigator.userAgent.match(/Android/i)){
    		window.scrollTo(0,1);
 		}
		$(document).on("click", ".container", function () {
    		$(this).toggleClass('hover');
		});
	}
}
APP.init();
