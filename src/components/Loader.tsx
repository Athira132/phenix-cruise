import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500); // Wait a brief moment after 100%
          return 100;
        }
        // Increment by random values to feel natural
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center loader-bg select-none"
        >
          <div className="text-center px-4 max-w-md w-full">
            {/* Elegant Logo / Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-serif text-primary tracking-wide mb-2"
            >
              Phoenix Cruise
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-dark/70 font-sans mb-12"
            >
              Luxury Backwater Experiences
            </motion.p>

            {/* Custom Circular or Linear Luxury Loader */}
            <div className="relative w-full h-[2px] bg-primary/10 rounded-full mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
              />
            </div>

            {/* Progress Percentage */}
            <div className="flex justify-between items-center text-xs font-sans text-dark/50">
              <span className="uppercase tracking-widest">Departing Soon</span>
              <span className="font-semibold text-primary">{progress}%</span>
            </div>
          </div>

          {/* Decorative Art deco or luxury emblem background */}
          <div className="absolute bottom-10 text-center opacity-30 text-[10px] tracking-[0.4em] uppercase text-dark">
            EST. 2011 • KERALA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
