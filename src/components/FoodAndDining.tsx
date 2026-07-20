import { motion } from "framer-motion";
import Image from "next/image";
import { FaUtensils, FaCoffee, FaCheck, FaGlassMartiniAlt } from "react-icons/fa";

const foodImages = [
  { src: "https://i.ibb.co/gLDj3rmn/image.png", alt: "Freshly prepared Karimeen fish fry on banana leaf" },
  { src: "https://i.ibb.co/YJjmvNQ/image.png", alt: "Traditional Kerala backwater dining feast spread" },
  { src: "https://i.ibb.co/Fq6vx8GP/image.png", alt: "Delightful local seafood starters served live" },
  { src: "https://i.ibb.co/bMdMwtxD/image.png", alt: "Fresh seasonal juices and traditional evening snacks" },
  { src: "https://i.ibb.co/CsP03WXL/image.png", alt: "Authentic clay-pot cooking prepared live by onboard chefs" },
];

export default function FoodAndDining() {
  return (
    <section id="food-and-dining" className="py-16 md:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-2">
            ONBOARD DINING
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-3">
            Fresh Kerala Flavours
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-4" />
          <p className="text-dark/80 font-sans text-base md:text-lg leading-relaxed">
            Quality food prepared with fresh ingredients and authentic Kerala taste.
          </p>
        </div>

        {/* Large Food Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {foodImages.map((food, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-slate-900 aspect-[4/3] border border-slate-100"
            >
              <Image
                src={food.src}
                alt={food.alt}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex items-end">
                <p className="text-xs font-sans text-white font-medium drop-shadow-sm">
                  {food.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
