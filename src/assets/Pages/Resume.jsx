import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';

const MotionDiv = motion.div;

function Resume() {
  return (
    <section className="px-6 py-10 max-w-4xl mx-auto space-y-10 font-inter text-clean dark:text-ground">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-clean dark:text-ground font-poppins">My Resume</h1>
        <p className="text-clean dark:text-ground mt-2">
          Passionate Front-End Developer focused on building responsive and engaging user experiences.
        </p>
        <a href="/resume.pdf" download>
          <Button variant='bordered' className="mt-4 w-[160px] rounded-full dark:border-secondary">Download Resume</Button>
        </a>
      </MotionDiv>

      {/* Skills */}
      <MotionDiv
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-2 font-poppins">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Figma', 'Git'].map((skill, i) => (
            <span
              key={i}
              className="bg-primary/20 text-primary dark:text-ground dark:bg-secondary/30 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* Experience */}
      <MotionDiv
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-2 font-poppins">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Front-End Developer – Freelance</h3>
            <p className="text-sm">Jan 2024 – Present</p>
            <ul className="list-disc ml-6 text-sm mt-1">
              <li>Built responsive websites using React and Tailwind CSS</li>
              <li>Integrated animations using Framer Motion</li>
              <li>Collaborated with clients to define UI/UX needs</li>
            </ul>
          </div>
        </div>
      </MotionDiv>

      {/* Education */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold font-poppins">Education</h2>
        <div>
          <h3 className="font-bold">Bachelor’s in Computer Science</h3>
          <p className="text-sm">Sherpur GOVT College – 2022–Present</p>
        </div>
      </MotionDiv>

      {/* Certifications */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold mb-2 font-poppins">Certifications</h2>
        <ul className="list-disc ml-6 text-sm ">
          <li>Meta Front-End Developer (Coursera)</li>
          <li>Responsive Web Design (freeCodeCamp)</li>
        </ul>
      </MotionDiv>
    </section>
  );
}

export default Resume;
