import { motion } from "motion/react";
import LogoPulse from "../../imports/LogoPulse/LogoPulse";

export default function Version4() {
  return (
    <div className="size-full flex items-center justify-center bg-white overflow-hidden">
      <motion.div className="relative flex items-center justify-center" animate={{ y: [-12, 12, -12], rotate: [-3, 3, -3] }} transition={{ duration: 9.7, ease: "easeInOut", repeat: Infinity }}>
        <motion.div className="absolute origin-center" animate={{ scale: [1.1, 1.6, 1.1], opacity: [0.05, 0.35, 0.05], rotate: [0, 20, 0] }} transition={{ duration: 11.3, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}>
          <div className="blur-[40px]"><LogoPulse /></div>
        </motion.div>
        <motion.div className="absolute origin-center" animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.6, 0.15], rotate: [0, -15, 0] }} transition={{ duration: 7.1, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}>
          <div className="blur-[24px]"><LogoPulse /></div>
        </motion.div>
        <motion.div className="relative origin-center z-10" animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }} transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}>
          <LogoPulse />
        </motion.div>
      </motion.div>
    </div>
  );
}