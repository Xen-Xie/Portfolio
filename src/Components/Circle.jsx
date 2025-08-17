/* eslint-disable no-unused-vars */
import React from "react";
import { CircularProgress } from "@heroui/react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval);
          return 100;
        }
        return v + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    {
      name: "HTML",
      desc: [
        "Semantic structure",
        "Accessibility first",
        "SEO optimization",
        "Clean markup",
        "Reusable templates",
      ],
    },
    {
      name: "CSS",
      desc: [
        "Responsive design",
        "Flexbox & Grid",
        "Custom animations",
        "Scalable styles",
        "Modern layouts",
      ],
    },
    {
      name: "JavaScript",
      desc: [
        "Dynamic interactivity",
        "ES6+ syntax",
        "Problem solving",
        "Async programming",
        "DOM manipulation",
      ],
    },
    {
      name: "React JS",
      desc: [
        "Reusable components",
        "Hooks API",
        "State management",
        "Performance optimization",
        "Modern workflows",
      ],
    },
    {
      name: "Tailwind CSS",
      desc: [
        "Utility-first styling",
        "Responsive design",
        "Custom theming",
        "Rapid prototyping",
        "Consistent UI",
      ],
    },
    {
      name: "Next JS",
      desc: [
        "SSR & SSG",
        "API routes",
        "File-based routing",
        "Optimized performance",
        "SEO friendly",
      ],
    },
    {
      name: "Node JS",
      desc: [
        "Server-side JavaScript",
        "Event-driven architecture",
        "REST APIs",
        "Real-time apps",
        "Scalable backend",
      ],
    },
    {
      name: "Express JS",
      desc: [
        "Routing & middleware",
        "API development",
        "Error handling",
        "Modular architecture",
        "Fast & minimal",
      ],
    },
    {
      name: "Mongoose",
      desc: [
        "MongoDB schema design",
        "Data validation",
        "Query building",
        "Population & relations",
        "ODM for Node.js",
      ],
    },
    {
      name: "MongoDB",
      desc: [
        "NoSQL database",
        "Document-oriented",
        "Scalable & flexible",
        "Aggregation framework",
        "Indexing & performance",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-clean dark:text-ground font-poppins">
        My Skills
      </h2>

      <div className="flex flex-col gap-20">
        {skills.map((skill, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Circle */}
              <CircularProgress
                aria-label={`${skill.name} Progress`}
                color="warning"
                showValueLabel={true}
                size="lg"
                value={value}
                classNames={{
                  svg: "w-28 h-28 sm:w-40 sm:h-40 drop-shadow-md",
                  indicator: "stroke-clean dark:stroke-ground",
                  track: "stroke-clean/10 dark:stroke-ground/10",
                  value: "text-xl sm:text-2xl font-semibold",
                }}
              />

              {/* Skill Text */}
              <div
                className={`flex flex-col items-center text-center sm:items-${
                  isLeft ? "start" : "end"
                } sm:text-${isLeft ? "left" : "right"} gap-1`}
              >
                <h3 className="text-xl font-bold text-clean dark:text-ground font-inter">
                  {skill.name}
                </h3>

                {skill.desc.map((line, i) => (
                  <motion.p
                    key={i}
                    className="text-base text-gray-600 dark:text-gray-300 font-outfit"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
