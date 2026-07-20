import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Day Cruise",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    id: "day-package",
    alt: "Day Cruise Akalapuzha",
  },
  {
    title: "Houseboat Experience",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    id: "family-package",
    alt: "Luxury Houseboat Experience",
  },
  {
    title: "Overnight Stay",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    id: "sunset-cruise",
    alt: "Overnight Stay Cruise",
  },
  {
    title: "Family Cruise",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    id: "couple-package",
    alt: "Family Cruise Akalapuzha",
  },
];

export default function Cruises() {
  return (
    <section id="cruises" className="py-12 md:py-20 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            CHOOSE YOUR EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            Find Your Perfect Cruise
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* 4 Wide Landscape Cards Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {cruises.map((cruise, idx) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[16/10] border border-slate-100 flex flex-col justify-end"
            >
              {/* Wide Landscape Image */}
              <Image
                src={cruise.image}
                alt={cruise.alt}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Bottom Overlay with Short Title & Action */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 md:p-8 flex items-end justify-between text-left z-10">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#C9A227] transition-colors duration-300">
                  {cruise.title}
                </h3>
                <Link
                  href={`/services/${cruise.id}`}
                  className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 border border-white/10 flex-shrink-0 ml-4"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
