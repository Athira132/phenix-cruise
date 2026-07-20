import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaTripadvisor } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqItems = [
  {
    question: "How do I book a private houseboat?",
    answer: "You can use our secure online booking form or message us directly on WhatsApp with your travel date, headcount, and preferred suite room tier. Our desk coordinates available fleets within 10 minutes."
  },
  {
    question: "Are check-in and check-out timings flexible?",
    answer: "Standard overnight stays check in at 12:00 PM and check out at 9:00 AM the next day. Day trips operate from 11:00 AM to 4:00 PM. Custom boarding offsets are available on request."
  },
  {
    question: "Is onboard dining included in packages?",
    answer: "Yes, our overnight and day-cruise packages include comprehensive on-board meals (lunch, evening tea snacks, dinner, and breakfast) prepared fresh by your private chef."
  },
  {
    question: "What is your cancellation and booking policy?",
    answer: "Cancellations requested 14 days before the cruise allow a full refund. Cancellations closer to the date allow rescheduling based on calendar slots."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Phoenix Cruise! Our team will reach out to you within 2 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Head>
        <title>Contact Us | Phoenix Cruise Akalapuzha Boat Service</title>
        <meta
          name="description"
          content="Contact Phoenix Cruise for Akalapuzha boat service reservations in Moodadi, Kerala. Call or WhatsApp +91 81388 66919 for instant boat cruise bookings."
        />
        <meta name="keywords" content="contact Phoenix Cruise, Akalapuzha boat service contact, Akalapuzha boat ride booking, Kerala backwater boat service phone" />
        <link rel="canonical" href="https://clever-rutherford.vercel.app/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://clever-rutherford.vercel.app/contact" />
        <meta property="og:title" content="Contact Us | Phoenix Cruise Akalapuzha Boat Service" />
        <meta property="og:description" content="Contact Phoenix Cruise for Akalapuzha boat service reservations in Moodadi, Kerala. Call or WhatsApp +91 81388 66919 for instant boat cruise bookings." />
        <meta property="og:image" content="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://clever-rutherford.vercel.app/contact" />
        <meta name="twitter:title" content="Contact Us | Phoenix Cruise Akalapuzha Boat Service" />
        <meta name="twitter:description" content="Contact Phoenix Cruise for Akalapuzha boat service reservations in Moodadi, Kerala. Call or WhatsApp +91 81388 66919 for instant boat cruise bookings." />
        <meta name="twitter:image" content="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Contact & Local Info"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          
          {/* Top block: Side-by-side Contact info & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Info details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-serif font-bold text-dark">
                  Let's plan your perfect voyage
                </h2>
                <p className="text-xs text-dark/70 font-light leading-relaxed">
                  Serving Akalapuzha and nearby backwater destinations in Kerala. Customers looking for our premier <strong>Akalapuzha Boating Service</strong> can contact us directly for custom boat rides, sunset cruises, or family outings.
                </p>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm mt-0.5">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Our Location</h4>
                      <a
                        href="https://maps.app.goo.gl/syiqaAiLKzzjaMoA7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs md:text-sm text-dark/70 font-light leading-relaxed hover:text-primary transition-colors block group"
                        title="Click to open Google Maps directions"
                      >
                        <span className="font-serif font-bold text-dark block text-base group-hover:text-primary transition-colors">Phoenix Cruise</span>
                        <span className="text-primary font-semibold block text-xs uppercase tracking-wider mb-0.5">Akalapuzha Boat Service</span>
                        Purakkad - Muchukunnu Road,<br />
                        Moodadi, Kerala 673307, India
                      </a>
                    </div>
                  </div>

                  {/* Call & WhatsApp */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Helplines</h4>
                      <p className="text-xs text-dark/70 font-light">
                        Reservations: <a href="tel:+918138866919" className="hover:text-primary transition-colors font-semibold">+91 81388 66919</a>
                      </p>
                      <p className="text-xs text-dark/70 font-light mt-1">
                        General Support: <a href="tel:+919567043039" className="hover:text-primary transition-colors">+91 95670 43039</a>
                      </p>
                      <p className="text-xs text-dark/70 font-light mt-2 flex items-center">
                        WhatsApp: <a href="https://wa.me/918138866919" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline ml-1 font-semibold flex items-center"><FaWhatsapp className="mr-1" />+91 81388 66919</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Email Reservations</h4>
                      <p className="text-xs text-dark/70 font-light">
                        <a href="mailto:info@phoenixcruise.com" className="hover:text-primary transition-colors font-semibold">info@phoenixcruise.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm">
                      <FaClock />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Business Hours</h4>
                      <p className="text-xs text-dark/70 font-light">
                        Office: 8:00 AM - 10:00 PM (Daily)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-4">Follow Our Journey</h4>
                <div className="flex items-center space-x-3">
                  <a href="https://www.facebook.com/profile.php?id=61591769716259" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-[#1877F2] hover:text-white transition-all duration-300" aria-label="Facebook Profile">
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a href="https://www.instagram.com/phoenix_cruise/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-[#E1306C] hover:text-white transition-all duration-300" aria-label="Instagram Profile">
                    <FaInstagram className="text-xs" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCq0Q_2jwkqYiJisXELYDtLg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-[#FF0000] hover:text-white transition-all duration-300" aria-label="YouTube Channel">
                    <FaYoutube className="text-xs" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-7 min-h-[350px] relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm group">
              <iframe
                src="https://maps.google.com/maps?q=11.505669,75.6596938&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phoenix Akalapuzha Boating Service Jetty Map"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.app.goo.gl/syiqaAiLKzzjaMoA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-primary text-dark hover:text-white px-4 py-2.5 rounded-luxury shadow-md hover:shadow-premium font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center border border-primary/5"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Contact Inquiry Form */}
          <section className="bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-sm max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl font-bold text-dark">Send an Inquiry</h3>
              <p className="text-xs text-dark/60 font-light">Have specific questions? Leave us a message and our managers will email you.</p>
            </div>
            
            <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Full Name</label>
                <input required type="text" className="px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary font-sans" placeholder="John Doe" />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Email Address</label>
                <input required type="email" className="px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary font-sans" placeholder="johndoe@example.com" />
              </div>
              <div className="md:col-span-2 flex flex-col space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Subject</label>
                <input required type="text" className="px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary font-sans" placeholder="Query about corporate packages" />
              </div>
              <div className="md:col-span-2 flex flex-col space-y-1">
                <label className="text-[10px] uppercase font-bold tracking-wider text-dark/50">Message</label>
                <textarea required rows={4} className="px-4 py-3 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-primary font-sans resize-none" placeholder="Type your details here..." />
              </div>
              <div className="md:col-span-2 flex justify-center pt-2">
                <button type="submit" className="px-8 py-3.5 bg-primary hover:bg-primary-hover text-white rounded-[12px] font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </section>

          {/* FAQ Accordion Grid */}
          <section className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                FAQ CORNER
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center text-dark font-serif font-bold text-sm sm:text-base hover:text-primary transition-colors focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <FiChevronUp className="text-lg" /> : <FiChevronDown className="text-lg" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-dark/70 font-sans font-light leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
