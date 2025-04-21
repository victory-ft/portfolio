import React, { useEffect } from "react";
import { Link } from "react-router";

import MainCard from "../components/MainCard";
import HalfCards from "../components/HalfCards";
import InfiniteScroller from "../components/InfiniteScroller";
import EndCard from "../components/EndCard";
import PageTransition from "../components/PageTransition";

import "../styles/home.scss";

const Home = ({ time }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="main-border">
			<PageTransition>
				<div className="content">
					<MainCard />

					<HalfCards time={time} />

					<div className="card">
						<h1 className="main-card-header space-header">My Tech Stack</h1>
						<InfiniteScroller />
					</div>

					<Link to="/projects" className="card clickable">
						<span>
							<h1 className="card-header">Projects</h1>
							<p className="card-text">Products I have worked on</p>
							<div className="arrow-container bottom-arrow">
								<img src="/icons/arrow.svg" alt="arrow" />
							</div>
						</span>
					</Link>

					<Link to="/about" className="card span-card clickable">
						<span>
							<h1 className="card-header">About Me</h1>
							<p className="card-text">
								Passionate about crafting visually stunning and highly
								functional digital experiences
							</p>
							<div className="arrow-container bottom-arrow">
								<img src="/icons/arrow.svg" alt="arrow" />
							</div>
						</span>
					</Link>

					<div className="card contact-card">
						<img
							src="/icons/sparkle.svg"
							alt="sparkle"
							className="sparkle-icon"
						/>
						<p className="card-text">Contact Me</p>
						<p className="main-card-sub sub-2">Let's Make Magic Happen!</p>
						<a href="" className="mail-btn">
							<img src="/icons/email.svg" alt="email" />
							Send Email
						</a>
					</div>

					<Link to="" className="card clickable">
						<span>
							<h1 className="card-header">Resume</h1>
							<p className="card-text">My Qualifications & Experience</p>
							<div className="arrow-container bottom-arrow">
								<img src="/icons/arrow.svg" alt="arrow" />
							</div>
						</span>
					</Link>

					<EndCard />
				</div>
			</PageTransition>
		</div>
	);
};

export default Home;
