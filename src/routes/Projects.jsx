import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import MainCard from "../components/MainCard";
import InfiniteScroller from "../components/InfiniteScroller";
import OneHalfSpanCard from "../components/OneHalfSpanCard";
import EndCard from "../components/EndCard";

const Projects = () => {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <div className="content"></div>;
};

export default Projects;
