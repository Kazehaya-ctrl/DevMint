import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
// import { Spotlight } from "../components/Spotlight";

export default function Landing() {
	const handleClick = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="min-h-screen w-full flex items-center justify-center pt-[3rem] md:pt-[7rem] bg-[#000000] bg-[linear-gradient(to_right,#ffffff15_2px,transparent_2px),linear-gradient(to_bottom,#ffffff15_2px,transparent_2px)] [background-size:50px_40px]">
			{/* <Spotlight /> */}
			<div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 sm:px-8 md:px-12 pt-16 md:pt-0">
				{/* Left Section - Added consistent padding */}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="w-full md:w-1/2 space-y-6 text-center md:text-left pl-2 sm:pl-4 md:pl-6"
				>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mx-auto md:mx-0 rounded-lg w-fit shadow-lg mt-8 md:mt-0"
					>
						<div className="bg-blue-700 text-xs text-white font-bold px-3 py-1 rounded-md">
							NEW
						</div>
						<div className="bg-opacity-20 text-xs px-3 py-1 text-white rounded-r-md">
							Innovation Solution
						</div>
					</motion.div>

					<h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mt-4 md:mt-0">
						Powering Your Creative{" "}
						<br className="hidden sm:block" /> Dreams, Embrace{" "}
						<br className="hidden sm:block" />
						<ReactTyped
							className="text-blue-600"
							strings={["DEVMINT."]}
							typeSpeed={120}
							backSpeed={140}
							loop
						/>
					</h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base"
					>
						From Software Development to Design Services, we deliver
						tailored solutions for every visionary idea using
						cutting-edge technology.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
					>
						<button
							onClick={() => handleClick("portfolio")}
							className="bg-white text-black px-6 py-3 text-sm rounded-lg hover:bg-gray-200 hover:scale-105 transition-transform"
						>
							Explore Work
						</button>
						<button
							onClick={() => handleClick("services")}
							className="bg-white/30 text-white backdrop-blur-md text-sm px-6 py-3 rounded-lg hover:bg-opacity-20 hover:scale-105 transition-transform"
						>
							What is Devmint?
						</button>
					</motion.div>
				</motion.div>

				{/* Right Section - Cube Image */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0 order-last md:order-none"
				>
					<div className="absolute w-full h-full flex justify-center">
						<div
							className="absolute inset-0 w-[80%] h-[80%] md:w-full md:h-full bg-gradient-radial 
                                        from-transparent via-blue-500 to-purple-500 
                                        blur-[80px] opacity-80 mask-image-radial"
						></div>
					</div>

					<motion.div
						animate={{ y: [0, -20, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relative z-10 flex justify-center"
					>
						<img
							src="./cube.png"
							alt="Devmint 3D Cube"
							className="relative z-10 w-[60%] md:w-[80%] object-contain 
                                            drop-shadow-[0_0_40px_rgba(0,65,225,0.8)] 
                                            transition-transform duration-300 hover:scale-105"
						/>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
