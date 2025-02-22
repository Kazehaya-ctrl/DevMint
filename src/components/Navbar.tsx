import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out
            ${isScrolled ? 'w-[80%] mt-4 rounded-2xl container' : 'w-full rounded-none'}
            bg-black/30 backdrop-blur-md text-black h-20 px-8 border-double border-b-slate-700 shadow-lg`}
        >
              <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
                <div className="flex items-center gap-x-20">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="flex items-center gap-x-4 transition"
                  >
                    <div className="backdrop-blur-md rounded-2xl">
                      <img src="./cube.png" width={50} alt="Logo" />
                    </div>
                    <div className="text-xl text-white font-semibold text-center">Devmint</div>
                  </motion.div>

                  <div className="flex space-x-6 text-white text-md">
                    {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.3, color: "#ccc" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="hover:text-gray-500 transition"
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} 
                    className="bg-blue-700 transition backdrop-blur-md text-white p-3 rounded-lg w-36 text-center"
                  >
                    Get in Touch
                  </motion.button>
                </motion.div>
              </div>
            </motion.nav>
    );
}
