import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaArrowRight, FaClock, FaCheckCircle, FaQuestionCircle } from "react-icons/fa";

// Services Database supporting Luxury Cruises and Boat Rides
export const servicesData = [
  {
    id: "day-package",
    title: "Day Cruise in Akalapuzha",
    subtitle: "5 Hours of Scenic Shikara Boat Experience",
    seoTitle: "Akalapuzha Day Cruise | Phoenix Cruise Kerala",
    seoDesc: "Book the 5-hour Akalapuzha day cruise with Phoenix Cruise Kerala. Experience scenic backwaters on a Shikara boat with authentic meals, DJ music, and onboard amenities.",
    h1Title: "Day Cruise in Akalapuzha",
    category: "cruises",
    shortDesc: "5-hour scenic Shikara boat cruise through Akalapuzha backwaters. Includes fresh Kerala food, DJ sound system, and a comfortable family and group experience.",
    desc: "Immerse yourself in a 5-hour daytime backwater voyage along Akalapuzha's palm-fringed channels on a comfortable Shikara boat. Includes welcome drinks, traditional Kerala feast, evening snacks, onboard DJ sound system, and spacious seating perfect for family and group outings.",
    image: "https://i.ibb.co/hRGrBy5Y/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    imageAlt: "Akalapuzha day cruise scenic backwater boat ride with Phoenix Cruise Kerala",
    time: "5 Hours Shikara Boat",
    foodIncluded: [
      "Welcome Drink",
      "Lunch (Biriyani or Traditional Meals with Fish Fry)",
      "Evening Tea & Snacks"
    ],
    foodAddons: [
      "Seafood",
      "Arabic Dishes",
      "Chinese Dishes",
      "Nadan Kerala Dishes"
    ],
    perPersonPricing: [
      { group: "25–30 People", price: "₹600", unit: "per person" },
      { group: "30–40 People", price: "₹550", unit: "per person" },
      { group: "Up to 40 People", price: "₹500", unit: "per person" }
    ],
    hourlyCharges: [
      { group: "1–25 People", price: "₹2,000", unit: "per hour" },
      { group: "25–35 People", price: "₹2,500", unit: "per hour" },
      { group: "35–50 People", price: "₹3,000", unit: "per hour" },
      { group: "50–60 People", price: "₹3,500", unit: "per hour" }
    ],
    facilities: [
      { name: "Bathroom", desc: "Clean, hygienic onboard restroom" },
      { name: "DJ Music System", desc: "High-power Bluetooth sound system" },
      { name: "Microphone", desc: "Onboard mic for announcements & music" },
      { name: "Fan", desc: "Cabin air fans for optimal breeze & comfort" }
    ],
    ctaTitle: "Book Your Day Cruise",
    whatsappMsg: "Hello Phoenix Cruise, I would like to enquire about booking the Day Cruise in Akalapuzha (5 Hours Shikara Boat)."
  },
  {
    id: "family-package",
    title: "Houseboat Experience in Akalapuzha",
    subtitle: "5 Hours of Relaxing Backwater Cruise",
    seoTitle: "Akalapuzha Houseboat Experience | Phoenix Cruise",
    seoDesc: "Experience luxury backwater cruising with the Akalapuzha Houseboat Experience by Phoenix Cruise. 5 hours of scenic Kerala waterways, traditional meals, and relaxing views.",
    h1Title: "Houseboat Experience in Akalapuzha",
    category: "cruises",
    shortDesc: "A relaxing 5-hour traditional wooden houseboat cruise across tranquil Kerala backwaters with scenic views, authentic Kerala meals, and premium onboard amenities.",
    desc: "Relax aboard our traditional Kerala wooden houseboat. Cruise peacefully through Akalapuzha's scenic waterways while enjoying authentic Kerala meals, evening refreshments, sound entertainment, and spacious viewing decks offering picturesque backwater views.",
    image: "https://i.ibb.co/9k6JQ9Hn/Whats-App-Image-2026-07-14-at-1-19-56-PM.jpg",
    imageAlt: "Akalapuzha Phoenix Cruise traditional wooden houseboat cruise in Kerala",
    time: "5 Hours Relaxing Cruise",
    foodIncluded: [
      "Welcome Drink",
      "Lunch (Biriyani or Traditional Meals with Fish Fry)",
      "Evening Tea & Snacks"
    ],
    foodAddons: [
      "Seafood",
      "Arabic Dishes",
      "Chinese Dishes",
      "Nadan Kerala Dishes"
    ],
    perPersonPricing: [
      { group: "25–30 People", price: "₹600", unit: "per person" },
      { group: "30–40 People", price: "₹550", unit: "per person" },
      { group: "Up to 40 People", price: "₹500", unit: "per person" }
    ],
    hourlyCharges: [
      { group: "1–25 People", price: "₹2,000", unit: "per hour" },
      { group: "25–35 People", price: "₹2,500", unit: "per hour" },
      { group: "35–50 People", price: "₹3,000", unit: "per hour" },
      { group: "50–60 People", price: "₹3,500", unit: "per hour" }
    ],
    facilities: [
      { name: "Bathroom", desc: "Clean, hygienic onboard restroom" },
      { name: "DJ Music System", desc: "High-power Bluetooth sound system" },
      { name: "Microphone", desc: "Onboard mic for announcements & music" },
      { name: "Fan", desc: "Cabin air fans for optimal breeze & comfort" }
    ],
    ctaTitle: "Plan Your Houseboat Experience",
    whatsappMsg: "Hello Phoenix Cruise, I would like to enquire about booking the Houseboat Experience in Akalapuzha (5 Hours Cruise)."
  },
  {
    id: "couple-package",
    title: "Family & Group Cruise in Akalapuzha",
    subtitle: "Custom Outings, Celebrations & Group Gatherings",
    seoTitle: "Akalapuzha Family & Group Cruise | Phoenix Cruise",
    seoDesc: "Plan your family outing, celebration, or group gathering with the Akalapuzha Family & Group Cruise by Phoenix Cruise. Spacious boat, custom food, music, and scenic views.",
    h1Title: "Family & Group Cruise in Akalapuzha",
    category: "cruises",
    shortDesc: "Spacious backwater cruise perfect for family outings, group trips, and celebrations. Enjoy delicious food catering and a comfortable boat experience.",
    desc: "Designed specifically for family get-togethers, friends' reunions, birthday parties, and corporate outings. Enjoy spacious seating, custom group food catering, DJ music system, and a comfortable backwater cruise experience across Akalapuzha.",
    image: "/images/family_group_cruise.jpg",
    imageAlt: "Family and group enjoying Akalapuzha backwater boat cruise with Phoenix Cruise",
    time: "Customizable Duration",
    whyChoose: [
      "Spacious and comfortable cruise experience for all age groups",
      "Suitable for families, friends' reunions, and corporate outings",
      "Scenic palm-fringed Kerala backwater routes",
      "Freshly prepared Kerala dining and custom food catering options",
      "Onboard music, DJ system, and microphone for celebrations",
      "Perfect for birthdays, anniversaries, and special group occasions"
    ],
    foodIncluded: [
      "Welcome Drink",
      "Lunch (Biriyani or Traditional Meals with Fish Fry)",
      "Evening Tea & Snacks"
    ],
    foodAddons: [
      "Seafood",
      "Arabic Dishes",
      "Chinese Dishes",
      "Nadan Kerala Dishes"
    ],
    facilities: [
      { name: "Bathroom", desc: "Clean, hygienic onboard restroom" },
      { name: "DJ Music System", desc: "High-power Bluetooth sound system" },
      { name: "Microphone", desc: "Onboard mic for announcements & music" },
      { name: "Fan", desc: "Cabin air fans for optimal breeze & comfort" }
    ],
    isCustomQuote: true,
    ctaTitle: "Plan Your Group Cruise",
    whatsappMsg: "Hello Phoenix Cruise, I would like to get a Custom Group Quote for a Family & Group Cruise in Akalapuzha."
  },
  {
    id: "sunset-cruise",
    title: "Sunset Cruise in Akalapuzha",
    subtitle: "Golden Hour Over Akalapuzha Backwaters",
    seoTitle: "Akalapuzha Sunset Cruise | Phoenix Cruise",
    seoDesc: "Witness breathtaking golden hour views over Akalapuzha backwaters with Phoenix Cruise Kerala. 2 hours of relaxing boat ride, evening tea, and scenic serenity.",
    h1Title: "Sunset Cruise in Akalapuzha",
    category: "cruises",
    shortDesc: "Witness the magical evening sunset over Akalapuzha backwaters with scenic golden hour views, refreshments, and a relaxing boat ride.",
    desc: "Experience the golden hour over Akalapuzha's calm backwaters as the sun sets behind coconut palms. Enjoy scenic views, evening refreshments, soothing ambient music, and a peaceful, relaxing boat ride in Kerala.",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    imageAlt: "Akalapuzha Kerala sunset boat cruise with Phoenix Cruise",
    time: "2 Hours Sunset Special",
    foodIncluded: ["Welcome Drink", "Evening Tea & Snacks"],
    foodAddons: ["Seafood", "Kerala Delicacies"],
    facilities: [
      { name: "Bathroom", desc: "Clean, hygienic onboard restroom" },
      { name: "DJ Music System", desc: "High-power Bluetooth sound system" },
      { name: "Microphone", desc: "Onboard mic for announcements" },
      { name: "Fan", desc: "Cabin air fans for optimal comfort" }
    ],
    ctaTitle: "Book Sunset Cruise",
    whatsappMsg: "Hello Phoenix Cruise, I would like to enquire about booking the Sunset Cruise in Akalapuzha."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Akalapuzha Boat Cruise Packages | Phoenix Cruise Kerala</title>
        <meta
          name="description"
          content="Explore Akalapuzha Phoenix Cruise boat packages in Kerala. Featuring 5-hour Day Cruise, Houseboat Experience, Family &amp; Group Cruise, and Sunset Cruise."
        />
        <meta name="keywords" content="Akalapuzha Phoenix Cruise, Akalapuzha boat cruise, Akalapuzha boat service, Akalapuzha backwater cruise, Phoenix Cruise Akalapuzha, Kerala backwater cruise, Day cruise in Akalapuzha, Houseboat experience, Family group cruise" />
        <link rel="canonical" href="https://phoenixcruise.in/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://phoenixcruise.in/services" />
        <meta property="og:title" content="Akalapuzha Boat Cruise Packages | Phoenix Cruise Kerala" />
        <meta property="og:description" content="Explore Akalapuzha Phoenix Cruise boat packages in Kerala. Featuring 5-hour Day Cruise, Houseboat Experience, Family &amp; Group Cruise, and Sunset Cruise." />
        <meta property="og:image" content="https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://phoenixcruise.in/services" />
        <meta name="twitter:title" content="Akalapuzha Boat Cruise Packages | Phoenix Cruise Kerala" />
        <meta name="twitter:description" content="Explore Akalapuzha Phoenix Cruise boat packages in Kerala. Featuring 5-hour Day Cruise, Houseboat Experience, Family &amp; Group Cruise, and Sunset Cruise." />
        <meta name="twitter:image" content="https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />
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
                Akalapuzha Boat Service &amp; Rides
              </h2>
              <p className="text-dark/60 font-light text-sm">
                Scenic backwater cruises and private boat rides designed for family outings, sunset viewing, and premium village hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.filter(s => s.category === "cruises").map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] w-full bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt || service.title}
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
                        title={`View details for ${service.title} with Phoenix Cruise`}
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
                <p className="text-xs text-dark/60 font-light max-w-xs leading-relaxed">Choose a luxury cruise trip or private boat ride.</p>
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
                  <h4 className="font-serif font-bold text-dark text-sm sm:text-base">Are safety jackets provided on the boats?</h4>
                </div>
                <p className="text-xs text-dark/70 font-light leading-relaxed pl-7">Yes, we provide certified life jackets and safety gear for all guests on board, adhering to safety protocols throughout the cruise.</p>
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
                <a
                  href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%2520backwater%20cruise."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 inline-block text-center"
                >
                  Book Your Cruise
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
