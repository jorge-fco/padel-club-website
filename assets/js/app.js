// VARS
const CoverImage = document.querySelector(".home__cover__overlay");
const CoverTitle = document.querySelector(".home__cover__text h1 span");
const CoverSubTitle = document.querySelector(".home__cover__text h2 span");
const CoverText = document.querySelector(".home__cover__text h3 span");
const CoverButton = document.querySelector(".home__cover__text a");

var Intro = function(){

	gsap.to(CoverImage, 2,{
		delay: 0.25,
		scale: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(CoverTitle, 1,{
		delay: 0.35,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(CoverSubTitle, 1,{
		delay: 0.45,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(CoverText, 1,{
		delay: 0.55,
		y: 1,
		autoAlpha: 1,
		ease: "power4.inOut"
	});

	gsap.to(CoverButton, 0.5,{
		delay: 0.65,
		autoAlpha: 1,
		ease: "power4.inOut"
	});
}

var Animations = function(){
	var wow = new WOW({
		boxClass:     'set',
		animateClass: 'animation',
	});
	wow.init();
}

// RUN...
Intro();
Animations();