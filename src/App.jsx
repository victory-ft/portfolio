import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import "./styles/main.scss";
import About from "./routes/About";

function App() {
	const location = useLocation();
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const formatter = new Intl.DateTimeFormat("en-US", {
				timeZone: "Africa/Lagos", // Lagos is in WAT
				hour: "2-digit",
				minute: "2-digit",
				hour12: false,
			});
			setTime(formatter.format(new Date()));
		};

		updateTime(); // Call initially
		const interval = setInterval(updateTime, 1000); // Update every second

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	const sharedProps = { time };

	return (
		<div className="content">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
			<footer>Footer here</footer>
		</div>
	);
}

export default App;
