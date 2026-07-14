import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Guests" },
  { value: 10, suffix: "+", label: "Luxury Boats" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 30);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFF2DD] via-[#FFF8EC] to-[#E2EAF4] select-none"
    >
      {/* ===================================================
          ANIMATED VECTOR BACKWATER SCENE (BACKGROUND)
          =================================================== */}

      {/* Layer 1: Sky & Sun Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FFB86C]/30 via-[#FFDEB4]/20 to-transparent pointer-events-none" />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FFC988]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Layer 2: Slow Drifting Clouds */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* Cloud 1 */}
        <motion.svg
          animate={{ x: ["-10vw", "110vw"] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-0 w-44 h-16 text-white"
          viewBox="0 0 100 40"
          fill="currentColor"
        >
          <path d="M10 30 Q 15 15, 30 20 Q 40 10, 55 18 Q 70 5, 85 20 Q 95 22, 95 30 Z" />
        </motion.svg>
        {/* Cloud 2 */}
        {!isMobile && (
          <motion.svg
            animate={{ x: ["-20vw", "120vw"] }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear", delay: 30 }}
            className="absolute top-[18%] left-0 w-64 h-24 text-white opacity-60"
            viewBox="0 0 100 40"
            fill="currentColor"
          >
            <path d="M10 30 Q 18 12, 35 18 Q 45 8, 62 18 Q 78 4, 90 22 Q 98 24, 98 30 Z" />
          </motion.svg>
        )}
      </div>

      {/* Layer 3: Birds Flying Occasionally */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            animate={{
              x: ["-10vw", "110vw"],
              y: ["25vh", "10vh"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 25,
            }}
            className="absolute"
          >
            {/* Simple flock of 3 birds */}
            <svg className="w-16 h-12 text-[#1E293B]/30" viewBox="0 0 100 50">
              {/* Bird 1 */}
              <motion.path
                d="M 10,20 Q 15,10 20,20 Q 25,10 30,20 Q 20,15 10,20 Z"
                fill="currentColor"
                animate={{ d: [
                  "M 10,20 Q 15,10 20,20 Q 25,10 30,20 Q 20,15 10,20 Z",
                  "M 10,20 Q 15,25 20,20 Q 25,25 30,20 Q 20,18 10,20 Z",
                  "M 10,20 Q 15,10 20,20 Q 25,10 30,20 Q 20,15 10,20 Z"
                ]}}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Bird 2 */}
              <motion.path
                d="M 40,10 Q 45,0 50,10 Q 55,0 60,10 Q 50,5 40,10 Z"
                fill="currentColor"
                animate={{ d: [
                  "M 40,10 Q 45,0 50,10 Q 55,0 60,10 Q 50,5 40,10 Z",
                  "M 40,10 Q 45,15 50,10 Q 55,15 60,10 Q 50,8 40,10 Z",
                  "M 40,10 Q 45,0 50,10 Q 55,0 60,10 Q 50,5 40,10 Z"
                ]}}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
              />
              {/* Bird 3 */}
              <motion.path
                d="M 25,35 Q 30,25 35,35 Q 40,25 45,35 Q 35,30 25,35 Z"
                fill="currentColor"
                animate={{ d: [
                  "M 25,35 Q 30,25 35,35 Q 40,25 45,35 Q 35,30 25,35 Z",
                  "M 25,35 Q 30,40 35,35 Q 40,40 45,35 Q 35,33 25,35 Z",
                  "M 25,35 Q 30,25 35,35 Q 40,25 45,35 Q 35,30 25,35 Z"
                ]}}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </motion.div>
        </div>
      )}

      {/* Layer 4: Far Shoreline Shore & Mist */}
      <div className="absolute bottom-[35%] w-full h-[150px] z-0 pointer-events-none select-none">
        {/* Soft Horizon Mist */}
        <div className="absolute top-[40px] left-0 w-full h-[60px] bg-gradient-to-b from-transparent via-white/40 to-transparent blur-md" />

        {/* Shoreline Vector silhouette */}
        <svg className="absolute bottom-0 w-full h-[120px] text-[#14532D]/10" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,80 Q 200,60 450,75 T 900,65 T 1440,80 L 1440,100 L 0,100 Z" />
        </svg>

        {/* Coconut Trees Swaying (Far shoreline) */}
        <div className="absolute bottom-0 w-full h-[140px] flex justify-between px-10 md:px-32 opacity-25">
          {/* Palm Group 1 */}
          <motion.svg
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-28 origin-bottom text-[#14532D]"
            viewBox="0 0 60 100"
            fill="currentColor"
          >
            {/* Trunk */}
            <path d="M 28,100 Q 24,50 30,10 Q 31,50 32,100 Z" />
            {/* Leaves */}
            <path d="M 30,10 Q 10,15 5,30 Q 15,18 30,10" />
            <path d="M 30,10 Q 20,2 10,5 Q 22,7 30,10" />
            <path d="M 30,10 Q 40,-2 50,5 Q 38,7 30,10" />
            <path d="M 30,10 Q 50,15 55,30 Q 45,18 30,10" />
          </motion.svg>

          {/* Palm Group 2 */}
          <motion.svg
            animate={{ rotate: [1, -1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="w-12 h-24 origin-bottom text-[#14532D]"
            viewBox="0 0 60 100"
            fill="currentColor"
          >
            <path d="M 28,100 Q 26,55 30,10 Q 32,55 32,100 Z" />
            <path d="M 30,10 Q 12,18 8,32 Q 16,20 30,10" />
            <path d="M 30,10 Q 22,5 12,8 Q 23,9 30,10" />
            <path d="M 30,10 Q 38,0 48,8 Q 37,10 30,10" />
            <path d="M 30,10 Q 48,18 52,32 Q 44,20 30,10" />
          </motion.svg>
        </div>
      </div>

      {/* Layer 5: Water Surface Background */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] z-0 bg-gradient-to-b from-[#C4D9EC]/50 via-[#92B3CF]/60 to-[#0F766E]/40 border-t border-white/20" />

      {/* Layer 6: Dynamic FeTurbulence Rippling Water Shader (For realistic water ripples) */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] z-0 opacity-40 pointer-events-none select-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="water-ripples">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.08" numOctaves="1" result="noise">
              <animate attributeName="baseFrequency" values="0.01 0.08; 0.015 0.12; 0.01 0.08" dur="15s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <rect width="100%" height="100%" fill="url(#water-gradient)" filter="url(#water-ripples)" />
          <defs>
            <linearGradient id="water-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF2DD" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#92B3CF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0F766E" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Layer 7: Realistic Water reflections of shore */}
      {!isMobile && (
        <div className="absolute bottom-[20%] left-0 w-full h-[15%] z-0 opacity-20 pointer-events-none overflow-hidden scale-y-[-1] blur-[3px]">
          {/* Mirrored sways palms */}
          <div className="flex justify-between px-10 md:px-32 w-full">
            <svg className="w-16 h-28 text-[#14532D]" viewBox="0 0 60 100" fill="currentColor">
              <path d="M 28,100 Q 24,50 30,10 Q 31,50 32,100 Z" />
              <path d="M 30,10 Q 10,15 5,30 Q 15,18 30,10" />
            </svg>
            <svg className="w-12 h-24 text-[#14532D]" viewBox="0 0 60 100" fill="currentColor">
              <path d="M 28,100 Q 26,55 30,10 Q 32,55 32,100 Z" />
              <path d="M 30,10 Q 12,18 8,32 Q 16,20 30,10" />
            </svg>
          </div>
        </div>
      )}

      {/* Layer 8: The Luxury Houseboat (Slow Sailing) */}
      <div className="absolute bottom-[22%] w-full h-[150px] z-10 pointer-events-none select-none">
        <motion.div
          animate={{
            x: ["-25vw", "110vw"],
          }}
          transition={{
            duration: 85,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0"
        >
          {/* Subtle Boat Bobbing / Floating inertia */}
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 0.5, -0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* The Houseboat Vector Illustration */}
            <svg className="w-56 md:w-80 h-auto drop-shadow-[0_12px_24px_rgba(15,118,110,0.15)]" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Boat Hull (Wooden Base) */}
              <path d="M12 55C12 55 25 65 90 65C155 65 188 55 188 55C188 55 192 48 182 48C172 48 28 48 18 48C8 48 12 55 12 55Z" fill="#3D2411" />
              <path d="M14 54C14 54 28 62 90 62C152 62 186 54 186 54L184 50L16 50L14 54Z" fill="#54331B" />
              <rect x="22" y="48" width="156" height="2" fill="#C9A227" />

              {/* Thatched curved roof structure (Kettuvallam) */}
              <path d="M25 48C25 48 24 25 50 20C76 15 125 15 150 20C175 25 175 48 175 48Z" fill="#9F7351" />
              <path d="M28 48C28 48 27 28 50 23C73 18 127 18 150 23C173 28 172 48 172 48Z" fill="#B58967" />
              
              {/* Bamboo lines details on roof */}
              <path d="M50 20C50 20 48 35 48 48" stroke="#7A563A" strokeWidth="1.5" />
              <path d="M75 16C75 16 73 35 73 48" stroke="#7A563A" strokeWidth="1.5" />
              <path d="M100 15C100 15 99 35 99 48" stroke="#7A563A" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M125 16C125 16 124 35 124 48" stroke="#7A563A" strokeWidth="1.5" />
              <path d="M150 20C150 20 148 35 148 48" stroke="#7A563A" strokeWidth="1.5" />

              {/* Cabin Glass Windows */}
              <rect x="52" y="32" width="20" height="12" rx="3" fill="rgba(255, 248, 236, 0.9)" stroke="#54331B" strokeWidth="1.5" />
              <rect x="80" y="32" width="20" height="12" rx="3" fill="rgba(255, 248, 236, 0.9)" stroke="#54331B" strokeWidth="1.5" />
              <rect x="108" y="32" width="20" height="12" rx="3" fill="rgba(255, 248, 236, 0.9)" stroke="#54331B" strokeWidth="1.5" />
              <rect x="136" y="32" width="18" height="12" rx="3" fill="rgba(255, 248, 236, 0.9)" stroke="#54331B" strokeWidth="1.5" />

              {/* Window Glass Reflections */}
              <path d="M54 42L66 34" stroke="#FFF8EC" strokeWidth="1" strokeLinecap="round" />
              <path d="M82 42L94 34" stroke="#FFF8EC" strokeWidth="1" strokeLinecap="round" />
              <path d="M110 42L122 34" stroke="#FFF8EC" strokeWidth="1" strokeLinecap="round" />

              {/* Captain & Passengers figures placeholder */}
              <circle cx="40" cy="42" r="3" fill="#14532D" />
              <rect x="37" y="45" width="6" height="4" rx="1" fill="#14532D" />

              {/* Sun deck upper rails */}
              <path d="M60 21C60 21 80 20 100 20C120 20 140 21 140 21" stroke="#3D2411" strokeWidth="1" />
              <line x1="75" y1="20" x2="75" y2="23" stroke="#3D2411" strokeWidth="1" />
              <line x1="100" y1="20" x2="100" y2="23" stroke="#3D2411" strokeWidth="1" />
              <line x1="125" y1="20" x2="125" y2="23" stroke="#3D2411" strokeWidth="1" />

              {/* Flag at the back */}
              <line x1="172" y1="48" x2="180" y2="35" stroke="#3D2411" strokeWidth="1.5" />
              <path d="M180 35L173 39L178 43Z" fill="#C9A227" />

              {/* Rippling water wave trail behind the boat */}
              {!isMobile && (
                <motion.path
                  d="M10 57C-10 59 -30 55 -50 58"
                  stroke="#FFF8EC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                  animate={{ strokeDashoffset: [0, -30] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Layer 9: Floating Leaves bobbing on water */}
      {!isMobile && (
        <div className="absolute bottom-[5%] left-0 w-full h-[15%] z-20 pointer-events-none select-none">
          {/* Leaf 1 */}
          <motion.svg
            animate={{
              y: [0, -4, 0],
              x: [0, 5, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[20%] top-[10%] w-6 h-6 text-[#14532D]/40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17,8C8,8 4,16 4,16C4,16 12,20 20,12C20,12 19,9 17,8Z" />
          </motion.svg>
          {/* Leaf 2 */}
          <motion.svg
            animate={{
              y: [0, -6, 0],
              x: [0, -4, 0],
              rotate: [0, -12, 12, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[25%] top-[40%] w-8 h-8 text-[#14532D]/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17,8C8,8 4,16 4,16C4,16 12,20 20,12C20,12 19,9 17,8Z" />
          </motion.svg>
        </div>
      )}

      {/* ===================================================
          HERO CONTENT OVERLAY (FOREGROUND)
          =================================================== */}

      {/* Semi-transparent overlay to ensure text stands out beautifully */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14532D]/10 via-[#14532D]/20 to-[#E2EAF4]/90 z-20" />

      {/* Content Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-44 text-center flex flex-col items-center">
        
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-[#14532D]/20 bg-[#FFF8EC]/60 backdrop-blur-md inline-flex items-center shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2.5 animate-pulse" />
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-sans font-bold">
            Luxury Backwater Experiences in Kerala
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-dark tracking-wide max-w-4xl mb-6 leading-[1.15] drop-shadow-sm"
        >
          Experience the Magic of <br />
          <span className="text-primary italic font-normal">Kerala Backwaters</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-lg text-dark/80 max-w-2xl font-sans font-light leading-relaxed mb-10"
        >
          Cruise through breathtaking backwaters aboard our luxury houseboats and create unforgettable memories with Phenix Cruise.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16 z-30"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-primary text-white hover:bg-primary-hover rounded-luxury font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-premium active:scale-95 flex items-center justify-center border border-primary/10"
          >
            Book Your Cruise
          </a>
          <a
            href="#packages"
            className="px-8 py-4 bg-[#FFF8EC]/80 hover:bg-white text-primary rounded-luxury border border-primary/20 font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md active:scale-95 flex items-center justify-center shadow-sm hover:shadow-md"
          >
            Explore Packages
          </a>
        </motion.div>

        {/* Floating Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl glass-panel shadow-premium p-8 rounded-luxury border border-white/60 z-30"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center border-r last:border-r-0 border-primary/10 px-4">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs md:text-sm font-sans tracking-wide uppercase text-dark/70 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Premium Wave Effect Overlay */}
      <svg
        className="waves z-30"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="parallax-waves">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(248, 250, 252, 0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(248, 250, 252, 0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(248, 250, 252, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F8FAFC" />
        </g>
      </svg>
    </section>
  );
}
