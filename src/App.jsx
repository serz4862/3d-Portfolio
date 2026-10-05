import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const ProfessionalProfiles = lazy(() => import("./components/ProfessionalProfiles"));
const NowBuilding = lazy(() => import("./components/NowBuilding"));
const Experience = lazy(() => import("./components/Experience"));
const SkillsProgress = lazy(() => import("./components/SkillsProgress"));
const AgentLab = lazy(() => import("./components/AgentLab"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <ParticlesBackground />
        <BackToTop />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10 bg-primary">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<PageLoader />}>
          <div className="bg-primary">
            <ProfessionalProfiles />
            <About />
            <NowBuilding />
            <Experience />
            <SkillsProgress />
            <AgentLab />
            <Works />
            <div className="relative z-0 bg-primary">
              <Contact />
            </div>
            <Footer />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
