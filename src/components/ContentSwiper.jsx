// ContentSwiper.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ContentSwiper = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [width, setWidth] = useState(0);
	const swiperRef = useRef(null);
	const controls = useAnimation();

	// Mixed content items - customize with your actual content
	const contentSections = [
		{
			title: "What I Do Best",
			icon: "/icons/code.svg", // Replace with your actual icon path
			content: (
				<div className="section-content">
					I specialize in creating elegant, user-focused solutions with clean,
					maintainable code, leveraging my skills in frontend development with
					React and modern JavaScript, responsive UI/UX design, cross-platform
					app development using Flutter, and strong problem-solving with a focus
					on technical architecture.
				</div>
			),
		},
		{
			title: "My Hobbies",
			icon: "/icons/hobbies.svg", // Replace with your actual icon path
			content: (
				<div className="section-content">
					When I'm not coding, you can find me reading novels, playing or
					watching football, diving into story-driven games, or rewatching my
					favourite shows for the hundredth time.
				</div>
			),
		},
	];

	useEffect(() => {
		if (swiperRef.current) {
			setWidth(swiperRef.current.offsetWidth);
		}

		// Update width on window resize
		const handleResize = () => {
			if (swiperRef.current) {
				setWidth(swiperRef.current.offsetWidth);
				// Update position after resize
				controls.start({ x: -currentIndex * swiperRef.current.offsetWidth });
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [currentIndex, controls]);

	const nextSlide = () => {
		const newIndex =
			currentIndex === contentSections.length - 1 ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
		controls.start({ x: -newIndex * width });
	};

	const prevSlide = () => {
		const newIndex =
			currentIndex === 0 ? contentSections.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
		controls.start({ x: -newIndex * width });
	};

	const handleDragEnd = (e, { offset, velocity }) => {
		const swipeThreshold = width / 4;

		if (offset.x < -swipeThreshold) {
			nextSlide();
		} else if (offset.x > swipeThreshold) {
			prevSlide();
		} else {
			// Return to current slide if swipe wasn't strong enough
			controls.start({ x: -currentIndex * width });
		}
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
		controls.start({ x: -index * width });
	};

	return (
		<div>
			<div className="swiper-viewport" ref={swiperRef}>
				<motion.div
					className="swiper-track"
					drag="x"
					dragConstraints={{
						left: -width * (contentSections.length - 1),
						right: 0,
					}}
					animate={controls}
					initial={{ x: 0 }}
					transition={{ type: "spring", damping: 20 }}
					onDragEnd={handleDragEnd}
				>
					{contentSections.map((section, index) => (
						<div className="swiper-slide" key={index}>
							<div className="content-card">
								<div className="content-header">
									<h2 className="project-sub-header">{section.title}</h2>
								</div>
								<div className="about-text">{section.content}</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>

			<div className="swiper-dots">
				{contentSections.map((_, index) => (
					<button
						key={index}
						className={`swiper-dot ${currentIndex === index ? "active" : ""}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ContentSwiper;
