import React from "react";
import { useNavigate } from "react-router";

const OneHalfSpanCard = () => {
	const navigate = useNavigate();

	return (
		<div className="one-half-span-card-container">
			<div className="one-half-span-card clickable">
				<h1 className="main-card-header">Blog</h1>
				<p className="main-card-sub">Documenting my thoughts, occasionally.</p>
				<div className="arrow-container small top-arrow">
					<img src="/icons/arrow.svg" alt="arrow" />
				</div>
			</div>
			<div className="one-half-span-card">
				{/* <h1 className="card-header">Something's coming</h1> */}
			</div>
		</div>
	);
};

export default OneHalfSpanCard;
