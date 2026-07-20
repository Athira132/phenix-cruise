import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    name: "Anjali Menon",
    location: "Cochin, Kerala",
    rating: 5,
    text: "An absolute dream! The service was top quality all the way. The private chef prepared delicious authentic Kerala food for our family. The sunset on the Akalappuzha backwaters was spectacular.",
  },
  {
    name: "Rahul Nair",
    location: "Calicut, Kerala",
    rating: 5,
    text: "We booked the cruise package and it exceeded all our expectations. Beautiful ambient setup, delicious food, and such a polite and safety-focused crew. Highly recommended!",
  },
  {
    name: "Sreedevi Krishnan",
    location: "Trivandrum, Kerala",
    rating: 5,
    text: "Our family getaway was a major success. The cruise boat was well-maintained and comfortable, equipped with everything we needed. Cruising the calm backwater canals was fantastic.",
  },
  {
    name: "Arjun Nair",
    location: "Chennai, India",
    rating: 5,
    text: "The boat was incredibly clean, seating was spacious and comfortable, and the kids loved sitting on the open deck. The freshly prepared meals were outstanding value for money!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); // 6 seconds auto slide
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-secondary relative overflow-hidden">
      {/* Background Image Overlay with low opacity */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg"
          alt="Backwater sunset background"
          fill
          style={{ objectFit: "cover" }}
          className="grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/90 to-secondary z-0" />

      {/* Cloud elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 bg-[url('/clouds.png')] bg-repeat-x cloud-bg h-64 w-[200%]" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Guest Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          
          {/* Slider Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="glass-panel-dark p-8 md:p-12 rounded-luxury border border-white/10 w-full relative flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <FaQuoteRight className="absolute top-6 right-8 text-5xl md:text-7xl text-white/5 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6 text-accent">
                  {[...Array(reviews[index].rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-white/90 text-base md:text-xl font-light italic leading-relaxed mb-8">
                  "{reviews[index].text}"
                </p>
              </div>

              {/* Reviewer Meta info */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="font-serif text-accent font-bold text-base md:text-lg">
                  {reviews[index].name}
                </h4>
                <span className="font-sans text-xs text-white/50 mt-0.5 block">
                  {reviews[index].location}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Left/Right Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors active:scale-95"
              aria-label="Previous Review"
            >
              <FiChevronLeft className="text-xl" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 pointer-events-none">
            <button
              onClick={handleNext}
              className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors active:scale-95"
              aria-label="Next Review"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "bg-accent w-6" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
