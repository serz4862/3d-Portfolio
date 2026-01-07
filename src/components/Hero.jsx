import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
// import myImage from "../assets/myprofile.png";
import myImage from "../assets/profile.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <motion.span 
              className="text-electric-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>
          {/* <div className="absolute top-5 right-5">
            <motion.img
              src={myImage}
              alt="My Image"
              className="w-60 h-70 object-contain rounded-full" // added rounded-full for the circular effect
              initial={{ scale: 0.01 }} // initial scale for animation
              animate={{ scale: [0.01, 1.2, 0.01] }} // scaling animation
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div> */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className="absolute top-5 right-5"
          >
            <motion.img 
              src={myImage} 
              alt="My Image" 
              className="w-40 h-50 object-contain rounded-full border-4 border-electric-purple shadow-lg shadow-electric-purple/50" 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4"
          >
            <motion.span
              className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-electric-purple to-pink-500 text-white text-sm font-semibold shadow-lg shadow-electric-purple/50"
              whileHover={{ scale: 1.05 }}
            >
              🚀 Available for Freelance Projects
            </motion.span>
            <p className={`${styles.heroSubText} text-white-100 mt-4`}>
              Innovative {personalInfo.role}, building{" "}
              <br className="sm:block hidden" />
              world-class web and mobile applications with expertise in{" "}
              <br className="sm:block hidden" />
              <span className="text-electric-purple font-semibold">Blockchain</span>,{" "}
              <span className="text-electric-purple font-semibold">AI/ML</span>,{" "}
              <span className="text-electric-purple font-semibold">Cloud Infrastructure</span>,{" "}
              <span className="text-electric-purple font-semibold">React Native</span>, and{" "}
              <span className="text-electric-purple font-semibold">Node.js</span>
            </p>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
