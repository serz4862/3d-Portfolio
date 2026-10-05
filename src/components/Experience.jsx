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
import { education, experiences, navigationPaths } from "../constants";

const TimelineCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #151030 100%)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: item.current
          ? "0 10px 40px rgba(56, 189, 248, 0.35)"
          : "0 10px 30px rgba(145, 94, 255, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #915eff" }}
      icon={
        <a
          href={item.company_website || undefined}
          target={item.company_website ? "_blank" : undefined}
          rel={item.company_website ? "noopener noreferrer" : undefined}
          className="flex justify-center items-center w-full h-full"
        >
          {item.icon ? (
            <img
              src={item.icon}
              alt={item.company_name}
              className="w-[60%] h-[60%] object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-white font-black text-[15px] tracking-tight">
              {item.monogram}
            </span>
          )}
        </a>
      }
      iconStyle={{
        background: item.iconBg,
        boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)",
      }}
      date={item.date}
      dateClassName="text-electric-purple font-bold"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-white text-[22px] font-bold">
            {item.title}
          </h3>
          {item.current && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-400/15 text-sky-300 border border-sky-400/40">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              Now
            </span>
          )}
        </div>
        {item.company_website ? (
          <a
            href={item.company_website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary text-[16px] font-semibold hover:text-white"
            style={{ margin: 0 }}
          >
            {item.company_name}
          </a>
        ) : (
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {item.company_name}
          </p>
        )}
        {item.location && (
          <p className="text-white-100/70 text-[13px] mt-1">{item.location}</p>
        )}
      </div>

      <ul className="mt-5 ml-5 list-disc space-y-2">
        {item.points.map((point, index) => (
          <li
            key={`point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The actual timeline</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#915eff">
          {experiences.map((experience, index) => (
            <TimelineCard key={`experience-${index}`} item={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-28">
        <p className={styles.sectionSubText}>Where it started</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="#c084fc">
          {education.map((item, index) => (
            <TimelineCard key={`education-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navigationPaths.work);
