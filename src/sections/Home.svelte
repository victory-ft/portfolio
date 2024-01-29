<script lang="ts">
	import github from "../assets/icons/github.svg";
	import linkedin from "../assets/icons/linkedin.svg";
	import insta from "../assets/icons/instagram.svg";
	import { onMount } from "svelte";
	import { section } from "../stores/Settings";

	let homeSection,
		isIntersecting: Boolean = false;

	onMount(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				isIntersecting = true;
				$section.section = "home";
			}
		});
		observer.observe(homeSection);
		return () => observer.disconnect();
	});
</script>

<section
	id="home"
	bind:this={homeSection}
	class={isIntersecting === true && "show"}
>
	<div class="section-content-half">
		<h1 class="main-header">VICTORY FATOYINBO</h1>
		<p class="intro-text">
			A web & mobile developer, passionate about creating stunning products using
			JavaScript, React, React Native and other frameworks, with experience in using Node, Express &
			MongoDB to create fast and efficient backend applications.
		</p>
	</div>
	<div class="section-content-half portrait-half">
		<img
			src="assets/images/portrait.jpg"
			alt="portrait"
			class="portrait-image"
		/>
		<div class="socials">
			<img src={linkedin} alt="linkedin" class="social" />
			<img src={github} alt="github" class="social" />
			<img src={insta} alt="instagram" class="social" />
		</div>
	</div>
</section>

<style lang="scss">
	@use "sass:math";
	@import "../styles/variables";

	.show {
		.main-header,
		.intro-text,
		.portrait-image,
		.socials .social {
			translate: 0;
			opacity: 1;
		}
	}

	.main-header {
		background: $text-gradient;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		translate: -40%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
	}

	.intro-text {
		width: 70%;
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.2s;
	}

	.section-content-half {
		position: relative;
	}

	.portrait-image {
		height: 18rem;
		width: 18rem;
		border-radius: 5px;
		translate: 30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.4s;
	}

	.socials {
		position: absolute;
		width: 100%;
		bottom: -40px;
		display: flex;
		justify-content: end;

		.social {
			height: 2.2rem;
			margin-left: 5px;
			translate: 30%;
			opacity: 0;
			transition:
				translate 0.8s,
				opacity 0.8s;

			@for $i from 1 through 3 {
				&:nth-child(#{$i}) {
					transition-delay: 0.4s * $i;
				}
			}
		}
	}

	@media (max-width: 980px) {
		section {
			padding-bottom: 40px;
			overflow-x: hidden;
		}

		.main-header {
			text-align: center;
		}

		.intro-text {
			width: 100%;
		}
	}
</style>
