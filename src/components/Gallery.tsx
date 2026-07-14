import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const categories = ["All", "Houseboats", "Interiors", "Food", "Sunset", "Backwaters", "Events"];

const galleryItems = [
  {
    id: 1,
    title: "Phenix Gold Class Houseboat",
    category: "Houseboats",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    id: 2,
    title: "Luxury Triple Bedroom Suite",
    category: "Interiors",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    id: 3,
    title: "Sunset Lake Crossing",
    category: "Sunset",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
  },
  {
    id: 4,
    title: "Traditional Karimeen Fry Served Hot",
    category: "Food",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
  },
  {
    id: 5,
    title: "Serene Golden Canals",
    category: "Sunset",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
  },
  {
    id: 6,
    title: "Private Floating Wedding Reception",
    category: "Events",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
  },
  {
    id: 7,
    title: "Deluxe Glass Double Bedroom",
    category: "Interiors",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    id: 8,
    title: "Vembanad Lake Horizon",
    category: "Backwaters",
    image: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
  },
  {
    id: 9,
    title: "Alleppey Sunset Reflection",
    category: "Sunset",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
  },
  {
    id: 10,
    title: "Authentic Kerala Feast",
    category: "Food",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
  },
  {
    id: 11,
    title: "Premium Double Decker Fleet",
    category: "Houseboats",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    id: 12,
    title: "Corporate Team Retreat Dinner",
    category: "Events",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
  },
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Moments Captured
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Phenix Photo Gallery
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Take a visual tour through our luxury fleets, premium room interiors, authentic Kerala delicacies, and scenic backwaters.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2 text-xs md:text-sm font-sans font-medium rounded-luxury border transition-all duration-300 ${
                selectedFilter === cat
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-white border-primary/10 text-dark/70 hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like CSS Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-luxury shadow-premium group cursor-pointer aspect-[4/3] bg-white border border-primary/5"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-accent text-[10px] font-sans tracking-widest uppercase font-semibold mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif text-lg font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-secondary/95 flex items-center justify-center p-4 select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
              >
                <FiX className="text-2xl" />
              </button>

              {/* Prev Button */}
              <button
                className="absolute left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <FiChevronLeft className="text-2xl" />
              </button>

              {/* Next Button */}
              <button
                className="absolute right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
                onClick={handleNext}
                aria-label="Next Image"
              >
                <FiChevronRight className="text-2xl" />
              </button>

              {/* Image Frame */}
              <div
                className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[60vh]">
                  <Image
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                
                {/* Title Overlay */}
                <div className="text-center mt-6 text-white max-w-xl">
                  <span className="text-accent text-xs font-sans tracking-widest uppercase font-semibold block mb-1">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-xl font-bold">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
