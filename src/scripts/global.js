import $ from "jquery";
import "slick-carousel";

$(".slick-slider").slick({
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
],
});

$(".aliados-carousel").slick({
	autoplay: true,
	autoplaySpeed: 1000,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
],
});

// Magic Mouse initiaization
magicMouse({
	"hoverEffect": "circle-move",
	"hoverItemMove": false,
	"defaultCursor": false,
	"outerWidth": 50,
	"outerHeight": 50
});

// FadeIn effect for important texts and logo
document.addEventListener('DOMContentLoaded', function () {
	const fadeEls = document.querySelectorAll('.fade-in');
	const observer = new window.IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });

	fadeEls.forEach(el => observer.observe(el));
});
