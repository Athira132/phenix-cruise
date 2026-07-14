import { motion } from "framer-motion";
import { FaClock, FaUtensils, FaWind, FaBed, FaEye } from "react-icons/fa";

const packages = [
  {
    name: "Basic Cruise",
    price: "₹7,500",
    period: "Day Trip (5 Hours)",
    features: {
      duration: "5 Hours (Day Trip)",
      meals: "Welcome Drink & Traditional Lunch",
      ac: "AC in Dining Area only",
      bedrooms: "1 Bedroom (Day use only)",
      sightseeing: "Vembanad Lake, Kuttanad canals",
    },
    popular: false,
  },
  {
    name: "Deluxe Cruise",
    price: "₹12,500",
    period: "Overnight Stay (21 Hours)",
    features: {
      duration: "1 Night / 21 Hours",
      meals: "All Meals (Lunch, Dinner, Breakfast, Snacks)",
      ac: "AC in Bedroom (9 PM to 6 AM)",
      bedrooms: "1 - 2 Deluxe Bedrooms",
      sightseeing: "Alleppey canals, Champakulam Church",
    },
    popular: false,
  },
  {
    name: "Premium Cruise",
    price: "₹17,000",
    period: "Overnight Stay (21 Hours)",
    features: {
      duration: "1 Night / 21 Hours",
      meals: "Premium Seafood & All Meals",
      ac: "Full-Time AC (24 Hours)",
      bedrooms: "1 - 3 Premium Bedrooms",
      sightseeing: "Vembanad Lake, R-Block, Pathiramanal Island",
    },
    popular: true,
  },
  {
    name: "Luxury Cruise",
    price: "₹24,000",
    period: "Overnight Stay (21 Hours)",
    features: {
      duration: "1 Night / 21 Hours",
      meals: "Five-Star Menu (Live BBQ & Seafood options)",
      ac: "Full-Time Luxury AC + Sun Deck AC",
      bedrooms: "1 - 5 Glass Ceiling Luxury Bedrooms",
      sightseeing: "Exclusive customized route, organic farm stops",
    },
    popular: false,
  },
];

export default function Packages() {
  const selectPackageType = (name: string) => {
    const selectEl = document.getElementById("package-select") as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = name;
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-sand/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Curated Packages
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Choose from our beautifully structured options to fit your backwater itinerary perfectly.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`rounded-luxury overflow-hidden border transition-all duration-500 flex flex-col relative ${
                pkg.popular
                  ? "bg-primary text-white border-primary shadow-premium-hover scale-105 z-10"
                  : "bg-white text-dark border-primary/5 shadow-premium hover:shadow-premium-hover hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-accent text-dark font-sans text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Title and Price */}
              <div className="p-8 border-b border-current/10">
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-2 ${
                  pkg.popular ? "text-accent" : "text-primary"
                }`}>
                  {pkg.period}
                </span>
                <h3 className="font-serif text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-serif font-bold">{pkg.price}</span>
                  <span className="text-xs font-sans font-light opacity-80 ml-2">/ package</span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <ul className="space-y-6 mb-8 text-xs md:text-sm font-sans font-light">
                  <li className="flex items-start">
                    <FaClock className={`mt-0.5 mr-3 text-sm flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span><strong>Duration:</strong> {pkg.features.duration}</span>
                  </li>
                  <li className="flex items-start">
                    <FaUtensils className={`mt-0.5 mr-3 text-sm flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span><strong>Meals:</strong> {pkg.features.meals}</span>
                  </li>
                  <li className="flex items-start">
                    <FaWind className={`mt-0.5 mr-3 text-sm flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span><strong>Air Conditioning:</strong> {pkg.features.ac}</span>
                  </li>
                  <li className="flex items-start">
                    <FaBed className={`mt-0.5 mr-3 text-sm flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span><strong>Bedrooms:</strong> {pkg.features.bedrooms}</span>
                  </li>
                  <li className="flex items-start">
                    <FaEye className={`mt-0.5 mr-3 text-sm flex-shrink-0 ${pkg.popular ? "text-accent" : "text-primary"}`} />
                    <span><strong>Sightseeing:</strong> {pkg.features.sightseeing}</span>
                  </li>
                </ul>

                <a
                  href="#booking"
                  onClick={() => selectPackageType(pkg.name)}
                  className={`w-full text-center py-3.5 rounded-luxury font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-hover text-dark"
                      : "bg-primary hover:bg-primary-hover text-white"
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
