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
          href="tel:+918138866919"
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
          href="https://wa.me/918138866919?text=Hello%20Phenix%20Cruise%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20cruise%20packages.%0A%0APlease%20share%20the%20available%20options.%0A%0AThank%20you."
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
