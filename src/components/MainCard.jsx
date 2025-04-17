import React from "react";

import "../styles/card.scss";

const MainCard = () => {
	return (
		<div className="card main-card">
			<div className="top-half-card">
				<img src="/images/portrait.jpg" alt="portrait" />
				<div>
					<h1 className="main-card-header">Hi, I'm Victory</h1>
					<p className="main-card-sub">
						A <span>Software Engineer </span>creating beautiful experiences
					</p>
				</div>
			</div>
			<div className="bottom-half-card">
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src="/icons/github.svg" alt="github" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src="/icons/linkedin.svg" alt="linkedin" />
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<img src="/icons/instagram.svg" alt="instagram" />
				</a>
				{/* <a href="http://" target="_blank" rel="noopener noreferrer">
					<img src="/icons/email.svg" alt="email" />
				</a> */}
			</div>
		</div>
	);
};

export default MainCard;
