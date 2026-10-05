import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const beats = [
  {
    id: "ask",
    label: "Ask",
    meter: 20,
    title: "The question arrives with its memory.",
    body: "A support thread is not a fresh prompt. The agent keeps the conversation, so the next turn already knows what was tried.",
  },
  {
    id: "retrieve",
    label: "Retrieve",
    meter: 48,
    title: "RAG pulls only what matches.",
    body: "LangChain retrieval grabs the few passages that fit this question. The rest of the knowledge base stays out of the context window.",
  },
  {
    id: "reason",
    label: "Reason",
    meter: 74,
    title: "Draft an answer. Score the confidence.",
    body: "The model writes the reply and a confidence score in the same pass. High score means it can speak. Low score means it should not.",
  },
  {
    id: "act",
    label: "Act",
    meter: 100,
    title: "Answer, or escalate with the thread intact.",
    body: "Confident replies ship. Uncertain ones hand off to developer tooling, with the conversation and the retrieved context still attached.",
  },
];

const AgentLab = () => {
  const [step, setStep] = useState(0);
  const active = beats[step];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((current) => (current + 1) % beats.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p className={styles.sectionSubText}>How an agent of mine behaves</p>
      <h2 className={styles.sectionHeadText}>AI Agent Lab.</h2>

      <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-6">
        <div className="flex lg:flex-col gap-3">
          {beats.map((beat, index) => (
            <button
              key={beat.id}
              type="button"
              onClick={() => setStep(index)}
              className={`flex-1 text-left rounded-2xl px-4 py-4 border transition-colors ${
                index === step
                  ? "border-electric-purple bg-electric-purple/15"
                  : "border-white/10 bg-black-200 hover:border-electric-purple/40"
              }`}
            >
              <span className="text-electric-purple text-xs font-bold tracking-widest">
                0{index + 1}
              </span>
              <p className="text-white font-semibold mt-1">{beat.label}</p>
            </button>
          ))}
        </div>

        <div className="rounded-2xl bg-[#0b1020] border border-electric-purple/30 p-6 sm:p-8 min-h-[280px]">
          <div className="flex items-center justify-between text-xs text-secondary mb-4 font-mono">
            <span>agent.trace</span>
            <span>{active.meter}% through the loop</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-6">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 to-electric-purple"
              animate={{ width: `${active.meter}%` }}
              transition={{ duration: 0.45 }}
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-white text-2xl sm:text-3xl font-bold">
                {active.title}
              </h3>
              <p className="text-secondary text-[16px] leading-8 mt-4 max-w-2xl">
                {active.body}
              </p>
            </motion.div>
          </AnimatePresence>
          <p className="mt-8 text-sm text-white/70 leading-7">
            Two bots, one habit. On AiGenC the agent bot writes a query per source, retrieves companies, and waits for a person before outreach sends. On the support side, a RAG bot keeps the thread and escalates when confidence drops.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(AgentLab, "agents");
