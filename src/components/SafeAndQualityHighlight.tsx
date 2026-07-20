import Image from "next/image";
import { motion } from "framer-motion";

export default function SafeAndQualityHighlight() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Safety & Cruise Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg bg-black aspect-[16/10]"
          >
            <Image
              src="https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg"
              alt="Safe Akalapuzha Boat Ride"
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-8 md:p-10 flex flex-col justify-end text-left">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1.5 font-sans">
                SAFETY FIRST
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Safe &amp; Comfortable
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-200 font-normal max-w-md">
                Well-maintained boats, life jackets, and experienced crew for complete peace of mind.
              </p>
            </div>
          </motion.div>

          {/* Fresh Kerala Food Visual Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg bg-black aspect-[16/10]"
          >
            <Image
              src="https://i.ibb.co/YJjmvNQ/image.png"
              alt="Fresh Kerala Food Onboard"
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="opacity-85 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-8 md:p-10 flex flex-col justify-end text-left">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1.5 font-sans">
                DELICIOUS DINING
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                Fresh Kerala Flavours
              </h3>
              <p className="font-sans text-xs md:text-sm text-slate-200 font-normal max-w-md">
                Enjoy authentic Kerala meals, Karimeen fry, and fresh seafood prepared live on board.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
