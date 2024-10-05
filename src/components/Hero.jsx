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
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <div className="absolute top-5 right-5">
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
          </div>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative {personalInfo.role}, building{" "}
            <br className="sm:block hidden" />
            web and mobile application and have a <br /> expertize in <br />{" "}
            Blockchain <br /> and AI
          </p>
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
