import { motion } from "motion/react";

export default function Version3() {
  return (
    <div className="size-full flex items-center justify-center bg-white">
      <motion.div
        className="origin-center"
        style={{ transformOrigin: 'center center' }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <motion.radialGradient
            id="meshGrad1"
            initial={{ cx: "50%", cy: "50%", r: "50%" }}
            animate={{ cx: ["50%", "45%", "55%", "50%"], cy: ["51%", "48%", "54%", "51%"], r: ["45%", "52%", "48%", "45%"] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            <motion.stop offset="0%" initial={{ stopColor: "#F9C36F" }} animate={{ stopColor: ["#F9C36F", "#F7AB53", "#F69E63", "#F9C36F"] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }} />
            <motion.stop offset="40%" initial={{ stopColor: "#F69E63" }} animate={{ stopColor: ["#F69E63", "#F17A35", "#F7AB53", "#F69E63"] }} transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 0.5 }} />
            <motion.stop offset="100%" initial={{ stopColor: "#F59861" }} animate={{ stopColor: ["#F59861", "#F07431", "#F9C36F", "#F59861"] }} transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1 }} />
          </motion.radialGradient>
          <motion.radialGradient
            id="meshGrad2"
            initial={{ cx: "50%", cy: "50%", r: "50%" }}
            animate={{ cx: ["50%", "55%", "47%", "50%"], cy: ["50%", "53%", "47%", "50%"], r: ["45%", "48%", "52%", "45%"] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
          >
            <motion.stop offset="0%" initial={{ stopColor: "#F7AB53" }} animate={{ stopColor: ["#F7AB53", "#F59861", "#F17A35", "#F7AB53"] }} transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 0.3 }} />
            <motion.stop offset="50%" initial={{ stopColor: "#F17A35" }} animate={{ stopColor: ["#F17A35", "#F69E63", "#F07431", "#F17A35"] }} transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity, delay: 0.8 }} />
            <motion.stop offset="100%" initial={{ stopColor: "#F07431" }} animate={{ stopColor: ["#F07431", "#F9C36F", "#F59861", "#F07431"] }} transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }} />
          </motion.radialGradient>
          <filter id="meshBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
          </filter>
        </defs>
        <g clipPath="url(#clip0_mesh)">
          <motion.ellipse
            cx="160" cy="160" rx="80" ry="80" fill="url(#meshGrad1)" filter="url(#meshBlur)"
            animate={{ rx: [80, 88, 75, 80], ry: [80, 72, 90, 80], rotate: [0, 15, -10, 0] }}
            transition={{ duration: 9, ease: [0.45, 0.05, 0.55, 0.95], repeat: Infinity }}
          />
        </g>
        <g clipPath="url(#clip1_mesh)">
          <motion.ellipse
            cx="160" cy="162" rx="80" ry="80" fill="url(#meshGrad2)" filter="url(#meshBlur)"
            animate={{ rx: [80, 74, 87, 80], ry: [80, 88, 76, 80], rotate: [0, -12, 18, 0] }}
            transition={{ duration: 8.5, ease: [0.45, 0.05, 0.55, 0.95], repeat: Infinity, delay: 1.5 }}
          />
        </g>
        <defs>
          <clipPath id="clip0_mesh"><rect width="160" height="320" fill="white"/></clipPath>
          <clipPath id="clip1_mesh"><rect width="160" height="320" fill="white" transform="matrix(-1 0 0 1 320 0)"/></clipPath>
        </defs>
        </svg>
      </motion.div>
    </div>
  );
}