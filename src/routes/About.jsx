import React from "react";
import { useNavigate } from "react-router";

import InfiniteScroller from "../components/InfiniteScroller";
import ContentSwiper from "../components/ContentSwiper"; // Updated import

import "../styles/about.scss";

const About = () => {
	const navigate = useNavigate();
	return (
		<div className="main-border">
			<div className="close-container">
				<button className="close-button" onClick={() => navigate(-1)}>
					<img src="/icons/x.svg" alt="close" />
				</button>
			</div>
			<div className="about-grid">
				<div className="who-am-i-card about-card">
					<h1 className="main-card-header who-header">Who am I?</h1>
					<p className="project-sub-header">My Story</p>
					<p className="about-text">
						My journey into coding started back in secondary school when I built
						websites for a game we used to play. That early experience sparked
						my love for development, leading me to study Software Engineering at
						university. For me, coding is all about the thrill of bringing ideas
						to life—transforming concepts into functional and beautiful digital
						experiences.
					</p>
					<p className="project-sub-header">What I Know</p>
					<p className="about-text">
						I build responsive websites and web apps using JavaScript, React,
						and Svelte, crafting sleek, user-friendly interfaces that feel great
						to use. On the app side, I work with Flutter to create fast,
						cross-platform experiences for both desktop and mobile.
					</p>
				</div>
				<div className="hobbies-card about-card">
					<ContentSwiper />
				</div>
				<div className="card about-stack">
					<h1 className="main-card-header space-header">My Tech Stack</h1>
					<InfiniteScroller />
				</div>
				<div className="about-contact-card about-card"></div>
			</div>
		</div>
	);
};

export default About;
{
	/* Now, I specialize in JavaScript, React, React
						Native, and other modern frameworks, building everything from sleek
						web applications to powerful mobile solutions. I'm currently working
						on a Flutter-based PC/Mac app for local video playback—think of it
						like Netflix, but for organizing and watching your own movies and TV
						shows. When I'm not coding, I'm probably reading a book, watching
						the same show for the 100th time, watching/playing football, or
						gaming. Let's connect and build something awesome! */
}
