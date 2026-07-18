import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaStar, FaQuoteLeft, FaGoogle, FaSmile, FaCheckCircle, FaAward } from "react-icons/fa";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://i.ibb.co/Y7x5FZFL/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    rating: 5,
    date: "1 week ago",
    text: "An absolute dream! The service was 5-star all the way. The private chef made the best Kerala Prawn curry we have ever had. The sunset on the Vembanad lake was spectacular.",
  },
  {
    name: "Rohan & Anjali",
    location: "Bangalore, India",
    image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
    rating: 5,
    date: "3 weeks ago",
    text: "We booked the Honeymoon Cruise and it exceeded all expectations. Beautiful room decorations, candlelit dinner under the stars, and such polite crew. Highly recommended!",
  },
  {
    name: "David Miller",
    location: "Singapore",
    image: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
    rating: 5,
    date: "1 month ago",
    text: "Our corporate retreat was a major success. The floating conference boat was equipped with everything we needed, and cruising the canals during breaks was fantastic.",
  },
  {
    name: "Dr. Mathew George",
    location: "Kochi, India",
    image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
    rating: 5,
    date: "2 months ago",
    text: "The deluxe double-decker boat was incredibly clean, rooms were spacious, and the kids loved sitting on the upper deck. Absolute value for money!",
  },
  {
    name: "Elena Rostova",
    location: "Moscow, Russia",
    image: "https://i.ibb.co/Z625HSyx/Whats-App-Image-2026-07-14-at-1-19-40-PM-1.jpg",
    rating: 5,
    date: "3 months ago",
    text: "A truly peaceful slice of heaven. Walking onto the houseboat, the smell of freshly cut wood and local flowers is amazing. The captain is exceptionally polite and helpful.",
  },
  {
    name: "Siddharth Sen",
    location: "New Delhi, India",
    image: "https://i.ibb.co/1fkCt6tm/Whats-App-Image-2026-07-14-at-1-19-38-PM.jpg",
    rating: 5,
    date: "4 months ago",
    text: "Wonderful family trip. Traditional hospitality combined with modern air-conditioned bedrooms made the hot days very pleasant. The booking team handled WhatsApp communication instantly.",
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Guest Testimonials & Reviews | Phoenix Cruise Kerala</title>
        <meta
          name="description"
          content="Read what our national and international guests say about Phoenix Cruise luxury houseboats, culinary tours, honeymoon decor packages, and backwater safaris."
        />
        <meta name="keywords" content="phoenix cruise reviews, guest testimonials kerala, akalapuzha boat reviews" />
        <link rel="canonical" href="https://phoenixcruise.com/testimonials" />
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
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto bg-white border border-slate-100 p-8 rounded-3xl shadow-sm text-center">
            <div className="space-y-2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 pb-6 md:pb-0">
              <div className="flex items-center space-x-1.5 text-primary text-3xl font-serif font-extrabold">
                <FaGoogle className="text-2xl text-rose-500 mr-1" /> 4.9 <span className="text-[#C9A227]">★</span>
              </div>
              <p className="text-xs text-dark/60 font-light">Google Rating (840+ reviews)</p>
            </div>
            
            <div className="space-y-2 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 py-6 md:py-0">
              <div className="flex items-center space-x-1.5 text-primary text-3xl font-serif font-extrabold">
                <FaSmile className="text-2xl text-[#C9A227] mr-1" /> 99.8%
              </div>
              <p className="text-xs text-dark/60 font-light">Customer Satisfaction Score</p>
            </div>

            <div className="space-y-2 flex flex-col items-center justify-center pt-6 md:pt-0">
              <div className="flex items-center space-x-1.5 text-primary text-3xl font-serif font-extrabold">
                <FaAward className="text-2xl text-emerald-600 mr-1" /> 15+ Yrs
              </div>
              <p className="text-xs text-dark/60 font-light">Industry-trusted Experience</p>
            </div>
          </div>

          {/* Grid Reviews */}
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

                <div className="flex items-center space-x-4 border-t border-slate-100 pt-6 mt-6 relative z-10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-accent/20 bg-slate-100 flex-shrink-0">
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      fill
                      sizes="44px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif font-bold text-dark text-sm sm:text-base truncate">{rev.name}</h4>
                    <div className="flex justify-between items-center text-[10px] text-dark/50 mt-0.5">
                      <span className="truncate mr-1">{rev.location}</span>
                      <span className="flex-shrink-0 text-accent/80 font-semibold">• {rev.date}</span>
                    </div>
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
