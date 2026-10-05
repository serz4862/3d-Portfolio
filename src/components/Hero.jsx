import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { personalInfo, publicUrls } from "../constants";
import { github, linkedIn } from "../assets";
import CodeRunnerGame from "./CodeRunnerGame";

const Hero = () => {
  const bits = personalInfo.headlineBits;
  const [bit, setBit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setBit((current) => (current + 1) % bits.length), 2200);
    return () => clearInterval(timer);
  }, [bits.length]);

  return (
    <section className="relative mx-auto flex min-h-screen w-full items-center overflow-hidden pb-20 pt-32 lg:pt-28">
      <div className={`${styles.paddingX} relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div className="relative pl-7 sm:pl-9">
          <div className="absolute bottom-0 left-0 top-2 w-px bg-gradient-to-b from-electric-purple via-sky-400/60 to-transparent">
            <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-electric-purple shadow-[0_0_24px_#915eff]" />
          </div>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-sky-300 sm:text-sm">
            {personalInfo.name} · {personalInfo.role}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75 }} className="max-w-3xl text-[42px] font-black leading-[1.03] text-white sm:text-[58px] lg:text-[70px]">
            I build products that <span className="text-electric-purple">think and ship.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-7">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-gradient-to-r from-sky-400 to-electric-purple px-4 py-2 text-xs font-bold text-white shadow-lg shadow-electric-purple/30">Agency Founder, AiGenC</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white">Full-Stack AI Engineer</span>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-8 text-white/80 sm:text-xl">
              I ship{" "}
              <AnimatePresence mode="wait">
                <motion.span key={bits[bit]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="inline-block font-bold text-sky-300">
                  {bits[bit]}
                </motion.span>
              </AnimatePresence>{" "}
              for early-stage teams using Python, TypeScript, React, and AWS.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary shadow-xl shadow-white/10">View selected work <span aria-hidden="true">→</span></a>
              <a href={publicUrls.socialProfiles.github.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white backdrop-blur-md hover:border-white/30"><img src={github} alt="" className="h-5 w-5 object-contain" /> GitHub</a>
              <a href={publicUrls.socialProfiles.linkedin.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-4 py-3 text-sm font-bold text-sky-200 backdrop-blur-md hover:border-sky-300/60"><img src={linkedIn} alt="" className="h-5 w-5 object-contain" /> LinkedIn</a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-white/60 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              {personalInfo.availability}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end"><CodeRunnerGame /></div>
      </div>

      <a href="#about" aria-label="Scroll to about" className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="block text-2xl text-white/45">↓</motion.span>
      </a>
    </section>
  );
};

export default Hero;
