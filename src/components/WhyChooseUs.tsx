import Image from "next/image";
import { motion } from "framer-motion";

const visualHighlights = [
  {
    title: "Tranquil Lake Reflections",
    image: "https://i.ibb.co/N2pwwXtT/image.png",
    alt: "Tranquil Lake Reflection Akalapuzha",
  },
  {
    title: "Lush Palm Shorelines",
    image: "https://i.ibb.co/0pPgJyPc/image.png",
    alt: "Lush Palm Shorelines Akalapuzha",
  },
  {
    title: "Calm Water Relaxation",
    image: "https://i.ibb.co/9kzPswmC/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    alt: "Calm Water Relaxation",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            KERALA BACKWATERS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            Tranquil Akalapuzha Views
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* 3-Image Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visualHighlights.map((item, idx) => (
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
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 md:p-8 flex flex-col justify-end text-left">
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
