import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SafeAndQualityHighlight from "@/components/SafeAndQualityHighlight";
import ThreeImageChoice from "@/components/ThreeImageChoice";
import WhyChooseUs from "@/components/WhyChooseUs";
import Cruises from "@/components/Cruises";
import DayPackageDetails from "@/components/DayPackageDetails";
import FoodAndDining from "@/components/FoodAndDining";
import VideoGallery from "@/components/VideoGallery";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
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
  const jsonLdOrg = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Phoenix Cruise - Akalapuzha Boat Service",
      "alternateName": "Akalapuzha Boat Service",
      "image": "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
      "@id": "https://clever-rutherford.vercel.app/#localbusiness",
      "url": "https://clever-rutherford.vercel.app",
      "telephone": "+918138866919",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Purakkad - Muchukunnu Road",
        "addressLocality": "Moodadi",
        "addressRegion": "Kerala",
        "postalCode": "673307",
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
        "https://www.facebook.com/profile.php?id=61591769716259",
        "https://www.instagram.com/phoenix_cruise/",
        "https://www.youtube.com/channel/UCq0Q_2jwkqYiJisXELYDtLg"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Phoenix Cruise",
      "url": "https://clever-rutherford.vercel.app"
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Akalapuzha Backwater Cruise & Boating",
      "description": "Scenic backwater boat cruise service in Akalapuzha, Kerala offering Shikara boat rides, quality dining, and sunset cruises.",
      "location": {
        "@type": "Place",
        "name": "Akalapuzha Backwaters",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Purakkad - Muchukunnu Road",
          "addressLocality": "Moodadi",
          "addressRegion": "Kerala",
          "postalCode": "673307",
          "addressCountry": "IN"
        }
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Akalapuzha Boat Service | Phoenix Cruise Kerala Backwater Boating</title>
        <meta
          name="description"
          content="Experience the serene beauty of Kozhikode backwaters with Phoenix Cruise Akalapuzha boat service in Kerala. Book luxury houseboat cruises, Shikara boat rides, and quality dining."
        />
        <meta name="keywords" content="Akalapuzha boat service, Akalapuzha boat ride, Phoenix Cruise, Akalapuzha, boat service in Akalapuzha, Kerala backwater boat service, boat cruise in Kerala, Phoenix Cruise Akalapuzha, Moodadi boat cruise" />
        <link rel="canonical" href="https://clever-rutherford.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://clever-rutherford.vercel.app/" />
        <meta property="og:title" content="Akalapuzha Boat Service | Phoenix Cruise Kerala Backwater Boating" />
        <meta
          property="og:description"
          content="Experience the serene beauty of Kozhikode backwaters with Phoenix Cruise Akalapuzha boat service in Kerala. Book luxury houseboat cruises, Shikara boat rides, and quality dining."
        />
        <meta property="og:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://clever-rutherford.vercel.app/" />
        <meta name="twitter:title" content="Akalapuzha Boat Service | Phoenix Cruise Kerala Backwater Boating" />
        <meta name="twitter:description" content="Experience the serene beauty of Kozhikode backwaters with Phoenix Cruise Akalapuzha boat service in Kerala. Book luxury houseboat cruises, Shikara boat rides, and quality dining." />
        <meta name="twitter:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

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
        {/* 1. Existing Full-Screen Hero Section */}
        <Hero />

        {/* 2. First Three Visual Highlight Cards (Safety First, Fresh Kerala Flavours, Feel at Home) */}
        <SafeAndQualityHighlight />

        {/* 3. Find Your Perfect Cruise (4 Wide Landscape Experience Cards with Full Boat Visibility) */}
        <Cruises />

        {/* 4. Short Introduction / About Phoenix Cruise */}
        <About />

        {/* 5. WHY CHOOSE US (Safety First, Quality Food, Family Friendly - 3 Landscape Image Cards) */}
        <WhyChooseUs />

        {/* 6. Onboard Dining (Fresh Kerala Flavours Photo Showcase) */}
        <FoodAndDining />

        {/* 7. Video Highlights (Vertical 9:16 Cards) */}
        <VideoGallery />

        {/* 8. Photo Showcase Gallery (Masonry Style & Lightbox) */}
        <Gallery />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Contact & Location Map */}
        <Contact />
      </main>

      <Footer />

      {/* Sticky Quick-Call / WhatsApp Buttons & Back to Top */}
      <StickyButtons />
    </>
  );
}
