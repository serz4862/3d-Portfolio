import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { personalInfo, publicUrls } from "../constants";
import Modal from "./Modal";
import Toast from "./Toast";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: personalInfo.fullName,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setToastMessage("Message sent successfully! I'll get back to you soon.");
          setToastType("success");
          setShowToast(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error while sending mail ", error);
          setToastMessage("Oops! Something went wrong. Please try again.");
          setToastType("error");
          setShowToast(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
            {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
              const profile = publicUrls.socialProfiles[socialProfile];
              return (
                <div
                  key={`social_${profile.title}`}
                  onClick={() => window.open(profile.link, "_blank")}
                  className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
                >
                  <img
                    src={profile.icon}
                    alt={`social_${profile.title}`}
                    className="w-4/6 h-4/6 object-contain"
                  />
                </div>
              );
            })}
          </div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <motion.input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-2 border-transparent focus:border-electric-purple font-medium transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <motion.input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-2 border-transparent focus:border-electric-purple font-medium transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <motion.textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's you want to say?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-2 border-transparent focus:border-electric-purple font-medium transition-all duration-300 resize-none"
                whileFocus={{ scale: 1.02 }}
              />
            </label>

            <motion.button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow-md shadow-primary green-pink-gradient"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(145, 94, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
