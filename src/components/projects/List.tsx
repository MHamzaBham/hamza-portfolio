"use client";

import { projects } from "@/constants/projects";
import Project from "./Project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function List() {
  const [idx, setidx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handlePrev = () => {
    setDirection(-1);
    setidx(idx - 1 < 0 ? projects.length - 1 : idx - 1);
  };

  const handleNext = () => {
    setDirection(1);
    setidx(idx + 1 > projects.length - 1 ? 0 : idx + 1);
  };

  return (
    <div className="my-20 grid grid-cols-1 gap-0 overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={idx}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (direction) => ({
                x: direction === 1 ? 1000 : -1000,
                opacity: 0
              }),
              center: {
                x: 0,
                opacity: 1
              },
              exit: (direction) => ({
                x: direction === 1 ? -1000 : 1000,
                opacity: 0
              })
            }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <Project project={projects[idx]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative my-5 flex gap-2 justify-end">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 dark:bg-gray-800 cursor-pointer shadow rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-700 dark:text-gray-200"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 dark:bg-gray-800 cursor-pointer shadow rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-gray-700 dark:text-gray-200"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
