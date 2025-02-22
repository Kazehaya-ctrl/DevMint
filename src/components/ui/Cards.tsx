import "./css/TwinkleStar.css";
import { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { IconArrowNarrowRight } from "@tabler/icons-react";

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

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const controls = useAnimation();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const handleTouchStart = (e:any) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e:any) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) {
      // If the swipe wasn't long enough, snap back to current slide
      controls.start({ x: `${-current * 100}%` });
      return;
    }

    if (distance > 0) {
      // Swipe left
      nextSlide();
    } else {
      // Swipe right
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Calculate drag constraints
  const dragConstraints = {
    left: -((projects.length - 1) * 100),
    right: 0
  };

  return (
    <div className="relative mt-10 flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: `${-current * 100}%` }}
          transition={{ type: "spring", stiffness: 120 }}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDragEnd={(event, info) => {
            if (Math.abs(info.offset.x) > 100) {
              if (info.offset.x < 0) {
                nextSlide();
              } else {
                prevSlide();
              }
            } else {
              controls.start({ x: `${-current * 100}%` });
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-full p-6 rounded-2xl border border-white/20 shadow-lg
                       bg-black/10 backdrop-blur-lg text-white flex flex-col items-center
                       relative overflow-hidden starry-background"
              whileHover={{ scale: 1.05 }}
            >
              {/* Star Background */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="stars-small"></div>
                <div className="stars-medium"></div>
                <div className="stars-large"></div>
              </div>
         
              {/* Content with higher z-index */}
              <div className="relative z-10 flex flex-col items-center w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
                <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
                <p className="text-gray-300 text-center mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-white/20 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex mt-4 gap-4">
        <button
          className="w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-full"
          onClick={prevSlide}
        >
          <IconArrowNarrowRight className="rotate-180 text-white" />
        </button>
        <button
          className="w-10 h-10 flex items-center justify-center bg-neutral-700 rounded-full"
          onClick={nextSlide}
        >
          <IconArrowNarrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}