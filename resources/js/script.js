$(document).ready(function () {

// Multiple select
    $('.category').click(function() { 
        $(this).toggleClass('active');
    });

// fadeInDown Animation(index)
    $('.js--ani-1').ready(function (direction) {
        $('.js--ani-1').addClass('animated fadeIn');
    });

// bounce-in(quiz page)
    $('.js--ani-2').ready(function (direction) {
        $('.js--ani-2').addClass('animated bounceIn');
    });

// Share


// Input 
    // $(':input[type="submit"]').prop('disabled', true);
    // $('input[type="text"]').keyup(function() {
    // if($(this).val() != '') {
    //     $(':input[type="submit"]').prop('disabled', false);
    // }
    // });

});
