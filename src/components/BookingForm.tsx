import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaShip, FaPhoneAlt, FaEnvelope, FaCalendarAlt, FaUsers, FaClipboardList, FaUser } from "react-icons/fa";
import confetti from "canvas-confetti";

type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  packageType: string;
  guests: number;
  specialRequest: string;
};

const packagesList = [
  "Basic Cruise",
  "Deluxe Cruise",
  "Premium Cruise",
  "Luxury Cruise",
  "Traditional Shikara Ride",
  "Scenic Day Cruise",
  "Golden Sunset Cruise",
  "Honeymoon Special Cruise",
  "Premium Family Cruise",
  "Corporate Backwater Events",
];

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    // Standard trigger confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0F766E", "#C9A227", "#14532D"],
    });

    // Structure WhatsApp message template
    const whatsappNumber = "919876543210"; // International standard format for WhatsApp
    const message = `*NEW BOOKING ENQUIRY - PHENIX CRUISE*
----------------------------------------
*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Travel Date:* ${data.date}
*Package/Cruise Type:* ${data.packageType}
*Guests:* ${data.guests}
*Special Requests:* ${data.specialRequest || "None"}
----------------------------------------
Please confirm the availability for the requested dates.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      reset();
    }, 800);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Wave shape divider top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180 leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-8 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Secure Your Voyage
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Book Your Luxury Experience
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            Fill in the booking form below. Submitting will open WhatsApp with your prefilled details to finalize reservations instantly.
          </p>
        </div>

        {/* Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-primary/5 shadow-premium rounded-luxury p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle logo background watermark */}
          <div className="absolute -bottom-10 -right-10 text-[120px] text-primary/3 pointer-events-none select-none">
            <FaShip />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Name */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 ${
                      errors.name ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  />
                </div>
                {errors.name && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.name.message}</span>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaPhoneAlt />
                  </span>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[+]?[0-9]{10,15}$/,
                        message: "Invalid phone number format",
                      },
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 ${
                      errors.phone ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.phone.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="your.email@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 ${
                      errors.email ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  />
                </div>
                {errors.email && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.email.message}</span>
                )}
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaCalendarAlt />
                  </span>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("date", { required: "Travel date is required" })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 ${
                      errors.date ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  />
                </div>
                {errors.date && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.date.message}</span>
                )}
              </div>

              {/* Package Select */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Cruise Package
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaShip />
                  </span>
                  <select
                    id="package-select"
                    defaultValue=""
                    {...register("packageType", { required: "Please select a package" })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 appearance-none ${
                      errors.packageType ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  >
                    <option value="" disabled>Choose your package</option>
                    {packagesList.map((pkg) => (
                      <option key={pkg} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                  <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-dark/50">
                    ▼
                  </span>
                </div>
                {errors.packageType && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.packageType.message}</span>
                )}
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary/40">
                    <FaUsers />
                  </span>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    placeholder="e.g. 2"
                    {...register("guests", {
                      required: "Guests count is required",
                      min: { value: 1, message: "Min 1 guest required" },
                    })}
                    className={`w-full pl-11 pr-4 py-3 bg-sand/30 border rounded-luxury text-sm font-sans focus:outline-none transition-all duration-300 ${
                      errors.guests ? "border-red-400 focus:border-red-500" : "border-primary/10 focus:border-primary focus:bg-white"
                    }`}
                  />
                </div>
                {errors.guests && (
                  <span className="text-[11px] text-red-500 font-sans mt-1 block">{errors.guests.message}</span>
                )}
              </div>

            </div>

            {/* Special Request */}
            <div className="relative">
              <label className="block text-xs uppercase tracking-widest font-sans font-bold text-dark/70 mb-2">
                Special Requests / Customizations
              </label>
              <div className="relative">
                <span className="absolute top-4 left-0 pl-4 flex items-start text-primary/40">
                  <FaClipboardList className="mt-0.5" />
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell us if you want honeymoon decor, private meals, custom routes, pick up etc."
                  {...register("specialRequest")}
                  className="w-full pl-11 pr-4 py-3.5 bg-sand/30 border border-primary/10 rounded-luxury text-sm font-sans focus:outline-none focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-12 py-4 bg-primary text-white hover:bg-primary-hover rounded-luxury font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-premium active:scale-95 group"
              >
                <span>Book Cruise via WhatsApp</span>
                <span className="ml-2.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
