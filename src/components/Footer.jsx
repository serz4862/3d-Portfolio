import { motion } from "framer-motion";
import { personalInfo, publicUrls } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black-200 border-t border-electric-purple/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-electric-purple via-pink-500 to-electric-purple"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-electric-purple">
              {personalInfo.name}
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              Full Stack Developer & Freelancer specializing in React, Node.js, 
              Blockchain, AI/ML, and Cloud Infrastructure. Building world-class 
              digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#915eff" }}
                    className="text-secondary hover:text-electric-purple transition-colors duration-300 inline-block"
                  >
                    → {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-secondary hover:text-electric-purple transition-colors duration-300"
              >
                <span className="text-xl">📧</span>
                {personalInfo.email}
              </motion.a>
              <div className="flex gap-4 mt-4">
                <motion.a
                  href={publicUrls.socialProfiles.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-xl hover:bg-electric-purple transition-colors duration-300"
                >
                  💼
                </motion.a>
                <motion.a
                  href={publicUrls.socialProfiles.github.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-xl hover:bg-electric-purple transition-colors duration-300"
                >
                  💻
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-electric-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-secondary text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <motion.p
            className="text-secondary text-sm"
            whileHover={{ scale: 1.05 }}
          >
            Made with <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 inline-block"
            >
              ❤️
            </motion.span> and React
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-electric-purple flex items-center justify-center text-white text-2xl shadow-lg hover:shadow-electric-purple/50 transition-all duration-300"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
