import React from "react";
import MainCard from "./components/MainCard";
import Card from "./components/Card";
import HalfCards from "./components/HalfCards";
import SpanCard from "./components/SpanCard";
import InfiniteScroller from "./components/InfiniteScroller";

import "../styles/home.scss";
import OneHalfSpanCard from "./components/OneHalfSpanCard";
import EndCard from "./components/EndCard";

const Home = ({ time }) => {
	return (
		<div className="content">
			<MainCard />

			<HalfCards time={time} />

			<Card>
				<h1 className="main-card-header space-header">My Tech Stack</h1>
				<InfiniteScroller />
			</Card>

			<Card>
				<h1 className="card-header">Projects</h1>
				<p className="card-text">Products I have worked on</p>
				<div className="arrow-container bottom-arrow">
					<img src="/icons/arrow.svg" alt="arrow" />
				</div>
			</Card>

			<SpanCard>
				<h1 className="card-header">About Me</h1>
				<p className="card-text">
					Passionate about crafting visually stunning and highly functional
					digital experiences
				</p>
				<div className="arrow-container bottom-arrow">
					<img src="/icons/arrow.svg" alt="arrow" />
				</div>
			</SpanCard>

			<OneHalfSpanCard />

			<Card className="contact-card">
				<img src="/icons/sparkle.svg" alt="sparkle" className="sparkle-icon" />
				<p className="card-text">Contact Me</p>
				<p className="main-card-sub sub-2">Let's Make Magic Happen!</p>
				<button className="mail-btn">
					<img src="/icons/email.svg" alt="email" />
					Send Email
				</button>
			</Card>

			<EndCard />
		</div>
	);
};

export default Home;
