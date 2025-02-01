<script lang="ts">
	import goArrow from "../assets/icons/arrow-right-up-line.svg";
	import { onMount } from "svelte";
	import { section, theme } from "../stores/Settings";

	let projects,
		isIntersecting: Boolean = false;
	let container = document.querySelector(".projects-container");
	let options = {
		root: container,
		rootMargin: "-50%",
	};
	let ref: any;

	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				isIntersecting = true;
				$section.section = "projects";
			}
		}, options);
		observer.observe(projects);
		return () => observer.disconnect();
	});

	const scroll = (direction: String) => {
		if (direction === "right") {
			ref.scrollLeft += 400;
		} else {
			ref.scrollLeft -= 400;
		}
	};
</script>

<div
	bind:this={projects}
	id="projects"
	class={`${$theme === "dark" ? "dark" : ""} ${
		isIntersecting === true && "show"
	}`}
>
	<h1>Projects</h1>
	<div class="project-btn-container">
		<button class="project-btn" on:click={() => scroll("left")}>
			&#11104;
		</button>
		<button class="project-btn" on:click={() => scroll("right")}>
			&#11106;
		</button>
	</div>
	<div class="projects-container" bind:this={ref}>
		<div class="project-inner-container">
			<div class="project">
				<img src="assets/images/kangol.png" alt="project" />
				<h2 class="project-topic">Kangol Store</h2>
				<p class="project-description">
					A redesign of the Kangol store website, using NextJS with a backend
					which connects to a MongoDB Database, which has a limited number of
					products for demonstration. Design gotten <a
						href="https://www.behance.net/gallery/113457767/Kangol-Website-E-commerce"
						target="_blank"
					>
						here
					</a>
				</p>
				<span class="tech-used-container">
					<p class="tech-used">NextJS</p>
					<p class="tech-used">MongoDB</p>
				</span>
				<a
					href="https://kangol-store.vercel.app"
					target="_blank"
					class="view-site"
				>
					<img src={goArrow} alt="view site" />
				</a>
			</div>
			<div class="project">
				<img src="assets/images/otmovies.png" alt="project" />
				<h2 class="project-topic">Movie Finder</h2>
				<p class="project-description">
					Website developed using ReactJs to discover, search and find
					information on Movies and TV Shows.
				</p>
				<span class="tech-used-container">
					<p class="tech-used">ReactJS</p>
					<p class="tech-used">TypeScript</p>
					<!-- <p class="tech-used">Express</p> -->
					<!-- <p class="tech-used">Node</p> -->
				</span>
				<a
					href="https://ot-movies.vercel.app"
					target="_blank"
					class="view-site"
				>
					<img src={goArrow} alt="view site" />
				</a>
			</div>
			<div class="project">
				<img src="assets/images/portfolio.png" alt="project" />
				<h2 class="project-topic">Portfolio</h2>
				<p class="project-description">The Website you're on right now.🙂</p>
				<span class="tech-used-container">
					<p class="tech-used">SvelteJS</p>
				</span>
				<a href="#home" class="view-site">
					<img src={goArrow} alt="view site" />
				</a>
			</div>
			<div class="project">
				<img src="assets/images/bucodel.png" alt="project" />
				<h2 class="project-topic">BUCODeL SIS</h2>
				<p class="project-description">
					Student Information System for Babcock University's e-Learning
					program. Developed as a final year project for my Bsc.
				</p>
				<span class="tech-used-container">
					<p class="tech-used">ReactJs</p>
					<p class="tech-used">ExpressJS</p>
					<p class="tech-used">MongoDB</p>
				</span>
				<a
					href="https://bucodel-sis.netlify.app/"
					target="_blank"
					class="view-site"
				>
					<img src={goArrow} alt="view site" />
				</a>
			</div>
			<div class="project">
				<img src="assets/images/siwes-web.png" alt="project" />
				<h2 class="project-topic">SIWES Website</h2>
				<p class="project-description">
					Developed the frontend of the website for Babcock University&#39;s
					SIWES program, used to monitor students during their IT.
				</p>
				<!-- The website is built with various features for students, supervisors, and the university. -->
				<span class="tech-used-container">
					<p class="tech-used">ReactJS</p>
				</span>
				<a
					href="https://siwes.babcock.edu.ng"
					target="_blank"
					class="view-site"
				>
					<img src={goArrow} alt="view site" />
				</a>
			</div>
			<div class="project">
				<img src="assets/images/darktan.png" alt="project" />
				<h2 class="project-topic">Darktan Properties</h2>
				<p class="project-description">
					Developed the frontend of Darktan Properties. It is a property
					management application for Landlords, Tenants and Realtors looking to
					advertise.
				</p>
				<!-- The website is built with various features for students, supervisors, and the university. -->
				<span class="tech-used-container">
					<p class="tech-used">ReactJS</p>
				</span>
				<a
					href="https://www.darktanprop.com/"
					target="_blank"
					class="view-site"
				>
					<img src={goArrow} alt="view site" />
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use "sass:math";
	@import "../styles/variables";

	.show {
		h1,
		.project,
		.project-btn-container {
			translate: 0;
			opacity: 1;
		}
	}

	h1 {
		margin-bottom: 10px;
	}

	.project-btn-container {
		width: fit-content;
		margin: 0 auto 20px;
		padding: 0;
		position: relative;
		translate: -100%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
	}

	.project-btn {
		text-align: center;
		font-size: 3rem;
		font-weight: 900;
		background-color: transparent;
		border: none;
		color: inherit;
	}

	div {
		padding: 5rem 12rem;
		max-width: 90rem;
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
	}

	.projects-container {
		overflow-x: scroll;
		padding: 20px 0px 40px;
		margin: 10px auto;
		scroll-behavior: smooth;
		&::-webkit-scrollbar {
			width: 8px;
			height: 8px;
			background-color: inherit;
		}

		&::-webkit-scrollbar-thumb {
			background-color: $accent-dark;
			border-radius: 20px;
		}
	}

	.project-inner-container {
		display: flex;
		padding: 0px;
		flex-wrap: nowrap;
		scroll-behavior: smooth;
	}

	.project {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0px 0px 5px;
		height: 450px;
		width: 450px;
		margin: 0 20px;
		background-color: $secondary;
		transition: background-color 0.4s ease-in-out;
		scroll-snap-align: start;
		border-radius: 20px;
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;

		@for $i from 1 through 6 {
			&:nth-child(#{$i}) {
				transition-delay: 0.25s * $i;
			}
		}

		img {
			width: 450px;
			height: 300px;
			height: 60%;
			object-fit: cover;
			border-radius: 20px 20px 0px 0px;
		}
	}

	.tech-used-container {
		display: flex;
		align-items: center;
		margin-top: auto;
		margin-left: 15px;
	}

	.tech-used {
		margin: 5px 0;
		font-size: 0.9rem;
		color: $primary;
		background-color: rgba($color: $primary, $alpha: 0.25);
		margin-right: 10px;
		padding: 5px 10px;
		border-radius: 15px;
	}

	.project-topic {
		font-family: "Chivo";
		font-weight: 600;
		font-size: 1.25rem;
		margin: 10px 15px;
	}

	.project-description {
		font-size: 1rem;
		margin: 0px 15px 10px;
	}

	.view-site {
		background-color: $primary;
		border: none;
		position: absolute;
		right: 5%;
		top: 40%;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		transition: box-shadow 0.4s;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 2.5rem;
			transition: width 0.4s;
		}

		&:hover {
			box-shadow:
				rgba(100, 84, 120, 0.4) 0px 8px 24px,
				rgba(100, 84, 120, 0.4) 0px 16px 56px,
				rgba(100, 84, 120, 0.4) 0px 24px 80px;

			img {
				width: 3rem;
			}
		}
	}

	.dark {
		.project {
			background-color: $secondary-dark !important;
		}
	}

	@media (max-width: 1400px) {
		div {
			padding: 5rem;
		}
	}

	@media (max-width: 1200px) {
		div {
			padding: 3rem;
		}
	}
	@media (max-width: 550px) {
		.project {
			width: 300px;
			height: 400px;

			img {
				width: 300px;
				height: 200px;
			}
		}
		.view-site {
			img {
				width: 60px;
				height: 50px;
			}
		}
		div {
			padding: 1rem;
		}
	}
</style>
