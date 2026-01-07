import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  }[type];

  const icon = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  }[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -50, x: "-50%" }}
          className={`fixed top-24 left-1/2 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px]`}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
            className="text-2xl"
          >
            {icon}
          </motion.span>
          <p className="flex-1 font-medium">{message}</p>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl hover:bg-white/20 rounded-full w-6 h-6 flex items-center justify-center"
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
