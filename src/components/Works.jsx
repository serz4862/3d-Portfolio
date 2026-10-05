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
  agent,
  tags,
  image,
  cover,
  hosted_link,
  featured,
  role,
}) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Tilt
        options={{ max: 8, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full hover:shadow-2xl hover:shadow-electric-purple/20 transition-all duration-300"
      >
        <motion.div
          className="relative w-full h-[280px] sm:h-[420px] cursor-pointer overflow-hidden rounded-2xl group"
          onClick={() => window.open(hosted_link, "_blank")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {image ? (
            <img
              src={image}
              alt="project-image"
              className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full h-full rounded-2xl flex flex-col justify-end p-6"
              style={{
                background: `linear-gradient(145deg, ${cover.from}, ${cover.to})`,
              }}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/75">
                {cover.kicker}
              </span>
              <span className="text-white text-3xl font-black mt-2">{name}</span>
            </div>
          )}

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
          {role && (
            <p className="text-sky-300 text-xs font-bold tracking-[0.18em] uppercase mb-2">
              {role}
              {featured ? " · Priority" : ""}
            </p>
          )}
          <motion.h3 
            className="text-white font-bold text-[24px]"
            whileHover={{ color: "#915eff" }}
          >
            {name}
          </motion.h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
          {agent && (
            <p className="mt-3 text-white/80 text-[14px] leading-relaxed">
              {agent}
            </p>
          )}
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
        className="mt-16 flex flex-col gap-10"
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
