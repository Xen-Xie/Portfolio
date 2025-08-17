/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React JS", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express JS", icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-500 dark:text-gray-300" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

function SkillsnTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-clean dark:text-ground font-outfit">
      <div>
        <h3 className="text-2xl font-semibold mb-4 font-poppins">
          Skills & Tools
        </h3>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: {},
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-tertiary/25 dark:bg-secondary/25 py-6 rounded-xl flex flex-col items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillsnTools;
