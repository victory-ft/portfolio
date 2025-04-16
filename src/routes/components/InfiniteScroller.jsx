import React from "react";
import { motion } from "framer-motion";

import typescript from "/public/logos/typescript.svg";
import css from "/public/logos/css.svg";
import flutter from "/public/logos/flutter.svg";
import js from "/public/logos/js.svg";
import nodejs from "/public/logos/node-js.svg";
import react from "/public/logos/react.svg";
import sass from "/public/logos/sass.svg";
import svelte from "/public/logos/svelte.svg";

const InfiniteScroller = () => {
	const logoData = [
		{ src: js, alt: "JavaScript logo" },
		{ src: typescript, alt: "TypeScript logo" },
		{ src: nodejs, alt: "Node.js logo" },
		{ src: css, alt: "CSS logo" },
		{ src: sass, alt: "Sass logo" },
		{ src: react, alt: "React logo" },
		{ src: svelte, alt: "Svelte logo" },
		{ src: flutter, alt: "Flutter logo" },
	];

	return (
		<div className="infinite-scroll-container overflow-hidden">
			<motion.div
				animate={{ x: "-49%" }}
				style={{ display: "flex" }}
				transition={{
					duration: 13,
					ease: "linear",
					repeat: Infinity,
				}}
				className="infinite-scroll"
			>
				{logoData.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="scroll-logo" />
				))}
				{logoData.map(({ src, alt }) => (
					<img
						key={`repeat-${alt}`}
						src={src}
						alt={alt}
						className="scroll-logo"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default InfiniteScroller;
