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
    answer: "A 30% advance deposit secures your fleet allocation. Cancellations requested 14 days before the cruise receive a full refund. Cancellations closer to the date allow rescheduling based on calendar slots."
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
        <title>Contact Us | Akalapuzha Boating Service & Bookings</title>
        <meta
          name="description"
          content="Serving Akalapuzha and nearby backwater destinations in Kerala. Contact Akalapuzha Boating Service directly for houseboat bookings and custom lake rides."
        />
        <meta name="keywords" content="akalapuzha boating service, akalapuzha boat ride, contact akalapuzha boat booking, backwater tours akalapuzha" />
        <link rel="canonical" href="https://phoenixcruise.com/contact" />
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
                    <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Our Jetty Address</h4>
                      <p className="text-xs text-dark/70 font-light leading-relaxed">
                        Phoenix Akalapuzha Boating Service Jetty, Akalapuzha Lake Road,<br />
                        Kozhikode (Calicut) District, Kerala - 673522, India
                      </p>
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
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Facebook">
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Instagram">
                    <FaInstagram className="text-xs" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="YouTube">
                    <FaYoutube className="text-xs" />
                  </a>
                  <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="TripAdvisor">
                    <FaTripadvisor className="text-xs" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="lg:col-span-7 min-h-[350px] relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1121085002016!2d75.72654397584163!3d11.543888988655619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6873523f6b4d3%3A0x6b63f5383f9ecffc!2sAkalapuzha%20Boating%20Point!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phoenix Akalapuzha Boating Service Jetty Map"
                className="absolute inset-0 w-full h-full"
              />
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
