import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const shippingNow = [
  {
    label: "Flagship build",
    title: "AiGenC",
    copy: "An agency operating system that connects lead discovery, human-approved outreach, CRM, and delivery in one product.",
    stack: ["Agentic AI", "Next.js", "RAG"],
  },
  {
    label: "In production",
    title: "Performance KPI",
    copy: "A multi-tenant performance platform that turns operational inputs into useful leadership briefings.",
    stack: ["Applied AI", "AWS", "Product"],
  },
  {
    label: "Agent workflow",
    title: "Support with judgment",
    copy: "A memory-aware RAG agent that answers when confidence is high and escalates with context when it is not.",
    stack: ["Memory", "Retrieval", "Handoff"],
  },
];

const NowBuilding = () => (
  <>
    <div className="max-w-3xl">
      <p className={styles.sectionSubText}>Building now</p>
      <h2 className={styles.sectionHeadText}>What I am shipping.</h2>
      <p className="mt-4 text-[17px] leading-8 text-secondary">
        Current work, presented without the pitch deck: the product, the problem, and the system behind it.
      </p>
    </div>

    <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <motion.article whileHover={{ y: -5 }} className="relative overflow-hidden rounded-[30px] border border-sky-400/20 bg-gradient-to-br from-sky-400/15 via-[#11162b] to-electric-purple/10 p-7 sm:p-9">
        <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Active
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">{shippingNow[0].label}</p>
        <h3 className="mt-5 text-4xl font-black text-white sm:text-5xl">{shippingNow[0].title}</h3>
        <p className="mt-5 max-w-xl text-[16px] leading-8 text-white/70">{shippingNow[0].copy}</p>
        <div className="mt-8 flex flex-wrap gap-2">{shippingNow[0].stack.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/70">{item}</span>)}</div>
        <a href="https://aigence.in/" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-black text-white">Visit AiGenC <span aria-hidden="true">↗</span></a>
      </motion.article>

      <div className="grid gap-5">
        {shippingNow.slice(1).map((item) => (
          <motion.article key={item.title} whileHover={{ x: 5 }} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-electric-purple">{item.label}</p>
            <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/60">{item.copy}</p>
            <div className="mt-5 flex flex-wrap gap-2">{item.stack.map((tag) => <span key={tag} className="text-xs font-semibold text-sky-300">#{tag.toLowerCase().replace(" ", "-")}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </div>
  </>
);

export default SectionWrapper(NowBuilding, "now");
