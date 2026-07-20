import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SafeAndQualityHighlight from "@/components/SafeAndQualityHighlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Cruises from "@/components/Cruises";
import DayPackageDetails from "@/components/DayPackageDetails";
import FoodAndDining from "@/components/FoodAndDining";
import SafetyAndComfort from "@/components/SafetyAndComfort";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSON-LD Structured Data
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Phoenix Cruise",
    "image": "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
    "@id": "https://phoenixcruise.com/#organization",
    "url": "https://phoenixcruise.com",
    "telephone": "+918138866919",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phoenix Akalappuzha Boating Service Jetty, Akalappuzha Lake Road",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "postalCode": "673522",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.505669,
      "longitude": 75.6596938
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.facebook.com/phoenixcruise",
      "https://www.instagram.com/phoenixcruise"
    ]
  };

  return (
    <>
      <Head>
        <title>Akalappuzha Boat Service | Phoenix Cruise Houseboat &amp; Shikara Booking</title>
        <meta
          name="description"
          content="Experience the serene beauty of Kozhikode backwaters with our Akalappuzha Boat Service. Book luxury cruises, romantic sunset rides, and village family boat tours."
        />
        <meta name="keywords" content="akalappuzha boat service, akalappuzha boat ride, akalappuzha backwater cruise, boat service in akalappuzha, akalappuzha shikara boat, kerala backwater boat ride, shikara boat service in kerala" />
        <link rel="canonical" href="https://phoenixcruise.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://phoenixcruise.com" />
        <meta property="og:title" content="Akalappuzha Boat Service | Phoenix Cruise Houseboat &amp; Shikara Booking" />
        <meta
          property="og:description"
          content="Experience the serene beauty of Kozhikode backwaters with our Akalappuzha Boat Service. Book luxury cruises, romantic sunset rides, and village family boat tours."
        />
        <meta property="og:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Fonts Preload */}
        <link rel="preload" href="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" as="image" />

        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </Head>

      <CustomCursor />

      {/* Progress Scroll Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Safe & Quality Highlights */}
        <SafeAndQualityHighlight />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Packages Grid */}
        <div className="bg-white pb-16 md:pb-20">
          <Cruises />
          <div className="flex justify-center mt-8">
            <Link
              href="/services"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-premium hover:-translate-y-1 active:scale-95 border border-white/10"
            >
              Explore All Our Services
            </Link>
          </div>
        </div>

        {/* Day Package details */}
        <DayPackageDetails />

        {/* Dedicated Food and Dining details */}
        <FoodAndDining />

        {/* Safety and Comfort information */}
        <SafetyAndComfort />

        {/* Customer Reviews Preview (Testimonials slider) */}
        <Testimonials />

        {/* Booking CTA Section */}
        <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide">
              Ready to Experience the Best Akalappuzha Boat Service?
            </h2>
            <p className="text-white/70 font-sans font-light max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
              Book your private Akalappuzha backwater cruise reservation today. Plan custom trips, sunset tours, and enjoy instant WhatsApp booking confirmation.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4.5 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-premium hover:-translate-y-1 active:scale-95 text-center inline-block"
              >
                Book Your Cruise
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Quick-Call / WhatsApp Buttons & Back to Top */}
      <StickyButtons />
    </>
  );
}
