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
	"outerWidth": 30,
	"outerHeight": 30
});

// Sticky navbar al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.getElementById('main-navbar');
	if (!navbar) return;

	let lastScroll = window.scrollY;
	let isSticky = false;

	function onScroll() {
		const currentScroll = window.scrollY;
		console.log(currentScroll);
		if (currentScroll > 0) {
			if (!isSticky) {
				navbar.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg', 'bg-black/80', 'z-50');
				navbar.classList.remove('absolute');
				isSticky = true;
			}
		} else {
			if (isSticky) {
				navbar.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg', 'bg-black/80', 'z-50');
				navbar.classList.add('absolute');
				isSticky = false;
			}
		}
		lastScroll = currentScroll;
	}

	document.getElementById('body').addEventListener('scroll', onScroll);
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
