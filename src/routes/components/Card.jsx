import React from "react";

const Card = ({ children, className }) => {
	return (
		<div className={`card ${className ? className : ""}`}>{children} </div>
	);
};

export default Card;
