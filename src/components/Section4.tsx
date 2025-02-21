// import { Spotlight } from "./Spotlight";
import ProjectCarousel from "./ui/Cards";
import { ReactTyped } from "react-typed";

export default function Section4() {
    return (
        <div className="w-full justify-center items-center flex flex-col bg-black py-20">
            <div className="text-5xl font-bold text-white">A glimpse into the product that</div>
            {/* <Spotlight/> */}
            <div className="text-blue-700 font-bold text-5xl mt-5">We built.</div>
            <div 
                className="text-white text-lg mx-auto max-w-3xl leading-relaxed mt-10 h-10 flex items-center"
                style={{ whiteSpace: "nowrap" }}
            > 
                <ReactTyped  
                    strings={["We bring innovation to life with our cutting-edge technology and design solutions."]} 
                    typeSpeed={10} 
                    backSpeed={90} 
                    loop
                />
            </div>
            <ProjectCarousel />
        </div>
    );
}
