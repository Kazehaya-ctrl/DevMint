import { Spotlight } from "./Spotlight";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black bg-[url('/images/hexagon-pattern.svg')] bg-cover items-center justify-center relative overflow-hidden">
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
    image: "/images/ui-ux.jpg",
  },
  {
    title: "Web Development",
    description: "Building modern, scalable, and high-performance websites.",
    image: "/images/web-development.jpg",
  },
  {
    title: "Android/iOS App Development",
    description: "Creating seamless mobile applications for all platforms.",
    image: "/images/app-development.jpg",
  },
  {
    title: "Logo Design",
    description: "Designing memorable and impactful brand identities.",
    image: "/images/logo-design.jpg",
  },
  {
    title: "Graphic Design",
    description: "Bringing ideas to life through creative visuals.",
    image: "/images/graphic-design.jpg",
  },
  {
    title: "Video Editing",
    description: "Crafting engaging and dynamic video content.",
    image: "/images/video-editing.jpg",
  },
];