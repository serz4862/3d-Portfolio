import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const steps = [
  { number: "01", title: "Understand", body: "Read the request with its conversation history and operating constraints." },
  { number: "02", title: "Retrieve", body: "Pull only the source material that is relevant to this exact task." },
  { number: "03", title: "Decide", body: "Draft the next action, evaluate confidence, and check whether approval is needed." },
  { number: "04", title: "Act or hand off", body: "Complete safe work directly. Escalate uncertain decisions with the context intact." },
];

const AgentLab = () => (
  <>
    <div className="max-w-3xl">
      <p className={styles.sectionSubText}>How an agent of mine behaves</p>
      <h2 className={styles.sectionHeadText}>AI Agent Lab.</h2>
      <p className="mt-4 text-[17px] leading-8 text-secondary">
        Reliable agents are less about spectacle and more about a disciplined loop: context, evidence, judgment, and a clear handoff.
      </p>
    </div>

    <div className="relative mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-transparent via-electric-purple/60 to-transparent xl:block" />
      {steps.map((step, index) => (
        <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative rounded-[24px] border border-white/10 bg-[#0b1020] p-6">
          <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-electric-purple/30 bg-primary text-sm font-black text-electric-purple">{step.number}</span>
          <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/60">{step.body}</p>
        </motion.article>
      ))}
    </div>

    <div className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border border-sky-400/15 bg-sky-400/[0.06] px-6 py-5 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm font-black text-white">Human judgment stays in the loop.</p>
        <p className="mt-1 text-sm text-white/55">Outreach, low-confidence answers, and consequential actions wait for approval.</p>
      </div>
      <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">Guardrail enabled</span>
    </div>
  </>
);

export default SectionWrapper(AgentLab, "agents");
