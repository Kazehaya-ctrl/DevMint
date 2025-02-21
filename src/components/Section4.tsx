// import { Spotlight } from "./Spotlight";
import ProjectCarousel from "./ui/Cards";
import { ReactTyped } from "react-typed";
import { Cover } from "./ui/Cover";
import { ColourfulText } from "./ui/ColorfulEffect";

export default function Section4() {
    return (
        <div className="w-full justify-center items-center flex flex-col bg-black py-20 relative">
            {/* Grid Background with Light Beams */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="absolute inset-0">
                    <div className="absolute -left-[10%] -top-[10%] w-[40%] h-[40%] bg-blue-500/30 rounded-full blur-[120px]" />
                    <div className="absolute -right-[10%] -bottom-[10%] w-[40%] h-[40%] bg-purple-500/30 rounded-full blur-[120px]" />
                </div>
            </div>

            {/* Content (existing) */}
            <div className="relative z-10 text-center">
                <div className="text-5xl font-bold text-white">A glimpse into the product that</div>
                <div className="text-blue-700 font-bold text-5xl mt-5">We <Cover>built.</Cover></div>
                <div 
                    className="text-white text-xl font-bold mx-auto max-w-3xl leading-relaxed mt-10 h-10 flex items-center"
                    style={{ whiteSpace: "nowrap" }}
                > 
                    <ColourfulText text="We bring innovation to life with cutting technology and design solutions."/>
                </div>
                <ProjectCarousel />
            </div>
        </div>
    );
}