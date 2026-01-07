import React, { useState } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";

const Tech = () => {
  const [tooltipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          className="w-28 h-28 mb-2 relative group cursor-pointer"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(index, technology.name)}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.2, y: -10 }}
        >
          <motion.div 
            className="w-full h-full flex items-center justify-center bg-tertiary rounded-full p-4 group-hover:bg-electric-purple/20 transition-all duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={technology.icon} 
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {tooltipTexts[index] && (
            <motion.div 
              className="absolute bg-black bg-opacity-90 text-white px-3 py-2 rounded-lg text-sm z-10 bottom-[110%] left-1/2 transform -translate-x-1/2 whitespace-nowrap shadow-lg border border-electric-purple/50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {tooltipTexts[index]}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-opacity-90"></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
