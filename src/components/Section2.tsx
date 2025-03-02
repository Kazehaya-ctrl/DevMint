import { motion } from "framer-motion";
import { Cover } from "./ui/Cover";
// import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./Textgenerator";
import { CardSpotlight } from "./ui/CardSpotlight";

const features = [
	{
		id: 1,
		title: "Ideation & Strategy",
		description: "We work with you to turn ideas into actionable plans.",
	},
	{
		id: 2,
		title: "Creative Design",
		description:
			"Our designs are tailored to your audience for maximum impact.",
	},
	{
		id: 3,
		title: "Development & Execution",
		description: "We build scalable and robust applications.",
	},
	{
		id: 4,
		title: "Support & Maintenance",
		description:
			"We provide ongoing support to ensure your project remains secure and optimized.",
	},
	{
		id: 5,
		title: "Data-Driven Insights",
		description:
			"We analyze key metrics to ensure your project evolves with market demands.",
	},
	{
		id: 6,
		title: "User-Centric Approach",
		description:
			"We prioritize end-user experience to deliver intuitive and impactful solutions.",
	},
	{
		id: 7,
		title: "Collaborative Partnerships",
		description:
			"We build strong relationships with clients to ensure mutual success.",
	},
	{
		id: 8,
		title: "Seamless Launch",
		description:
			"From deployment to market entry, we ensure your launch is a success.",
	},
	{
		id: 9,
		title: "Continuous Innovation",
		description: "We constantly innovate to stay ahead of industry trends.",
	},
];

export function Section2() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className="w-full text-white py-16 flex flex-col items-center bg-black backdrop-blur-lg bg-opacity-30 border border-white/10 shadow-xl px-4"
		>
			{/* Spotlight Effect */}
			{/* <Spotlight /> */}

			{/* Title */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0 }}
				whileHover={{ scale: 1.07 }}
				className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 animate-slidein [--slidein-delay:300ms] transition-transform text-center"
			>
				Why Choose Us?
			</motion.h1>

			{/* Subtitle */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.4 }}
				className="p-2 text-lg shadow-md text-center"
			>
				<Cover>
					<TextGenerateEffect
						words={
							"Take a look at our approach and discover why we stand out."
						}
					/>
				</Cover>
			</motion.div>

			{/* Feature Boxes (Single Column on Mobile, Grid on Desktop) */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.2 },
					},
				}}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 max-w-7xl mt-8 md:mt-10 animate-slidein [--slidein-delay:700ms]"
			>
				{features.map((feature) => (
					<CardSpotlight key={feature.id}>
						<div className="text-center">
							<h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-4">
								{feature.title}
							</h2>
							<p className="text-base md:text-lg">
								{feature.description}
							</p>
						</div>
					</CardSpotlight>
				))}
			</motion.div>
		</motion.div>
	);
}
