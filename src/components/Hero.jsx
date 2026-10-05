import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, publicUrls } from "../constants";
import { github, linkedIn } from "../assets";
// import myImage from "../assets/myprofile.png";
import myImage from "../assets/profile.png";
const Hero = () => {
  const bits = personalInfo.headlineBits;
  const [bit, setBit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBit((current) => (current + 1) % bits.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [bits.length]);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[108px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="max-w-4xl pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.heroHeadText} text-white`}
          >
            I build products that{" "}
            <motion.span 
              className="text-electric-purple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              think and ship.
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
            className="absolute top-5 right-5 hidden lg:block"
          >
            <motion.img 
              src={myImage} 
              alt="Portrait of Saurav Kumar"
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
            <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.22em] text-sky-300 mb-4">
              {personalInfo.name} · {personalInfo.role}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-electric-purple text-white text-sm font-semibold shadow-lg shadow-electric-purple/50"
                whileHover={{ scale: 1.05 }}
              >
                Agency Founder, AiGenC
              </motion.span>
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/15"
                whileHover={{ scale: 1.05 }}
              >
                {personalInfo.role}
              </motion.span>
            </div>
            <p className={`${styles.heroSubText} text-white-100 mt-4`}>
              I ship{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={bits[bit]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block text-electric-purple font-semibold"
                >
                  {bits[bit]}
                </motion.span>
              </AnimatePresence>
              <br className="sm:block hidden" />
              for early-stage teams — Python, TypeScript, React, and AWS.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <motion.a
                href="#work"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary shadow-xl shadow-white/10"
              >
                View selected work <span aria-hidden="true">→</span>
              </motion.a>
              <motion.a
                href={publicUrls.socialProfiles.github.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white backdrop-blur-md hover:border-white/30"
              >
                <img src={github} alt="" className="h-5 w-5 object-contain" /> GitHub
              </motion.a>
              <motion.a
                href={publicUrls.socialProfiles.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-bold text-sky-200 backdrop-blur-md hover:border-sky-300/60"
              >
                <img src={linkedIn} alt="" className="h-5 w-5 object-contain" /> LinkedIn
              </motion.a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              {personalInfo.availability}
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
