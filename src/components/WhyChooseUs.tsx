import { motion } from "framer-motion";
import { FaShip, FaCertificate, FaHeadset, FaTag, FaBolt, FaAward, FaSoap, FaShieldAlt } from "react-icons/fa";

const benefits = [
  { icon: FaShip, title: "Luxury Houseboats", desc: "Top-tier premium wooden fleets with sun decks, glass structures, and air-conditioned suites." },
  { icon: FaCertificate, title: "Certified Crew", desc: "Our captains and cooks are fully licensed, certified, and trained in first aid and safety." },
  { icon: FaHeadset, title: "24×7 Support", desc: "Round-the-clock booking assistance and live support during your backwater cruise journey." },
  { icon: FaTag, title: "Affordable Pricing", desc: "Enjoy fully transparent pricing with zero hidden charges. Best value for luxury backwater tours." },
  { icon: FaBolt, title: "Instant Booking", desc: "Secure reservation system with fast confirmation. Real-time availability updates." },
  { icon: FaAward, title: "Best Hospitality", desc: "Award-winning customer service, private chef dining, and traditional greeting welcome." },
  { icon: FaSoap, title: "Clean & Hygienic", desc: "Strict sanitization protocols after every trip. Fresh linens, clean bedrooms, and sanitized kitchens." },
  { icon: FaShieldAlt, title: "Safe Travel", desc: "Equipped with adult and child life jackets, fire extinguishers, and first-aid kits on board." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative vector points */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none bg-[radial-gradient(#0F766E_1.5px,transparent_1.5px)] [background-size:20px_20px] w-64 h-64" />
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none bg-[radial-gradient(#0F766E_1.5px,transparent_1.5px)] [background-size:20px_20px] w-64 h-64" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Our Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Why Choose Phenix Cruise
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            We are dedicated to providing the ultimate, premium, and safe backwater experience in Alleppey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-sand/10 border border-primary/5 hover:border-primary/20 rounded-luxury p-8 hover:shadow-premium transition-all duration-300 group text-center flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-primary/5 mb-6 group-hover:scale-110">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-serif text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-dark/60 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
