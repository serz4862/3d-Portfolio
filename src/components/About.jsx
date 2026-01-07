import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        className="xs:w-[250px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <motion.div
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-2xl hover:shadow-electric-purple/30 transition-all duration-300"
        >
          <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center group cursor-pointer">
            <motion.img
              src={icon}
              alt="service-icon"
              className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            />
            <motion.h3 
              className="text-white text-[20px] font-bold text-center group-hover:text-electric-purple transition-colors duration-300"
            >
              {title}
            </motion.h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about}
      </motion.p>

      <motion.div 
        className="mt-20 flex flex-wrap gap-10 justify-center"
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
