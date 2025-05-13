import React, { useEffect } from "react";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router";

const Darktan = () => {
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
							<div className="project-details-card project-details-two">
								<p className="project-sub-header details">Overview</p>
								<p className="about-text">
									An all-in-one website for landlords and tenants to simplify
									property management.
								</p>
								<p className="project-sub-header details">Description</p>
								<p className="about-text">
									Darktan Property Solutions is a comprehensive digital platform
									that streamlines property management for landlords, tenants,
									and real estate professionals through intuitive, user-focused
									tools. The application combines multi-property dashboards,
									simplified payment systems, document sharing, and listing
									optimization capabilities to transform traditional property
									management into an efficient, modern experience.
								</p>

								<a
									href="https://www.darktanprop.com/"
									className="visit-btn"
									target="_blank"
								>
									<div className="">
										<p className="about-text">Visit Website</p>
										<img src="/icons/arrow.svg" alt="arrow" />
									</div>
								</a>
							</div>
						</div>
						<div className="project-details-image">
							<img src="/images/darktan-2-min.jpg" alt="darktan" />
							<img src="/images/darktan-min.png" alt="darktan" />
						</div>
					</div>
				</PageTransition>
			</div>
		</div>
	);
};

export default Darktan;
