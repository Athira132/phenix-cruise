import Image from "next/image";
import { motion } from "framer-motion";
import { FaShip, FaUsers, FaUtensils, FaMap, FaLock, FaShieldAlt } from "react-icons/fa";

const features = [
  { icon: FaShip, title: "Luxury Boats", desc: "Top-tier houseboats with air-conditioned premium rooms, sun decks, and modern amenities." },
  { icon: FaUsers, title: "Experienced Crew", desc: "Fully certified, professional captains and crew members dedicated to your safety." },
  { icon: FaUtensils, title: "Authentic Kerala Food", desc: "Traditional Kerala dishes prepared fresh on board by private chefs, including Karimeen and Toddy shop specials." },
  { icon: FaLock, title: "Private Cruises", desc: "100% private boat bookings for intimate honeymoons, family outings, and corporate retreats." },
  { icon: FaMap, title: "Scenic Backwaters", desc: "Curated cruise paths displaying the lush palms, beautiful lagoons, and narrow canals of Akalapuzha." },
  { icon: FaShieldAlt, title: "Safe & Comfortable", desc: "Equipped with adult and child life jackets, safety equipment, and maintained under strict sanitization." },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Prominent Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-slate-100">
              <Image
                src="https://i.ibb.co/Kc9rJqF9/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"
                alt="Phoenix Cruise Akalapuzha Boat Service"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Short Concise Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-3">
                ABOUT PHOENIX CRUISE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-5">
                Your Time on the Water
              </h2>
              <p className="text-dark/80 font-sans text-base md:text-lg leading-relaxed mb-6 font-normal">
                Phoenix Cruise offers peaceful backwater boat rides across Akalapuzha lake in Kozhikode, Kerala. Enjoy authentic Kerala food, comfortable seating, and scenic backwater views with complete safety.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md inline-block"
                >
                  Book Your Cruise
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
