import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function StickyButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 pointer-events-none">
      <AnimatePresence>
        {/* Call Now Button */}
        <motion.a
          key="call"
          href="tel:+919876543210"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="pointer-events-auto w-12 h-12 bg-primary hover:bg-primary-hover text-white flex items-center justify-center rounded-full shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-hover active:scale-95"
          title="Call Phenix Cruise"
        >
          <FaPhoneAlt className="text-lg" />
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          key="whatsapp"
          href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20luxury%20cruise%20with%20Phenix%20Cruise."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="pointer-events-auto w-12 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center rounded-full shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-hover active:scale-95"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a>

        {/* Back to Top */}
        {showScrollTop && (
          <motion.button
            key="scrollTop"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="pointer-events-auto w-12 h-12 bg-white text-primary hover:bg-sand border border-primary/10 flex items-center justify-center rounded-full shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-hover active:scale-95"
            title="Back to Top"
          >
            <HiArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
