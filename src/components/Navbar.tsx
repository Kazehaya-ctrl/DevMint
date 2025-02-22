import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MoreVertical, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ["Home", "About", "Portfolio", "Contact", "FAQ"];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      display: "none"
    },
    open: {
      opacity: 1,
      y: 0,
      display: "block"
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'w-[80%] mt-4 rounded-2xl container' : 'w-full rounded-none'
        } bg-black/30 backdrop-blur-md text-black h-20 md:h-28 px-8 border-double border-b-slate-700 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.1, rotate: 3 }} className="flex items-center gap-x-4 transition">
            <div className="backdrop-blur-md rounded-2xl">
              <img src="./cube.png" width={50} alt="Logo" />
            </div>
            <div className="text-xl text-white font-semibold text-center">Devmint</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-6 text-white text-md">
              {menuItems.map((item, index) => (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 bg-black/90 backdrop-blur-md md:hidden z-40 p-4"
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-white text-lg text-center py-2 hover:bg-white/10 rounded-lg"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}