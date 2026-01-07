import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const SkillBar = ({ name, percentage, delay, icon }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <motion.div
      variants={fadeIn("right", "spring", delay * 0.1, 0.75)}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h4 className="text-white text-lg font-semibold">{name}</h4>
        </div>
        <span className="text-electric-purple font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-tertiary rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-electric-purple to-pink-500 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="absolute right-0 top-0 h-full w-1/3 bg-white/20"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsProgress = () => {
  const skills = [
    { name: "React.js & React Native", percentage: 95, icon: "⚛️" },
    { name: "Next.js & TypeScript", percentage: 93, icon: "📘" },
    { name: "Node.js & Express", percentage: 92, icon: "🟢" },
    { name: "Mobile App Development", percentage: 90, icon: "📱" },
    { name: "Cloud Infrastructure (AWS/Azure)", percentage: 90, icon: "☁️" },
    { name: "Docker & Kubernetes", percentage: 88, icon: "🐳" },
    { name: "MongoDB & PostgreSQL", percentage: 87, icon: "🗄️" },
    { name: "Blockchain & AI/ML", percentage: 85, icon: "🤖" },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Proficiency.</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 max-w-4xl mx-auto"
      >
        <div className="bg-black-200 p-8 rounded-2xl shadow-card">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index}
              icon={skill.icon}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(SkillsProgress, "skills");
