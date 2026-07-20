import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How do I book a cruise?",
    answer: "You can book a cruise directly by using the 'Book Now' form on our website. After filling in your preferred dates, package, and contact details, clicking submit will automatically generate a WhatsApp message containing all details. Our team will verify availability and contact you on WhatsApp to confirm your booking details.",
  },
  {
    question: "Are meals included in the packages?",
    answer: "Yes, for all overnight stays, all meals (welcome drink, authentic Kerala lunch, evening tea with snacks, dinner, and breakfast) are included in the price. Deluxe and Premium packages feature authentic Kerala fish curry (Karimeen Pollichathu), chicken, and local vegetarian delicacies. The Luxury package includes customized menu choices and live barbeque options. Day trips include lunch and evening snacks.",
  },
  {
    question: "Can I customize the cruise packages and routes?",
    answer: "Absolutely! We specialize in custom itineraries. Whether you wish to extend your stay, add custom room decor for birthdays/honeymoons, request specific seafood dishes, or choose a custom route (e.g. visiting organic farms, toddy shops, or historical churches), you can specify your requests in the booking form, and we will tailor the trip for you.",
  },
  {
    question: "Is secure parking available at the boarding points?",
    answer: "Yes, we provide secure, 24/7 guarded private parking facilities at our boarding jetty in Calicut (Akalapuzha) free of charge for all our guests. You can park your private cars and buses safely until you return.",
  },
  {
    question: "What are the standard check-in and check-out timings?",
    answer: "For standard check-in, check-out, and cruise duration timings for each package option, please contact us. For more information and booking, contact us.",
  },
  {
    question: "Is there proper air conditioning and backup power on board?",
    answer: "Yes, all our luxury houseboats are equipped with premium air conditioning and silent generator power backups. Depending on the package: Basic has AC in the dining room only, Deluxe has AC in bedrooms from 9:00 PM to 6:00 AM, and Premium & Luxury packages feature full 24-hour air conditioning across all rooms and decks.",
  },
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-primary/10 last:border-b-0 py-5">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-2 font-serif text-lg font-bold text-dark hover:text-primary transition-colors duration-300 group focus:outline-none"
      >
        <span className="pr-4">{question}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-xs md:text-sm text-dark/70 font-light leading-relaxed pt-3 pb-2 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sand/20 rounded-full blur-[100px] pointer-events-none -z-1" />

      <div className="max-w-3xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* FAQ Accordion List */}
        <div className="bg-sand/10 border border-primary/5 rounded-luxury p-6 md:p-10 shadow-premium">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
