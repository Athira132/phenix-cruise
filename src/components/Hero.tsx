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
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-1" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Short Heading & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
              <span className="text-white text-xs uppercase tracking-[0.25em] font-sans font-semibold">
                Phoenix Cruise Akalapuzha
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[60px] font-serif font-extrabold text-[#F8FAFC] tracking-wide leading-[1.1] text-left mb-5 uppercase"
            >
              Cruise The <br />
              <span className="text-[#C9A227] normal-case">Akalapuzha Backwaters</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-slate-300 text-base sm:text-lg max-w-lg font-sans font-normal leading-relaxed mb-8 text-left"
            >
              Experience scenic backwaters, fresh Kerala food, and safe boat rides with Phoenix Cruise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-10 w-full"
            >
              <a
                href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 sm:px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 inline-block text-center border border-white/10"
              >
                Book Your Cruise
              </a>
            </motion.div>

            {/* Key Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full border-t border-white/15 pt-6"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-extrabold text-[#C9A227] tracking-wide mb-0.5">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-slate-300 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Full Boat Visual Showcase (100% Uncropped & Visible) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-6 relative w-full"
          >
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
              <Image
                src="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"
                alt="Phoenix Cruise Akalapuzha boat - full view"
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
