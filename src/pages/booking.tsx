import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FaUser, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaClock, FaUsers, FaLaptop, FaEdit, FaCheck, FaMapMarkerAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import confetti from "canvas-confetti";

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  serviceType: string;
  guests?: number;
  issueDescription: string;
};

const servicesList = [
  "Day Package",
  "Family Package",
  "Couple Package",
  "Sunset Cruise",
];

export default function BookingPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    // Confetti celebration
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#0F766E", "#C9A227", "#1E293B"],
    });

    const whatsappNumber = "918138866919";
    let message = `Hello Phoenix Cruise,
 
I would like to book a cruise service.
 
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service Selected: ${data.serviceType}
Preferred Date: ${data.date}
Preferred Time: ${data.timeSlot}
Guests Count: ${data.guests || 1}
Special Customizations: ${data.issueDescription || "None"}
 
Please contact me to finalize. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      try {
        window.open(url, "_blank");
        setShowSuccessModal(true);
        reset();
      } catch (e) {
        setShowSuccessModal(true);
      }
    }, 800);
  };

  return (
    <>
      <Head>
        <title>Online Reservation | Phoenix Cruise Akalapuzha Boat Service</title>
        <meta
          name="description"
          content="Reserve your private Akalapuzha boat ride online with Phoenix Cruise. Select dates for Day Package, Family Package, Couple Package, or Sunset Cruise."
        />
        <meta name="keywords" content="book Akalapuzha boat ride, reserve Phoenix Cruise, Akalapuzha boat service online booking, Kerala backwater boat service reservation" />
        <link rel="canonical" href="https://clever-rutherford.vercel.app/booking" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content="https://clever-rutherford.vercel.app/booking" />
        <meta property="og:title" content="Online Reservation | Phoenix Cruise Akalapuzha Boat Service" />
        <meta property="og:description" content="Reserve your private Akalapuzha boat ride online with Phoenix Cruise. Select dates for Day Package, Family Package, Couple Package, or Sunset Cruise." />
        <meta property="og:image" content="https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://clever-rutherford.vercel.app/booking" />
        <meta name="twitter:title" content="Online Reservation | Phoenix Cruise Akalapuzha Boat Service" />
        <meta name="twitter:description" content="Reserve your private Akalapuzha boat ride online with Phoenix Cruise. Select dates for Day Package, Family Package, Couple Package, or Sunset Cruise." />
        <meta name="twitter:image" content="https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Secure Booking"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Booking" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
              RESERVE ONLINE
            </span>
            <h2 className="text-3xl font-serif font-bold text-dark">
              Confirm Your Date Instantly
            </h2>
            <p className="text-dark/60 font-light text-xs sm:text-sm leading-relaxed">
              Select your service, dates, and times. Upon submission, a WhatsApp API link will trigger to establish quick communication.
            </p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaUser className="text-xs" /></span>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all ${
                        errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[10px] text-red-500">{errors.name.message}</p>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaPhoneAlt className="text-xs" /></span>
                    <input
                      type="tel"
                      placeholder="e.g. +91 81388 66919"
                      {...register("phone", { required: "Phone is required" })}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all ${
                        errors.phone ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Email Address</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaEnvelope className="text-xs" /></span>
                    <input
                      type="email"
                      placeholder="e.g. johndoe@gmail.com"
                      {...register("email", { required: "Email is required" })}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all ${
                        errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500">{errors.email.message}</p>}
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Select Service</label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      {...register("serviceType", { required: "Please select a service" })}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all appearance-none ${
                        errors.serviceType ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    >
                      <option value="" disabled>Choose service package</option>
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-dark/40 text-[9px]">▼</span>
                  </div>
                  {errors.serviceType && <p className="text-[10px] text-red-500">{errors.serviceType.message}</p>}
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Preferred Date</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaCalendarAlt className="text-xs" /></span>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("date", { required: "Preferred date is required" })}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all ${
                        errors.date ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    />
                  </div>
                  {errors.date && <p className="text-[10px] text-red-500">{errors.date.message}</p>}
                </div>

                {/* Preferred Time Slot */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Preferred Time Slot</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaClock className="text-xs" /></span>
                    <select
                      defaultValue=""
                      {...register("timeSlot", { required: "Preferred time is required" })}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border rounded-xl text-xs focus:outline-none focus:bg-white transition-all appearance-none ${
                        errors.timeSlot ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-primary"
                      }`}
                    >
                      <option value="" disabled>Choose time slot</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                      <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                      <option value="Full Day Overnight (Boarding 12 PM)">Full Day / Overnight (Boarding 12 PM)</option>
                    </select>
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-dark/40 text-[9px]">▼</span>
                  </div>
                  {errors.timeSlot && <p className="text-[10px] text-red-500">{errors.timeSlot.message}</p>}
                </div>

                {/* Guest Count */}
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">Number of Guests</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><FaUsers className="text-xs" /></span>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 2"
                      {...register("guests", { min: { value: 1, message: "Min 1 guest" } })}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

              </div>

              {/* Description */}
              <div className="space-y-2 col-span-1 md:col-span-2">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-dark/60">
                  Special Customizations / Dietary Requirements
                </label>
                <div className="relative">
                  <span className="absolute top-4 left-0 pl-4 text-slate-400"><FaEdit className="text-xs" /></span>
                  <textarea
                    rows={4}
                    placeholder="Special instructions: honeymoon setup, vegetarian menus, lake boarding location preference."
                    {...register("issueDescription")}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:bg-white resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-4 bg-primary hover:bg-primary-hover text-white rounded-[14px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-premium active:scale-95"
                >
                  Book via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

          {/* Business Location Info Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-sand flex items-center justify-center text-primary flex-shrink-0 border border-primary/5 mt-0.5">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-lg font-bold text-dark">Phoenix Cruise</h4>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider">Akalapuzha Boat Service</p>
                <p className="text-xs text-dark/70 font-light leading-relaxed">
                  Purakkad - Muchukunnu Road, Moodadi, Kerala 673307, India
                </p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/QSxN3a6uhvxSmqdE8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sand hover:bg-primary text-primary hover:text-white rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center shadow-sm flex-shrink-0"
            >
              Get Directions <FaMapMarkerAlt className="ml-2 text-xs" />
            </a>
          </div>

        </div>
      </main>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessModal(false)}
            className="fixed inset-0 z-[9999] bg-secondary/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white max-w-md w-full p-8 rounded-3xl border border-slate-100 shadow-xl relative text-center space-y-6"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-dark/40 hover:text-dark transition-colors"
              >
                <FiX className="text-xl" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto text-3xl">
                <FaCheck />
              </div>

              <h3 className="font-serif text-2xl font-bold text-dark">Booking Initiated!</h3>
              <p className="text-xs text-dark/70 font-light leading-relaxed">
                We've compiled your parameters and pre-formatted a WhatsApp message. If the tab did not launch automatically, click the button below to connect with our desk.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                >
                  Launch WhatsApp Chat
                </a>
                <a
                  href="tel:+918138866919"
                  className="w-full text-center inline-block py-3 bg-primary hover:bg-primary-hover text-white rounded-xl font-sans font-bold text-xs uppercase tracking-widest transition-colors shadow-sm"
                >
                  Call Main Jetty: +91 81388 66919
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
