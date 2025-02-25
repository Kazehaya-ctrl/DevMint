import { motion } from "framer-motion";
import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/Accordion";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export default function FAQSection() {
	const [hoveredItem, setHoveredItem] = useState<string | null>(null);
	const [expandedItem, setExpandedItem] = useState<string | null>(null);

	const handleItemClick = (itemId: any) => {
		setExpandedItem(expandedItem === itemId ? null : itemId);
	};

	const faqItems: FAQItem[] = [
		{
			id: "item-1",
			question: "What services does Devmint offer?",
			answer: "Devmint offers a comprehensive range of services including web development, mobile app creation, UI/UX design, branding solutions, and custom software development tailored to your specific business needs.",
		},
		{
			id: "item-2",
			question: "How long does it typically take to complete a project?",
			answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
		},
		{
			id: "item-3",
			question: "What is your development process?",
			answer: "Our process includes discovery and planning, design mockups, development, testing and quality assurance, client review and feedback, and finally launch with ongoing support and maintenance options.",
		},
		{
			id: "item-4",
			question:
				"Do you offer ongoing maintenance after project completion?",
			answer: "Yes, we offer flexible maintenance packages to keep your digital products secure, up-to-date, and performing optimally after launch. Our team provides technical support, updates, and continuous improvements.",
		},
		{
			id: "item-5",
			question: "How do you handle project pricing?",
			answer: "We offer transparent pricing based on project requirements. Depending on the nature of your project, we can work with fixed-price quotes or hourly rates. We'll discuss all costs upfront so there are no surprises.",
		},
	];

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
			<div className="absolute inset-0 opacity-20">
				<svg
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<pattern
							id="hexagons"
							width="60"
							height="104"
							patternUnits="userSpaceOnUse"
							patternTransform="scale(1) rotate(0)"
						>
							<path
								d="M30 18.9L60 35v34L30 85 0 69V35L30 18.9z"
								stroke="#ffffff"
								strokeWidth="0.5"
								fill="none"
							/>
						</pattern>

						<pattern
							id="dots"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<circle cx="2" cy="2" r="1" fill="#ffffff" />
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#hexagons)" />
					<rect
						width="100%"
						height="100%"
						fill="url(#dots)"
						opacity="0.7"
					/>
				</svg>
			</div>
			<div className="relative w-full max-w-7xl px-4 py-20 md:py-28">
				{/* Background Gradient - Now animates subtly */}
				<motion.div
					className="absolute inset-0 w-full h-full"
					animate={{
						opacity: [0.6, 0.7, 0.6],
						scale: [1, 1.05, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				>
					<div
						className="absolute inset-0 bg-gradient-radial 
                       from-transparent via-blue-500/20 to-purple-500/20 
                       blur-[120px] opacity-70 mask-image-radial"
					></div>
				</motion.div>

				{/* Header with floating effect */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative text-center mb-16"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.05, rotate: 1 }}
						transition={{ duration: 0.5 }}
						className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mx-auto rounded-lg w-fit shadow-lg mb-6"
					>
						<div className="bg-blue-700 text-xs text-white font-bold px-3 py-1 rounded-md">
							FAQ
						</div>
						<div className="bg-opacity-20 text-xs px-3 py-1 text-white rounded-r-md">
							Frequently Asked Questions
						</div>
					</motion.div>

					<motion.h2
						className="text-4xl md:text-5xl text-white font-bold leading-tight mb-4"
						animate={{ y: [0, -5, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					>
						Got Questions?{" "}
						<span className="text-blue-600">We've Got Answers</span>
					</motion.h2>
					<motion.p
						className="text-gray-400 max-w-2xl mx-auto"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.4 }}
					>
						Find quick answers to common questions about our
						services, process, and approach to bringing your vision
						to life.
					</motion.p>
				</motion.div>

				{/* FAQ Accordion with enhanced animations */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					whileHover={{ scale: 1.01 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="relative backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl"
				>
					<Accordion
						type="single"
						collapsible
						className="w-full text-white"
						onValueChange={setExpandedItem}
					>
						{faqItems.map((item, index) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.2 + index * 0.1,
								}}
								whileHover={{ scale: 1.02 }}
								onMouseEnter={() => setHoveredItem(item.id)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<AccordionItem
									value={item.id}
									className={`border-white/10 ${
										hoveredItem === item.id
											? "bg-white/5"
											: ""
									} ${
										expandedItem === item.id
											? "scale-[1.01] bg-white/10"
											: ""
									} rounded-lg mb-4 transition-all duration-300`}
								>
									<AccordionTrigger
										className="text-md font-medium px-4 py-5 hover:no-underline text-white transition-all duration-300 hover:scale-[1.01]"
										onClick={() => handleItemClick(item.id)}
									>
										<motion.span
											whileHover={{ x: 5 }}
											transition={{
												type: "spring",
												stiffness: 400,
											}}
										>
											{item.question}
										</motion.span>
									</AccordionTrigger>
									<AccordionContent className="px-4 text-gray-300">
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{
												opacity:
													expandedItem === item.id
														? 1
														: 0,
												height: "auto",
											}}
											transition={{ duration: 0.3 }}
										>
											{item.answer}
										</motion.div>
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</motion.div>
			</div>
		</div>
	);
}
