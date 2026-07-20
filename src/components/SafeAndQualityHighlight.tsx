import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    label: "SAFETY FIRST",
    title: "Safe & Comfortable",
    desc: "Well-maintained boats and a comfortable cruising experience.",
    image: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    alt: "Safe & Comfortable Phoenix Cruise boat ride",
  },
  {
    label: "DELICIOUS DINING",
    title: "Fresh Kerala Flavours",
    desc: "Fresh food prepared with quality ingredients and authentic Kerala taste.",
    image: "https://i.ibb.co/YJjmvNQ/image.png",
    alt: "Fresh Kerala Food Onboard",
  },
  {
    label: "COMFORT & RELAX",
    title: "Feel at Home",
    desc: "Enjoy a comfortable and relaxing cruise experience.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    alt: "Comfortable cruise experience",
  },
];

export default function SafeAndQualityHighlight() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] border border-slate-100"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-6 md:p-8 flex flex-col justify-end text-left">
                <span className="text-[#C9A227] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 font-sans">
                  {item.label}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-slate-200 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
