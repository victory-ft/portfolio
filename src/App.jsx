import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import About from "./routes/About";

import "./styles/main.scss";
import Projects from "./routes/Projects";
import PageTransition from "./components/PageTransition";
import Darktan from "./routes/Darktan";
import { Kangol } from "./routes/Kangol";
import { Otmovies } from "./routes/Otmovies";

function App() {
	const location = useLocation();
	const [time, setTime] = useState("");

	useEffect(() => {
		if (localStorage.getItem("darkMode") === null) {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;
			if (prefersDark) {
				document.body.classList.add("dark");
				localStorage.setItem("darkMode", "true");
			}
		} else {
			const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
			if (isDarkMode) {
				document.body.classList.add("dark");
			}
		}
	}, []);

	useEffect(() => {
		const updateTime = () => {
			const formatter = new Intl.DateTimeFormat("en-US", {
				timeZone: "Africa/Lagos",
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			});
			setTime(formatter.format(new Date()));
		};

		updateTime();
		const interval = setInterval(updateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	const sharedProps = { time };

	return (
		<>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home {...sharedProps} />} />
					<Route
						path="/about"
						element={
							<PageTransition>
								<About />
							</PageTransition>
						}
					/>
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/darktan" element={<Darktan />} />
					<Route path="/projects/kangol" element={<Kangol />} />
					<Route path="/projects/otmovies" element={<Otmovies />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
