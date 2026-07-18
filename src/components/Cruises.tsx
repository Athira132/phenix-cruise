import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Day Package",
    description: "Enjoy a complete 5-hour daytime cruise on our premium Shikara Boat with fresh local lunch, tea, music, and complete onboard facilities.",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    id: "day-package",
  },
  {
    title: "Family Package",
    description: "Perfect backwater experience for families. For more details, contact us.",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    id: "family-package",
  },
  {
    title: "Couple Package",
    description: "Romantic couples getaway cruise. For more details, contact us.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
    id: "couple-package",
  },
  {
    title: "Sunset Cruise",
    description: "Witness the beautiful golden hour over the lake. For more details, contact us.",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    id: "sunset-cruise",
  },
];

export default function Cruises() {
  return (
    <section id="cruises" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sand/30 rounded-full blur-[120px] pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Premium Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Our Cruise Offerings
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Select from our carefully curated backwater cruise packages. Simply contact us on WhatsApp to book.
          </p>
        </div>

        {/* Cruises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {cruises.map((cruise, idx) => (
            <motion.div
              key={cruise.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-sand/20 rounded-luxury overflow-hidden border border-primary/5 hover:border-primary/10 shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={cruise.image}
                  alt={cruise.title}
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  <Link href={`/services/${cruise.id}`} className="hover:underline">
                    {cruise.title}
                  </Link>
                </h3>
                <p className="font-sans text-xs md:text-sm text-dark/70 leading-relaxed font-light mb-6 flex-grow">
                  {cruise.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href={`/services/${cruise.id}`}
                    className="text-center py-3 bg-white hover:bg-slate-50 text-dark border border-slate-200 rounded-luxury font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-sm"
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(cruise.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center py-3 bg-primary hover:bg-primary-hover text-white rounded-luxury font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
