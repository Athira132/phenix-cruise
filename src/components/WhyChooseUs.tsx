import Image from "next/image";
import { motion } from "framer-motion";

const whyChooseUsItems = [
  {
    title: "Safety First",
    image: "https://i.ibb.co/60kjvbqw/Whats-App-Image-2026-07-14-at-1-19-56-PM.jpg",
    alt: "Safe & Well-Maintained Phoenix Cruise Boat",
    position: "center 40%",
  },
  {
    title: "Quality Food",
    image: "/images/kerala_food_feast.jpg",
    alt: "Authentic Kerala Feast Spread",
    position: "center",
  },
  {
    title: "Family Friendly",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    alt: "Family & Group Backwater Cruise Experience",
    position: "center",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            EXCELLENCE ON WATER
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            WHY CHOOSE US
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* 3 Landscape Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {whyChooseUsItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[16/10] border border-slate-100"
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
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#C9A227] transition-colors duration-300">
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
