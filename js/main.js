// burger menu
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

// header shrinking
$(function() {

var didScroll = false;

function init() {
    window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
            didScroll = true;
            setTimeout( scrollPage, 250 );
        }
    }, false );
}

function scrollPage() {
    var sy = scrollY();
    var elem = $(this);
    var targ = $('nav');
    if ( sy >= 300 ) {
        targ.addClass('shrink');
    }
    else {
        targ.removeClass('shrink');
    }
    didScroll = false;
}

function scrollY() {
    return window.pageYOffset || $(this).scrollTop();
}

init();

});

// page scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});