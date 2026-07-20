import { motion } from "framer-motion";
import { FaClock, FaUtensils, FaPlus, FaCheck, FaVolumeUp, FaMicrophone, FaToilet, FaWind } from "react-icons/fa";

export default function DayPackageDetails() {
  return (
    <section id="day-package-details" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Featured Day Outing
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Day Package Specifications
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Detailed view of our 5 Hours Shikara Boat day package, inclusive of premium dining, add-ons, and onboard entertainment facilities.
          </p>
        </div>

        {/* Outer Spacious Layout Card */}
        <div className="bg-white rounded-3xl border border-primary/5 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Package Overview & Food Details */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 space-y-12">
            
            {/* Title Block */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-sand px-4 py-1.5 rounded-full border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-sans text-xs uppercase font-bold tracking-wider">5 Hours Shikara Boat</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-dark">
                Day Outing Experience
              </h3>
              <p className="font-sans text-dark/70 font-light leading-relaxed text-sm sm:text-base">
                An immersive daytime backwater voyage mapping Akalapuzha's palm-fringed canals. This package provides traditional Kerala delicacies, custom add-ons, and complete privacy for groups.
              </p>
            </div>

            {/* Food Section */}
            <div className="space-y-6">
              <h4 className="font-serif text-xl font-bold text-dark border-b border-slate-100 pb-3 flex items-center">
                <FaUtensils className="mr-3 text-primary" /> Food & Dining Included
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Welcome drink */}
                <div className="p-5 bg-sand/30 rounded-2xl border border-primary/5 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-bold block">Starter</span>
                  <h5 className="font-serif font-bold text-dark text-sm sm:text-base">Welcome Drink</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Chilled fresh fruit refreshments served on boarding.</p>
                </div>
                {/* Lunch */}
                <div className="p-5 bg-sand/30 rounded-2xl border border-primary/5 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-bold block">Main Feast</span>
                  <h5 className="font-serif font-bold text-dark text-sm sm:text-base">Kerala Lunch</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Enjoy premium Chicken Biriyani or traditional meals with fresh Fish Fry.</p>
                </div>
                {/* Evening tea */}
                <div className="p-5 bg-sand/30 rounded-2xl border border-primary/5 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-primary font-bold block">Sunset Bite</span>
                  <h5 className="font-serif font-bold text-dark text-sm sm:text-base">Tea & Snacks</h5>
                  <p className="text-xs text-dark/60 font-light leading-relaxed">Hot local tea/coffee paired with freshly prepared traditional snacks.</p>
                </div>
              </div>
            </div>

            {/* Food Add-ons */}
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-dark flex items-center">
                <FaPlus className="mr-3 text-primary text-sm" /> Available Food Add-ons
              </h4>
              <p className="text-xs text-dark/60 font-light mb-4">You can request these specialized cuisines to be prepared for your trip:</p>
              <div className="flex flex-wrap gap-3">
                {["Seafood Dishes", "Arabic Cuisine", "Chinese Delicacies", "Traditional Nadan Dishes"].map((addon) => (
                  <span key={addon} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl font-sans text-xs font-medium text-dark/80 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                    {addon}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Experience & Onboard Facilities */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between border-l border-white/5">
            
            <div className="space-y-8">
              
              {/* Experience Highlights */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-white border-b border-white/10 pb-3">
                  Experience Highlights
                </h4>
                <p className="font-sans text-xs text-white/80 leading-relaxed font-light">
                  Glide through palm-fringed channels of Akalapuzha with complete comfort, spacious seating, and customizable group options.
                </p>
              </div>

              {/* Onboard Facilities */}
              <div className="space-y-4">
                <h4 className="font-serif text-xl font-bold text-white border-b border-white/10 pb-3">
                  Onboard Facilities
                </h4>
                <div className="grid grid-cols-2 gap-4 font-sans text-xs text-white/80">
                  <div className="flex items-center space-x-2.5">
                    <FaToilet className="text-accent text-sm flex-shrink-0" />
                    <span>Clean Restroom</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <FaVolumeUp className="text-accent text-sm flex-shrink-0" />
                    <span>Music System</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <FaMicrophone className="text-accent text-sm flex-shrink-0" />
                    <span>Onboard Mic</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <FaWind className="text-accent text-sm flex-shrink-0" />
                    <span>Cabin Fans</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Booking Redirect */}
            <div className="pt-8">
              <a
                href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%205%20Hours%20Shikara%20Boat%20Day%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 bg-accent hover:bg-accent-hover text-dark font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-xl shadow-md"
              >
                Book Your Cruise via WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
