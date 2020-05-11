(function($) {
    "use strict";

    // stycky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('header').addClass('stycky-bg');
        } else {
            $('header').removeClass('stycky-bg');
        }

    })


    /*Our site all js here */
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);