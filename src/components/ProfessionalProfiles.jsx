import { motion } from "framer-motion";
import { github, linkedIn } from "../assets";
import { navigationPaths, publicUrls } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const profiles = [
  {
    name: "GitHub",
    handle: "@serz4862",
    description:
      "Explore the code behind my products, experiments, and day-to-day engineering practice.",
    cta: "Explore my code",
    url: publicUrls.socialProfiles.github.link,
    icon: github,
    accent: "from-white/20 to-white/5",
    glow: "group-hover:shadow-white/10",
  },
  {
    name: "LinkedIn",
    handle: "Saurav Kumar",
    description:
      "See my complete professional journey, current work, and connect with me directly.",
    cta: "View my experience",
    url: publicUrls.socialProfiles.linkedin.link,
    icon: linkedIn,
    accent: "from-sky-500/30 to-blue-700/10",
    glow: "group-hover:shadow-sky-500/20",
  },
];

const ProfessionalProfiles = () => (
  <>
    <motion.div variants={textVariant()} className="max-w-3xl">
      <p className={styles.sectionSubText}>Proof, progress, and the person behind the work</p>
      <h2 className={styles.sectionHeadText}>See how I build.</h2>
      <p className="mt-4 text-secondary text-[17px] leading-[30px]">
        My portfolio tells the story. These profiles show the ongoing work and the
        professional journey behind it.
      </p>
    </motion.div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {profiles.map((profile, index) => (
        <motion.a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open Saurav Kumar's ${profile.name} profile in a new tab`}
          variants={fadeIn(index === 0 ? "right" : "left", "spring", index * 0.12, 0.75)}
          whileHover={{ y: -8 }}
          className={`profile-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${profile.accent} p-7 sm:p-9 shadow-2xl ${profile.glow}`}
        >
          <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-electric-purple/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
          <div className="relative flex items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-3">
                <img src={profile.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-2xl font-black text-white">{profile.name}</p>
                <p className="mt-1 text-sm font-semibold text-sky-300">{profile.handle}</p>
              </div>
            </div>
            <span className="text-2xl text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
              ↗
            </span>
          </div>
          <p className="relative mt-8 max-w-lg text-[15px] leading-7 text-white/75">
            {profile.description}
          </p>
          <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-white">
            {profile.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </span>
        </motion.a>
      ))}
    </div>
  </>
);

export default SectionWrapper(ProfessionalProfiles, navigationPaths.profiles);
