window.addEventListener("scroll", function () {
	const nav = document.querySelector("nav");
	if (window.scrollY > 50) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

function setupWordReveal(selector) {
	const el = document.querySelector(selector);
	const words = el.innerText.split(/\s+/).filter(Boolean);
	el.innerHTML = words
		.map(
			(word) =>
				`<span class="word-wrapper"><span class="word">${word}</span></span>`,
		)
		.join(" ");
	return el.querySelectorAll(".word");
}

const mainHeaderWords = setupWordReveal(".main-header");

document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("animations-loaded");

	const tl = gsap.timeline();

	tl.from(".img-container", {
		y: -50,
		opacity: 0,
		duration: 1,
		ease: "power2.out",
	})
		// Animate the main header, word by word
		.from(
			mainHeaderWords,
			{
				yPercent: 100,
				opacity: 0,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.1,
			},
			"-=0.5",
		)
		.from(
			"main > p:not(.bold)",
			{
				y: 20,
				opacity: 0,
				duration: 1,
				ease: "power2.out",
			},
			"-=0.7",
		)
		.from(
			".header-flex .underline-link",
			{
				y: 20,
				opacity: 0,
				duration: 0.8,
				ease: "power2.out",
				stagger: 0.2,
			},
			"-=0.6",
		);
	gsap.registerPlugin(ScrollTrigger);

	gsap.fromTo(
		"main .spacer + p.bold",
		{
			y: 30,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "main .spacer + p.bold",
				start: "top 85%",
				end: "bottom 20%",
				toggleActions: "play none none none",
			},
		},
	);

	document.querySelectorAll(".project-card").forEach((card, index) => {
		gsap.fromTo(
			card,
			{
				y: 60,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				delay: index * 0.2,
				scrollTrigger: {
					trigger: card,
					start: "top 85%",
					end: "bottom 20%",
					toggleActions: "play none none none",
				},
			},
		);
	});

	gsap.fromTo(
		"main > .underline-link.p2",
		{
			y: 30,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "main > .underline-link.p2",
				start: "top 90%",
				end: "bottom 20%",
				toggleActions: "play none none none",
			},
		},
	);
});

function getBasePath() {
	if (window.location.hostname.includes("github.io")) {
		return "/portfolio";
	}
	return "";
}

document.addEventListener("DOMContentLoaded", function () {
	const basePath = getBasePath();
	const links = document.querySelectorAll('a[href^="/"]');
	links.forEach((link) => {
		link.href = basePath + link.getAttribute("href");
	});
});
