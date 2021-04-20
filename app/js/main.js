let heroTextCarousel = $(".carousel-text");

$(document).ready(function () {
	heroTextCarousel.owlCarousel({
		items: 1,
		margin: 0,
		autoplay: true,
		loop: true,
		autoplayTimeout: 5000,
		stageClass: "hero__carousel",
		animateOut: "animate__slideOutLeft",
		animateIn: "animate__slideInRight",
	});
});
