import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router";

export const Kangol = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();
	return (
		<div className="main-border">
			<PageTransition>
				<div className="project-container">
					<div className="close-container">
						<button
							className="close-button"
							onClick={() => navigate(-1)}
							aria-label="Close"
						>
							<img src="/icons/x.svg" alt="close" />
						</button>
					</div>
					<div className="details-header-container">
						<div className="project-text">
							<h2 className="main-card-header project-details-header">
								Kangol Store Redesign
							</h2>
							<p className="project-sub-header">Website</p>
						</div>
					</div>
					<div className="project-details">
						<div className="project-details-card project-details-one">
							<p className="project-sub-header details">Company</p>
							<p className="about-text">Personal Project</p>

							<p className="project-sub-header details">My Role</p>
							<p className="about-text">Fullstack Developer</p>

							<p className="project-sub-header details">Tools</p>
							<p className="about-text tools">NextJS</p>
							<p className="about-text tools">MongoDB</p>
							<p className="about-text tools">Sass</p>
							<p className="about-text tools">Vercel</p>

							<p className="project-sub-header details">Timeline</p>
							<p className="about-text">December 2023</p>
						</div>
						<div className="project-details-card project-details-two">
							<p className="project-sub-header details">Overview</p>
							<p className="about-text">
								Demonstrative redesign of the Kangol online store, developed
								using Next.js and MongoDB.
							</p>
							<p className="project-sub-header details">Description</p>
							<p className="about-text">
								This personal project is a demonstrative redesign of the Kangol
								e-commerce website, built to showcase my skills in modern web
								development. Leveraging the Next.js framework for both frontend
								rendering and backend API routes, alongside MongoDB as the
								database for managing product data and potentially user
								information, the project demonstrates the implementation of a
								visually updated and functionally improved online shopping
								experience. It serves as a portfolio piece highlighting my
								ability to develop full-stack applications focused on user
								interfaces and data management.
							</p>
							<a
								href="https://kangol-store.vercel.app"
								className="clickable"
								target="_blank"
							>
								<div className="arrow-container arrow-with-text">
									<p className="about-text">Visit Website</p>
									<img src="/icons/arrow.svg" alt="arrow" />
								</div>
							</a>
							<br />
							<br />
							<br />
						</div>
					</div>
					<div className="project-details-image">
						<img src="/images/kangol-2-min.jpg" alt="darktan" />
						<img src="/images/kangol-min.png" alt="darktan" />
					</div>
				</div>
			</PageTransition>
		</div>
	);
};
