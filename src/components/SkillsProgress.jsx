import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { skillLanes } from "../constants";

const SkillBar = ({ name, percentage, icon, tools }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h4 className="text-white text-[15px] font-semibold">{name}</h4>
        </div>
        <span className="text-electric-purple font-bold text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-tertiary rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-electric-purple to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-[11px] tracking-wide text-white/80 border border-white/10 rounded-full px-2 py-0.5"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsProgress = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I actually use</p>
        <h2 className={styles.sectionHeadText}>Skills & Proficiency.</h2>
      </motion.div>

      <div className="mt-12 grid lg:grid-cols-2 gap-6">
        {skillLanes.map((lane) => (
          <div
            key={lane.title}
            className="bg-black-200 p-7 rounded-2xl shadow-card border border-white/5"
          >
            <h3 className="text-white text-2xl font-bold">{lane.title}</h3>
            <p className="text-secondary text-sm mt-1 mb-6">{lane.blurb}</p>
            {lane.items.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillsProgress, "skills");
