"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = [
  "FULLSTACK DEVELOPER",
  "PROBLEM SOLVER",
  "TECH ENTHUSIAST"
];

const colors = ["text-red-400", "text-blue-400", "text-green-400", "text-yellow-400", "text-purple-400", "text-pink-400", "text-orange-400", "text-teal-400"];

const AnimatedText = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(messages[currentMessageIndex]);
  }, [currentMessageIndex]);

  return (
    <div className="flex flex-col items-center text-lg p-4 mt-30">
      {currentText.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className="flex">
          {word.split("").map((char, charIndex) => (
            <motion.div
              key={charIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: charIndex * 0.05 }}
              className={`border border-gray-700 p-4 m-0 text-4xl flex items-center justify-center w-24 h-24 ${colors[Math.floor(Math.random() * colors.length)]}`}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;