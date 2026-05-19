import { motion } from "motion/react";
import LogoPulse from "../../imports/LogoPulse/LogoPulse";

export default function Version2() {
  return (
    <div className="size-full flex items-center justify-center bg-white">
      <motion.div
        className="origin-center"
        style={{ transformOrigin: 'center center' }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <LogoPulse />
      </motion.div>
    </div>
  );
}