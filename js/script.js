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
    var rateNumber = document.querySelector("#rating");
    //initial rating
    var currentRating = 0;
    // max rating, i.e. number of stars you want
    var maxRating = 5;
    // callback to run after setting the rating
    var callback = function(rating) {
        alert(rating);
    };

    // rating instance
    var myRating = rating(rateNumber, currentRating, maxRating, callback);
    // sets rating and runs callback
    myRating.setRating(3);

    // sets rating and runs callback
    myRating.setRating(3, true);

    // sets rating and doesn't run callback
    myRating.setRating(3, false);

    // gets the rating
    myRating.getRating();



    //Rating data
    var data = {
        rating: 2
    };

    // INITIALIZE
    (function init() {
        for (var i = 0; i < data.length; i++) {
            addRatingWidget(addNewRating(data[i]), data[i]);
        }
    })();


        // BUILD SHOP ITEM
        function addNewRating(data) {
          var newRating = document.createElement('div');

          var html = data.rating + '<ul class="c-rating"></ul>';


          addNewRating.innerHTML = html;
          rateNumber.appendChild(shopItem);

          return addNewRating;
        }
        // ADD RATING WIDGET
     function addRatingWidget(shopItem, data) {
       var ratingElement = shopItem.querySelector('.c-rating');
       var currentRating = data.rating;
       var maxRating = 5;
       var callback = function(rating) { alert(rating); };
       var r = rating(ratingElement, currentRating, maxRating, callback);
     }

 });
