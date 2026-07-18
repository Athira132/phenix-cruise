import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${
          scrolled
            ? "glass-navbar shadow-premium py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col select-none group">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}>
              Phoenix Cruise
            </span>
            <span className={`font-sans text-[9px] uppercase tracking-[0.3em] font-semibold transition-colors duration-300 ${
              scrolled ? "text-accent" : "text-white/80"
            }`}>
              Luxury Backwaters
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      className={`font-sans text-sm tracking-wide font-medium transition-colors duration-300 hover:text-primary relative py-1 ${
                        isActive
                          ? (scrolled ? "text-primary" : "text-[#C9A227]")
                          : (scrolled ? "text-dark/80" : "text-white/90")
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Book Now Button */}
            <a
              href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition-all duration-300 bg-primary rounded-luxury hover:bg-primary-hover shadow-md group hover:shadow-premium"
            >
              <span className="relative text-sm tracking-widest uppercase font-semibold">
                Book Your Cruise
              </span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-primary hover:text-accent" : "text-white hover:text-[#C9A227]"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX className="text-3xl" /> : <HiMenuAlt3 className="text-3xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-sand flex flex-col justify-center px-12 md:px-24 py-20 lg:hidden"
          >
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#0F766E_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

            <div className="flex flex-col space-y-6 max-w-md">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl md:text-4xl text-primary hover:text-accent font-bold transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.2 }}
                className="pt-6"
              >
                <a
                  href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center inline-block px-8 py-4 font-sans font-bold text-white bg-primary hover:bg-primary-hover rounded-luxury tracking-widest uppercase transition-colors shadow-lg"
                >
                  Book Your Cruise
                </a>
              </motion.div>
            </div>
            
            <div className="absolute bottom-10 left-12 md:left-24 text-dark/50 text-xs">
              <p>Phoenix Cruise • Luxury Backwaters</p>
              <p className="mt-1">info@phoenixcruise.com • +91 81388 66919</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
