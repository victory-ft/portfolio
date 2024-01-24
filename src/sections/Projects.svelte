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
</script>

<div
	bind:this={projects}
	id="projects"
	class={`${$theme === "dark" ? "dark" : ""} ${
		isIntersecting === true && "show"
	}`}
>
	<h1>Projects</h1>
	<div class="projects-container">
		<div class="project">
			<img src="assets/images/test1.webp" alt="project" />
			<h2 class="project-topic">Restaurant Website</h2>
			<p class="project-description">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, ad quasi
				possimus vero fugiat nobis?
			</p>
			<span class="tech-used-container">
				<p class="tech-used">React</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
		<div class="project">
			<img src="assets/images/test2.webp" alt="project" />
			<h2 class="project-topic">Yoga Web App</h2>
			<p class="project-description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam cumque
				voluptatum ipsum corporis, sed vero.
			</p>
			<span class="tech-used-container">
				<p class="tech-used">React</p>
				<p class="tech-used">Express</p>
				<p class="tech-used">Node</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
		<div class="project">
			<img src="assets/images/test3.jpg" alt="project" />
			<h2 class="project-topic">Crypto Wallet</h2>
			<p class="project-description">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
				veritatis quisquam corrupti nihil, inventore vitae.
			</p>
			<span class="tech-used-container">
				<p class="tech-used">HTML</p>
				<p class="tech-used">CSS</p>
				<p class="tech-used">JavaScript</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
		<div class="project">
			<img src="assets/images/test1.webp" alt="project" />
			<h2 class="project-topic">Fast Food Web App</h2>
			<p class="project-description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio
				ut quisquam perferendis excepturi dignissimos quis sed exercitationem
				ipsum? Perferendis, sed.
			</p>
			<span class="tech-used-container">
				<p class="tech-used">Svelte</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
		<div class="project">
			<img src="assets/images/test2.webp" alt="project" />
			<h2 class="project-topic">Project Card Maker</h2>
			<p class="project-description">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
				perspiciatis accusantium, minima unde tempore laborum nesciunt delectus
				amet.
			</p>
			<span class="tech-used-container">
				<p class="tech-used">React</p>
				<p class="tech-used">Express</p>
				<p class="tech-used">MongoDB</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
		<div class="project">
			<img src="assets/images/test3.jpg" alt="project" />
			<h2 class="project-topic">Portfolio</h2>
			<p class="project-description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum
				incidunt, blanditiis amet iste tempore explicabo illum.
			</p>
			<span class="tech-used-container">
				<p class="tech-used">TypeScript</p>
			</span>
			<button class="view-site"><img src={goArrow} alt="view site" /></button>
		</div>
	</div>
</div>

<style lang="scss">
	@use "sass:math";
	@import "../styles/variables";

	.show {
		h1,
		.project {
			translate: 0;
			opacity: 1;
		}
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
		gap: 1rem;
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 50%;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scroll-padding: 0.4rem;
		scrollbar-color: $background rgb(0 0 0 / 40%);
		scrollbar-width: thin;

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

	.project {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0px 0px 20px;
		min-height: 200px;
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
			width: 100%;
			max-height: 13rem;
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
		margin: 0px 15px;
	}

	.view-site {
		background-color: $primary;
		border: none;
		position: absolute;
		right: 5%;
		top: 45%;
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

	// @media (max-width: 878px) {
	//   .view-site {
	//     top: 41%;
	//   }
	// }

	@media (max-width: 700px) {
		.projects-container {
			grid-auto-columns: 100%;
		}
	}

	@media (max-width: 550px) {
		div {
			padding: 1rem;
		}
	}
</style>
