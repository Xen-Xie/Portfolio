import React from "react";
import AboutMe from "../../Components/AboutMe";
import SkillsnTools from "../../Components/SkillsnTools";
import MyJourney from "../../Components/MyJourney";
import Facts from "../../Components/Facts";
import AContact from "../../Components/AContact";

function About() {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        <AboutMe />
        <SkillsnTools />
        <MyJourney />
        <Facts />
        <AContact />
      </div>
    </section>
  );
}

export default About;
