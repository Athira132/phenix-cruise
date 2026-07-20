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
    title: "Day Package",
    category: "cruises",
    shortDesc: "Enjoy a complete 5-hour daytime cruise on our premium Shikara Boat with fresh local lunch, tea, music, and complete onboard facilities.",
    desc: "Enjoy a complete 5-hour daytime cruise on our premium Shikara Boat with fresh local lunch, tea, music, and complete onboard facilities. Perfect for group trips and family gatherings.",
    image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
    time: "5 Hours Shikara Boat",
    benefits: [
      "Welcome drink included",
      "Traditional Kerala lunch: Chicken Biriyani or meals with Fish Fry",
      "Evening hot tea and traditional snacks",
      "Optional Add-ons: Seafood, Arabic, Chinese, and Nadan dishes",
      "Facilities: Restroom, DJ music system, microphone, electric cabin fans"
    ],
    problems: [
      "No overnight stays"
    ],
    process: [
      "Welcome drink on boarding",
      "Canal & backwater cruise",
      "Traditional Kerala lunch feast",
      "Music and sightseeing",
      "Evening tea & disembark"
    ],
    price: "From ₹500 to ₹600 per person / hourly rates from ₹2,000"
  },
  {
    id: "family-package",
    title: "Family Package",
    category: "cruises",
    shortDesc: "Perfect backwater experience for families. For more details, contact us.",
    desc: "Perfect backwater experience for families. For more details, contact us.",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    time: "For more information and booking, contact us.",
    benefits: [
      "Designed for comfortable family cruises",
      "For more details, contact us."
    ],
    problems: [
      "For more details, contact us."
    ],
    process: [
      "For more details, contact us."
    ],
    price: "For more details, contact us."
  },
  {
    id: "couple-package",
    title: "Couple Package",
    category: "cruises",
    shortDesc: "Romantic couples getaway cruise. For more details, contact us.",
    desc: "Romantic couples getaway cruise. For more details, contact us.",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
    time: "For more information and booking, contact us.",
    benefits: [
      "Exclusive privacy and setup for couples",
      "For more details, contact us."
    ],
    problems: [
      "For more details, contact us."
    ],
    process: [
      "For more details, contact us."
    ],
    price: "For more details, contact us."
  },
  {
    id: "sunset-cruise",
    title: "Sunset Cruise",
    category: "cruises",
    shortDesc: "Witness the beautiful golden hour over the lake. For more details, contact us.",
    desc: "Witness the beautiful golden hour over the lake. For more details, contact us.",
    image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
    time: "For more information and booking, contact us.",
    benefits: [
      "Golden hour views over the backwaters",
      "For more details, contact us."
    ],
    problems: [
      "For more details, contact us."
    ],
    process: [
      "For more details, contact us."
    ],
    price: "For more details, contact us."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Akalapuzha Boat Service | Premium Cruises &amp; Shikara Rides</title>
        <meta
          name="description"
          content="Book the premier Akalapuzha Boat Service. We offer luxury backwater cruises, traditional Shikara boat rides, sunset cruises, and family packages in Calicut, Kerala."
        />
        <meta name="keywords" content="akalapuzha boat service, akalapuzha boat ride, akalapuzha backwater cruise, boat service in akalapuzha, akalapuzha shikara boat, kerala backwater boat ride, shikara boat service in kerala" />
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
