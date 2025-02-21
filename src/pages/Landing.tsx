import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { Spotlight } from '../components/Spotlight';

export default function Landing() {
    return (
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-[#000000] bg-[linear-gradient(to_right,#ffffff15_2px,transparent_2px),linear-gradient(to_bottom,#ffffff15_2px,transparent_2px)] [background-size:50px_40px]">
        <Spotlight/>
            <div className="flex mt-10 flex-col md:flex-row md:space-x-24 items-center justify-center w-full max-w-7xl">
                {/* Left Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="md:w-1/2 space-y-6 pl-4 items-center"
                >
                    {/* Tagline */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center backdrop-blur-md bg-white/30 p-1.5 mr-9 rounded-lg w-fit shadow-lg"
                    >
                        <div className="bg-blue-700 text-xs text-white font-bold px-3 py-1 rounded-md">
                            NEW
                        </div>
                        <div className="bg-opacity-20 text-xs px-3 py-1 text-white rounded-r-md">
                            Innovation Solution
                        </div>
                    </motion.div>
                    
                    {/* Heading */}
                    <h1 className="text-5xl md:text-6.5xl w-max text-white font-bold leading-tight">
                        Powering Your Creative <br /> Dreams, Embrace <br />
                        <ReactTyped className='text-blue-600' strings={["DEVMINT."]} typeSpeed={120} backSpeed={140} loop/>
                    </h1>
                    
                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-400 text-left max-w-md"
                    >
                        From Software Development to Design Services, we deliver tailored solutions for every visionary idea using cutting-edge technology.
                    </motion.p>
                    
                    {/* Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <button className="bg-white text-black px-6 py-3 text-sm rounded-lg hover:bg-gray-200 hover:scale-105 transition-transform">
                            Explore Work
                        </button>
                        <button className="bg-white/30 text-white backdrop-blur-md text-sm px-6 py-3 rounded-lg hover:bg-opacity-20 hover:scale-105 transition-transform">
                            What is Devmint?
                        </button>
                    </motion.div>
                    
                    {/* List Component */}
                    {/* <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="pt-16 flex space-x-6 mr-28 items-center"
                    >
                        <List />
                    </motion.div> */}
                </motion.div>
                
                {/* Right Section */}
                <motion.div 
    initial={{ opacity: 0, x: 100 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative"
>
    {/* Layered Gradient Effect */}
    <div className="absolute -inset-20 w-[250%] h-[250%]">
        {/* Strong Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500 via-purple-500 to-transparent blur-[200px] opacity-100 animate-pulse"></div>
        {/* Extra Layer for Depth */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-pink-500 to-transparent blur-[150px] opacity-80 animate-pulse"></div>
    </div>
    
    {/* Image with Glow */}
    <img 
        src="./cube.png" 
        alt="Cube" 
        className="relative z-10 w-[80%] object-contain hover:scale-110 transition-transform duration-300" 
    />
</motion.div>



            </div>
        </div>
    );
}