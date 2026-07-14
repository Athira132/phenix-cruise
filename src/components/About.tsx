import Image from "next/image";
import { motion } from "framer-motion";
import { FaShip, FaUsers, FaUtensils, FaMap, FaLock, FaTags } from "react-icons/fa";

const features = [
  { icon: FaShip, title: "Luxury Boats", desc: "Top-tier houseboats with air-conditioned premium rooms, sun decks, and modern amenities." },
  { icon: FaUsers, title: "Experienced Crew", desc: "Fully certified, professional captains and crew members dedicated to your safety." },
  { icon: FaUtensils, title: "Authentic Kerala Food", desc: "Traditional Kerala dishes prepared fresh on board by private chefs, including Karimeen and Toddy shop specials." },
  { icon: FaMap, title: "Scenic Backwaters", desc: "Curated cruise paths displaying the lush palms, beautiful lagoons, and narrow canals of Alleppey." },
  { icon: FaLock, title: "Private Cruises", desc: "100% private boat bookings for intimate honeymoons, family outings, and corporate retreats." },
  { icon: FaTags, title: "Affordable Packages", desc: "Transparent, value-driven pricing structures for day trips, night stays, and customized journeys." },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-luxury overflow-hidden shadow-premium group">
              <Image
                src="https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg"
                alt="Scenic Kerala Backwaters Houseboat Cruise"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass decorative overlay card */}
              <div className="absolute bottom-6 right-6 left-6 p-6 glass-panel rounded-luxury border border-white/30 shadow-premium pointer-events-none">
                <span className="text-accent text-xs font-sans tracking-widest uppercase font-semibold block mb-1">
                  Phenix Experience
                </span>
                <span className="text-dark font-serif text-lg font-bold">
                  True Luxury Meets Serene Nature
                </span>
              </div>
            </div>

            {/* Decorative Gold Frame underlay */}
            <div className="absolute -inset-3 border border-accent/20 rounded-luxury -z-1 translate-x-1.5 translate-y-1.5 pointer-events-none" />
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
                Since 2011 • Luxury Hospitality
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-6">
                Welcome to Phenix Cruise
              </h2>
              <p className="text-dark/80 font-sans font-light leading-relaxed text-base md:text-lg mb-12">
                Phenix Cruise offers unforgettable luxury houseboat experiences through the beautiful backwaters of Kerala. Whether you're planning a family vacation, honeymoon, corporate outing, or day cruise, we ensure comfort, elegance, authentic cuisine, and exceptional hospitality.
              </p>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-6 bg-white rounded-luxury border border-primary/5 hover:border-primary/20 hover:shadow-premium transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4 shadow-sm">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {feat.title}
                    </h3>
                    <p className="font-sans text-xs text-dark/70 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
