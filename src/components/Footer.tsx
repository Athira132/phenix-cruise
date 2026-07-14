import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Phenix Cruise newsletter!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-secondary text-white/80 py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-32 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0H0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex flex-col select-none">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-white">
                Phenix Cruise
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-semibold">
                Luxury Backwaters
              </span>
            </a>
            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Phenix Cruise offers award-winning luxury houseboat stays and day cruises through the pristine backwater lakes of Alleppey, Kerala.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="Facebook">
                <FaFacebookF className="text-xs" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="Instagram">
                <FaInstagram className="text-xs" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="YouTube">
                <FaYoutube className="text-xs" />
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" aria-label="TripAdvisor">
                <FaTripadvisor className="text-xs" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm font-light text-white/60">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#cruises" className="hover:text-accent transition-colors">Our Cruises</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Photo Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Packages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Packages</h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm font-light text-white/60">
              <li><a href="#packages" className="hover:text-accent transition-colors">Basic Cruise</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Deluxe Cruise</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Premium Cruise</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Luxury Cruise</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="font-sans text-xs text-white/60 font-light leading-relaxed mb-4">
              Subscribe to get exclusive seasonal discounts, custom luxury cruise updates, and travel packages.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-sm">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-luxury text-xs text-white placeholder-white/40 focus:outline-none focus:border-primary flex-grow font-sans"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-luxury font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-sans text-white/40 font-light space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} Phenix Cruise. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#contact" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-accent transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
