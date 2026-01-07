import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 bg-primary transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={navigationPaths.home}
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.img 
              src={logo} 
              alt="logo" 
              className="w-9 h-9 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              {personalInfo.name} &nbsp;
              <span className="lg:block hidden">| {personalInfo.role}</span>
            </p>
          </Link>
        </motion.div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer relative group`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className="relative">
                {link.title}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-purple group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  animate={{ width: active === link.title ? "100%" : 0 }}
                />
              </a>
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={publicUrls.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-[18px] font-medium cursor-pointer hover:text-electric-purple transition-colors duration-300 green-pink-gradient px-4 py-2 rounded-lg"
            >
              My Resume
            </a>
          </motion.li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            whileTap={{ scale: 0.9 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 100 }}
            transition={{ duration: 0.3 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: toggle ? 1 : 0, x: toggle ? 0 : 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer hover:text-electric-purple transition-colors duration-300`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
