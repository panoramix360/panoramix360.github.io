var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});

	var hideOthersSkills = function() {
		$('.item-skills').each(function() {
			var ul = $(this).next();

			ul.slideUp();
		});		
	};

	$('.item-skills').on('click', function(e) {
		e.preventDefault();

		hideOthersSkills();
		
		var ul = $(this).next();

		if(ul.find('li').length > 0) {
			ul.slideToggle();
		}
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};