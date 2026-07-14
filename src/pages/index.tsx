import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cruises from "@/components/Cruises";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
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
    "name": "Phenix Cruise",
    "image": "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
    "@id": "https://phenixcruise.com/#organization",
    "url": "https://phenixcruise.com",
    "telephone": "+919876543210",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Phenix Cruise Jetty, Punnamada Lake, Near Finishing Point",
      "addressLocality": "Alappuzha (Alleppey)",
      "addressRegion": "Kerala",
      "postalCode": "688011",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.5097499,
      "longitude": 76.3470659
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
      "https://www.facebook.com/phenixcruise",
      "https://www.instagram.com/phenixcruise"
    ]
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Houseboat Booking Alleppey",
    "image": "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    "description": "Book luxury houseboats, Shikara rides, honeymoon cruises and corporate events in the Kerala backwaters with Phenix Cruise. Award-winning hospitality and fresh dining.",
    "brand": {
      "@type": "Brand",
      "name": "Phenix Cruise"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://phenixcruise.com/#packages",
      "priceCurrency": "INR",
      "lowPrice": "3000",
      "highPrice": "24000",
      "offerCount": "10"
    }
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://phenixcruise.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://phenixcruise.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Luxury Cruises",
        "item": "https://phenixcruise.com/#cruises"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Packages",
        "item": "https://phenixcruise.com/#packages"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Phenix Cruise | Luxury Kerala Backwater Houseboat Bookings</title>
        <meta
          name="description"
          content="Experience the serene beauty of Kerala backwaters with Phenix Cruise. Book luxury AC houseboats, romantic honeymoon cruises, private chef lunch tours and events in Alleppey."
        />
        <meta name="keywords" content="kerala houseboats, boat booking kerala, luxury cruise kerala, alleppey houseboats, houseboats booking, backwater tourism kerala, phenix cruise" />
        <link rel="canonical" href="https://phenixcruise.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://phenixcruise.com" />
        <meta property="og:title" content="Phenix Cruise | Luxury Kerala Backwater Houseboat Bookings" />
        <meta
          property="og:description"
          content="Experience the serene beauty of Kerala backwaters with Phenix Cruise. Book luxury AC houseboats, romantic honeymoon cruises, and premium packages."
        />
        <meta property="og:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://phenixcruise.com" />
        <meta property="twitter:title" content="Phenix Cruise | Luxury Kerala Backwater Houseboat Bookings" />
        <meta
          property="twitter:description"
          content="Experience the serene beauty of Kerala backwaters with Phenix Cruise. Book luxury AC houseboats, romantic honeymoon cruises, and premium packages."
        />
        <meta property="twitter:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Structured Data Script Embeds */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
        />
      </Head>

      {/* Premium Loader */}
      <Loader />

      {/* Floating Custom Cursor */}
      <CustomCursor />

      {/* Page Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Core Website Flow */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Cruises />
        <Packages />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <Contact />
      </main>

      <Footer />

      {/* Sticky Quick-Call / WhatsApp Buttons & Back to Top */}
      <StickyButtons />
    </>
  );
}
