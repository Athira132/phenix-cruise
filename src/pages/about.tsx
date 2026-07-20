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
  { icon: FaMap, title: "Curated Trails", desc: "Cruise through hidden canals, paddy fields, and lagoons of Akalapuzha." },
  { icon: FaShieldAlt, title: "Safety Infrastructure", desc: "Full safety gears, life rafts, fire suppression, and strict sanitization rules." },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Phoenix Cruise &amp; Akalapuzha Boat Service</title>
        <meta
          name="description"
          content="Learn about Phoenix Cruise, the premier Akalapuzha boat service in Kerala. Delivering safe, luxurious, and authentic backwater boat cruises for families, couples, and tourists."
        />
        <meta name="keywords" content="Phoenix Cruise, Akalapuzha boat service, Akalapuzha boat ride, boat service in Akalapuzha, Kerala backwater boat service, boat cruise in Kerala" />
        <link rel="canonical" href="https://clever-rutherford.vercel.app/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://clever-rutherford.vercel.app/about" />
        <meta property="og:title" content="About Us | Phoenix Cruise &amp; Akalapuzha Boat Service" />
        <meta property="og:description" content="Learn about Phoenix Cruise, the premier Akalapuzha boat service in Kerala. Delivering safe, luxurious, and authentic backwater boat cruises for families, couples, and tourists." />
        <meta property="og:image" content="https://i.ibb.co/B51fLF7w/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://clever-rutherford.vercel.app/about" />
        <meta name="twitter:title" content="About Us | Phoenix Cruise &amp; Akalapuzha Boat Service" />
        <meta name="twitter:description" content="Learn about Phoenix Cruise, the premier Akalapuzha boat service in Kerala. Delivering safe, luxurious, and authentic backwater boat cruises for families, couples, and tourists." />
        <meta name="twitter:image" content="https://i.ibb.co/B51fLF7w/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />
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
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[1.2] lg:aspect-[4/5] rounded-[20px] overflow-hidden shadow-premium group">
              <Image
                src="https://i.ibb.co/B51fLF7w/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg"
                alt="Kerala backwater luxury boat view"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
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
              Gliding Through the Golden Backwaters of Akalapuzha
            </h2>
            <div className="text-dark/80 font-light leading-relaxed space-y-4">
              <p>
                As a trusted <strong>Akalapuzha Boating Service</strong>, Phoenix Cruise was born from a desire to share the raw beauty of Kerala’s legendary backwater lakes and canals through a lens of absolute luxury and local heritage. We provide premium backwater boating experiences, serving tourists, families, couples, and corporate groups with a spiritual slowdown and a chance to hear the rustle of palms, view green paddy fields, and witness magnificent sunsets.
              </p>
              <p>
                Every journey with us prioritizes passenger wellbeing and culinary excellence: we offer a safe cruise experience on carefully maintained boats alongside fresh, hygienically prepared food made with quality ingredients and authentic Kerala flavours.
              </p>
              <p>
                Today, our Akalapuzha boat service manages a premium fleet of traditional Kerala houseboats and custom boats. We focus on safety, comfort, and customer satisfaction, combining native wood architecture with modern comforts, personalized itineraries, and absolute privacy for all passengers.
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



        {/* Pre-Footer Booking CTA */}
        <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Ready for a Bespoke Cruise Journey?</h2>
            <p className="text-white/70 font-light max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
              Explore Akalapuzha with Kerala's highest-rated luxury boating team. Tell us your date and food preferences!
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 text-center"
              >
                Reserve Your Cruise Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
