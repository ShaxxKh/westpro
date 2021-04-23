let heroTextCarousel = $(".carousel-text");
const coursesCarousel = $(".courses__carousel");
const staffCarousel = $(".staff__carousel");

$(document).ready(function () {
	heroTextCarousel.owlCarousel({
		items: 1,
		margin: 0,
		autoplay: true,
		loop: true,
		autoplayTimeout: 5000,
		nav: true,
		mouseDrag: true,
		// stageOuterClass: "hero__carousel",
		navContainerClass: "hero__nav-container",
		navText: [
			"<img class='hero__nav-img--left' src='./images/left.svg'>",
			"<img class='hero__nav-img--right' src='./images/right.svg'>",
		],
		navClass: ["hero__nav-left", "hero__nav-right"],
		animateOut: "animate__slideOutLeft",
		animateIn: "animate__slideInRight",
	});
	coursesCarousel.owlCarousel({
		items: 3,
		margin: 20,
		autoplay: true,
		loop: true,
		autoplayTimeout: 5000,
		dotClass: "carousel-dot",
		dotsClass: "carousel-dots-container",
		dotsEach: true,
		animateOut: "animate__slideOutLeft",
		animateIn: "animate__slideInRight",
	});
	staffCarousel.owlCarousel({
		items: 5,
		margin: 20,
		autoplay: true,
		loop: true,
		autoplayTimeout: 5000,
		dotClass: "carousel-dot",
		dotsClass: "carousel-dots-container",
		dotsEach: true,
		animateOut: "animate__slideOutLeft",
		animateIn: "animate__slideInRight",
	});
});
