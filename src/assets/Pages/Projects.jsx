import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import AContact from "../../Components/AContact";

const MotionCard = motion.div;
const MotionP = motion.p;
const MotionDiv = motion.div;

const projects = [
  {
    image: "blood.png",
    title: "Blood Donation Project",
    about: "This project is about Blood Donation",
    tech: ["Tailwind", "React", "Express", "MongoDB"],
    live: "https://giftoflife.netlify.app/",
    code: "https://github.com/Xen-Xie/giftoflife",
  },
  {
    image: "Project1.png",
    title: "Disaster Project",
    about: "This project is about Incidents",
    tech: ["Tailwind", "React"],
    live: "https://disasteras.netlify.app/",
    code: "https://github.com/Xen-Xie/React-Assignment2.git",
  },
  {
    image: "Project2.png",
    title: "Myfeedback Project",
    about: "This project is about booking Restaurents and Businesses.",
    tech: ["Tailwind", "React", "Hero UI"],
    live: "https://myfeedbax.netlify.app/",
    code: "https://github.com/Xen-Xie/React-Assignment3.git",
  },
  {
    image: "Project3.png",
    title: "Wizia Project",
    about: "This project is about Internet exploring tools.",
    tech: ["Tailwind", "React", "Hero UI"],
    live: "https://reactassigment.netlify.app/",
    code: "https://github.com/Xen-Xie/React-Assignment.git",
  },
  {
    image: "Project4.png",
    title: "Wern Finance Project",
    about: "This project is about debit and credit card finance tools.",
    tech: ["Tailwind", "React", "Hero UI"],
    live: "https://xenxie-finance.netlify.app/",
    code: "https://github.com/Xen-Xie/Finance-Projects.git",
  },
  {
    image: "Project5.png",
    title: "Degic Project",
    about: "This project is about making Presentations and e.t.c.",
    tech: ["Tailwind", "React"],
    live: "https://degic-xen.netlify.app/",
    code: "https://github.com/Xen-Xie/Degic-Project.git",
  },
  {
    image: "Project6.png",
    title: "Wern Finance Project",
    about: "This project is about Creativity and Skills.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://talwind-assigment.netlify.app/",
    code: "https://github.com/Xen-Xie/Talwind-Assignment.git",
  },
  {
    image: "Project7.png",
    title: "Wern Finance Project",
    about: "This project is about AI and Cryptos.",
    tech: ["HTML", "Tailwind CSS"],
    live: "https://talwindproject.netlify.app/",
    code: "https://github.com/Xen-Xie/Talwind-CSS-First-Project.git",
  },
  {
    image: "Project8.png",
    title: "Wern Finance Project",
    about: "This project is about My Portfolio.",
    tech: ["Tailwind", "React", "Framer Motion"],
    live: "https://xenxiesportfolio.netlify.app/",
    code: "https://github.com/Xen-Xie/Portfolio.git",
  },
];

function ProjectCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="px-6 py-10">
      <MotionP
        className="text-center text-2xl font-bold font-poppins text-clean dark:text-ground mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </MotionP>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
        {projects.map((project, index) => (
          <MotionCard
            key={index}
            initial={isMobile ? { opacity: 0, x: 40 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-tertiary dark:bg-ground rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden min-h-[400px]"
          >
            {/* Image: preserve aspect ratio */}
            <div className="w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "16/9" }} // keeps all images uniform
              />
            </div>

            {/* Text section */}
            <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
              <h2 className="text-xl font-bold font-poppins text-ground dark:text-tertiary">
                {project.title}
              </h2>
              <p className="text-sm text-ground/80 dark:text-default">
                {project.about}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-primary font-medium">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 px-2 py-1 rounded-full dark:text-clean dark:bg-primary/45"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-3">
                <Link to={project.live} target="_blank">
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      className="text-sm w-[100px] bg-secondary dark:bg-clean text-tertiary dark:text-ground"
                    >
                      Live Demo
                    </Button>
                  </MotionDiv>
                </Link>
                <Link to={project.code} target="_blank">
                  <MotionDiv
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="bordered"
                      className="text-sm w-[100px] border-ground dark:border-clean dark:text-clean text-ground"
                    >
                      Code
                    </Button>
                  </MotionDiv>
                </Link>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
      <AContact />
    </div>
  );
}

export default ProjectCard;
