import React from "react";
// import controller from "/public/hobbies/controller.svg";
// import football from "/public/hobbies/football.svg";
// import headphones from "/public/hobbies/headphones.svg";
// import novel from "/public/hobbies/novel.svg";

const OneHalfSpanCard = () => {
	return (
		<div className="one-half-span-card-container">
			<div className="one-half-span-card">
				<h1 className="main-card-header">Blog</h1>
				<p className="main-card-sub">Documenting my thoughts, occasionally.</p>
				<div className="arrow-container small top-arrow">
					<img src="/icons/arrow.svg" alt="arrow" />
				</div>
			</div>
			<div className="one-half-span-card">
				<h1 className="card-header">Something's coming</h1>
				{/* <div className="hobby-list">
					<img src={controller} alt="controller" />
					<img src={football} alt="football" />
					<img src={headphones} alt="headphones" />
					<img src={novel} alt="novel" />
				</div> */}
			</div>
		</div>
	);
};

export default OneHalfSpanCard;
