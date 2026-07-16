import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaArrowRight, FaClock } from "react-icons/fa";

// Services Database supporting Luxury Cruises and Boat Rides
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
  {
    id: "sunset-cruise",
    title: "Sunset Cruise",
    category: "cruises",
    shortDesc: "A beautiful 3-hour evening journey. Experience the golden sunset on Akalapuzha lake while enjoying fresh Kerala tea snacks.",
    desc: "A beautiful 3-hour evening journey. Experience the golden sunset on Akalapuzha lake while enjoying fresh Kerala tea snacks. Perfect for couples and families.",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    time: "3 Hours (4 PM to 7 PM)",
    benefits: ["Breathtaking sunset views", "Complementary Kerala snacks", "Romantic setups available", "Ideal for photography"],
    problems: ["Weather dependent", "No overnight stays"],
    process: ["Jetty boarding at 4 PM", "Cruising to sunset viewpoint", "Hot tea & fresh banana fritters", "Relaxing on upper deck", "Return by 7 PM"],
    price: "From ₹4,500/trip"
  },
  {
    id: "private-charter",
    title: "Private Charter Services",
    category: "cruises",
    shortDesc: "Exclusive boat rentals for corporate events, family celebrations, and private functions with customized catering.",
    desc: "Exclusive boat rentals for corporate events, family celebrations, and private functions with customized catering. Fully tailorable to your needs.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
    time: "Customizable Duration",
    benefits: ["Complete privacy", "Customized menu selection", "Decorations for events", "Flexible boarding locations"],
    problems: ["Requires advanced booking of at least 7 days"],
    process: ["Consultation for details", "Custom decor setup", "Boarding & private cruise", "Live cooking & catering", "Return to base"],
    price: "From ₹15,000/event"
  },
  {
    id: "island-tour",
    title: "Island Tour Packages",
    category: "cruises",
    shortDesc: "A day tour visiting local village islands, coconut plantations, and historical temples on the backwaters.",
    desc: "A day tour visiting local village islands, coconut plantations, and historical temples on the backwaters. Get a deep taste of local culture.",
    image: "https://i.ibb.co/B51fLF7w/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    time: "6 Hours (10 AM to 4 PM)",
    benefits: ["Guided local village walk", "Coconut harvesting demonstration", "Visit ancient temples", "Authentic lunch included"],
    problems: ["Requires moderate walking on islands"],
    process: ["Boarding at 10 AM", "Cruise to first island stop", "Guided village walk", "Traditional lunch", "Temple visit", "Return by 4 PM"],
    price: "From ₹6,000/group"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Akalapuzha Boating Service & Custom Packages | Phoenix Cruise</title>
        <meta
          name="description"
          content="Choose from our premium Akalapuzha Boating Service packages: private houseboat cruises, scenic village Shikara rides, sunset boat trips, and Calicut backwater family excursions."
        />
        <meta name="keywords" content="akalapuzha boating service, kerala boating, backwater cruise, village boating, sunset boating, family boating, tourist boat rides, private boat ride, group boating, scenic backwater cruise" />
        <link rel="canonical" href="https://phoenixcruise.com/services" />
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
