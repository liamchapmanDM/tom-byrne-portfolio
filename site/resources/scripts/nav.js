$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header2").addClass("pointer-event-none");
    }
    else {
        $("#header2").removeClass("pointer-event-none");
    }
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $("#header2").addClass("hide");
    }
    else {
        $("#header2").removeClass("hide");
    }
});




$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").removeClass("hide");
    }
    else {
        $("#header").addClass("hide");
    }
});





$(window).scroll(function(){
    $("#header2").css("opacity", 1 - $(window).scrollTop() / 1);
  });












// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
