import { motion } from "framer-motion";

export function InfiniteMovingCards({
  items,
  direction = "right",
  speed = "slow",
}: {
  items: any[];
  direction?: "right" | "left";
  speed?: "slow" | "fast";
}) {
  const duplicatedItems = [...items, ...items]; 

  return (
    <div className="relative flex overflow-hidden w-full">
      <motion.div
        className="flex min-w-max space-x-6"
        animate={{
          x: direction === "right" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: speed === "slow" ? 20 : 10, 
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6 min-w-[320px] rounded-lg shadow-lg 
                      bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white/20"
            />
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-gray-300 text-sm text-center">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}