/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MyJourney() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const journeyItems = [
    "2023: Started web development with HTML, CSS, and JavaScript.",
    "2024: Learned React and built multiple frontend projects.",
    "2025: Mastered backend with Node.js, Express, and MongoDB to become a full-stack developer.",
  ];

  return (
    <div>
      <motion.div className="font-outfit" ref={ref}>
        <h3 className="text-2xl font-semibold mb-4 font-poppins">My Journey</h3>
        <ul className="space-y-4 border-l-4 border-primary pl-6">
          {journeyItems.map((text, index) => (
            <motion.li
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <span className="font-semibold text-purple-400">
                {text.split(":")[0]}:
              </span>{" "}
              {text.split(":")[1]}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default MyJourney;
