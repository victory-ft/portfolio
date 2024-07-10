<script lang="ts">
	import { onMount } from "svelte";
	import { theme, section } from "../stores/Settings";
	import html from "../assets/icons/html5.svg";
	import css from "../assets/icons/css3.svg";
	import sass from "../assets/icons/sass.svg";
	import js from "../assets/icons/javascript.svg";
	import react from "../assets/icons/reactjs.svg";
	import svelteIcon from "../assets/icons/svelte.svg";
	import node from "../assets/icons/node.svg";
	import express from "../assets/icons/expressjs.svg";
	import mongo from "../assets/icons/mongodb.svg";

	let aboutSection,
		skills,
		isIntersecting: Boolean = false,
		isIntersecting2: Boolean = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isIntersecting = true;
					$section.section = "about";
				}
			},
			{
				rootMargin: "-50%",
			},
		);
		const observer2 = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isIntersecting2 = true;
				}
			},
			{
				rootMargin: "-50%",
			},
		);
		observer.observe(aboutSection);
		observer2.observe(skills);
		return () => {
			observer.disconnect();
			observer2.disconnect();
		};
	});
</script>

<section bind:this={aboutSection} id="about" class={isIntersecting && "show"}>
	<div class="section-content-half"><h1>About Me</h1></div>
	<div class="section-content-half about-half">
		<p>
			In my secondary school, I discovered my passion for creating products for
			people through web development. I honed my skills in HTML, CSS, and
			JavaScript, building interactive websites. My enthusiasm led me to pursue
			software engineering at university, where I earned a Bachelor's degree.
			Later, I expanded into web frameworks like React and Svelte, and ventured
			into mobile development using React Native. I'm constantly eager to learn
			and enhance my abilities.🌟
		</p>

		<br />
		<a href="/files/victory-cv.pdf" target="_blank" class="cv-button">
			View CV
		</a>
	</div>
</section>
<div
	class={`skills-section ${$theme === "dark" ? "dark" : ""} ${
		isIntersecting2 && "show"
	}`}
	bind:this={skills}
>
	<h1>My Skills</h1>
	<div class="skills">
		<div class="skill-card">
			<img src={html} alt="html-icon" />
			<p>HTML</p>
		</div>
		<div class="skill-card">
			<img src={css} alt="css-icon" />
			<p>CSS</p>
		</div>
		<div class="skill-card">
			<img src={sass} alt="sass-icon" />
			<p>Sass</p>
		</div>
		<div class="skill-card">
			<img src={js} alt="js-icon" />
			<p>JavaScript</p>
		</div>
		<div class="skill-card">
			<img src={react} alt="react-icon" />
			<p>React/Next</p>
		</div>
		<div class="skill-card">
			<img src={svelteIcon} alt="svelte-icon" class="sv-icon" />
			<p>Svelte/SvelteKit</p>
		</div>
		<div class="skill-card">
			<img src={node} alt="node-icon" />
			<p>NodeJs</p>
		</div>
		<div class="skill-card">
			<img src={express} alt="express-icon" class="long-icon" />
			<p>ExpressJs</p>
		</div>
		<div class="skill-card">
			<img src={mongo} alt="mongo-icon" class="long-icon" />
			<p>MongoDB</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use "sass:math";
	@import "../styles/variables";

	.cv-button {
		text-decoration: none;
		font-family: "Bai Jamjuree";
		padding: 15px 20px;
		border-radius: 5px;
		background-color: $accent-dark;
		color: #f0f0f0;
		border: 2px solid $accent-dark;
	}

	.show {
		h1,
		&.skills-section h1,
		.about-half {
			translate: 0;
			opacity: 1;
		}

		.skill-card {
			translate: 0 0;
			opacity: 1;
		}
	}

	.section-content-half {
		width: 50%;
	}

	h1 {
		translate: -40%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
	}

	.about-half {
		translate: 30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.4s;
	}

	.skills-section {
		h1 {
			text-align: center;
			background: $text-gradient;
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			translate: -20%;
			opacity: 0;
			transition:
				translate 0.8s,
				opacity 0.8s;
		}
	}

	.skills {
		display: grid;
		place-content: center;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		padding: 2rem 12rem;
		max-width: 90rem;
		margin: 0 auto;
	}

	.skill-card {
		background-color: $secondary;
		border-radius: 10px;
		transition: background-color 0.4s ease-in-out;
		padding: 10px 20px;
		display: flex;
		align-items: center;
		translate: 0 80%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;

		img {
			width: 2rem;

			&.sv-icon {
				width: 1.5rem;
			}

			&.long-icon {
				width: 5rem;
			}
		}

		p {
			margin-left: 5px;
			font-size: 1rem;
		}

		@for $i from 1 through 9 {
			&:nth-child(#{$i}) {
				transition-delay: 0.15s * $i;
			}
		}
	}

	.dark {
		.skill-card {
			background-color: $secondary-dark !important;
		}
	}

	@media (max-width: 1200px) {
		.skills {
			padding: 3rem;
		}
	}

	@media (max-width: 980px) {
		section {
			overflow: hidden;
		}

		.section-content-half {
			width: 100%;
			h1 {
				text-align: center;
			}
		}
	}

	@media (max-width: 750px) {
		.skills {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 550px) {
		.skills {
			padding: 1rem;
			grid-template-columns: 1fr;
		}
	}
</style>
