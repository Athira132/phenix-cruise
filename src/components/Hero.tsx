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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-slate-950 text-white select-none overflow-hidden pt-28 pb-16 lg:py-0"
    >
      {/* ===================================================
          FULL-WIDTH HERO BOAT IMAGE BACKGROUND
          (Boat positioned on right, clean text space on left)
          =================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 bg-slate-950"
      >
        <Image
          src="https://i.ibb.co/pBQY8xcz/image.png"
          alt="Phoenix Cruise Akalapuzha boat service backwater cruise"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          className="opacity-95"
        />
      </motion.div>

      {/* Subtle left-side dark gradient overlay for text readability without darkening the vibrant boat on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/35 to-transparent z-1" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/40 z-1 pointer-events-none" />

      {/* ===================================================
          HERO CONTENT OVERLAY (LEFT ALIGNED)
          =================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-16 lg:pt-28 pb-12 flex flex-col justify-center h-full">
        <div className="w-full lg:w-[58%] text-left flex flex-col items-start space-y-5">
          
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
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
            className="text-4xl sm:text-5xl lg:text-[64px] font-serif font-extrabold text-[#F8FAFC] tracking-wide leading-[1.1] text-left uppercase drop-shadow-md"
          >
            Cruise The <br />
            <span className="text-[#C9A227] normal-case">Akalapuzha Backwaters</span>
          </motion.h1>

          {/* Minimal Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-200 text-base sm:text-lg max-w-lg font-sans font-normal leading-relaxed text-left drop-shadow"
          >
            Experience scenic backwaters, fresh Kerala food, and safe boat rides.
          </motion.p>

          {/* Primary Booking Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-2 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-premium hover:-translate-y-1 active:scale-95 inline-block text-center border border-white/10"
            >
              Book Your Cruise
            </a>
          </motion.div>

          {/* Quick Stats Counter Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-xl border-t border-white/20 pt-6 mt-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C9A227] tracking-wide mb-0.5 drop-shadow">
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
