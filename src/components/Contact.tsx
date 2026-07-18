import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaTripadvisor } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Contact Phoenix Cruise
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Info Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="font-serif text-2xl font-bold text-dark mb-6">
                Let's plan your perfect voyage.
              </h3>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm border border-primary/5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Our Jetty Address</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light leading-relaxed">
                    Phoenix Akalappuzha Boating Service Jetty, Akalappuzha Lake Road,<br />
                    Kozhikode (Calicut) District, Kerala - 673522, India
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm border border-primary/5">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Call & WhatsApp</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light">
                    Main Phone: <a href="tel:+918138866919" className="hover:text-primary transition-colors">+91 81388 66919</a>
                  </p>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light mt-1">
                    Alternate Phone: <a href="tel:+919567043039" className="hover:text-primary transition-colors">+91 95670 43039</a>
                  </p>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light mt-2 flex items-center">
                    WhatsApp: <a href="https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20cruise%20packages.%0A%0APlease%20share%20the%20available%20options.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline ml-1 font-semibold flex items-center"><FaWhatsapp className="mr-1" />+91 81388 66919</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm border border-primary/5">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Email Reservations</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light">
                    <a href="mailto:info@phoenixcruise.com" className="hover:text-primary transition-colors">info@phoenixcruise.com</a>
                  </p>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light">
                    <a href="mailto:bookings@phoenixcruise.com" className="hover:text-primary transition-colors">bookings@phoenixcruise.com</a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center text-primary flex-shrink-0 mr-4 shadow-sm border border-primary/5">
                  <FaClock />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light">
                    Reservations: 8:00 AM - 10:00 PM (Daily)
                  </p>
                  <p className="font-sans text-xs md:text-sm text-dark/70 font-light">
                    Boarding jetty open: 24 Hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media links */}
            <div className="pt-8 border-t border-primary/5 mt-8">
              <h4 className="font-serif text-sm font-bold text-dark uppercase tracking-wider mb-4">Follow Our Journey</h4>
              <div className="flex items-center space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" aria-label="Facebook">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" aria-label="Instagram">
                  <FaInstagram className="text-sm" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" aria-label="YouTube">
                  <FaYoutube className="text-sm" />
                </a>
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-sand flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm" aria-label="TripAdvisor">
                  <FaTripadvisor className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] relative rounded-luxury overflow-hidden shadow-premium border border-primary/5 group"
          >
            {/* Google Map Iframe for Akalappuzha jetty point */}
            <iframe
              src="https://maps.google.com/maps?q=11.505669,75.6596938&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phoenix Akalappuzha Boating Service Jetty Location Map"
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
