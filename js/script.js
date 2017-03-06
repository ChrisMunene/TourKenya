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

    //target element
    var fairmont = document.querySelector("#frmara");
    //initial rating
    var currentRating = 0;
    // max rating, i.e. number of stars you want
    var maxRating = 5;
    // callback to run after setting the rating
    var callback = function(rating) {
        alert(rating);
    };

    // rating instance
    var myRating = rating(fairmont, currentRating, maxRating, callback);
    // sets rating and runs callback
    myRating.setRating(3);

    // sets rating and runs callback
    myRating.setRating(3, true);

    // sets rating and doesn't run callback
    myRating.setRating(3, false);

    // gets the rating
    myRating.getRating();
});
