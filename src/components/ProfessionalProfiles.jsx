import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { github, linkedIn } from "../assets";
import profilePhoto from "../assets/profile.png";
import { navigationPaths, personalInfo, publicUrls } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("https://api.github.com/users/serz4862", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(setProfile)
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <motion.article variants={fadeIn("right", "spring", 0, 0.75)} className="profile-card group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/15 to-white/[0.03] p-7 shadow-2xl transition-shadow hover:shadow-white/10 sm:p-9">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <img src="https://github.com/serz4862.png?size=240" alt="Saurav Kumar on GitHub" className="h-20 w-20 rounded-2xl border border-white/15 bg-black/25 object-cover" />
          <div>
            <div className="flex items-center gap-2"><img src={github} alt="" className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">GitHub profile</span></div>
            <h3 className="mt-2 text-2xl font-black text-white">{profile?.name || "Saurav Kumar"}</h3>
            <p className="text-sm font-bold text-sky-300">@serz4862</p>
          </div>
        </div>
        <span className="text-2xl text-white/40" aria-hidden="true">↗</span>
      </div>

      <p className="relative mt-7 min-h-[56px] text-[15px] leading-7 text-white/70">
        {profile?.bio || "Full-stack and AI engineering projects, product experiments, and the code behind my work."}
      </p>
      <div className="relative mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3"><strong className="block text-xl text-white">{profile?.public_repos ?? "—"}</strong><span className="text-[11px] uppercase tracking-wider text-white/45">Public repos</span></div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3"><strong className="block text-xl text-white">{profile?.followers ?? "—"}</strong><span className="text-[11px] uppercase tracking-wider text-white/45">Followers</span></div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3"><strong className="block text-xl text-white">{profile?.following ?? "—"}</strong><span className="text-[11px] uppercase tracking-wider text-white/45">Following</span></div>
      </div>
      <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">Daily commit activity</p>
            <p className="mt-1 text-sm font-semibold text-white">Live 12-month contribution graph</p>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">Live</span>
        </div>
        <a href={publicUrls.socialProfiles.github.link} target="_blank" rel="noopener noreferrer" className="mt-4 block overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] p-3">
          <img
            src="https://ghchart.rshah.org/7c3aed/serz4862"
            alt="Saurav Kumar's daily GitHub contribution graph for the last year"
            className="h-auto w-full opacity-95"
            loading="lazy"
          />
        </a>
        <p className="mt-3 text-[11px] leading-5 text-white/40">Updated from your public GitHub contribution calendar. GitHub includes commits and other contribution activity.</p>
      </div>
      <div className="relative mt-6 flex flex-wrap gap-2">{["AI", "TypeScript", "React", "Node.js"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/65">{item}</span>)}</div>
      <a href={publicUrls.socialProfiles.github.link} target="_blank" rel="noopener noreferrer" className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-primary">Open GitHub profile <span aria-hidden="true">→</span></a>
    </motion.article>
  );
};

const LinkedinProfile = () => (
  <motion.article variants={fadeIn("left", "spring", 0.12, 0.75)} className="profile-card group relative overflow-hidden rounded-[30px] border border-sky-400/20 bg-gradient-to-br from-[#0A66C2]/30 to-[#081426] p-7 shadow-2xl transition-shadow hover:shadow-sky-500/20 sm:p-9">
    <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
    <div className="relative flex items-start justify-between gap-5">
      <div className="flex items-center gap-4">
        <img src={profilePhoto} alt="Saurav Kumar" className="h-20 w-20 rounded-2xl border border-sky-300/25 bg-black/25 object-cover object-top" />
        <div>
          <div className="flex items-center gap-2"><img src={linkedIn} alt="" className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200/65">LinkedIn profile</span></div>
          <h3 className="mt-2 text-2xl font-black text-white">Saurav Kumar</h3>
          <p className="text-sm font-bold text-sky-300">{personalInfo.role}</p>
        </div>
      </div>
      <span className="text-2xl text-white/40" aria-hidden="true">↗</span>
    </div>

    <p className="relative mt-7 text-[15px] leading-7 text-white/70">Founder at AiGenC, building agentic products and production systems for ambitious startup teams.</p>
    <div className="relative mt-6 space-y-3">
      <div className="rounded-xl border border-white/10 bg-black/15 p-4"><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-300">Current focus</span><p className="mt-1 text-sm font-semibold text-white">AiGenC · Applied AI · Cloud products</p></div>
      <div className="rounded-xl border border-white/10 bg-black/15 p-4"><span className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-300">Experience</span><p className="mt-1 text-sm leading-6 text-white/75">Bluemoon Marketing, Fieldnerve, Bizav International, My Local Force, and Brookfield Aviation.</p></div>
    </div>
    <a href={publicUrls.socialProfiles.linkedin.link} target="_blank" rel="noopener noreferrer" className="relative mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-sm font-black text-white shadow-lg shadow-sky-500/20">Open LinkedIn profile <span aria-hidden="true">→</span></a>
  </motion.article>
);

const ProfessionalProfiles = () => (
  <>
    <motion.div variants={textVariant()} className="max-w-3xl">
      <p className={styles.sectionSubText}>My professional presence</p>
      <h2 className={styles.sectionHeadText}>Profiles, right here.</h2>
      <p className="mt-4 text-[17px] leading-[30px] text-secondary">Review my public code and professional timeline without hunting for a link. Open either profile when you want the full detail.</p>
    </motion.div>
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"><GithubProfile /><LinkedinProfile /></div>
  </>
);

export default SectionWrapper(ProfessionalProfiles, navigationPaths.profiles);
