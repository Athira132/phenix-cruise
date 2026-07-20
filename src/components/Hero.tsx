import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-secondary select-none"
    >
      {/* ===================================================
          FADE-IN HERO IMAGE BACKGROUND LAYER
          =================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 bg-slate-950"
      >
        <Image
          src="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"
          alt="Phoenix Cruise Akalapuzha boat service backwater cruise"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          className="opacity-90"
        />
      </motion.div>

      {/* Subtle top-to-bottom dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/50 z-1" />

      {/* ===================================================
          HERO CONTENT OVERLAY
          =================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-36 pb-20 flex flex-col justify-center h-full">
        <div className="w-full lg:w-[60%] text-left flex flex-col items-start">
          
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
            <span className="text-white text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              Phoenix Cruise Akalapuzha
            </span>
          </motion.div>

          {/* Short, Powerful Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-extrabold text-[#F8FAFC] tracking-wide leading-[1.1] text-left mb-5 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            Cruise The <br />
            <span className="text-[#C9A227] normal-case">Akalapuzha Backwaters</span>
          </motion.h1>

          {/* Minimal Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#F8FAFC] text-base sm:text-lg max-w-lg font-sans font-medium tracking-wide leading-relaxed mb-8 text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Experience scenic backwaters, fresh Kerala food, and safe boat rides.
          </motion.p>

          {/* Primary Booking Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-row space-x-4 mb-10 w-full justify-start items-center"
          >
            <a
              href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 border border-white/10 text-center"
            >
              Book Your Cruise
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl border-t border-white/15 pt-6"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C9A227] tracking-wide mb-0.5 drop-shadow-md">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-slate-200 font-medium">
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
