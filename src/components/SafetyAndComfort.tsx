import { motion } from "framer-motion";
import { FaShieldAlt, FaChair, FaRestroom, FaWind, FaVolumeUp, FaMusic } from "react-icons/fa";

const features = [
  {
    icon: FaShieldAlt,
    title: "Well-Maintained Boat Experience",
    desc: "Our boats undergo routine structural maintenance and strict cleaning checks to ensure absolute safety and reliability for every backwater trip.",
  },
  {
    icon: FaChair,
    title: "Comfortable Seating",
    desc: "Relax on premium-cushioned seats in our spacious, open-air viewing cabin designed to offer unobstructed views of the backwaters.",
  },
  {
    icon: FaRestroom,
    title: "Bathroom Facilities",
    desc: "Clean, hygienic, and well-maintained onboard toilet facilities are available to ensure comfort for families and large group cruises.",
  },
  {
    icon: FaWind,
    title: "Electric Cabin Fans",
    desc: "High-efficiency electric fans are installed in passenger cabins to keep you cool and comfortable even during warm sunny afternoons.",
  },
  {
    icon: FaVolumeUp,
    title: "Microphone for Communication",
    desc: "Equipped with an onboard microphone and speaker setup for clear communication and guiding sightseeing routes throughout the backwaters.",
  },
  {
    icon: FaMusic,
    title: "DJ Music System",
    desc: "A premium sound system is installed onboard for light music and entertainment, creating a joyful cruise experience for families and groups.",
  },
];

export default function SafetyAndComfort() {
  return (
    <section id="safety-and-comfort" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Passenger Comfort & Security
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Safety & Comfort Onboard
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6"></div>
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            We provide a safe, well-equipped, and extremely comfortable boat ride. Enjoy the tranquil backwaters of Akalapuzha with reliable onboard systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 hover:border-primary/10 rounded-2xl p-8 hover:shadow-premium transition-all duration-300 group flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-sand/35 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/5 mb-6 group-hover:scale-105">
                <item.icon className="text-xl" />
              </div>
              <h3 className="font-serif text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-dark/60 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
