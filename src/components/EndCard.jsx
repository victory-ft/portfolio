import React from "react";

const EndCard = () => {
	return (
		<div className="end-card-container">
			<button className="end-card end-card-one clickable">
				<span>
					<h1 className="main-card-header">Blog</h1>
					<p className="main-card-sub">
						Documenting my thoughts, occasionally.
					</p>
					<div className="arrow-container top-arrow">
						<img src="/icons/arrow.svg" alt="arrow" />
					</div>
				</span>
			</button>
			<div className="end-card end-card-two">
				<footer>&copy; 2025 · Created with ♥️ by Victory.</footer>
			</div>
		</div>
	);
};

export default EndCard;
