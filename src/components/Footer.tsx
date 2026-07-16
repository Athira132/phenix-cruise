import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white/80 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      {/* Decorative backwaters waves shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-5 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-32 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0H0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex flex-col select-none">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white">
                Phoenix Cruise
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-semibold">
                Luxury Backwaters
              </span>
            </Link>
            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Providing trusted Akalapuzha Boating Service with safe, comfortable, and memorable backwater experiences for tourists, families, and groups across Kerala.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm font-light text-white/60">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="hover:text-accent transition-colors">Photo Gallery</Link></li>
              <li><Link href="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Packages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Packages</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm font-light text-white/60">
              <li><Link href="/services" className="hover:text-accent transition-colors">Basic Cruise</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Deluxe Cruise</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Premium Cruise</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Luxury Cruise</Link></li>
            </ul>
          </div>

          {/* Column 4: Premium Social Connections (Connect With Us) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Connect With Us</h4>
            <p className="font-sans text-xs text-white/60 font-light leading-relaxed">
              Follow our backwater journeys through Alleppey on our official profiles for media highlights and seasonal updates.
            </p>
            <div className="flex items-center space-x-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:scale-110 hover:shadow-[0_0_15px_rgba(225,48,108,0.35)] transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.35)] transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.35)] transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-sans text-white/40 font-light space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} Phoenix Cruise. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
