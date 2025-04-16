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
			</Card>

			<SpanCard>
				<h1 className="card-header">About Me</h1>
			</SpanCard>

			<OneHalfSpanCard />

			<Card className="contact-card">Contact Me</Card>

			<EndCard />
		</div>
	);
};

export default Home;
