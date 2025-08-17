/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function HeroTitle() {
  return (
    <div className="mx-5 text-center mt-10">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-bold font-poppins leading-tight text-clean dark:text-ground"
      >
        Hey, I'm <motion.span className="text-primary">Hemel</motion.span>, a
        full-stack developer building clean, responsive, and modern websites.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        className="text-base sm:text-lg mt-6 font-outfit font-light max-w-xl mx-auto"
      >
        “<span className="dark:text-primary">Full-Stack Developer</span> |{" "}
        <span className="text-primary dark:text-ground">React Enthusiast</span>{" "}
        | <span className="dark:text-primary">MERN Specialist</span>”
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeIn" }}
        className="font-inter"
      >
        “I'm a passionate full-stack web developer, crafting clean, responsive,
        and modern websites with a focus on React and the MERN stack.”
      </motion.p>
    </div>
  );
}

export default HeroTitle;
