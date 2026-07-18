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
          src="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg"
          alt="Phoenix Cruise traditional luxury Kerala boating on Akalapuzha backwaters"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-95"
        />
      </motion.div>

      {/* Subtle top-to-bottom dark gradient overlay (30–40%) for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/20 z-1" />

      {/* ===================================================
          LEFT-ALIGNED HERO CONTENT OVERLAY (Generous top padding to prevent navbar overlap)
          =================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-40 pb-28 flex flex-col justify-center h-full">
        <div className="w-full lg:w-[55%] text-left flex flex-col items-start">
          
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
            <span className="text-white text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Luxury Backwater Experiences
            </span>
          </motion.div>

          {/* Luxury Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[68px] font-serif font-extrabold text-[#F8FAFC] tracking-wide leading-[1.05] text-left mb-6 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            Experience The Best <br />
            <span className="text-[#C9A227] normal-case">Akalapuzha Boating Service</span>
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[#F8FAFC] text-sm sm:text-base md:text-lg max-w-xl font-sans font-semibold tracking-wide leading-relaxed mb-10 text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Enjoy unforgettable backwater experiences with our trusted Akalapuzha Boating Service, offering safe, scenic, and memorable boat rides for families, couples, tourists, and groups.
          </motion.p>

          {/* CTA Buttons (Larger, rounded-14px, premium hover lift) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-row space-x-4 sm:space-x-6 mb-14 w-full justify-start items-center"
          >
            <a
              href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-4 sm:py-4.5 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 border border-white/10 text-center"
            >
              Book Your Cruise
            </a>
            <Link
              href="/services"
              className="px-8 sm:px-10 py-4 sm:py-4.5 bg-white/20 hover:bg-white/30 text-white rounded-[14px] border border-white/30 font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-premium"
            >
              Explore Packages
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl mt-4 border-t border-white/10 pt-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-3xl sm:text-4xl font-serif font-extrabold text-[#C9A227] tracking-wide mb-1 drop-shadow-md">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-slate-300 font-bold">
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
