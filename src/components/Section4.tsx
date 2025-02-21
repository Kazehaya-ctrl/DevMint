import { Spotlight } from "./Spotlight";

export default function Section4() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black bg-[url('/images/hexagon-pattern.svg')] bg-cover items-center justify-center relative overflow-hidden">
            <Spotlight/>
            <div className="text-white text-5xl">A glimpse into the product that We have built.</div>
            <h3 className="text-blue-600 p-4">Here are some of the MVPs I've helped founders launch. They all had innovative ideas, and I helped them convert them into reality.</h3>
        </div>
    );
}