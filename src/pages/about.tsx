import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaShip, FaUsers, FaUtensils, FaMap, FaLock, FaShieldAlt, FaAward, FaEye, FaHeart } from "react-icons/fa";

const features = [
  { icon: FaShip, title: "Luxury Houseboats", desc: "Premium, fully air-conditioned rooms, wide glass sun decks, and premium toilets." },
  { icon: FaUsers, title: "Certified Crew", desc: "Expert captains, life savers, and helpers dedicated to passenger safety." },
  { icon: FaUtensils, title: "Authentic Chefs", desc: "Personal chefs serving fresh, locally-sourced backwater specialities and Karimeen." },
  { icon: FaLock, title: "Exclusive Privacy", desc: "Private bookings designed for romantic getaways, family outings, and corporate meets." },
  { icon: FaMap, title: "Curated Trails", desc: "Cruise through hidden canals, paddy fields, and lagoons of Alappuzha." },
  { icon: FaShieldAlt, title: "Safety Infrastructure", desc: "Full safety gears, life rafts, fire suppression, and strict sanitization rules." },
];

const team = [
  { name: "Captain Rajesh Kumar", role: "Chief Navigation Officer", desc: "Over 20 years navigating Alleppey's complex waterways.", img: "https://i.ibb.co/h14vRRT4/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" },
  { name: "Chef Saji Philip", role: "Executive Culinary Artist", desc: "Specialist in traditional Kerala cuisine and seafood delicacies.", img: "https://i.ibb.co/Z625HSyx/Whats-App-Image-2026-07-14-at-1-19-40-PM-1.jpg" },
  { name: "Anil Joseph", role: "Hospitality Lead", desc: "Ensures every passenger receives 5-star service on board.", img: "https://i.ibb.co/1fkCt6tm/Whats-App-Image-2026-07-14-at-1-19-38-PM.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Phenix Cruise Kerala Houseboat Booking</title>
        <meta
          name="description"
          content="Learn about Phenix Cruise, Kerala's leading luxury backwater travel planner. Discover our mission, crew profiles, safety certifications, and authentic culinary services."
        />
        <meta name="keywords" content="phenix cruise crew, about alleppey houseboats, luxury kerala backwaters travel" />
        <link rel="canonical" href="https://phenixcruise.com/about" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="About Us"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About Us" },
        ]}
      />

      <main className="bg-slate-50 font-sans">
        {/* Intro Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[1.2] lg:aspect-[4/5] rounded-[20px] overflow-hidden shadow-premium group">
              <Image
                src="https://i.ibb.co/h14vRRT4/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg"
                alt="Kerala backwater luxury boat view"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -inset-3 border border-accent/20 rounded-[20px] -z-1 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
              OUR JOURNEY & STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark leading-tight">
              Gliding Through the Golden Backwaters of Alleppey
            </h2>
            <div className="text-dark/80 font-light leading-relaxed space-y-4">
              <p>
                Founded in the heart of Alleppey, Phenix Cruise was born from a desire to share the raw beauty of Kerala’s legendary backwaters through a lens of absolute luxury and local heritage. We realized that cruising is not just a tour; it is a spiritual slowdown, a chance to hear the rustle of palms, view paddy landscapes, and experience magnificent sun sets.
              </p>
              <p>
                Today, Phenix Cruise manages a premium fleet of traditional Kerala houseboats, combining native teak architecture with ultra-modern amenities. We pride ourselves on personalized itineraries, zero carbon print initiatives on selected courses, and absolute privacy for couples, family tours, and corporate packages.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4">
                <FaEye className="text-2xl" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Our Vision</h3>
              <p className="font-light text-white/80 leading-relaxed text-sm">
                To position Kerala backwater tourism on the global map as the ultimate sanctuary for luxury eco-travel, preserving local ecosystems while delivering world-class luxury stays.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-4">
                <FaHeart className="text-2xl" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">Our Mission</h3>
              <p className="font-light text-white/80 leading-relaxed text-sm">
                To deliver bespoke, highly secure, and authentic water cruise experiences by combining modern engineering comforts, locally-crafted cuisines, and highly certified naval hospitality.
              </p>
            </div>
          </div>
        </section>

        {/* Business Values */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
              OUR PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">
              Core Values That Drive Us
            </h2>
            <p className="text-dark/60 font-light text-sm">
              We operate under a strict code of hospitality and ethics to make your journey stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-premium transition-all duration-300 group flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-dark/70 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-sand/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                THE EXPERTS ON BOARD
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark">
                Meet Our Certified Officers
              </h2>
              <p className="text-dark/60 font-light text-sm">
                Our hospitality crew and pilots carry verified licensing and training under the Kerala Port department.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-lg font-bold text-dark">{t.name}</h3>
                    <span className="text-accent text-[11px] uppercase tracking-wider font-semibold block">{t.role}</span>
                    <p className="text-xs text-dark/60 font-light leading-relaxed pt-2">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Footer Booking CTA */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready for a Bespoke Cruise Journey?</h2>
            <p className="text-white/70 font-light max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Explore Alleppey with Kerala's highest-rated luxury houseboat team. Tell us your date and dynamic food preferences!
            </p>
            <div className="flex justify-center">
              <Link
                href="/booking"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95"
              >
                Reserve Your Cruise Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
