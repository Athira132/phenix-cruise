import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Day Cruise",
    description: "Enjoy a daytime voyage on Akalapuzha with local dining and scenic views.",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    id: "day-package",
  },
  {
    title: "Houseboat Experience",
    description: "Explore backwater channels onboard our luxury traditional wooden houseboats.",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    id: "family-package",
  },
  {
    title: "Overnight Stay",
    description: "Relax under the stars on peaceful water with full onboard amenities.",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    id: "sunset-cruise",
  },
  {
    title: "Family & Group Cruise",
    description: "Spacious seating and custom dining for unforgettable family gatherings.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    id: "couple-package",
  },
];

export default function Cruises() {
  return (
    <section id="cruises" className="py-12 md:py-20 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            CHOOSE YOUR EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            Find Your Perfect Cruise
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-4" />
          <p className="text-dark/70 font-sans font-normal text-sm md:text-base">
            Select from our backwater boat experiences on Akalapuzha lake.
          </p>
        </div>

        {/* 4 Large Image-Based Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {cruises.map((cruise, idx) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[3/4] border border-slate-100 flex flex-col justify-end"
            >
              {/* Large Card Image */}
              <Image
                src={cruise.image}
                alt={cruise.title}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 25vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end text-left z-10">
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {cruise.title}
                </h3>
                <p className="font-sans text-xs text-slate-200 font-normal leading-relaxed mb-5">
                  {cruise.description}
                </p>
                <div className="pt-1">
                  <Link
                    href={`/services/${cruise.id}`}
                    className="inline-block w-full text-center py-3 px-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 border border-white/10"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
