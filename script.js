$(document).ready(function() {
	$(document).on("click", "a", function(e) {
		if ( $(this).hasClass('active') ) return;
		$("a").removeClass('active');
		$(this).addClass('active');
		$(".slide").slideUp(800);
		var self = this;
		setTimeout(function() {
			window.location.href = $(self).attr("href");
		}, 800);
	});
});