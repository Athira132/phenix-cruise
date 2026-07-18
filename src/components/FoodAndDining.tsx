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
    <section id="food-and-dining" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sand/20 rounded-full blur-[120px] pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block">
                Gastronomic Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide leading-tight">
                Fresh & Premium Dining Onboard
              </h2>
              <div className="w-16 h-[2px] bg-accent" />
            </div>

            <p className="font-sans text-dark/70 font-light leading-relaxed text-sm md:text-base">
              Enjoy freshly prepared, delicious food served as part of your cruise experience. We prioritize quality ingredients, fresh preparations, and local/international dining selections to offer a comfortable dining experience during the cruise.
            </p>

            {/* Included Menu */}
            <div className="space-y-6">
              <h3 className="font-serif text-lg font-bold text-dark border-b border-slate-100 pb-2">
                Food & Dining Included
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-sand/30 rounded-xl border border-primary/5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold block">Welcome</span>
                  <h5 className="font-serif font-bold text-dark text-sm">Welcome Drink</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Chilled seasonal fresh fruit drinks on boarding.</p>
                </div>
                
                <div className="p-4 bg-sand/30 rounded-xl border border-primary/5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold block">Main Feast</span>
                  <h5 className="font-serif font-bold text-dark text-sm">Delicious Lunch</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Chicken Biriyani or traditional Kerala meals with fish fry.</p>
                </div>
                
                <div className="p-4 bg-sand/30 rounded-xl border border-primary/5 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold block">Evening</span>
                  <h5 className="font-serif font-bold text-dark text-sm">Tea &amp; Snacks</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Hot local tea/coffee served with traditional snacks.</p>
                </div>
              </div>
            </div>

            {/* Food Add-ons */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-bold text-dark border-b border-slate-100 pb-2">
                Food Add-ons Available
              </h3>
              <p className="text-xs text-dark/60 font-light">
                Customize your boating dining experience with these delicious local and international food options:
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {["Fresh Seafood Specialities", "Arabic Cuisine Dishes", "Popular Chinese Dishes", "Traditional Kerala Nadan Dishes"].map((addon, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 bg-slate-50 border border-slate-150 rounded-lg text-xs font-sans font-medium text-dark/80 flex items-center shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Food Gallery */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-sans font-semibold block text-center lg:text-left">
              Freshly Prepared Culinary Gallery
            </span>

            {/* Grid Layout for images */}
            <div className="grid grid-cols-2 gap-4 items-stretch">
              {/* Large vertical image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md group row-span-2 border border-slate-100">
                <Image
                  src={foodImages[0].src}
                  alt={foodImages[0].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[10px] text-white/90 font-light font-sans leading-snug">{foodImages[0].alt}</p>
                </div>
              </div>

              {/* Small horizontal image 1 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group border border-slate-100">
                <Image
                  src={foodImages[1].src}
                  alt={foodImages[1].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[10px] text-white/90 font-light font-sans leading-snug">{foodImages[1].alt}</p>
                </div>
              </div>

              {/* Small horizontal image 2 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group border border-slate-100">
                <Image
                  src={foodImages[2].src}
                  alt={foodImages[2].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[10px] text-white/90 font-light font-sans leading-snug">{foodImages[2].alt}</p>
                </div>
              </div>
            </div>

            {/* Bottom 2 images in equal grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md group border border-slate-100">
                <Image
                  src={foodImages[3].src}
                  alt={foodImages[3].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[10px] text-white/90 font-light font-sans leading-snug">{foodImages[3].alt}</p>
                </div>
              </div>

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md group border border-slate-100">
                <Image
                  src={foodImages[4].src}
                  alt={foodImages[4].alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-[10px] text-white/90 font-light font-sans leading-snug">{foodImages[4].alt}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
