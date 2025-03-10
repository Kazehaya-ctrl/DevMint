import { motion } from "framer-motion";
// import ProjectCarousel from "./ui/Cards";
import { Cover } from "./ui/Cover";
import { ColourfulText } from "./ui/ColorfulEffect";
import { lazy, Suspense } from "react";

const ProjectCarosel = lazy(() => import("./ui/Cards"));

export default function Section4() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
			className="w-full min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
		>
			{/* Grid Background with Light Beams */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				className="absolute inset-0 w-full h-full pointer-events-none"
			>
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
				<div className="absolute inset-0">
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.2, 0.3, 0.2],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="absolute -left-[10%] -top-[10%] w-[60%] md:w-[40%] h-[40%] bg-blue-500/30 rounded-full blur-[80px] md:blur-[120px]"
					/>
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.2, 0.3, 0.2],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 2,
						}}
						className="absolute -right-[10%] -bottom-[10%] w-[60%] md:w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px]"
					/>
				</div>
			</motion.div>

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 text-center px-4"
				>
					A glimpse into the product that
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="text-blue-700 font-bold text-3xl md:text-5xl mt-2 md:mt-5 text-center"
				>
					We <Cover>built.</Cover>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7 }}
					className="text-white font-bold text-sm md:text-xl max-w-3xl mt-6 md:mt-10 text-center px-4 break-words"
				>
					<ColourfulText text="We bring innovation to life with our cutting-edge technology and design solutions." />
				</motion.div>

				<div className="w-full mt-8 md:mt-16">
					<Suspense
						fallback={
							<div className="text-white font-sans">
								Loading...
							</div>
						}
					>
						<ProjectCarosel />
					</Suspense>
				</div>
			</motion.div>
		</motion.div>
	);
}
