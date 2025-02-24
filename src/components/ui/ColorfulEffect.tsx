import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
  const colors = ["rgb(0, 50, 225, 1)"];
  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block whitespace-normal font-sans tracking-tight">
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          key={`${word}-${count}-${wordIndex}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[wordIndex % currentColors.length],
            y: [0, -2, 0],
            scale: [1, 1.01, 1],
            filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.5,
            delay: wordIndex * 0.1,
          }}
          className="inline-block whitespace-pre"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}
