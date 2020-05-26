$(document).ready(function () {

// fadeInDown Animation(index)
    $('.js--ani-1').ready(function (direction) {
        $('.js--ani-1').addClass('animated fadeIn');
    });

// bounce-in(quiz page)
    $('.js--ani-2').ready(function (direction) {
        $('.js--ani-2').addClass('animated bounceIn');
    });

// bounce-in(quiz right page)
    $('.js--ani-3').ready(function (direction) {
        $('.js--ani-3').addClass('animated heartBeat');
    });

// bounce-in(quiz wrong page)
    $('.js--ani-4').ready(function (direction) {
        $('.js--ani-4').addClass('animated headShake');
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
    document.getElementById("answer").addEventListener("input", function() {
        var answerInput = document.getElementById('answer').value;
        if (answerInput != "") {
            document.getElementById("answerButton").style.backgroundColor = "black";
            document.getElementById("answerButton").style.borderColor = "black";
        } else {
            document.getElementById("answerButton").style.backgroundColor = "#999";
            document.getElementById("answerButton").style.borderColor = "#999";
        }
    });

// Like Button
$(".icon-right.choose").click(function() {
    $(this).toggleClass("ion-md-heart-empty ion-md-heart").addClass('animated bounceIn');
  });

// Reaction? - like

});
