import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Comet() {
  const controls = useAnimation();
  const cometRef = useRef<HTMLImageElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const launchComet = async () => {
    const comet = cometRef.current;
    if (!comet) return;

    // 🟡 Randomize left position and apply it directly
    const randomLeft = Math.floor(Math.random() * (window.innerWidth / 2 + 100)) - 100;
    comet.style.left = `${randomLeft}px`;

    // 🔁 Reset to start
    await controls.set({
      x: 0,
      y: 0,
      opacity: 1,
    });

    // 🚀 Animate
    await controls.start({
      x: 1700,
      y: 1700,
      opacity: [1, 1, 1],
      transition: {
        duration: 2,
        ease: "linear",
      },
    });

    // 🕒 Schedule next launch
    const delay = Math.random() * 10000 + 5000;
    timeoutRef.current = setTimeout(launchComet, delay);
  };

  useEffect(() => {
    const initialDelay = 5000;
    timeoutRef.current = setTimeout(launchComet, initialDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.img
      ref={cometRef}
      src="/comet.gif"
      alt="Comet"
      initial={{ opacity: 0 }}
      animate={controls}
      style={{
        position: "absolute",
        top: -100,
        left: 0, // gets overridden dynamically
        width: "100px",
        pointerEvents: "none",
        zIndex: 0,
        filter: "grayscale(100%)",
      }}
    />
  );
}
