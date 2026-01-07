import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import FloatingActions from "./components/FloatingActions";
import BackToTop from "./components/BackToTop";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Stats = lazy(() => import("./components/Stats"));
const Experience = lazy(() => import("./components/Experience"));
const SkillsProgress = lazy(() => import("./components/SkillsProgress"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const HireMe = lazy(() => import("./components/HireMe"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <ParticlesBackground />
        <FloatingActions />
        <BackToTop />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-10 bg-primary">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<PageLoader />}>
          <div className="bg-primary">
            <About />
            <Stats />
            <Experience />
            <SkillsProgress />
            <Tech />
            <Works />
            <Testimonials />
            <div className="relative z-0 bg-primary">
              <Contact />
            </div>
            <Footer />
            <HireMe />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
