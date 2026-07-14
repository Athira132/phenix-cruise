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
  const [scrolledY, setScrolledY] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // If mobile or YouTube takes too long to load, set fallback to true to trigger direct MP4 stream
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setUseFallback(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary select-none"
    >
      {/* ===================================================
          CINEMATIC VIDEO BACKGROUND LAYER
          =================================================== */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${scrolledY * 0.2}px)` }}
      >
        {!useFallback ? (
          /* Premium YouTube Loopable drone track of Alleppey houseboat */
          <iframe
            src="https://www.youtube.com/embed/k6M3YbWX284?autoplay=1&mute=1&loop=1&playlist=k6M3YbWX284&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Kerala Backwaters Houseboat drone cinematic video background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[115vw] h-[115vh] -translate-x-1/2 -translate-y-1/2 object-cover scale-125 opacity-70"
            onError={() => setUseFallback(true)}
          />
        ) : (
          /* High-performance direct MP4 tropical stream fallback */
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-down-the-river-in-a-bamboo-canoe-6804-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Dark Cinematic Gradient Overlay (45% opacity for readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-slate-50 z-1" />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-44 text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md inline-flex items-center shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2.5 animate-pulse" />
          <span className="text-white text-xs uppercase tracking-[0.3em] font-sans font-semibold">
            Luxury Backwater Experiences in Kerala
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white tracking-wide max-w-4xl mb-6 leading-[1.15] drop-shadow-md"
        >
          Experience the Magic of <br />
          <span className="text-[#C9A227] italic font-normal">Kerala Backwaters</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-white/90 max-w-2xl font-sans font-light leading-relaxed mb-10"
        >
          Cruise through breathtaking backwaters aboard our luxury houseboats and create unforgettable memories with Phenix Cruise.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-primary text-white hover:bg-primary-hover rounded-luxury font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-premium active:scale-95 flex items-center justify-center border border-white/10"
          >
            Book Your Cruise
          </a>
          <a
            href="#packages"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-luxury border border-white/20 font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-md active:scale-95 flex items-center justify-center shadow-sm"
          >
            Explore Packages
          </a>
        </motion.div>

        {/* Floating Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-5xl glass-panel shadow-premium p-8 rounded-luxury border border-white/40"
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
        className="waves z-10"
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
