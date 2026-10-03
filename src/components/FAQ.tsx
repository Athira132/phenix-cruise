import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaQuestionCircle, FaWhatsapp } from "react-icons/fa";

export const faqList = [
  {
    question: "What is Akalapuzha Phoenix Cruise?",
    answer: "Akalapuzha Phoenix Cruise is a premier backwater boat service located at Akalapuzha lake in Moodadi, near Kozhikode, Kerala. We provide scenic Shikara boat rides, traditional wooden houseboat experiences, and tailored family group cruises with authentic Kerala dining and certified safety standards."
  },
  {
    question: "What cruise experiences are available at Phoenix Cruise?",
    answer: "We offer four distinct cruise experiences: 1) Day Cruise in Akalapuzha (5-hour scenic Shikara boat ride with meals and DJ music), 2) Houseboat Experience in Akalapuzha (5-hour relaxing traditional wooden houseboat cruise), 3) Family & Group Cruise in Akalapuzha (spacious boat tours tailored for family reunions, birthdays, and outings), and 4) Sunset Cruise in Akalapuzha (2-hour golden hour cruise with evening snacks)."
  },
  {
    question: "How long is the Akalapuzha day cruise?",
    answer: "The Akalapuzha Day Cruise Package is 5 hours long. It includes a scenic voyage along palm-fringed Kerala waterways, a chilled welcome drink, a full traditional Kerala lunch (Chicken Biriyani or Kerala Meals with Fish Fry), hot evening tea with snacks, high-power DJ sound system, and full cabin amenities."
  },
  {
    question: "Is Phoenix Cruise suitable for families and groups?",
    answer: "Yes, Phoenix Cruise is specifically designed for family outings, children, elders, and large groups. Our boats feature spacious shaded seating, clean onboard bathrooms, cabin air fans, high-power sound systems with microphones, and certified life jackets for all age groups."
  },
  {
    question: "What food options are available during the cruise?",
    answer: "Our standard cruise packages include fresh welcome drinks, a delicious lunch feast (Chicken Biriyani OR Traditional Kerala Meals with Fish Fry), and evening tea with traditional local snacks. We also offer custom food add-ons on prior request, including fresh Kerala seafood, Arabic dishes, Chinese dishes, and Nadan Kerala delicacies."
  },
  {
    question: "How can I book an Akalapuzha Phoenix Cruise?",
    answer: "You can book your cruise or inquire about real-time date availability by connecting directly with our team on WhatsApp or calling +91 81388 66919. Advance reservation is strongly recommended, especially for weekends and holiday seasons."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-bold block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark tracking-wide mb-4">
            Everything You Need To Know
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-4" />
          <p className="text-dark/70 font-sans text-sm md:text-base font-light">
            Got questions about our Akalapuzha boat cruise packages, timings, food, or facilities? Find your answers below.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-dark flex items-center">
                    <FaQuestionCircle className="text-primary mr-3 text-sm flex-shrink-0" />
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-sand text-dark/70"
                    }`}
                  >
                    <FiChevronDown className="text-sm" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-dark/75 font-sans font-light leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Inquiries */}
        <div className="mt-12 text-center bg-sand/40 border border-primary/10 rounded-2xl p-6 md:p-8">
          <p className="text-dark font-serif text-lg font-bold mb-2">
            Have more questions about Phoenix Cruise?
          </p>
          <p className="text-dark/70 text-xs sm:text-sm font-sans mb-4">
            Our local boat coordinator in Akalapuzha is available to assist you with dates, menu customizations, and group pricing.
          </p>
          <a
            href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20have%20a%20question%20regarding%20Akalapuzha%20boat%20cruise%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
          >
            <FaWhatsapp className="text-base" />
            <span>Chat on WhatsApp (+91 81388 66919)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
