import { motion } from "framer-motion";
import Image from "next/image";
import { FaUtensils, FaShieldAlt, FaShip, FaCoffee, FaCheck } from "react-icons/fa";

const foodImages = [
  { src: "https://i.ibb.co/gLDj3rmn/image.png", alt: "Freshly prepared Karimeen fish curry and rice on banana leaf" },
  { src: "https://i.ibb.co/YJjmvNQ/image.png", alt: "Traditional Kerala backwater dining feast spread" },
  { src: "https://i.ibb.co/Fq6vx8GP/image.png", alt: "Delightful local seafood starters served live" },
  { src: "https://i.ibb.co/bMdMwtxD/image.png", alt: "Fresh seasonal juices and traditional evening snacks" },
  { src: "https://i.ibb.co/CsP03WXL/image.png", alt: "Authentic clay-pot cooking prepared live by onboard chefs" },
];

export default function FoodAndSafety() {
  return (
    <section id="food-and-safety" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sand/20 rounded-full blur-[120px] pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block">
                Hospitality & Standards
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide leading-tight">
                Premium Dining & Safety Aboard
              </h2>
              <div className="w-16 h-[2px] bg-accent" />
            </div>

            <p className="font-sans text-dark/70 font-light leading-relaxed text-sm md:text-base">
              We are committed to delivering the ultimate backwater experience by matching breathtaking scenery with exceptional food hygiene and cruise safety standards. Relax with absolute peace of mind.
            </p>

            {/* Core Pillars */}
            <div className="space-y-6">
              
              {/* Quality Food */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 border border-primary/5">
                  <FaUtensils className="text-lg" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-dark">Quality Food & Fresh Preparation</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/65 font-light leading-relaxed">
                    Our onboard private chefs prepare every dish fresh in well-maintained kitchens. We source fresh fish and local organic ingredients daily to present authentic Kerala flavors.
                  </p>
                </div>
              </div>

              {/* Comfortable Dining */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 border border-primary/5">
                  <FaCoffee className="text-lg" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-dark">Comfortable Dining Experience</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/65 font-light leading-relaxed">
                    Enjoy your breakfast, lunch, and dinner in our spacious, well-ventilated open-deck dining lounge. We ensure top-tier tablescapes, clean drinking water, and premium hospitality.
                  </p>
                </div>
              </div>

              {/* Cruise Safety */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 border border-primary/5">
                  <FaShieldAlt className="text-lg" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-dark">Safety & Comfort During the Cruise</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/65 font-light leading-relaxed">
                    Your safety is our absolute priority. We provide premium-certified life jackets for all age groups, a fully stocked medical kit, and operate only during safe, permitted daylight weather hours.
                  </p>
                </div>
              </div>

              {/* Fleet Maintenance */}
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 border border-primary/5">
                  <FaShip className="text-lg" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-base font-bold text-dark">Well-Maintained Cruise Experience</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/65 font-light leading-relaxed">
                    Every Shikara and houseboat undergoes routine cleaning, hygiene checks, and complete structural audits. Our experienced crew members are trained in first-aid and safety navigation.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Food Gallery */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-sans font-semibold block text-center lg:text-left">
              Onboard Dining Gallery
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
