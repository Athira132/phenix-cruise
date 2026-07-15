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
      className="relative min-h-screen lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-slate-950 select-none animate-fadeIn"
    >
      {/* ===================================================
          LEFT PANEL: Classy Editorial Content Column
          =================================================== */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 md:px-16 pt-32 pb-16 lg:py-0 bg-slate-950 relative z-10 border-r border-white/5">
        {/* Subtle decorative gold light glow background */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#C9A227]/5 rounded-full blur-[80px] pointer-events-none -z-1" />

        <div className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col items-start space-y-6">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md inline-flex items-center"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
            <span className="text-white text-[10px] uppercase tracking-[0.25em] font-sans font-semibold">
              Luxury Backwater Experiences
            </span>
          </motion.div>

          {/* Heading - Editorial style */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-extrabold text-white tracking-wide leading-[1.1] text-left"
          >
            Experience Kerala&apos;s <br />
            <span className="text-[#C9A227]">Luxury Backwater</span> Cruise
          </motion.h1>

          {/* Supporting description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-300 text-sm sm:text-base font-sans font-light tracking-wide leading-relaxed text-left max-w-md"
          >
            Glide through palm-fringed channels and majestic lagoons aboard our custom wooden houseboats. Authentic hospitality meets modern design.
          </motion.p>

          {/* Redesigned Premium Buttons (Larger, 16px rounded corners, shadows) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-row space-x-4 sm:space-x-6 w-full justify-start items-center pt-2"
          >
            <Link
              href="/booking"
              className="px-8 sm:px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-[16px] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 border border-white/10"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="px-8 sm:px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-[16px] border border-white/10 font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:-translate-y-1 active:scale-95 shadow-md hover:shadow-premium"
            >
              Explore Packages
            </Link>
          </motion.div>

          {/* Floated stats inside content column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 gap-y-4 gap-x-6 w-full pt-8 border-t border-white/5"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-start justify-center">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C9A227] mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] font-sans tracking-wide uppercase text-slate-400 font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===================================================
          RIGHT PANEL: Editorial Hero Visual Column
          =================================================== */}
      <div className="w-full lg:w-[55%] relative h-[50vh] lg:h-full z-0 overflow-hidden bg-slate-950">
        {/* Main visual Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg"
            alt="Phenix Cruise traditional luxury Kerala houseboat sailing on Alleppey backwaters"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-95"
          />
        </motion.div>

        {/* Asymmetrical gradient overlays (35% shading) to balance visual framing */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent z-1 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent z-1 block lg:hidden" />
        <div className="absolute inset-0 bg-black/20 z-1" />

        {/* Asymmetric curved layout frame overlay */}
        <div className="absolute bottom-6 right-6 z-10 bg-slate-950/60 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl hidden md:flex items-center space-x-3 shadow-premium">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="text-white text-xs font-sans tracking-wider uppercase font-semibold">
            Punnamada Lake, Alleppey
          </span>
        </div>
      </div>
    </section>
  );
}
