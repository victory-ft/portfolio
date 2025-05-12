import { useState, useEffect } from "react";

const HalfCards = ({ time }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedMode = localStorage.getItem("darkMode");
		return savedMode ? JSON.parse(savedMode) : false;
	});

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}

		localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setIsDarkMode((prev) => !prev);
	};

	return (
		<div className="half-card-container">
			<div className="half-card">
				<p className="time">{time} WAT</p>
			</div>
			<div className="half-card">
				<div className="daynight">
					<label htmlFor="checkbox">
						<input
							type="checkbox"
							name=""
							id="checkbox"
							checked={isDarkMode}
							onChange={toggleDarkMode}
						/>
						<div className="toggle">
							<div className="cloud"></div>
							<div className="star"></div>
							<div className="sea"></div>
							<div className="mountains"></div>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default HalfCards;
