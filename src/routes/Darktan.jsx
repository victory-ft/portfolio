import React from "react";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router";

const Darktan = () => {
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
								Darktan Properties
							</h2>
							<p className="project-sub-header">Web App</p>
						</div>
					</div>
					<div className="project-details">
						<div className="project-details-card project-details-one">
							<p className="project-sub-header details">Company</p>
							<p className="about-text">Darktan Properties Solutions</p>

							<p className="project-sub-header details">My Role</p>
							<p className="about-text">Front-End Developer</p>

							<p className="project-sub-header details">Tools</p>
							<p className="about-text tools">React</p>
							<p className="about-text tools">Axios</p>
							<p className="about-text tools">Sass</p>
							<p className="about-text tools">Vercel</p>

							<p className="project-sub-header details">Timeline</p>
							<p className="about-text">March 2024 - October 2024</p>
						</div>
						<div className="project-details-card project-details-two"></div>
					</div>
				</div>
			</PageTransition>
		</div>
	);
};

export default Darktan;
