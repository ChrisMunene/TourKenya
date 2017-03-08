$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 6000
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function(e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });

    $("#input-1-sm").rating().on("rating.clear", function(event) {
        alert("Your rating is reset")
    }).on("rating.change", function(event, value, caption) {
        alert("You rated your experience as: " + value + " stars. Thank you!");
    });

    $("#input-2-sm").rating().on("rating.clear", function(event) {
        alert("Your rating is reset")
    }).on("rating.change", function(event, value, caption) {
        alert("You rated your experience as: " + value + "stars");
    });

    $("#input-3-sm").rating().on("rating.clear", function(event) {
        alert("Your rating is reset")
    }).on("rating.change", function(event, value, caption) {
        alert("You rated your experience as: " + value + "stars");
    });

    $("#input-4-sm").rating().on("rating.clear", function(event) {
        alert("Your rating is reset")
    }).on("rating.change", function(event, value, caption) {
        alert("You rated your experience as: " + value + "stars");
    });


});
