import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Day Cruise in Akalapuzha",
    actionText: "Explore Day Cruise",
    linkText: "Explore our Akalapuzha Day Cruise",
    image: "https://i.ibb.co/9kzPswmC/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    id: "day-package",
    alt: "Day Cruise in Akalapuzha backwaters scenic Shikara boat cruise",
    position: "center",
  },
  {
    title: "Houseboat Experience in Akalapuzha",
    actionText: "Explore Houseboat",
    linkText: "Discover our Akalapuzha Houseboat Experience",
    image: "https://i.ibb.co/9k6JQ9Hn/Whats-App-Image-2026-07-14-at-1-19-56-PM.jpg",
    id: "family-package",
    alt: "Akalapuzha Phoenix Cruise traditional wooden houseboat cruise in Kerala",
    position: "center",
  },
  {
    title: "Family & Group Cruise in Akalapuzha",
    actionText: "Explore Family Cruise",
    linkText: "Plan a Family & Group Cruise in Akalapuzha",
    image: "/images/family_group_cruise.jpg",
    id: "couple-package",
    alt: "Family and group enjoying Akalapuzha backwater boat cruise",
    position: "center",
  },
  {
    title: "Sunset Cruise in Akalapuzha",
    actionText: "Explore Sunset Cruise",
    linkText: "Experience our Akalapuzha Sunset Cruise",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    id: "sunset-cruise",
    alt: "Akalapuzha Kerala sunset boat cruise with Phoenix Cruise",
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

        {/* 4 Prominent Experience Cards in ONE SINGLE ROW on Desktop (4-Column Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cruises.map((cruise, idx) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg bg-slate-900 aspect-[4/3] border border-slate-100 flex flex-col justify-end"
            >
              {/* Prominent Landscape Image */}
              <Image
                src={cruise.image}
                alt={cruise.alt}
                fill
                sizes="(max-w-768px) 100vw, 25vw"
                style={{ objectFit: "cover", objectPosition: cruise.position }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Bottom Overlay with Descriptive Title & Action */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-5 sm:p-6 flex flex-col justify-end text-left z-10">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300 line-clamp-2">
                  {cruise.title}
                </h3>
                <Link
                  href={`/services/${cruise.id}`}
                  title={cruise.linkText}
                  className="w-full text-center py-2.5 px-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 border border-white/10"
                >
                  {cruise.actionText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
