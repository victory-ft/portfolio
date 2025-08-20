// --- Navigation scroll effect ---
window.addEventListener("scroll", function () {
	const nav = document.querySelector("nav");
	if (window.scrollY > 50) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});

// Helper function to set up the word-by-word reveal animation
function setupWordReveal(selector) {
	const el = document.querySelector(selector);
	// Split the text by spaces. This is a more reliable method.
	const words = el.innerText.split(/\s+/).filter(Boolean);
	el.innerHTML = words
		.map(
			(word) =>
				`<span class="word-wrapper"><span class="word">${word}</span></span>`,
		)
		.join(" ");
	return el.querySelectorAll(".word");
}

// 1. Set up the word reveal for the main header
const mainHeaderWords = setupWordReveal(".main-header");

// 2. Wait for the document to be fully loaded before starting animations
document.addEventListener("DOMContentLoaded", () => {
	// Add class to body to indicate animations are ready
	document.body.classList.add("animations-loaded");

	// 3. Create a GSAP timeline for a controlled sequence
	const tl = gsap.timeline();

	tl
		// Animate the image container
		.from(".img-container", {
			y: -50, // slide in from the top
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
		) // Overlap with the previous animation by 0.5s
		// Animate the intro paragraph
		.from(
			"main > p",
			{
				y: 20, // slide in from the bottom
				opacity: 0,
				duration: 1,
				ease: "power2.out",
			},
			"-=0.7",
		) // Overlap for a smoother transition
		// Animate the two links with a stagger
		.from(
			".header-flex .underline-link",
			{
				y: 20, // slide in from the bottom
				opacity: 0,
				duration: 0.8,
				ease: "power2.out",
				stagger: 0.2, // Animate them one after the other
			},
			"-=0.6",
		); // Overlap again

	// --- Project Cards Scroll-Triggered Animation ---

	// Register ScrollTrigger plugin (GSAP will auto-register if available)
	gsap.registerPlugin(ScrollTrigger);

	// Animate "Featured Projects" text
	gsap.fromTo(
		"p.bold",
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
				trigger: "p.bold",
				start: "top 85%",
				end: "bottom 20%",
				toggleActions: "play none none none",
			},
		},
	);

	// Animate each project card individually when it comes into view with staggered delay
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
				delay: index * 0.2, // Add staggered delay based on card index
				scrollTrigger: {
					trigger: card, // Each card triggers its own animation
					start: "top 85%", // Start when top of THIS card is 85% down the viewport
					end: "bottom 20%",
					toggleActions: "play none none none",
				},
			},
		);
	});

	// Animate "View all projects" link
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
