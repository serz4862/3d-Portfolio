import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const StatCard = ({ number, label, suffix, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(number);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      variants={fadeIn("up", "spring", delay, 0.75)}
      className="relative group"
    >
      <div className="bg-tertiary p-8 rounded-2xl min-w-[200px] hover:shadow-2xl hover:shadow-electric-purple/30 transition-all duration-300 cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center"
        >
          <h3 className="text-5xl font-bold text-electric-purple mb-2">
            {count}{suffix}
          </h3>
          <p className="text-secondary text-lg">{label}</p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { number: "30", label: "Projects Completed", suffix: "+" },
    { number: "4", label: "Years Experience", suffix: "+" },
    { number: "10", label: "Happy Clients", suffix: "+" },
    { number: "15", label: "Technologies", suffix: "+" },
  ];

  return (
    <div className="mt-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-wrap gap-10 justify-center"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            number={stat.number}
            label={stat.label}
            suffix={stat.suffix}
            delay={index * 0.2}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Stats, "stats");
