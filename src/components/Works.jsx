import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { personalInfo, projects } from "../constants";
import { Tilt } from "react-tilt";
import { demo } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  hosted_link,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl hover:shadow-electric-purple/20 transition-all duration-300"
      >
        <motion.div
          className="relative w-full h-[230px] cursor-pointer overflow-hidden rounded-2xl group"
          onClick={() => window.open(hosted_link, "_blank")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt="project-image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          <motion.div 
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.div
              onClick={() => window.open(hosted_link, "_blank")}
              className="green-pink-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={demo}
                alt="source-code"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mt-5">
          <motion.h3 
            className="text-white font-bold text-[24px]"
            whileHover={{ color: "#915eff" }}
          >
            {name}
          </motion.h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} font-semibold`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 + tagIndex * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {personalInfo.projectsIntro}
        </motion.p>
      </div>

      <motion.div 
        className="mt-20 flex flex-wrap gap-7 justify-center"
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
