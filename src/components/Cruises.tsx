import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Day Cruise",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    id: "day-package",
    alt: "Daytime Akalapuzha backwater boat cruise",
    position: "center 75%",
  },
  {
    title: "Houseboat Experience",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    id: "family-package",
    alt: "Traditional Kerala wooden houseboat experience",
    position: "center 65%",
  },
  {
    title: "Overnight Stay",
    image: "/images/overnight_stay_bedroom.jpg",
    id: "sunset-cruise",
    alt: "Luxury houseboat overnight stay bedroom suite",
    position: "center",
  },
  {
    title: "Family & Group Cruise",
    image: "/images/family_group_cruise.jpg",
    id: "couple-package",
    alt: "Family & group backwater cruise experience",
    position: "center",
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

        {/* EXACTLY 4 Compact Landscape Cards in ONE SINGLE ROW on Desktop (4-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {cruises.map((cruise, idx) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md bg-slate-900 aspect-[16/11] border border-slate-100 flex flex-col justify-end"
            >
              {/* Compact Landscape Image with Subject-Centered Framing */}
              <Image
                src={cruise.image}
                alt={cruise.alt}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                style={{ objectFit: "cover", objectPosition: cruise.position }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Bottom Overlay with Short Title & Action */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end text-left z-10">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-[#C9A227] transition-colors duration-300">
                  {cruise.title}
                </h3>
                <Link
                  href={`/services/${cruise.id}`}
                  className="w-full text-center py-2 px-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-sans font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 border border-white/10"
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
