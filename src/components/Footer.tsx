import { motion } from "framer-motion";
import { useState } from "react";
import { ContactDialog } from "./ContactDialogueBox";

export default function Footer() {
	const [isContactDialogOpen, setIsContactDialogOpen] =
		useState<boolean>(false);

	const handleContactClick = (e: any) => {
		e.preventDefault();
		setIsContactDialogOpen(true);
	};

	return (
		<>
			<motion.footer
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="relative w-full py-10 bg-black/50 backdrop-blur-md text-white"
			>
				<div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
					{/* Logo & Tagline */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-center md:text-left"
					>
						<h2 className="text-3xl font-bold opacity-90 transition duration-300 hover:opacity-100">
							Devmint
						</h2>
						<p className="text-gray-400 text-sm mt-1">
							Build To Inspire
						</p>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="mt-6 md:mt-0 text-center md:text-left"
					>
						<h3 className="text-lg font-semibold">Our Services</h3>
						<ul className="mt-2 space-y-2">
							{[
								"Website Development",
								"Mobile App Development",
								"UI/UX Design",
							].map((service, index) => (
								<motion.li
									key={index}
									whileHover={{ x: 5 }}
									transition={{
										type: "spring",
										stiffness: 200,
									}}
									className="text-gray-400 hover:text-white transition-transform duration-300"
								>
									✔ {service}
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Socials */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className="mt-6 md:mt-0 text-center md:text-left justify-items-center"
					>
						<h3 className="text-lg font-semibold">
							Stay Connected
						</h3>
						<div className="flex justify-center md:justify-start gap-4 mt-5">
							{[
								{
									url: "./icons/twitter.svg",
									path: "https://x.com/Devmint_tech",
								},
								{
									url: "./icons/instagram.svg",
									path: "https://www.instagram.com/devmint_official/",
								},
								{
									url: "./icons/email.svg",
									path: "mailto:devmint.tech@gmail.com",
								},
							].map((icon, index) => (
								<motion.a
									key={index}
									href={icon.path}
									target="_blank"
									whileHover={{ scale: 1.2 }}
									transition={{ duration: 0.3 }}
								>
									<img
										src={icon.url}
										alt="Social Icon"
										className="w-6 h-6"
									/>
								</motion.a>
							))}
						</div>
					</motion.div>

					{/* Quick Contact */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.6 }}
						className="mt-6 md:mt-0 text-center md:text-left flex flex-col items-center justify-center"
					>
						<h3 className="text-lg font-semibold text-center">
							Quick Contact
						</h3>
						<p className="text-gray-400 text-sm mt-2 text-center max-w-md">
							Have questions? Reach out anytime. We're here to
							help your projects succeed.
						</p>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
							onClick={handleContactClick}
							className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
						>
							Contact Us
						</motion.button>
					</motion.div>
				</div>

				{/* Footer Bottom */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="text-center text-gray-500 text-sm mt-10"
				>
					© 2024 Devmint. All rights reserved.
				</motion.div>
			</motion.footer>
			<ContactDialog
				isOpen={isContactDialogOpen}
				onClose={() => setIsContactDialogOpen(false)}
			/>
		</>
	);
}
