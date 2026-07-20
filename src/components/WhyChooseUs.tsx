import Image from "next/image";
import { motion } from "framer-motion";

const visualHighlights = [
  {
    title: "Luxury Houseboat Fleet",
    desc: "Premium wooden fleets with comfortable seating, sun decks, and modern facilities.",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    title: "Scenic Backwaters",
    desc: "Glide through the calm lagoons and palm-fringed channels of Akalapuzha.",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
  },
  {
    title: "Memorable Experience",
    desc: "Authentic hospitality, privacy, and dedicated crew for your group or family.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            WHY PHOENIX CRUISE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            A Better Way to Explore
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-4" />
          <p className="text-dark/70 font-sans font-normal text-sm md:text-base">
            Clean, scenic, and memorable backwater boating on Akalapuzha lake.
          </p>
        </div>

        {/* 3-Image Visual Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visualHighlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="font-serif text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-dark/70 font-normal leading-relaxed">
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
