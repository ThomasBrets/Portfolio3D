import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I was a Business Administration student in the city of Mar Del Plata
        until that in 2020 I started studying programming along with my degree.
        In 2021 I made the decision to leave my career and venture into a
        full-time Coding Bootcamp with more than 800 hours of study. This course
        gave me technical and soft skills to work in the world of IT, as well as
        develop my skills as a self-taught person to learn and get over myself
        day by day.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
