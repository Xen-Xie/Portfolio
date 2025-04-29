import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div>
        {/*Profile*/}
       <img src="/mm.png" alt="" className="rounded-full w-40 h-40 object-cover mx-auto bg-clean dark:bg-ground mb-1" />


      <motion.div
        className="max-w-5xl mx-auto space-y-12 text-clean dark:text-ground font-outfit"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-2 font-poppins">About Me</h2>
          <p className="text-lg">
            Here's a bit more about who I am and what I do.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            I’m <span className="text-primary font-poppins">Hemel</span>, a frontend developer from Bangladesh. I craft sleek,
            performant, and accessible websites using React and Tailwind CSS.
            I'm passionate about building beautiful interfaces and currently
            diving deeper into backend development to become a full-stack
            developer.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
