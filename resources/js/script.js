$(document).ready(function () {

// fadeInDown Animation(index)
    $('.js--ani-1').ready(function (direction) {
        $('.js--ani-1').addClass('animated fadeIn');
    });

// bounce-in(quiz page)
    $('.js--ani-2').ready(function (direction) {
        $('.js--ani-2').addClass('animated bounceIn');
    });

// Multiple select(random quiz setting)
    $('.category').click(function() { 
        $(this).toggleClass('active');
    });

// Share
function share() {
    if (navigator.share) {
        navigator.share({
                title: 'Emoji Quiz',
                text: 'Try fun emoji quiz',
                url: 'https://emoji-quiz.app',
            })
            .then(() => console.log('Emoji shared successfully'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        console.log("Web browser doesn't support share.");
        alert("Your web browser doesn't support share.")
    }
}  

$('a.btn-share').click(function() {
    share();
});

  
// Input 
    // $(':input[type="submit"]').prop('disabled', true);
    // $('input[type="text"]').keyup(function() {
    // if($(this).val() != '') {
    //     $(':input[type="submit"]').prop('disabled', false);
    // }
    // });

});
