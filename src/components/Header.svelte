<script lang="ts">
	import IntersectionObserver from "svelte-intersection-observer";
	import { theme, section } from "../stores/Settings";
	import sun from "../assets/icons/sun.svg";
	import moon from "../assets/icons/moon.svg";
	import contact from "../assets/icons/contacts-book.svg";
	import briefcase from "../assets/icons/briefcase.svg";
	import aboutme from "../assets/icons/user.svg";
	import home from "../assets/icons/home.svg";
	let element, intersecting;
</script>

<IntersectionObserver
	{element}
	bind:intersecting
	rootMargin={"20px 0px 0px 0px"}
>
	<div bind:this={element} />
</IntersectionObserver>

<div class="mobile-btn-container">
	<button
		on:click={() => {
			$theme === "light" ? theme.set("dark") : theme.set("light");
		}}
		class="mobile-btn"
		><img
			src={$theme === "light" ? moon : sun}
			class="theme-icon mb"
			alt=""
		/></button
	>
</div>

<nav
	class={`${$theme === "dark" ? "dark" : ""} ${
		!intersecting ? "sticking" : ""
	}`}
>
	<h3 class="nav-header">VICTORY.</h3>
	<ul>
		<li>
			<a href="#home" class={$section.section === "home" && "active"}>Home</a>
		</li>
		<li>
			<a href="#about" class={$section.section === "about" && "active"}
				>About Me</a
			>
		</li>
		<li>
			<a href="#projects" class={$section.section === "projects" && "active"}
				>Projects</a
			>
		</li>
		<li>
			<a href="#contact" class={$section.section === "contact" && "active"}
				>Contact</a
			>
		</li>
		<button
			on:click={() => {
				$theme === "light" ? theme.set("dark") : theme.set("light");
			}}
			><img
				src={$theme === "light" ? moon : sun}
				class="theme-icon"
				alt=""
			/></button
		>
	</ul>
</nav>

<div class={$theme === "dark" ? "dark mobile-nav" : "mobile-nav"}>
	<a href="#home" class={$section.section === "home" && "active"}>
		<img src={home} alt="home" /></a
	>
	<a href="#about" class={$section.section === "about" && "active"}
		><img src={aboutme} alt="about" /></a
	>

	<a href="#projects" class={$section.section === "projects" && "active"}
		><img src={briefcase} alt="briefcase" /></a
	>

	<a href="#contact" class={$section.section === "contact" && "active"}
		><img src={contact} alt="contact" /></a
	>
</div>

<style lang="scss">
	@import "../styles/variables";

	nav {
		z-index: 99;
		position: sticky;
		top: 0;
		background-color: $background;
		padding: 5px 15rem;
		display: flex;
		transition:
			background-color 0.5s ease-in-out,
			box-shadow 0.5s ease-in-out;

		&.sticking {
			box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
		}

		&.dark {
			background-color: $background-dark;

			&.sticking {
				box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.3);
			}

			& a {
				color: $text-dark;
				&:hover,
				&.active {
					color: $primary;
				}
			}
		}

		ul {
			margin-left: auto;
			display: flex;
			list-style: none;
		}

		li {
			margin: 0 30px;
		}

		button {
			background: none;
			border: none;
			margin-left: 10px;
			padding: 0;
		}
	}

	a {
		color: $text-secondary;
		text-decoration: none;
		font-weight: 700;
		font-size: 1rem;

		&:hover,
		&.active {
			color: $primary;
		}
	}

	.theme-icon {
		width: 1.3rem;
		height: 1.3rem;

		&.mb {
			width: 2rem;
			height: 2rem;
		}
	}

	.nav-header {
		font-family: "Chivo";
		background: $text-gradient;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		font-size: 1.2rem;
		margin: 15px 0;
	}

	.mobile-btn-container {
		z-index: 999;
		position: sticky;
		width: 100%;
		top: 0px;
	}

	.mobile-btn {
		position: absolute;
		background: none;
		border: none;
		padding: 10px;
		right: 0px;
		display: none;
	}

	.mobile-nav {
		display: none;
		justify-content: space-evenly;
		align-items: center;
		height: 60px;
		width: 80%;
		background-color: rgba(211, 211, 211, 0.5);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		left: 0;
		right: 0;
		margin: auto;
		position: fixed;
		bottom: 2%;
		z-index: 10;
		padding: 0 30px;
		border-radius: 40px;

		img {
			height: 2rem;
		}

		&.dark {
			background-color: rgba(10, 15, 12, 0.5);
		}
	}

	@media (max-width: 1150px) {
		nav {
			display: none;
		}

		.mobile-btn {
			display: block;
		}

		.mobile-nav {
			display: flex;
		}
	}
</style>
