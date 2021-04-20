
// tabs
$('.card').on('click', function(){
  let currTab = $(this).parent().index();

  $('.card').removeClass('card-active');
  $(this).addClass('card-active');

  $('.tab-content').removeClass('active');
  $('.tab-content').eq(currTab).addClass('active');
})

// hamburger
$('.hamburger').on('click', function(){
   $('.head__menu').toggle();
})

$('.menu-close').on('click',function(){
  $('.head__menu').hide();
})

//parallax
let scene = document.getElementById('scene');
let parallax = new Parallax(scene);

//slider (swiper js)
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  spaceBetween:40,
  slidesPerView:4,
  loop: true,
  stopOnLastSlide:false,
  autoplay:{
    delay:2000
  }
});

// map(yandex) (get the api key on the website , can create free with mapkit)
ymaps.ready(init);
function init(){     
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls:['zoomControl','geolocationControl']
    });
}

//validation(jqery validate)

//doesn't work properly without this function
$.validator.addMethod('regex',function(value,element,regexp){
  let regExsp = new RegExp(regexp);
  return regExsp.test(value);

},'please check your input');

$('form').validate({
  rules:{
    firstName : {
      required:true,
      regex : "[A-Za-z]{1,32}"
    },
    phoneNumber:{
      required:true,
      digits:true,
      minlength:10,
      maxlength:11,
      regex:"[0-9]+"
    }
  },
  messages:{
    firstName:"Wrong name input",
    phoneNumber:"Wrong phone input"
  }
})