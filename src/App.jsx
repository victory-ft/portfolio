import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import About from "./routes/About";

import "./styles/main.scss";

function App() {
	const location = useLocation();
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const formatter = new Intl.DateTimeFormat("en-US", {
				timeZone: "Africa/Lagos", // Lagos is in WAT
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			});
			setTime(formatter.format(new Date()));
		};

		updateTime(); // Call initially
		const interval = setInterval(updateTime, 1000); // Update every second

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	const sharedProps = { time };

	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home {...sharedProps} />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</AnimatePresence>
			{/* <footer>Footer here</footer> */}
		</>
	);
}

export default App;
