import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    label: "SAFETY FIRST",
    title: "Safe & Comfortable",
    image: "https://i.ibb.co/60kjvbqw/Whats-App-Image-2026-07-14-at-1-19-56-PM.jpg",
    alt: "Safe & Comfortable Phoenix Cruise boat ride",
    position: "center 35%",
  },
  {
    label: "DELICIOUS DINING",
    title: "Fresh Kerala Flavours",
    image: "https://i.ibb.co/YJjmvNQ/image.png",
    alt: "Fresh Kerala Food Onboard",
    position: "center",
  },
  {
    label: "COMFORT & RELAX",
    title: "Feel at Home",
    image: "https://i.ibb.co/TqJDz1Ss/Whats-App-Image-2026-07-14-at-1-19-42-PM-1.jpg",
    alt: "Feel at home cruise experience",
    position: "center",
  },
];

export default function SafeAndQualityHighlight() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] border border-slate-100"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: item.position }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 md:p-8 flex flex-col justify-end text-left">
                {item.label && (
                  <span className="text-[#C9A227] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 font-sans">
                    {item.label}
                  </span>
                )}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
