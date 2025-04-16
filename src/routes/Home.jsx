import React from "react";
import MainCard from "./components/MainCard";
import Card from "./components/Card";
import HalfCards from "./components/HalfCards";

const Home = ({ time }) => {
	return (
		<div className="content">
			<MainCard />
			{/* <Card /> */}
			<HalfCards time={time} />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			{/* <Card />
			<Card />
			<Card /> */}
			{/* <MainWidget />
			<MainWidget />
			<MainWidget />
			<MainWidget /> */}
		</div>
	);
};

export default Home;
