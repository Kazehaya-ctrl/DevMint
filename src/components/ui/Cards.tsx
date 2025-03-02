import "./css/TwinkleStar.css";
import { memo } from "react";
import { motion } from "framer-motion";

// Move data outside component to prevent re-creation on each render
const projects = [
	{
		title: "Roulocal",
		description:
			"A smart platform for car rentals and carpooling with real-time tracking, AI chat support, and secure payments. Drive or ride, hassle-free! 🚗💨",
		tech: ["Flutter", "App Development", "React", "Web Development"],
		image: "./roulocal_logo.png",
	},
	{
		title: "Virat",
		description:
			"A feature-rich grocery delivery app offering seamless product search, cart management, order placement, and real-time delivery tracking.",
		tech: ["Flutter", "Dart", "SQL", "Firebase", "Firestore", "Rest API"],
		image: "./Virat.png",
	},
	{
		title: "Vehicle Manager",
		description:
			"An all-in-one app for logistics businesses, enabling truck & vehicle owners to manage trips, documents, payments, and expenses.",
		tech: ["Flutter", "Dart", "SQL", "Rest API", "Firebase", "Firestore"],
		image: "./VM.png",
	},
];

// Memoize project card to prevent unnecessary re-renders
const ProjectCard = memo(({ project }: any) => (
	<motion.div
		className="rounded-2xl border border-white/20 shadow-lg bg-black/10 backdrop-blur-lg 
              text-white flex flex-col items-center relative overflow-hidden starry-background"
		whileHover={{ scale: 1.03 }}
		transition={{ duration: 0.3 }}
	>
		{/* Star Background */}
		<div className="absolute inset-0 overflow-hidden">
			<div className="stars-small"></div>
			<div className="stars-medium"></div>
			<div className="stars-large"></div>
		</div>

		{/* Content with higher z-index */}
		<div className="relative z-10 flex flex-col items-center w-full p-4">
			<img
				src={project.image}
				alt={project.title}
				className="w-full h-48 object-cover rounded-lg shadow-md"
				loading="lazy" // Lazy load images
			/>
			<h2 className="text-xl font-bold mt-3">{project.title}</h2>
			<p className="text-gray-300 text-center mt-2 text-sm">
				{project.description}
			</p>
			<div className="flex flex-wrap gap-2 mt-3 justify-center">
				{project.tech.map((tech: any, i: any) => (
					<span
						key={i}
						className="px-2 py-1 text-xs bg-white/20 rounded-lg"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	</motion.div>
));

ProjectCard.displayName = "ProjectCard";

export default function ProjectCarousel() {
	return (
		<div className="relative mt-10 w-full max-w-6xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
}
