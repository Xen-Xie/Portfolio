import React, { useRef } from "react";
import { FaGamepad, FaHeadphones, FaFlask, FaComments } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const facts = [
  {
    icon: <FaGamepad className="text-xl text-teal-400" />,
    text: "I love FPS games in my free time.",
  },
  {
    icon: <FaHeadphones className="text-xl text-purple-400" />,
    text: "I code best with lo-fi beats playing.",
  },
  {
    icon: <FaFlask className="text-xl text-pink-400" />,
    text: "I enjoy experimenting with new libraries and tools.",
  },
  {
    icon: <FaComments className="text-xl text-blue-400" />,
    text: "I like helping others in dev communities.",
  },
];

function Facts() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    threshold: 0.8,
  });

  return (
    <div className="font-outfit text-clean dark:text-ground">
      <h3 className="text-2xl font-semibold mb-4 font-poppins">Fun Facts</h3>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.45,
            },
          },
          hidden: {},
        }}
      >
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            className="bg-secondary dark:bg-secondary/25 p-4 rounded-xl flex items-start gap-3"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {fact.icon}
            <span>{fact.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Facts;
