import { useEffect, useState } from "react";
import Image from "next/image";
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-secondary select-none"
    >
      {/* ===================================================
          CINEMATIC VIDEO BACKGROUND LAYER
          =================================================== */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-slate-950">
        <video
          src="/hero-bg.mp4"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster="https://i.ibb.co/DHkc555F/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* Light dark overlay (25% opacity) to ensure readability while keeping the video clearly visible */}
      <div className="absolute inset-0 bg-black/25 z-1" />

      {/* ===================================================
          LEFT-ALIGNED HERO CONTENT OVERLAY
          =================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-20 flex flex-col justify-center h-full">
        <div className="w-full lg:w-[55%] text-left flex flex-col items-start">
          
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
            <span className="text-white text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Luxury Backwater Experiences
            </span>
          </motion.div>

          {/* Heading - Large (76px desktop), extrabold, elegant, white, with accent highlight and stronger shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[76px] font-serif font-extrabold text-white tracking-wide mb-6 leading-[1.1] drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] text-left max-w-xl lg:max-w-3xl"
          >
            Experience Kerala&apos;s <br className="hidden sm:inline" />
            <span className="text-[#C9A227]">Luxury Backwater</span> Cruise
          </motion.h1>

          {/* Subheading - Light gray (#F8FAFC), max 3 lines, semibold weight with stronger shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#F8FAFC] text-sm sm:text-base md:text-lg max-w-xl font-sans font-semibold tracking-wide leading-relaxed mb-8 text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Cruise through breathtaking backwaters aboard our luxury houseboats and create unforgettable memories with Phenix Cruise.
          </motion.p>

          {/* Call to Actions - Left-aligned, rounded-luxury, prominent hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-row space-x-4 sm:space-x-6 mb-12 w-full justify-start items-center"
          >
            <a
              href="#booking"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary-hover text-white rounded-luxury font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-0.5 active:scale-95 border border-white/10"
            >
              Book Now
            </a>
            <a
              href="#packages"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/20 hover:bg-white/30 text-white rounded-luxury border border-white/30 font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:scale-95 shadow-md"
            >
              Explore Packages
            </a>
          </motion.div>

          {/* Left-Aligned Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full bg-white/85 backdrop-blur-md shadow-premium p-6 rounded-luxury border border-white/60"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start justify-center border-r last:border-r-0 border-slate-300 pr-2">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C9A227] mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] sm:text-xs font-sans tracking-wide uppercase text-[#1E293B] font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
