$(function() {

$('.navbar-collapse ul li a').click(function() {
    $('[data-toggle="collapse"]').click();
});

$('[data-toggle="collapse"]').click(function() {
	var elem = $(this);
	var targ = $(elem.attr('data-target'));
    if (targ.hasClass('collapse')) {
		targ.removeClass('collapse');
    } else {
		targ.addClass('collapse');
    }
});

function filterItems() {
    var cats = $(":radio:checked").map( function(){ return this.value; }).get();
    var goodClasses = cats.join("");
    $(".item").hide().filter(goodClasses).show();
}

filterItems();

$(":radio").change(filterItems);

  });