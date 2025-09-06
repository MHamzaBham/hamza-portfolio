"use client";
import { motion } from "framer-motion";
import "@fontsource/poppins";
import { CiLocationArrow1 } from "react-icons/ci";

const Linkedin = "https://www.linkedin.com/in/hamzabham/";

export default function Text() {
  return <Heading />;
}

export function Ticker() {
  return (
    <motion.div
      className="sticky whitespace-nowrap animate-scroll top-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.01 }}
      transition={{ duration: 1 }}
    >
      {[...Array(10)].map((_, index) => (
        <img
          key={index}
          src="/assets/full_name.png"
          className="w-auto h-25 mx-4"
          alt="Hamza Ahmed"
        />
      ))}
    </motion.div>
  );
}

function Heading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="font-[poppins] text-5xl leading-tight font-bold text-neutral-600 dark:text-white"
    >
      <h4 className="text-4xl! md:text-6xl! font-bold mb-4 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 to-neutral-800 dark:from-white dark:to-white/80">
          Hi, My name is
        </span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-indigo-900 to-indigo-900 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300">
          Hamza Ahmed.
        </span>
      </h4>
      <Intro />
      <LetsConnect />
    </motion.div>
  );
}

function Intro() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="md:text-lg text-sm font-light mt-2 text-neutral-700 dark:text-neutral-200"
    >
      I specialize in building fast, dynamic, and scalable web applications
      using modern technologies like <i>React</i>, <i>Node.js</i>,<i> Django</i>{" "}
      and <i>SQL</i>. Lately, I’ve been diving into{" "}
      <span className="font-bold"> AI integrations </span> to create smarter,
      more efficient solutions. Always eager to{" "}
      <span className="font-bold"> learn and innovate </span>, I’m ready to
      bring ideas to life with clean, high-performance code.
    </motion.p>
  );
}

function LetsConnect() {
  return (
    <a href={Linkedin} target="_blank" className="inline-block">
      <button
        type="button"
        className="group cursor-pointer mt-4 py-2.5 px-5 me-2 mb-2 text-xs font-medium focus:outline-none rounded-lg border focus:z-10 bg-neutral-100 text-neutral-600 border-neutral-300 hover:text-neutral-900 hover:bg-neutral-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center gap-2 transition-all duration-300"
      >
        Let's Connect
        <CiLocationArrow1 className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </a>
  );
}

export function ScrollDownArrow() {
  const handleScroll = () => {
    const nextSection = document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-10" onClick={handleScroll}>
      <motion.img
        src="/assets/arrow.svg"
        alt="Scroll Down"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        }}
        className="w-14 h-14 cursor-pointer rotate-180"
      />
    </div>
  );
}
