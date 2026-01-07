import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences, navigationPaths } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #151030 100%)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(145, 94, 255, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #915eff" }}
      icon={
        <motion.a
          href={experience.company_website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full h-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            loading="lazy"
          />
        </motion.a>
      }
      iconStyle={{ 
        background: "linear-gradient(135deg, #915eff 0%, #bf61ff 100%)",
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)"
      }}
      date={experience.date}
      dateClassName="text-electric-purple font-bold"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-white text-[24px] font-bold hover:text-electric-purple transition-colors duration-300">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </motion.div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 5, color: "#915eff" }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <motion.div 
        className="mt-20 flex flex-col"
        initial="hidden"
        animate="show"
      >
        <VerticalTimeline lineColor="#915eff">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, navigationPaths.work);
