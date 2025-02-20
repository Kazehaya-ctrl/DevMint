import { motion } from 'framer-motion';

export function Section2() {
    return (
        <div className="w-full bg-[#000000] text-white py-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-10">Why Choose Us?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
                {[...Array(6)].map((_, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    >
                        <h2 className="text-2xl font-semibold mb-2">Feature {index + 1}</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
