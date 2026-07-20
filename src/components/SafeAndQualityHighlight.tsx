import { motion } from "framer-motion";
import { FaShieldAlt, FaUtensils } from "react-icons/fa";

export default function SafeAndQualityHighlight() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Safe Cruise Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm hover:shadow-premium transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <FaShieldAlt className="text-2xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald-700 block">
                  PASSENGER WELLBEING
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark">
                  Safe Cruise Experience
                </h3>
                <p className="font-sans text-xs md:text-sm text-dark/75 font-light leading-relaxed">
                  Enjoy a smooth and secure backwater journey with a carefully maintained boat and a safety-focused cruising experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quality Food Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm hover:shadow-premium transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <FaUtensils className="text-2xl" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-700 block">
                  FRESH CULINARY STANDARDS
                </span>
                <h3 className="font-serif text-2xl font-bold text-dark">
                  Quality Food Experience
                </h3>
                <p className="font-sans text-xs md:text-sm text-dark/75 font-light leading-relaxed">
                  Enjoy fresh, hygienically prepared food made with quality ingredients and authentic Kerala flavours.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
