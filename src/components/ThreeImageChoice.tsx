import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const choices = [
  {
    title: "Day Cruise",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    link: "/services/day-package",
    alt: "Day Cruise Akalapuzha",
  },
  {
    title: "Houseboat Experience",
    image: "https://i.ibb.co/9k6JQ9Hn/Whats-App-Image-2026-07-14-at-1-19-56-PM.jpg",
    link: "/services/family-package",
    alt: "Luxury Houseboat Experience",
  },
  {
    title: "Overnight Stay",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    link: "/services/sunset-cruise",
    alt: "Overnight Stay Cruise",
  },
];

export default function ThreeImageChoice() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {choices.map((choice, idx) => (
            <motion.div
              key={choice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-slate-900 aspect-[4/3] border border-slate-100"
            >
              <Image
                src={choice.image}
                alt={choice.alt}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                  {choice.title}
                </h3>
                <Link
                  href={choice.link}
                  className="inline-block self-start px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
