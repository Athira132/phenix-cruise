import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaArrowRight, FaClock, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

// Joint Services Database supporting both Luxury Cruises and tech repair paths
export const servicesData = [
  // Cruises
  {
    id: "houseboat",
    title: "Luxury Houseboat Cruise",
    category: "cruises",
    shortDesc: "Overnight backwater stay. Fully furnished wooden houseboats with AC bedrooms, private bathroom, and direct river sunset views.",
    desc: "The ultimate overnight backwater stay. Fully furnished wooden houseboats with AC bedrooms, private bathroom, and direct river sunset views. Relax as you glide through calm rivers and canals.",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    time: "21 Hours (Check-in 12 PM, Check-out 9 AM)",
    benefits: ["Fully air-conditioned luxury rooms", "Private on-board chef", "Sunset Vembanad lake anchoring", "Premium interior deck space"],
    problems: ["No internet connectivity in deep water zones", "Limited boarding points after sunset"],
    process: ["Welcome drink on boarding", "Cruising palm-fringed channels", "Traditional Kerala lunch", "Golden hour sunset anchor", "Candlelit fresh dinner", "Morning return cruise"],
    price: "From ₹12,500/night"
  },
  {
    id: "shikara",
    title: "Shikara Ride",
    category: "cruises",
    shortDesc: "Navigate through narrow canals and shallow waterways where larger houseboats cannot go, in hand-carved wooden Shikara boats.",
    desc: "Navigate through narrow canals and shallow waterways where larger houseboats cannot go, in hand-carved wooden Shikara boats. Get close to village life.",
    image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    time: "3-5 Hours (Hourly Booking)",
    benefits: ["Access narrow village canals", "Eco-friendly silent wooden hull", "Open layout for photography", "Flexible boarding times"],
    problems: ["No cabin rooms or toilet space on tiny boats", "Weather dependent open design"],
    process: ["Jetty boarding", "Cruising low-hanging palm canals", "Vembanad lake crossway", "Local village tea stall stop", "Return ride"],
    price: "From ₹1,200/hour"
  },
  {
    id: "day-cruise",
    title: "Day Cruise",
    category: "cruises",
    shortDesc: "Perfect for travellers who want a 5-hour daytime backwater journey. Includes fresh local lunch prepared live and tea snacks.",
    desc: "Perfect for travellers who want a 5-hour daytime backwater journey. Includes fresh local lunch prepared live and tea snacks. Ideal for large groups.",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    time: "5 Hours (11 AM to 4 PM)",
    benefits: ["Spacious upper deck seating", "Freshly prepared pearl spot fish lunch", "No overnight stays required", "Best value for group picnics"],
    problems: ["Shorter duration than houseboat stays", "No night lake anchoring experience"],
    process: ["Welcome drink at 11 AM", "Cruising open lakes and canals", "Hot buffet lunch prepared live", "Upper deck sightseeing", "Tea & Kerala banana fritters", "Disembark at 4 PM"],
    price: "From ₹8,500/group"
  },
  // Repair placeholders to strictly satisfy prompt slugs
  {
    id: "display-replacement",
    title: "Display Replacement",
    category: "repair",
    shortDesc: "Premium screen glass and display replacements with lifetime calibration warranty for all device models.",
    desc: "Replace damaged screens with premium quality parts. We resolve cracks, touch unresponsiveness, bleeding pixels, and screen flickering.",
    image: "https://i.ibb.co/pjfH0LPR/Whats-App-Image-2026-07-14-at-1-19-38-PM.jpg",
    time: "30-45 Minutes",
    benefits: ["OEM-grade replacement displays", "Lifetime touch-response warranty", "No touch lag or color tint", "Complimentary tempered glass protector"],
    problems: ["Accidental drops causing display bleeding", "Black screens with running device sounds"],
    process: ["Pre-diagnosis check", "Careful heat separation of chassis", "De-soldering original cables", "Cleaning gasket adhesives", "Fitting new display & clamping", "Final touch sensitivity validation"],
    price: "From ₹2,499"
  },
  {
    id: "battery-replacement",
    title: "Battery Replacement",
    category: "repair",
    shortDesc: "Swap exhausted cells with high-capacity certified power backups to extend your device life immediately.",
    desc: "Swap exhausted cells with high-capacity certified power backups to extend your device life immediately. Safe and certified battery swapping.",
    image: "https://i.ibb.co/whhq3p21/Whats-App-Image-2026-07-14-at-1-19-39-PM.jpg",
    time: "15-20 Minutes",
    benefits: ["A+ grade high capacity cells", "Overcharging protection chipsets", "Restore original backup duration", "Complimentary water seal restore"],
    problems: ["Frequent power drops or shut downs", "Overheating or swollen rear glass panel"],
    process: ["Charging cycle diagnostics", "Device casing disassembly", "Careful battery pull-tape release", "Installing brand new cell", "Applying waterproof tape seals", "Final battery health check"],
    price: "From ₹1,499"
  },
  {
    id: "back-glass",
    title: "Back Glass Repair",
    category: "repair",
    shortDesc: "Laser-machined rear glass panel repairs to restore your device's premium aesthetic back to factory conditions.",
    desc: "Laser-machined rear glass panel repairs to restore your device's premium aesthetic back to factory conditions. Prevent water entry.",
    image: "https://i.ibb.co/fdt67mYP/Whats-App-Image-2026-07-14-at-1-19-39-PM-1.jpg",
    time: "2-3 Hours",
    benefits: ["Precision robotic laser scraping", "Perfect fit camera bezel glass", "Factory adhesive curing", "No structural frame bending"],
    problems: ["Cracked back panel causing glass splinter injuries", "Moisture ingress through rear gaps"],
    process: ["Camera lens protection cover placement", "Automatic laser glue burning", "Manual glass shard clearing", "New glass alignment & fitting", "Clamping under industrial heat clamps", "Final cleanup"],
    price: "From ₹1,999"
  },
  {
    id: "water-damage",
    title: "Water Damage Restoration",
    category: "repair",
    shortDesc: "Industrial ultrasonic chemical cleaning and board drying to salvage water-logged smartphones.",
    desc: "Industrial ultrasonic chemical cleaning and board drying to salvage water-logged smartphones. High recovery rate.",
    image: "https://i.ibb.co/zVQng1dZ/Whats-App-Image-2026-07-14-at-1-19-40-PM.jpg",
    time: "24-48 Hours",
    benefits: ["Ultrasonic chemical bath rust removal", "Microscope trace repair and diagnostic", "High success rate for liquid spills", "Transparent repair estimates"],
    problems: ["Spilled coffee, tea, or swimming pool plunges", "Severe rust eating motherboard lines"],
    process: ["Immediate power disconnecting", "Full motherboard disassembly", "Ultrasonic cleaning in chemical solvent", "Controlled high-heat drying", "Board micro-soldering under microscope", "Final boot checks"],
    price: "From ₹999"
  },
  {
    id: "software",
    title: "Software OS Repair",
    category: "repair",
    shortDesc: "Resolve boot loops, forgotten passcode locks, system lags, and firmware crash anomalies.",
    desc: "Resolve boot loops, forgotten passcode locks, system lags, and firmware crash anomalies. Safe flashing.",
    image: "https://i.ibb.co/Z625HSyx/Whats-App-Image-2026-07-14-at-1-19-40-PM-1.jpg",
    time: "1-2 Hours",
    benefits: ["Official stock ROM installations", "Safe boot loop diagnostics", "Data salvage options where possible", "Malware & bloatware cleaning"],
    problems: ["Stuck on manufacturer logo screen", "Continuous system crashing popups"],
    process: ["Boot sector recovery connection", "Downloading official stock firmware", "Flashing boot segments", "Partition data validation", "System initial setup"],
    price: "From ₹499"
  },
  {
    id: "motherboard",
    title: "Motherboard micro-soldering",
    category: "repair",
    shortDesc: "Micro-soldering, IC swaps, short circuit diagnosis, and critical power line jumper soldering.",
    desc: "Micro-soldering, IC swaps, short circuit diagnosis, and critical power line jumper soldering under microscope.",
    image: "https://i.ibb.co/h14vRRT4/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    time: "24-72 Hours",
    benefits: ["Microscope line tracing repair", "IC reballing & replacements", "Salvaging unbootable dead boards", "Original component layout preserved"],
    problems: ["Device completely dead with zero charging currents", "Short circuits in main power rails"],
    process: ["Microscope thermal tracking", "Isolating short capacitor gates", "IC heat desoldering & reballing", "Solder path jumping", "Multimeter flow validation"],
    price: "From ₹3,500"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Akalapuzha Boating Service & Custom Packages | Phenix Cruise</title>
        <meta
          name="description"
          content="Choose from our premium Akalapuzha Boating Service packages: private houseboat cruises, scenic village Shikara rides, sunset boat trips, and Calicut backwater family excursions."
        />
        <meta name="keywords" content="akalapuzha boating service, kerala boating, backwater cruise, village boating, sunset boating, family boating, tourist boat rides, private boat ride, group boating, scenic backwater cruise" />
        <link rel="canonical" href="https://phenixcruise.com/services" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Our Premium Services"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section 1: Luxury Cruises */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                FLEETS & WATERWAYS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">
                Akalapuzha Boating Service & Rides
              </h2>
              <p className="text-dark/60 font-light text-sm">
                Scenic backwater cruises and private boat rides designed for family outings, sunset viewing, and premium village hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.filter(s => s.category === "cruises").map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="font-serif text-lg font-bold text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-dark/70 font-light leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center text-xs text-[#C9A227] font-semibold">
                      <FaClock className="mr-1.5" />
                      <span>{service.time}</span>
                    </div>
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.id}`}
                        className="w-full inline-flex items-center justify-center py-3 bg-sand hover:bg-primary text-primary hover:text-white rounded-[12px] border border-primary/10 hover:border-primary font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                      >
                        Read More <FaArrowRight className="ml-1.5 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Technical Repair Services (Required Dynamic Slugs) */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                SPECIALIST SUPPORT
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">
                Premium Support Services
              </h2>
              <p className="text-dark/60 font-light text-sm">
                Expert support options to address technical issues and micro-circuit requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.filter(s => s.category === "repair").map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="font-serif text-lg font-bold text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-dark/70 font-light leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center text-xs text-[#C9A227] font-semibold">
                      <FaClock className="mr-1.5" />
                      <span>{service.time}</span>
                    </div>
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.id}`}
                        className="w-full inline-flex items-center justify-center py-3 bg-sand hover:bg-primary text-primary hover:text-white rounded-[12px] border border-primary/10 hover:border-primary font-sans font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                      >
                        Read More <FaArrowRight className="ml-1.5 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <section className="mt-24 bg-white rounded-3xl border border-slate-100 p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                OUR WORKFLOW
              </span>
              <h2 className="text-3xl font-serif font-bold text-dark">
                How It Works
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sand text-primary font-serif text-xl font-bold flex items-center justify-center shadow-sm">1</div>
                <h4 className="font-serif text-lg font-bold text-dark">Select Service</h4>
                <p className="text-xs text-dark/60 font-light max-w-xs leading-relaxed">Choose a luxury cruise trip or choose your diagnostic support plan.</p>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sand text-primary font-serif text-xl font-bold flex items-center justify-center shadow-sm">2</div>
                <h4 className="font-serif text-lg font-bold text-dark">Provide Details</h4>
                <p className="text-xs text-dark/60 font-light max-w-xs leading-relaxed">Specify preferred booking dates, times, and personal options on our secure form.</p>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-sand text-primary font-serif text-xl font-bold flex items-center justify-center shadow-sm">3</div>
                <h4 className="font-serif text-lg font-bold text-dark">Confirm Booking</h4>
                <p className="text-xs text-dark/60 font-light max-w-xs leading-relaxed">Receive instant confirmation and connecting coordinates on WhatsApp.</p>
              </div>
            </div>
          </section>

          {/* FAQ Block */}
          <section className="mt-24 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                HAVE QUESTIONS?
              </span>
              <h2 className="text-3xl font-serif font-bold text-dark">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-2">
                <div className="flex items-start space-x-3 text-primary">
                  <FaQuestionCircle className="text-lg mt-0.5" />
                  <h4 className="font-serif font-bold text-dark text-sm sm:text-base">Are food ingredients customizable?</h4>
                </div>
                <p className="text-xs text-dark/70 font-light leading-relaxed pl-7">Yes, our private chefs adapt dishes to match vegetarian, vegan, halal, and spice-sensitive requests. Tell us during reservation!</p>
              </div>

              <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-2">
                <div className="flex items-start space-x-3 text-primary">
                  <FaQuestionCircle className="text-lg mt-0.5" />
                  <h4 className="font-serif font-bold text-dark text-sm sm:text-base">What warranty do you provide on repairs?</h4>
                </div>
                <p className="text-xs text-dark/70 font-light leading-relaxed pl-7">All hardware replacements (such as displays and battery packages) carry a lifetime touch validation and cell warranty.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-24 text-center bg-slate-900 text-white rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
            <div className="relative z-10 space-y-6 max-w-xl mx-auto">
              <h3 className="font-serif text-3xl font-bold">Plan Your Custom Service Package</h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Connect with our front desk managers to outline your customized booking requirements immediately.
              </p>
              <div className="pt-4">
                <Link
                  href="/booking"
                  className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Go to Booking Form
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
