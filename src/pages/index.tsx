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
import FAQ, { faqList } from "@/components/FAQ";
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
      "alternateName": ["Akalapuzha Phoenix Cruise", "Phoenix Cruise Akalapuzha"],
      "image": "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
      "@id": "https://phoenixcruise.in/#localbusiness",
      "url": "https://phoenixcruise.in",
      "telephone": "+918138866919",
      "priceRange": "₹₹",
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
      "name": "Akalapuzha Phoenix Cruise",
      "url": "https://phoenixcruise.in"
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Akalapuzha Phoenix Cruise & Backwater Boating",
      "description": "Scenic backwater boat cruise service in Akalapuzha, Kerala offering Shikara boat rides, traditional houseboat experiences, and family group cruises.",
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqList.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  ];

  return (
    <>
      <Head>
        <title>Akalapuzha Phoenix Cruise | Kerala Backwater Boat Cruise</title>
        <meta
          name="description"
          content="Experience Akalapuzha Phoenix Cruise with scenic Kerala backwaters, day cruises, houseboat experiences, family group cruises and relaxing boat rides."
        />
        <meta
          name="keywords"
          content="Akalapuzha Phoenix Cruise, Akalapuzha boat cruise, Akalapuzha boat service, Akalapuzha backwater cruise, Phoenix Cruise Akalapuzha, Kerala backwater cruise, Kerala boat cruise, Shikara boat cruise, Houseboat experience, Family group cruise, Day cruise in Akalapuzha, Backwater boat ride in Kerala"
        />
        <link rel="canonical" href="https://phoenixcruise.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://phoenixcruise.in/" />
        <meta property="og:title" content="Akalapuzha Phoenix Cruise | Kerala Backwater Boat Cruise" />
        <meta
          property="og:description"
          content="Experience Akalapuzha Phoenix Cruise with scenic Kerala backwaters, day cruises, houseboat experiences, family group cruises and relaxing boat rides."
        />
        <meta property="og:image" content="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://phoenixcruise.in/" />
        <meta name="twitter:title" content="Akalapuzha Phoenix Cruise | Kerala Backwater Boat Cruise" />
        <meta
          name="twitter:description"
          content="Experience Akalapuzha Phoenix Cruise with scenic Kerala backwaters, day cruises, houseboat experiences, family group cruises and relaxing boat rides."
        />
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
        {/* 1. Existing Full-Screen Hero Section with single H1 */}
        <Hero />

        {/* 2. Visual Highlight Cards (Safety First, Fresh Kerala Flavours, Feel at Home) */}
        <SafeAndQualityHighlight />

        {/* 3. Choose Your Experience (4 Landscape Experience Cards in 1 Row on Desktop) */}
        <Cruises />

        {/* 4. Short Introduction / About Phoenix Cruise */}
        <About />

        {/* 5. WHY CHOOSE US (Safety First, Quality Food, Family Friendly) */}
        <WhyChooseUs />

        {/* 6. Onboard Dining (Fresh Kerala Flavours Photo Showcase) */}
        <FoodAndDining />

        {/* 7. Video Highlights (Vertical 9:16 Cards) */}
        <VideoGallery />

        {/* 8. Photo Showcase Gallery (Masonry Style & Lightbox) */}
        <Gallery />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Frequently Asked Questions (SEO FAQ Section with Accordion) */}
        <FAQ />

        {/* 11. Contact & Location Map */}
        <Contact />
      </main>

      <Footer />

      {/* Sticky Quick-Call / WhatsApp Buttons & Back to Top */}
      <StickyButtons />
    </>
  );
}
