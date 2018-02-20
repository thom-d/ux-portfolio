// This is where it all goes :)



$(document).ready(function() {

// Introduction text/cta - fades in during page load. 

$(".landing-intro, .button").hide().fadeIn("slow");


// "Featured Work" and "About" links 
// On click scrolls down to portfolio gallery and about section

// $(".my-gallery").click(function(e){
//   e.preventDefault();
//   $('body, html').animate({scrollTop: $("#gallery").offset().top}, 1500);    
// });

$(".my-blurb").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("footer").offset().top}, 1500);    
});

// Call-To-Action
// On click scrolls down to portfolio gallery

$(".button").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("#gallery").offset().top}, 1500);    
});


// Gallery Card
// On hover, project title transitions to unique color

// var grid = ".card-title";

// $( ".card" ).hover (function() {
// 		$( this ).children(".card-title").css( "background-color", "#2e2e2e" );
//   });
// $( ".card" ).mouseleave (function() {
// 		$( this ).children(".card-title").css( "background-color", "#363636" );
//   });


// Return link/button
// On click scrolls up to page header

$(".return").click(function(e){
  e.preventDefault();
  $('body, html').animate({scrollTop: $("#nav").offset().top}, 1500);    
});  

});
