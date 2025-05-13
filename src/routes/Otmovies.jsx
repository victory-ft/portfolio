import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router";

export const Otmovies = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();
	return (
		<div className="content-border">
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
									OTMovies
								</h2>
								<p className="project-sub-header">Website</p>
							</div>
						</div>
						<div className="project-details">
							<div className="project-details-card project-details-one">
								<p className="project-sub-header details">Company</p>
								<p className="about-text">Personal Project</p>

								<p className="project-sub-header details">My Role</p>
								<p className="about-text">Front-end Developer</p>

								<p className="project-sub-header details">Tools</p>
								<p className="about-text tools">Typescript</p>
								<p className="about-text tools">React</p>
								<p className="about-text tools">TMDB</p>
								<p className="about-text tools">Vercel</p>

								<p className="project-sub-header details">Timeline</p>
								<p className="about-text">February 2024</p>
							</div>
							<div className="project-details-card project-details-two">
								<p className="project-sub-header details">Overview</p>
								<p className="about-text">
									A movie and TV series information application built with React
									and TypeScript, fetching data from the TMDB API.
								</p>
								<p className="project-sub-header details">Description</p>
								<p className="about-text">
									This project is a dynamic application for exploring movie and
									TV series information, developed using React with TypeScript.
									It utilizes The Movie Database (TMDB) API to fetch
									comprehensive data, allowing users to browse, search for, and
									view details like plot summaries, cast information, ratings,
									and trailers. Built with TypeScript for improved code quality
									and maintainability, this project demonstrates my ability to
									create responsive, data-driven front-end applications and
									effectively integrate with external APIs.
								</p>
								<a
									href="https://ot-movies.vercel.app/"
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
							<img src="/images/otmovies-2-min.jpg" alt="darktan" />
							<img src="/images/otmovies-min.png" alt="darktan" />
						</div>
					</div>
				</PageTransition>
			</div>
		</div>
	);
};
