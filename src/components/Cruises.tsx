import Image from "next/image";
import { motion } from "framer-motion";

const cruises = [
  {
    title: "Luxury Houseboat Stay",
    description: "The ultimate overnight backwater stay. Fully furnished wooden houseboats with AC bedrooms, private bathroom, and direct river sunset views.",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    price: "₹12,500",
    id: "houseboat",
  },
  {
    title: "Traditional Shikara Ride",
    description: "Navigate through the narrow canals and shallow waterways where larger houseboats cannot go, in our hand-carved wooden Shikara boats.",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    price: "₹3,000",
    id: "shikara",
  },
  {
    title: "Scenic Day Cruise",
    description: "Perfect for travellers who want a 5-hour daytime backwater journey. Includes fresh local lunch prepared live and tea snacks.",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    price: "₹7,500",
    id: "day-cruise",
  },
  {
    title: "Golden Sunset Cruise",
    description: "A magical 3-hour evening cruise capturing the golden hour sunset reflections on the Vembanad Lake. Includes traditional refreshments.",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    price: "₹4,500",
    id: "sunset",
  },
  {
    title: "Honeymoon Special Cruise",
    description: "Exclusive romantic decoration, candlelit dinner, custom cake, and absolute privacy for couples to celebrate their special milestone.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
    price: "₹15,000",
    id: "honeymoon",
  },
  {
    title: "Premium Family Cruise",
    description: "Spacious luxury multi-room houseboats built to comfortably accommodate large families, with safety guards and customized dining plans.",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    price: "₹18,000",
    id: "family",
  },
  {
    title: "Corporate Backwater Events",
    description: "Celebrate milestones, run team-building retreats, or host key business conferences in our state-of-the-art floating boardrooms.",
    image: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
    price: "₹25,000",
    id: "corporate",
  },
];

export default function Cruises() {
  const selectCruiseType = (title: string) => {
    const selectEl = document.getElementById("package-select") as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = title;
      // Trigger native change event for react-hook-form or state binding
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <section id="cruises" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sand/30 rounded-full blur-[120px] pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Premium Fleets
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Our Luxury Cruises
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Select from our high-end fleet and curated packages designed to deliver the ultimate serene floating experience.
          </p>
        </div>

        {/* Cruises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cruise.image}
                  alt={cruise.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-luxury border border-white/20 shadow-sm">
                  <span className="text-xs font-sans text-dark/60 block leading-none">Starting from</span>
                  <span className="text-primary font-serif font-bold text-base md:text-lg block mt-0.5">{cruise.price}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {cruise.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-dark/70 leading-relaxed font-light mb-6 flex-grow">
                  {cruise.description}
                </p>
                <a
                  href="#booking"
                  onClick={() => selectCruiseType(cruise.title)}
                  className="w-full text-center py-3 bg-white hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary rounded-luxury font-sans font-semibold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
                >
                  Book This Cruise
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
