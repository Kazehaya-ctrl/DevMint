import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-b-2 fixed top-0 z-10 w-full bg-black/50 backdrop-blur-md text-black h-20 px-8 left-0 right-0 border-double border-b-slate-700 shadow-lg"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Left Section (Logo & Links) */}
        <div className="flex items-center gap-x-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="flex items-center gap-x-4 transition"
          >
            <div className="backdrop-blur-md rounded-2xl">
              <img src="./cube.png" width={50} alt="Logo" />
            </div>
            <div className="text-xl text-white font-semibold text-center">Devmint</div>
          </motion.div>

          {/* Links */}
          <div className="flex space-x-6 text-white text-md">
            {["Home", "About", "Portfolio", "Contact", "FAQ"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, color: "#ccc" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-gray-500 transition"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section (Button) */}
        <motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}  // Reduced the effect slightly
            className="bg-blue-700 transition backdrop-blur-md text-white p-3 rounded-lg w-36 text-center" // Fixed width
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
}
