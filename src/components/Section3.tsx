import { Spotlight } from "./Spotlight";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black bg-[url('/images/hexagon-pattern.svg')] bg-cover items-center justify-center relative overflow-hidden">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0 }}
                whileHover={{ scale: 1.07 }}
                className="text-5xl font-bold mb-8 animate-slidein [--slidein-delay:300ms] transition-transform text-white"
              >
               Our {""}
                <ReactTyped className='bg-gradient-to-r from-blue-600 via-blue-400 to-purple-600 text-transparent bg-clip-text' strings={["Services", "Skills", "Arts"]} typeSpeed={120} backSpeed={140} loop/>
            </motion.h1>
        <Spotlight/>
        <div className="relative w-full overflow-x-hidden">
            <InfiniteMovingCards items={services} direction="right" speed="slow" />
        </div>
      
    </div>
  );
}

const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning experiences.",
    image: "./images/uiux.jpg",
  },
  {
    title: "Web Development",
    description: "Building modern, scalable, and high-performance websites.",
    image: "./images/webd.jpg",
  },
  {
    title: "Android/iOS App Development",
    description: "Creating seamless mobile applications for all platforms.",
    image: "./images/androidios.jpg",
  },
  {
    title: "Logo Design",
    description: "Designing memorable and impactful brand identities.",
    image: "./images/logod.jpg",
  },
  {
    title: "Graphic Design",
    description: "Bringing ideas to life through creative visuals.",
    image: "./images/graphicdesign.jpg",
  },
  {
    title: "Video Editing",
    description: "Crafting engaging and dynamic video content.",
    image: "./images/videodesign.jpg",
  },
];