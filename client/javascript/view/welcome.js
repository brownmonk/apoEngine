var bandStock = (function(B,$){ // Module Pattern
    if(!$) return B;            // jQuery Dependant
    B.$app = $('body');                     // Document body is considered the app

    B.$bandStock = $('<div></div>')    // Welcome message container
        .attr('id', 'welcomeMessage')
        .html('Bandstock')
        .appendTo(B.$app);

    B.$comingSoon = $('<div></div>')    // Welcome message container
        .attr('id', 'comingSoon')
        .html('is coming')
        .appendTo(B.$app);

    return B;
}(bandStock || {},jQuery));