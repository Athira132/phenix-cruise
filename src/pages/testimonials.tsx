import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaStar, FaQuoteLeft, FaGoogle, FaSmile, FaCheckCircle, FaAward } from "react-icons/fa";

const reviews = [
  {
    name: "Anjali Menon",
    location: "Cochin, Kerala",
    rating: 5,
    date: "1 week ago",
    text: "An absolute dream! The service was top quality all the way. The private chef made delicious authentic Kerala seafood for our family. The sunset on the Akalapuzha backwaters was spectacular.",
  },
  {
    name: "Rahul Nair",
    location: "Calicut, Kerala",
    rating: 5,
    date: "3 weeks ago",
    text: "We booked the cruise package and it exceeded all our expectations. Beautiful ambient setup, delicious food, and such a polite and safety-focused crew. Highly recommended!",
  },
  {
    name: "Sreedevi Krishnan",
    location: "Trivandrum, Kerala",
    rating: 5,
    date: "1 month ago",
    text: "Our family getaway was a major success. The cruise boat was well-maintained and comfortable, equipped with everything we needed. Cruising the calm backwater canals was fantastic.",
  },
  {
    name: "Arjun Nair",
    location: "Chennai, India",
    rating: 5,
    date: "2 months ago",
    text: "The boat was incredibly clean, seating was spacious and comfortable, and the kids loved sitting on the open deck. The freshly prepared meals were outstanding value for money!",
  },
  {
    name: "Meera Suresh",
    location: "Bangalore, India",
    rating: 5,
    date: "3 months ago",
    text: "A truly peaceful slice of heaven. Stepping onto the boat, the fresh breeze and quiet backwaters were amazing. The captain and crew are exceptionally polite, safety-conscious, and helpful.",
  },
  {
    name: "Vishnu Prasad",
    location: "Hyderabad, India",
    rating: 5,
    date: "4 months ago",
    text: "Wonderful family trip. Traditional hospitality combined with comfortable seating and fresh food made the day very pleasant. The booking team handled WhatsApp communication instantly.",
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Guest Reviews &amp; Ratings | Phoenix Cruise Akalapuzha</title>
        <meta
          name="description"
          content="Read verified guest reviews and experiences for Phoenix Cruise Akalapuzha boat service in Kerala. High-rated family boat rides and backwater cruises."
        />
        <meta name="keywords" content="Guest Reviews, Phoenix Cruise reviews, Akalapuzha boat service, Akalapuzha boat ride, Phoenix Cruise, Akalapuzha, Kerala backwater boat service, Kerala boat cruise" />
        <link rel="canonical" href="https://phoenixcruise.in/testimonials" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://phoenixcruise.in/testimonials" />
        <meta property="og:title" content="Guest Reviews &amp; Ratings | Phoenix Cruise Akalapuzha" />
        <meta property="og:description" content="Read verified guest reviews and experiences for Phoenix Cruise Akalapuzha boat service in Kerala. High-rated family boat rides and backwater cruises." />
        <meta property="og:image" content="https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://phoenixcruise.in/testimonials" />
        <meta name="twitter:title" content="Guest Reviews &amp; Ratings | Phoenix Cruise Akalapuzha" />
        <meta name="twitter:description" content="Read verified guest reviews and experiences for Phoenix Cruise Akalapuzha boat service in Kerala. High-rated family boat rides and backwater cruises." />
        <meta name="twitter:image" content="https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Guest Testimonials"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Testimonials" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          
          {/* Trust Banner / Rating Summary */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <FaCheckCircle className="text-emerald-500" />
                <span>100% Verified Guest Reviews</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">
                Loved by Travellers Across India
              </h2>
              <p className="text-dark/60 text-xs sm:text-sm font-light max-w-xl">
                We take immense pride in delivering safe backwater journeys, authentic Kerala food, and exceptional cruise comfort for every guest.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-sand/30 rounded-2xl border border-primary/5 min-w-[200px]">
              <div className="flex items-center space-x-1 text-[#C9A227] text-2xl mb-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="font-serif text-3xl font-bold text-dark">4.9 / 5.0</span>
              <span className="text-xs text-dark/60 font-light mt-1 flex items-center">
                <FaGoogle className="mr-1.5 text-blue-500" /> Based on 250+ Ratings
              </span>
            </div>
          </div>

          {/* Testimonial Cards Grid (3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-8 relative flex flex-col justify-between hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
              >
                <FaQuoteLeft className="text-slate-100 group-hover:text-sand/60 transition-colors text-4xl absolute top-6 right-8 pointer-events-none -z-0" />
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-1 text-[#C9A227] text-sm">
                    {[...Array(rev.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-dark/80 font-light leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6 relative z-10">
                  <h4 className="font-serif font-bold text-dark text-sm sm:text-base truncate">{rev.name}</h4>
                  <div className="flex justify-between items-center text-[10px] text-dark/50 mt-0.5">
                    <span className="truncate mr-1">{rev.location}</span>
                    <span className="flex-shrink-0 text-accent/80 font-semibold">• {rev.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <section className="bg-slate-900 text-white rounded-3xl p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 pointer-events-none [background-size:24px_24px]" />
            <h3 className="font-serif text-3xl font-bold">Write a Guest Review</h3>
            <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
              Have you recently sailed with us? Share your feedback to help future travellers plan their Kerala backwater voyages!
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20backwater%20cruise."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 inline-block text-center"
              >
                Book Your Own Journey
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
