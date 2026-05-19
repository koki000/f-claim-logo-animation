import { motion } from "motion/react";

export default function Version7() {
  return (
    <div className="size-full flex items-center justify-center bg-white overflow-hidden">
      <div className="w-[240px] h-[240px] flex items-center justify-center relative">
        <motion.div
          className="origin-center w-full h-full flex items-center justify-center"
          style={{ transformOrigin: 'center center' }}
          animate={{ scale: [150 / 240, 1, 150 / 240], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 4.5, ease: [0.4, 0.0, 0.2, 1], repeat: Infinity, repeatType: "loop" }}
        >
          <svg width="240" height="240" viewBox="0 0 320 320" fill="none" style={{ overflow: "visible" }} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_v7)">
              <g filter="url(#filter0_fn_v7)">
                <motion.circle cx="159.773" cy="162.711" r="81.7735" fill="url(#paint0_linear_v7)" style={{ transformOrigin: "159.773px 162.711px" }} animate={{ rotate: 360 }} transition={{ duration: 7, ease: "linear", repeat: Infinity }} />
              </g>
            </g>
            <g clipPath="url(#clip1_v7)">
              <g filter="url(#filter1_fn_v7)">
                <motion.g style={{ transformOrigin: "159.7735px 162.293px" }} animate={{ rotate: -360 }} transition={{ duration: 11, ease: "linear", repeat: Infinity }}>
                  <circle cx="81.7735" cy="81.7735" r="81.7735" transform="matrix(-1 0 0 1 241.547 80.5195)" fill="url(#paint1_linear_v7)" />
                </motion.g>
              </g>
            </g>
            <defs>
              <filter id="filter0_fn_v7" x="-200" y="-200" width="720" height="720" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="37.4163" result="effect1_foregroundBlur_v7"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.77806377410888672 0.77806377410888672" stitchTiles="stitch" numOctaves="3" result="noise" seed="1126" />
                <feComponentTransfer in="noise" result="coloredNoise1">
                  <feFuncR type="linear" slope="2" intercept="-0.5" />
                  <feFuncG type="linear" slope="2" intercept="-0.5" />
                  <feFuncB type="linear" slope="2" intercept="-0.5" />
                  <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                </feComponentTransfer>
                <feComposite operator="in" in2="effect1_foregroundBlur_v7" in="coloredNoise1" result="noise1Clipped" />
                <feComponentTransfer in="noise1Clipped" result="color1"><feFuncA type="table" tableValues="0 0.05" /></feComponentTransfer>
                <feMerge result="effect2_noise_v7"><feMergeNode in="effect1_foregroundBlur_v7" /><feMergeNode in="color1" /></feMerge>
              </filter>
              <filter id="filter1_fn_v7" x="-200" y="-200" width="720" height="720" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="27.9886" result="effect1_foregroundBlur_v7"/>
                <feTurbulence type="fractalNoise" baseFrequency="0.97257959842681885 0.97257959842681885" stitchTiles="stitch" numOctaves="3" result="noise" seed="2586" />
                <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                  <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                </feComponentTransfer>
                <feComposite operator="in" in2="effect1_foregroundBlur_v7" in="coloredNoise1" result="noise1Clipped" />
                <feFlood floodColor="rgba(0, 0, 0, 0.04)" result="color1Flood" />
                <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                <feMerge result="effect2_noise_v7"><feMergeNode in="effect1_foregroundBlur_v7" /><feMergeNode in="color1" /></feMerge>
              </filter>
              <linearGradient id="paint0_linear_v7" x1="159.773" y1="80.9375" x2="159.773" y2="244.484" gradientUnits="userSpaceOnUse"><stop stopColor="#F9C36F"/><stop offset="0.5625" stopColor="#F69E63"/><stop offset="1" stopColor="#F59861"/></linearGradient>
              <linearGradient id="paint1_linear_v7" x1="81.7735" y1="163.547" x2="81.7735" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#F07431"/><stop offset="0.379808" stopColor="#F17A35"/><stop offset="1" stopColor="#F7AB53"/></linearGradient>
              <clipPath id="clip0_v7"><rect x="-200" y="-200" width="360" height="720" fill="white"/></clipPath>
              <clipPath id="clip1_v7"><rect x="160" y="-200" width="360" height="720" fill="white"/></clipPath>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}