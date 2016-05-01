$.fn.scrollView = function () {
	return this.each(function () {
		$('html, body').animate({
			scrollTop: $(this).offset().top - 50
		}, 600);
	});
}

$(document).ready(function() {

	$('#lessonsLink').on('click', function(e) {
		e.preventDefault();
		$('#lessonsContain').scrollView();
	});
	$('#aboutLink').on('click', function(e) {
		e.preventDefault();
		$('#aboutContain').scrollView();
	});
	$('#contactLink').on('click', function(e) {
		e.preventDefault();
		$('#contactContain').scrollView();
	});

});