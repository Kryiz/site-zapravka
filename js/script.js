//========= Reviews swiper-slider
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

});
//=======================
$(function(){
    $(".modal__open, .modal__background, .modal__close").click(function() {
        $(".modal__content, .modal__background").toggleClass("active");
    });
});