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

document.addEventListener("DOMContentLoaded", () => {
	const mainHeaderWords = setupWordReveal(".project-header");

	const tl = gsap.timeline();

	tl.from(".project-timeline", {
		y: 20,
		opacity: 0,
		duration: 0.5,
		ease: "power2.out",
	})
		.from(
			mainHeaderWords,
			{
				yPercent: 100,
				opacity: 0,
				duration: 0.6,
				ease: "power2.out",
				stagger: 0.1,
			},
			"-=0.3",
		)
		.from(
			".header-img-container img",
			{
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			},
			"-=0.5",
		)
		.from(
			".back-link",
			{
				x: -30,
				opacity: 0,
				duration: 0.8,
				ease: "power2.out",
			},
			"-=0.7",
		);

	const overviewElements = gsap.utils.toArray(".project-bold, .project-text");

	overviewElements.forEach((elem) => {
		gsap.from(elem, {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: elem,
				start: "top 85%",
				toggleActions: "play none none none",
			},
		});
	});

	gsap.from(".underline-link", {
		y: 30,
		opacity: 0,
		duration: 0.8,
		ease: "power2.out",
		scrollTrigger: {
			trigger: ".underline-link",
			start: "top 85%",
			toggleActions: "play none none none",
		},
	});

	const projectImages = gsap.utils.toArray(".project-body-img");

	projectImages.forEach((elem) => {
		gsap.from(elem, {
			y: 20,
			opacity: 0,
			duration: 0.6,
			ease: "power2.out",
			scrollTrigger: {
				trigger: elem,
				start: "top 80%",
				toggleActions: "play none none none",
			},
		});
	});

	const boldSmallTitles = gsap.utils.toArray(".bold-small");

	boldSmallTitles.forEach((title) => {
		gsap.from(title, {
			y: 30,
			opacity: 0,
			duration: 0.6,
			ease: "power2.out",
			scrollTrigger: {
				trigger: title,
				start: "top 85%",
				toggleActions: "play none none none",
			},
		});
	});

	const listItems = gsap.utils.toArray(".project-ul li");

	listItems.forEach((li) => {
		gsap.from(li, {
			y: 20,
			opacity: 0,
			duration: 0.5,
			ease: "power2.out",
			scrollTrigger: {
				trigger: li,
				start: "top 90%",
				toggleActions: "play none none none",
			},
		});
	});
});
