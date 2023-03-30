const swiper = new Swiper(".swiper", {
	// Optional parameters
	slidesPerView: "auto",
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
	},

	breakpoints: {
		// when window width is >= 320px
		768: {
			allowSlideNext: false,
			allowSlidePrev: false,
			allowTouchMove: false,
		},
	},
});

let btnShowMore = document.querySelector(".btn_show-more");
let btnHidden = document.querySelector(".btn_hidden");
let swiperBlock = document.querySelector(".swiper");


btnShowMore.addEventListener('click', function () { 
	swiperBlock.style.height = '100%'
	btnShowMore.classList.add('hidden');
	btnHidden.classList.remove('hidden');
})
btnHidden.addEventListener("click", function () {
	swiperBlock.style.height = "160px";
	btnShowMore.classList.remove("hidden");
	btnHidden.classList.add("hidden");
});