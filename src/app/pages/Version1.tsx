import { motion } from "motion/react";
import LogoPulse from "../../imports/LogoPulse/LogoPulse";

export default function Version1() {
  return (
    <div className="size-full flex items-center justify-center bg-white">
      <motion.div
        className="origin-center"
        style={{ transformOrigin: 'center center' }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 4.5,
          ease: [0.4, 0.0, 0.2, 1],
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <LogoPulse />
      </motion.div>
    </div>
  );
}