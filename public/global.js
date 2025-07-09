// Magic Mouse initiaization
// Note: jQuery and Swiper are loaded via CDN in the HTML

// Wait for magicMouse to be available
if (typeof magicMouse !== 'undefined') {
	magicMouse({
		"hoverEffect": "circle-move",
		"hoverItemMove": false,
		"defaultCursor": true,
		"outerWidth": 50,
		"outerHeight": 50
	});
}

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

// Initialize Swiper after everything is loaded
window.initializeSwipers = function () {

	// Check if Swiper is available
	if (typeof Swiper === 'undefined') {
		setTimeout(initializeSwipers, 1000);
		return;
	}

	// Initialize main swiper (slides)
	const mainSwiperElement = document.querySelector('.swiper-main');
	if (mainSwiperElement) {
		const mainSwiper = new Swiper('.swiper-main', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-main .swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			// Enable touch/swipe functionality
			allowTouchMove: true,
			grabCursor: true,
			// Smooth transitions
			speed: 600,
			effect: 'slide',
		});
	}

	// Initialize aliados swiper
	const aliadosSwiperElement = document.querySelector('.swiper-aliados');
	if (aliadosSwiperElement) {
		const aliadosSwiper = new Swiper('.swiper-aliados', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-aliados .swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			breakpoints: {
				480: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
				768: {
					slidesPerView: 5,
					spaceBetween: 30,
				}
			},
			// Enable touch/swipe functionality
			allowTouchMove: true,
			grabCursor: true,
			// Smooth transitions
			speed: 500,
			effect: 'slide',
		});
	}
}

// Initialize when window is fully loaded (recommended by Swiper docs)
window.addEventListener('load', function () {
	initializeSwipers();
});
