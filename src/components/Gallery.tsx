import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    title: "Phenix Gold Class Houseboat",
    category: "Houseboats",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
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
    category: "Dining",
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
    title: "Private Evening Cruise Deck",
    category: "Cruises",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
  },
  {
    id: 7,
    title: "Vembanad Lake Horizon",
    category: "Backwaters",
    image: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
  },
  {
    id: 8,
    title: "Traditional Shoreline Boat",
    category: "Backwaters",
    image: "https://i.ibb.co/81ym7yK/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
  },
  {
    id: 9,
    title: "Luxury Boat Moored by Palm Bank",
    category: "Houseboats",
    image: "https://i.ibb.co/h14vRRT4/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Moments Captured
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-4">
            Phenix Photo Gallery
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Take a visual tour through our luxury fleets, premium room interiors, authentic Kerala delicacies, and scenic backwaters.
          </p>
        </div>

        {/* Masonry-like Grid (All Categories Together, No Category Tabs) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-luxury shadow-premium group cursor-pointer aspect-[4/3] bg-slate-900 border border-primary/5"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Interactive Dark Overlay (No Text) */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
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
                <div className="relative w-full h-[70vh]">
                  <Image
                    src={galleryItems[lightboxIndex].image}
                    alt={galleryItems[lightboxIndex].title}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
