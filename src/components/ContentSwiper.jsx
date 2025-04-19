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
					<p>
						I specialize in creating elegant, user-focused solutions with clean,
						maintainable code.
					</p>
					<ul>
						<li>Frontend development with React and modern JavaScript</li>
						<li>Responsive UI/UX design implementation</li>
						<li>Cross-platform app development with Flutter</li>
						<li>Problem-solving and technical architecture</li>
					</ul>
				</div>
			),
		},
		{
			title: "My Hobbies",
			icon: "/icons/hobbies.svg", // Replace with your actual icon path
			content: (
				<div className="section-content">
					<p>When I'm not coding, you can find me:</p>
					<ul>
						<li>Reading fiction and exploring new worlds</li>
						<li>Playing or watching football</li>
						<li>Gaming - especially story-driven adventures</li>
						<li>Rewatching my favorite shows for the 100th time</li>
					</ul>
				</div>
			),
		},
		{
			title: "Fun Facts",
			icon: "/icons/lightbulb.svg", // Replace with your actual icon path
			content: (
				<div className="section-content">
					<p>A few things about me that might surprise you:</p>
					<ul>
						<li>I built my first website at age 13</li>
						<li>
							I can recite dialogue from entire episodes of my favorite shows
						</li>
						<li>
							I once stayed up 36 hours straight to finish a coding project
						</li>
						<li>I collect vintage programming books</li>
					</ul>
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
		<div className="content-swiper-container">
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
									{section.icon && (
										<img src={section.icon} alt="" className="content-icon" />
									)}
									<h2 className="content-title">{section.title}</h2>
								</div>
								<div className="content-body">{section.content}</div>
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
