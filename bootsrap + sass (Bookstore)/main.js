// var myCarousel = document.querySelector('#carouselExampleControls');
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: false,
//   wrap: true
// });

// var myCarousel2 = document.querySelector('#carouselExampleControls2');
// var carousel2 = new bootstrap.Carousel(myCarousel2, {
//   interval: false,
//   wrap: true
// });

// var myCarousel3 = document.querySelector('#carouselExampleSlidesOnly');
// var carousel3 = new bootstrap.Carousel(myCarousel3, {
//   interval: true,
//   wrap: true
// });

$('.my-owl-1').owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  animateOut: 'fadeOut'
});

$('.my-owl-2').owlCarousel({
  items:4,
  loop:true,
  dots:false,
  nav:true,
  navText:["<img src='images/Prev.svg' alt='left arrow'>"," <img src='images/Next.svg' alt='right arrow'>"],
  responsive:{
          0:{
              items:1
          },
          414:{
              items:2
          },
          960:{
              items:3
          },
          1200:{
              items:4
          }
      }
});


//smooth scrolling to the top
$('#btn-up').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1000);
})

$('#hamburger').click(function(){
  $('.hamburger-menu').css({'display':'block'});
})

$('#close-btn').click(function(){
  $('.hamburger-menu').css({'display':'none'});
})

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })



