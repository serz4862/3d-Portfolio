import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publicUrls } from "../constants";

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: publicUrls.socialProfiles.linkedin.link,
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: publicUrls.socialProfiles.github.link,
      color: "#333",
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:sauravkumar4862@gmail.com",
      color: "#EA4335",
    },
    {
      name: "Resume",
      icon: "📄",
      url: publicUrls.resume,
      color: "#915eff",
    },
  ];

  return (
    <div className="fixed right-8 bottom-8 z-50 hidden lg:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="flex flex-col gap-3 mb-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, x: -10 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                <div className="w-14 h-14 rounded-full bg-tertiary flex items-center justify-center text-2xl shadow-lg hover:shadow-electric-purple/50 transition-all duration-300">
                  {link.icon}
                </div>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-16 top-1/2 -translate-y-1/2 bg-black-100 px-3 py-1 rounded text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-electric-purple to-pink-500 flex items-center justify-center text-3xl shadow-2xl shadow-electric-purple/50"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "✕" : "⋯"}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default FloatingActions;
