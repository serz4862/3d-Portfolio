import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const pointerX = useMotionValue(-40);
  const pointerY = useMotionValue(-40);
  const x = useSpring(pointerX, { stiffness: 900, damping: 48, mass: 0.18 });
  const y = useSpring(pointerY, { stiffness: 900, damping: 48, mass: 0.18 });
  const [mode, setMode] = useState("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      pointerX.set(event.clientX - 12);
      pointerY.set(event.clientY - 12);
      setVisible(true);

      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.matches("input, textarea, select") || target.closest("[contenteditable='true']")) {
        setMode("text");
      } else if (target.closest("a, button, canvas, [role='button'], .cursor-pointer")) {
        setMode("interactive");
      } else {
        setMode("default");
      }
    };

    const handleLeave = () => setVisible(false);
    window.addEventListener("mousemove", handleMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor fixed left-0 top-0 z-[100] flex h-6 w-6 items-center justify-center rounded-full border pointer-events-none"
      style={{ x, y }}
      animate={{
        opacity: visible && mode !== "text" ? 1 : 0,
        scale: mode === "interactive" ? 1.55 : 1,
        borderColor: mode === "interactive" ? "rgba(125, 211, 252, 0.9)" : "rgba(255, 255, 255, 0.55)",
        backgroundColor: mode === "interactive" ? "rgba(56, 189, 248, 0.12)" : "rgba(255, 255, 255, 0.02)",
      }}
      transition={{ duration: 0.16 }}
    >
      <span className="h-1 w-1 rounded-full bg-white shadow-[0_0_8px_rgba(125,211,252,0.9)]" />
    </motion.div>
  );
};

export default CustomCursor;
