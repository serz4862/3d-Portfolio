import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      whileHover={{ scale: 1.15, x: 10 }}
      className="fixed left-4 bottom-4 lg:flex hidden justify-center items-center z-50"
    >
      <div className="w-24 h-24 relative">
        <motion.div 
          className="border-t-4 border-electric-purple border-solid rounded-full absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.a
          href={`mailto:${personalInfo.email}`}
          className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 rounded-full shadow-lg shadow-electric-purple/50 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            boxShadow: "0 0 30px rgba(145, 94, 255, 0.8)",
            scale: 1.1
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="text-white text-[12px] p-1 font-bold"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hire Me
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HireMe;
