import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

import PageTransition from "../components/PageTransition";

import "../styles/projects.scss";

const Projects = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="main-border">
			<PageTransition>
				<div className="projects-container">
					<div className="close-container">
						<button
							className="close-button"
							onClick={() => navigate(-1)}
							aria-label="Close"
						>
							<img src="/icons/x.svg" alt="close" />
						</button>
					</div>

					<div className="projects">
						<Link to="/projects/darktan" className="project">
							<span>
								<div className="project-img-container project-img-1">
									<img
										src="/images/darktan-min.png"
										alt="darktan-properties"
										className="project-img "
									/>
								</div>

								<div className="project-text">
									<h2 className="main-card-header project-header">
										Darktan Properties
									</h2>
									<p className="project-sub-header">Web App</p>
								</div>
							</span>
						</Link>
						<Link to="" className="project">
							<span>
								<div className="project-img-container project-img-2">
									<img
										src="/images/kangol-min.png"
										alt="kangol-redesign"
										className="project-img"
									/>
								</div>
								<div className="project-text">
									<h2 className="main-card-header project-header">
										Kangol Store Redesign
									</h2>
									<p className="project-sub-header">Website</p>
								</div>
							</span>
						</Link>
						<Link to="" className="project">
							<span>
								<div className="project-img-container project-img-3">
									<img
										src="/images/otmovies-min.png"
										alt="otmovies"
										className="project-img"
									/>
								</div>
								<div className="project-text">
									<h2 className="main-card-header project-header">OTMovies</h2>
									<p className="project-sub-header">Web App</p>
								</div>
							</span>
						</Link>
					</div>
				</div>
			</PageTransition>
		</div>
	);
};

export default Projects;
