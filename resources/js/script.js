$(document).ready(function () {

// Multiple select
    $('.category').click(function() { 
        $(this).toggleClass('active');
    });

// fadeInDown Animation
    $('.js--wp-1').ready(function (direction) {
        $('.js--wp-1').addClass('animated fadeInDown');
    });

// Share


// Input 
    $(':input[type="submit"]').prop('disabled', true);
    $('input[type="text"]').keyup(function() {
    if($(this).val() != '') {
        $(':input[type="submit"]').prop('disabled', false);
    }
    });

});
