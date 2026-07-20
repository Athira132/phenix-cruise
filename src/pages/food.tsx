import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import FoodAndDining from "@/components/FoodAndDining";
import StickyButtons from "@/components/StickyButtons";
import { motion } from "framer-motion";
import { FaUtensils, FaLeaf, FaShieldAlt, FaSmile, FaCheckCircle, FaCoffee, FaFish } from "react-icons/fa";

const foodHighlights = [
  {
    icon: FaUtensils,
    title: "Freshly Prepared Meals",
    desc: "Every dish is cooked fresh for your journey by our experienced onboard culinary team using carefully selected ingredients.",
  },
  {
    icon: FaLeaf,
    title: "Authentic Local Flavours",
    desc: "Taste traditional Kerala-style cuisine rich in native spices, fresh coconut, and authentic recipes passed down through generations.",
  },
  {
    icon: FaShieldAlt,
    title: "Hygienic Preparation",
    desc: "We follow strict kitchen cleanliness and food safety standards to ensure every meal is wholesome, safe, and delightfully served.",
  },
  {
    icon: FaSmile,
    title: "Pleasant Dining Atmosphere",
    desc: "Enjoy your meals in a relaxed open-air cabin while surrounded by the calm, scenic backwaters of Akalapuzha.",
  },
];

export default function FoodPage() {
  return (
    <>
      <Head>
        <title>Food &amp; Dining Experience | Phoenix Cruise Akalapuzha</title>
        <meta
          name="description"
          content="Discover authentic Kerala food &amp; dining on Phoenix Cruise Akalapuzha boat service. Enjoy freshly prepared local delicacies, Karimeen fish fry, and pleasant backwater dining in Kerala."
        />
        <meta name="keywords" content="Akalapuzha boat service food, Phoenix Cruise dining, Kerala backwater dining, Akalapuzha cruise food, Kerala backwater boat service" />
        <link rel="canonical" href="https://clever-rutherford.vercel.app/food" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://clever-rutherford.vercel.app/food" />
        <meta property="og:title" content="Food &amp; Dining Experience | Phoenix Cruise Akalapuzha" />
        <meta property="og:description" content="Discover authentic Kerala food &amp; dining on Phoenix Cruise Akalapuzha boat service. Enjoy freshly prepared local delicacies, Karimeen fish fry, and pleasant backwater dining in Kerala." />
        <meta property="og:image" content="https://i.ibb.co/YJjmvNQ/image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://clever-rutherford.vercel.app/food" />
        <meta name="twitter:title" content="Food &amp; Dining Experience | Phoenix Cruise Akalapuzha" />
        <meta name="twitter:description" content="Discover authentic Kerala food &amp; dining on Phoenix Cruise Akalapuzha boat service. Enjoy freshly prepared local delicacies, Karimeen fish fry, and pleasant backwater dining in Kerala." />
        <meta name="twitter:image" content="https://i.ibb.co/YJjmvNQ/image.png" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Food & Dining Experience"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Food" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">

          {/* Section 1: Intro / Quality Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-white rounded-3xl p-8 md:p-14 border border-slate-100 shadow-sm">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                AUTHENTIC KERALA FLAVOURS
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark leading-tight">
                Fresh, Delicious &amp; Hygienic Onboard Dining
              </h2>
              <div className="w-16 h-[2px] bg-accent" />
              <p className="text-dark/75 font-light leading-relaxed text-base md:text-lg">
                At Phenix Cruise, we believe a great backwater journey is incomplete without exceptional food. Enjoy freshly prepared, delicious meals served as part of your cruise experience—crafted with quality ingredients, authentic local spices, and warm Kerala hospitality.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-full">
                  <FaCheckCircle className="mr-2 text-emerald-500" />
                  Fresh Local Ingredients
                </div>
                <div className="flex items-center text-xs font-semibold text-primary bg-sand px-4 py-2 rounded-full">
                  <FaCheckCircle className="mr-2 text-accent" />
                  Hygienic Onboard Kitchen
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-premium border border-slate-100">
              <Image
                src="https://i.ibb.co/YJjmvNQ/image.png"
                alt="Traditional Kerala backwater dining feast spread"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Section 2: 4 Pillars Grid */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                OUR CULINARY STANDARDS
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-dark">
                Why Guests Love Our Food
              </h3>
              <p className="text-dark/60 text-sm font-light">
                We take immense pride in delivering a clean, authentic, and memorable dining experience on every cruise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {foodHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="bg-white border border-slate-100 hover:border-primary/20 rounded-2xl p-8 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                        <Icon className="text-xl" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-dark/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Embed Food & Dining Detailed Component */}
          <FoodAndDining />

          {/* Section 4: Call to Action */}
          <section className="bg-slate-900 text-white rounded-3xl p-12 md:p-16 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="font-serif text-3xl md:text-4xl font-bold">
                Ready for an Unforgettable Dining Cruise?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                Connect with us on WhatsApp to book your Akalapuzha backwater boat cruise with freshly prepared Kerala delicacies.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20the%20Food%20%26%20Dining%20Cruise."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 inline-block shadow-lg hover:shadow-premium"
                >
                  Book Cruise via WhatsApp
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <StickyButtons />
    </>
  );
}
