<script lang="ts">
	import { onMount } from "svelte";
	import { section, theme } from "../stores/Settings";
	import twitter from "../assets/icons/twitter-x.svg";
	import telegram from "../assets/icons/telegram.svg";
	import email from "../assets/icons/mail-send.svg";
	import whatsapp from "../assets/icons/whatsapp.svg";

	let contact,
		isIntersecting: Boolean = false;
	let container = document.getElementById("contact");

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isIntersecting = true;
					$section.section = "contact";
				}
			},
			{
				root: container,
				rootMargin: "-50%",
			},
		);
		observer.observe(contact);
		return () => observer.disconnect();
	});
</script>

<section
	id="contact"
	class={`skills-section ${$theme === "dark" ? "dark" : ""} ${
		isIntersecting && "show"
	}`}
	bind:this={contact}
>
	<div class="section-content-half fist">
		<h1>Contact Me</h1>

		<p class="intro-text">
			I read my emails, so you can send your message and I'll make sure to
			respond to it as soon as I can!
		</p>
		<div class="message-links">
			<a href="mailto:vicfatoyinbo@gmail.com"><img src={email} alt="email" /></a
			>
			<a href="https://wa.me/2348100715080"
				><img src={whatsapp} alt="whatsapp" /></a
			>
			<a href="https://t.me/oluwatayo_x"
				><img src={telegram} alt="telegram" /></a
			>
			<a href="https://twitter.com/messages/compose?recipient_id=3369832894">
				<img src={twitter} alt="twitter" /></a
			>
		</div>
	</div>

	<div class="section-content-half two">
		<form class="contact-form">
			<div class="input-box">
				<input type="text" class="contact-input" name="firstname" required />
				<label for="firstname">First Name</label>
			</div>
			<div class="input-box">
				<input
					type="name"
					class="contact-input"
					name="lastname"
					placeholder=" "
					required
				/>
				<label for="lastname">Last Name</label>
			</div>
			<div class="input-box">
				<input
					type="email"
					class="contact-input"
					name="email"
					placeholder=" "
					required
				/>
				<label for="email">Email</label>
			</div>
			<div class="input-box">
				<input type="text" class="contact-input" name="subject" required />
				<label for="subject">Subject</label>
			</div>
			<div class="input-box">
				<textarea
					cols="30"
					rows="10"
					class="contact-input"
					name="message"
					required
				/>
				<label for="message">Message</label>
			</div>
			<button type="submit">Send Message</button>
		</form>
	</div>
</section>

<style lang="scss">
	@import "../styles/variables";
	section {
		overflow: hidden;
	}

	.show {
		h1,
		.intro-text,
		.contact-form,
		.message-links {
			translate: 0;
			opacity: 1;
		}
	}

	.fist {
		flex: 33%;
	}

	h1 {
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		margin: 0;
	}

	.intro-text {
		width: 80%;
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.2s;
	}

	.message-links {
		display: flex;
		translate: -30%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.5s;
		img {
			height: 2rem;
			margin-right: 10px;
		}
	}

	.contact-form {
		background-color: $secondary;
		padding: 40px 30px;
		border-radius: 10px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		// width: 100%;
		transition: background-color 0.4s ease-in-out;
		translate: 20%;
		opacity: 0;
		transition:
			translate 0.8s,
			opacity 0.8s;
		transition-delay: 0.4s;
		box-shadow:
			rgba(100, 84, 120, 0.4) 5px 5px,
			rgba(100, 84, 120, 0.3) 10px 10px,
			rgba(100, 84, 120, 0.2) 15px 15px,
			rgba(100, 84, 120, 0.1) 20px 20px,
			rgba(100, 84, 120, 0.05) 25px 25px;
	}

	.input-box {
		position: relative;
		&:nth-child(3),
		&:nth-child(4),
		&:nth-child(5) {
			grid-column: span 2;
		}
	}

	label {
		position: absolute;
		top: 3px;
		left: 0;
		padding: 12px 10px;
		pointer-events: none;
		font-size: 1rem;
		color: rgba(24, 26, 28, 0.6);
		transition: 0.4s;
	}

	.contact-input {
		width: calc(100% - 1.5rem);
		padding: 15px 10px;
		background-color: transparent;
		border: 2px solid rgba($color: $primary-muted-dark, $alpha: 0.4);
		border-radius: 5px;
		color: $text;
		outline: none;
		font-size: 1rem;
		font-family: "Bai";
		&:valid ~ label,
		&:focus ~ label {
			color: $accent-dark;
			translate: 10px -7px;
			font-size: 0.86rem;
			padding: 0 10px;
			background-color: $secondary;
		}
	}

	input[type="email"] {
		&:not(:placeholder-shown) ~ label {
			color: $accent-dark;
			translate: 10px -7px;
			font-size: 0.86rem;
			padding: 0 10px;
			background-color: $secondary;
		}
	}

	button {
		font-family: "Bai";
		padding: 15px 10px;
		border-radius: 5px;
		background-color: $accent-dark;
		color: #f0f0f0;
		border: 2px solid $accent-dark;
	}

	.dark {
		.contact-form {
			background-color: $primary-muted-dark;
		}

		.contact-input {
			color: $text-dark;
			border-color: rgba($color: $secondary, $alpha: 0.3);

			&:valid ~ label,
			&:focus ~ label {
				color: $accent-dark;
				background-color: $primary-muted-dark;
			}
		}

		label {
			color: rgba(220, 222, 220, 0.7);
		}

		input[type="email"] {
			&:not(:placeholder-shown) ~ label {
				color: $accent-dark;
				background-color: $primary-muted-dark;
			}
		}
	}

	@media (max-width: 1260px) {
		section {
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.section-content-half.two {
			padding-bottom: 70px;
		}

		.fist h1 {
			text-align: center;
		}

		.intro-text {
			margin: 10px auto;
			overflow: hidden;
		}

		.message-links {
			overflow: hidden;
			width: fit-content;
			margin: 10px auto;
		}

		.contact-form {
			margin: 10px 10px 20px;
		}
	}
</style>
