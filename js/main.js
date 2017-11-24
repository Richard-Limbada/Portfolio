(function($) {
  "use strict"; // Start of use strict 

var landingPageVideo = videojs('landing-page-video', {
    controls: false,
    autoplay: false,
    preload: 'auto',
    loop: false,
});
    
landingPageVideo.on('canplaythrough', function(){
    $('body').removeClass('loading');
});
  
    


$( document ).ready(function() {
    $( "#playReel" ).click(function() {
  landingPageVideo.play();
    $( "#landing-page-video" ).fadeIn(0.5, 'ease');
    $( "#landing-page-video" ).css('opacity', 1)
    $( "#homeLogo" ).fadeOut();
    
});
    
$( "#downLink" ).click(function() {
    landingPageVideo.pause();
    $( "#homeLogo" ).css('display', 'block')
    $( "#landing-page-video" ).css('opacity', 0.15)
    
     $( "#homeLogo" ).css('opacity', 1)
});
    
$('video').on('ended',function(){
    $( "#homeLogo" ).css('display', 'block')
    $( "#landing-page-video" ).fadeOut(0.5, 'ease');

    
     $( "#homeLogo" ).css('opacity', 1)
    

});
    
$( window ).scroll(function(){
    landingPageVideo.pause();
    $( "#homeLogo" ).css('display', 'block')
    $( "#landing-page-video" ).css('opacity', 0.15)
    
     $( "#homeLogo" ).css('opacity', 1)
    

});
    
    
    
    
});
    
new TiltSlider( document.getElementById( 'slideshow' ) );

   




    


   
    

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top + 4)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './vendor/assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const tilt = $('.js-tilt').tilt();

$(".goDown").hover(function(){
        $(".bottomPage").css("height", "40px");
        $(".bottomPage").css("filter", "opacity(1)");
        $(".aboutLink").css("filter", "opacity(1)");
        $(".goDown i").css("filter", "opacity(0.3)");
        $(".aboutLink").css("margin-bottom", "-60px");
        }, function(s){
        $(".bottomPage").css("height", "0");
        $(".bottomPage").css("filter", "opacity(0.5)");
        $(".goDown i").css("filter", "opacity(0.7)");
        $(".aboutLink").css("filter", "opacity(0)");
    $(".aboutLink").css("margin-bottom", "-20px");
});

