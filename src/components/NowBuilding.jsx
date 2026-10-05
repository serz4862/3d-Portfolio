import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const lines = [
  {
    tag: "bluemoon",
    text: "Performance KPI — an LLM that writes the briefing so a leader does not have to.",
  },
  {
    tag: "agent",
    text: "RAG support agent. It remembers the thread, then escalates only when confidence drops.",
  },
  {
    tag: "ship",
    text: "Docker, Nginx, EC2. The unglamorous part that makes the clever part stay up.",
  },
  {
    tag: "0→1",
    text: "Ambiguous problem in. Production system out. That is the whole job.",
  },
];

const NowBuilding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % lines.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const active = lines[index];

  return (
    <>
      <p className={styles.sectionSubText}>Currently on the bench</p>
      <h2 className={styles.sectionHeadText}>What I am shipping.</h2>

      <div className="mt-10 max-w-3xl">
        <div className="rounded-2xl bg-[#0b1020] border border-electric-purple/30 shadow-card overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-secondary font-mono">
              saurav@lab — now
            </span>
          </div>
          <div className="px-6 py-8 min-h-[140px] font-mono">
            <p className="text-sky-300 text-sm mb-3">$ cat ./now.txt</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={active.tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-white text-lg sm:text-xl leading-relaxed"
              >
                <span className="text-electric-purple">[{active.tag}]</span>{" "}
                {active.text}
              </motion.p>
            </AnimatePresence>
            <motion.span
              className="inline-block w-2 h-5 bg-electric-purple ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {lines.map((line, lineIndex) => (
            <button
              key={line.tag}
              type="button"
              onClick={() => setIndex(lineIndex)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-colors ${
                lineIndex === index
                  ? "bg-electric-purple text-white border-electric-purple"
                  : "text-secondary border-white/15 hover:border-electric-purple/60"
              }`}
            >
              {line.tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(NowBuilding, "now");
