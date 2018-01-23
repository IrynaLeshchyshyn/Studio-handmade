$( document ).ready(function() {

$(window).scroll(function(){
        if ( $(this).scrollTop() > 1 ) {
            //$('.navigation').addClass('header-fixed');
           $('.menu-fixed-button').addClass('fixed');
            $('.social-network--top').addClass('fixed-social');
            $('.navigation').addClass('fixed-nav');
        } else {
          //  $('.navigation').removeClass('header-fixed');
          $('.menu-fixed-button').removeClass('fixed');
          $('.social-network--top').removeClass('fixed-social');
            $('.navigation').removeClass('fixed-nav');
        }
    })


$( ".menu-fixed-button" ).click(function() {
    $( ".navigation ul" ).toggleClass( "visible-menu" );
});

//mixitup
$(function(){
  $('#Container').mixItUp();
});

//race
var $race = $('.race-carousel');

function showSliderRace($widthScreen) {
    console.log($widthScreen);

    if ($widthScreen < "1140") {
        if (!$race.hasClass('slick-initialized')) {
            $race.slick({
                responsive: [
                 {
                     breakpoint: 1140,
                     settings: {
                        dots: true,
                       autoplay:true,
                       slidesToShow: 2
                     }
                 },
                 {
                     breakpoint: 768,
                     settings: {
                        dots: true,
                       autoplay:true,
                       slidesToShow: 1
                     }
                 }
              ]
            });
        }

    } else {
        if ($race.hasClass('slick-initialized')) {
            $race.unslick();
        }
     }
}

var widthScreen = $(window).width();
$(window).ready(showSliderRace(widthScreen)).resize(
    function () {
        var widthScreen = $(window).width();
        showSliderRace(widthScreen);
    }
);




//photo-galery
var $carousel = $('.photo-gallery-carousel');
function showSliderScreen($widthScreen) {
    console.log($widthScreen);

    if ($widthScreen < "768") {
        if (!$carousel.hasClass('slick-initialized')) {
            $carousel.slick({
                responsive: [
                 {
                     breakpoint: 768,
                     settings: {
                        dots: true,
                       autoplay:true,
                       slidesToShow: 1
                     }
                 }
              ]
            });
        }

    } else {
        if ($carousel.hasClass('slick-initialized')) {
            $carousel.unslick();
        }
     }
}

var widthScreen = $(window).width();
$(window).ready(showSliderScreen(widthScreen)).resize(
    function () {
        var widthScreen = $(window).width();
        showSliderScreen(widthScreen);
    }
);




//shop
$('.responsive').slick({
   infinite: true,
  speed: 100,
   autoplay:true,
   slidesToShow: 3,
  responsive: [
     {
       breakpoint: 1140,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: false,
         arrows: false,
         arrows: true
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         arrows: true,
         slidesToScroll: 1,
         dots: false,
         arrows: false
         //unslick: true
       }
     },
     {
       breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   ]
 });

//testimonial
  $('.testimonial-carousel').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
  responsive: [
     {
       breakpoint: 1140,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         arrows: true
       }
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 1,
         arrows: true,
         slidesToScroll: 1
       }
     }
   ]
  });

$('.testimonial-ellipsis').jTruncate({
  minTrail: 0,
  moreText: "читать дальше",
  lessText: "спрятать",
  moreAni: "fast"
});


$('.box--responsive').ellipsis({ responsive: true });

$( ".truncate_more_link" ).click(function() {
   var moretrunc = $( ".testimonial" );
  moretrunc.toggleClass( "too" );
});


});
