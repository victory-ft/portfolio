import { useState, useEffect } from "react";

const HalfCards = ({ time }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [isDarkMode]);

	// Toggle the dark mode state
	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className="half-card-container">
			<div className="half-card">
				<p className="time">{time} WAT</p>
			</div>
			<div className="half-card">
				<div class="daynight">
					<label for="checkbox">
						<input
							type="checkbox"
							name=""
							id="checkbox"
							checked={isDarkMode}
							onChange={toggleDarkMode}
						/>
						<div class="toggle">
							<div class="cloud"></div>
							<div class="star"></div>
							<div class="sea"></div>
							<div class="mountains"></div>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
};

export default HalfCards;
