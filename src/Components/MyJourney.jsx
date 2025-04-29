import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function MyJourney() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <div>
      <motion.div className="font-outfit" ref={ref}>
        <h3 className="text-2xl font-semibold mb-4 font-poppins">My Journey</h3>
        <ul className="space-y-4 border-l-4 border-primary pl-6">
          {[
            "2023: Started web development with HTML & CSS.",
            "2024: Learned JavaScript and React, built projects.",
            "2025: Learning backend to become a full-stack dev.",
          ].map((text, index) => (
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
