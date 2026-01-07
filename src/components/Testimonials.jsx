import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    position: "CEO, Tech Solutions Inc",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial: "Saurav delivered exceptional work on our mobile app. His expertise in React Native and attention to detail exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    position: "Product Manager, Innovation Labs",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial: "Working with Saurav was a game-changer for our project. His blockchain integration was seamless, and the AI features he implemented were cutting-edge.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO, Digital Ventures",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial: "Outstanding developer! Saurav's cloud infrastructure setup and performance optimizations significantly improved our application's scalability.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    position: "Founder, StartupXYZ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    testimonial: "Saurav's full-stack expertise helped us launch our MVP ahead of schedule. His communication and problem-solving skills are top-notch!",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary p-8 rounded-2xl max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-6 mb-6">
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-electric-purple"
              whileHover={{ scale: 1.1 }}
            />
            <div>
              <h3 className="text-white text-2xl font-bold">{testimonial.name}</h3>
              <p className="text-secondary text-sm">{testimonial.position}</p>
              <div className="flex gap-1 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-lg leading-relaxed italic"
          >
            "{testimonial.testimonial}"
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What clients say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>

      <div className="mt-12 relative">
        <TestimonialCard
          testimonial={testimonials[activeIndex]}
          isActive={true}
        />

        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="bg-tertiary p-4 rounded-full hover:bg-electric-purple transition-colors duration-300"
          >
            <span className="text-white text-2xl">←</span>
          </motion.button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-electric-purple w-8"
                    : "bg-secondary"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="bg-tertiary p-4 rounded-full hover:bg-electric-purple transition-colors duration-300"
          >
            <span className="text-white text-2xl">→</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
