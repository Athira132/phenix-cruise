import Image from "next/image";
import { motion } from "framer-motion";
import { FaShip, FaUsers, FaUtensils, FaMap, FaLock, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaShip, title: "Luxury Boats", desc: "Top-tier houseboats with air-conditioned premium rooms, sun decks, and modern amenities." },
  { icon: FaUsers, title: "Experienced Crew", desc: "Fully certified, professional captains and crew members dedicated to your safety." },
  { icon: FaUtensils, title: "Authentic Kerala Food", desc: "Traditional Kerala dishes prepared fresh on board by private chefs, including Karimeen and Toddy shop specials." },
  { icon: FaLock, title: "Private Cruises", desc: "100% private boat bookings for intimate honeymoons, family outings, and corporate retreats." },
  { icon: FaMap, title: "Scenic Backwaters", desc: "Curated cruise paths displaying the lush palms, beautiful lagoons, and narrow canals of Akalappuzha." },
  { icon: FaShieldAlt, title: "Safe & Comfortable", desc: "Equipped with adult and child life jackets, safety equipment, and maintained under strict sanitization." },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Segment: Side-by-side Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          
          {/* Image Column (approximately 40-45% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-luxury overflow-hidden shadow-premium group">
              <Image
                src="https://i.ibb.co/B51fLF7w/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg"
                alt="Scenic Kerala Backwaters Houseboat Cruise"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Decorative Gold Frame underlay */}
            <div className="absolute -inset-3 border border-accent/20 rounded-luxury -z-1 translate-x-1.5 translate-y-1.5 pointer-events-none" />
          </motion.div>

          {/* Content Column (approximately 55-60% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
                ABOUT OUR SERVICE
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-6">
                Experience the Best Akalappuzha Boating Service
              </h2>
              <div className="text-dark/80 font-sans font-light leading-relaxed text-base md:text-lg flex flex-col gap-5">
                <p>
                  Welcome to Phoenix Cruise, where luxury meets the untouched serenity of Kozhikode’s backwaters. As the premier <strong>Akalappuzha Boating Service</strong>, we curate premium houseboat journeys and boat rides that invite you to slow down and glide through palm-fringed village canals, emerald paddy fields, and wide lakes. Enjoy unforgettable backwater experiences with our trusted Akalappuzha boat service, offering safe, scenic, and memorable boat rides for families, couples, tourists, and groups.
                </p>
                <p>
                  Whether you are planning a romantic sunset tour, a family boating excursion, or a private group celebration, our services are tailored to your needs. On board, our experienced crew ensures the highest standards of safety, comfort, and attentive hospitality. We also take pride in serving authentic, freshly prepared Kerala cuisine cooked on board, ensuring every moment of your cruise is comfortable, memorable, and deeply relaxing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Segment: Feature Cards Grid (Neat 3 columns full-width below image and content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-primary/5">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
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
    </section>
  );
}
