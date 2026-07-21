import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { servicesData } from "../services";
import { FaClock, FaCheckCircle, FaExchangeAlt, FaShieldAlt, FaUtensils, FaTag, FaRestroom, FaMusic, FaMicrophone, FaFan, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

interface ServiceProps {
  service: typeof servicesData[0] | null;
}

export default function ServiceDetailPage({ service }: ServiceProps) {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans text-dark">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif font-bold">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline text-sm font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Find related services in same category
  const related = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>{`${service.title} | Phoenix Cruise Akalapuzha Boat Service`}</title>
        <meta name="description" content={`${service.shortDesc} Book your private Akalapuzha boat ride with Phoenix Cruise in Kerala.`} />
        <meta name="keywords" content={`Akalapuzha boat service, ${service.title}, Akalapuzha boat ride, Phoenix Cruise, Akalapuzha, Kerala backwater boat service`} />
        <link rel="canonical" href={`https://clever-rutherford.vercel.app/services/${service.id}`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phoenix Cruise" />
        <meta property="og:url" content={`https://clever-rutherford.vercel.app/services/${service.id}`} />
        <meta property="og:title" content={`${service.title} | Phoenix Cruise Akalapuzha Boat Service`} />
        <meta property="og:description" content={`${service.shortDesc} Book your private Akalapuzha boat ride with Phoenix Cruise in Kerala.`} />
        <meta property="og:image" content={service.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://clever-rutherford.vercel.app/services/${service.id}`} />
        <meta name="twitter:title" content={`${service.title} | Phoenix Cruise Akalapuzha Boat Service`} />
        <meta name="twitter:description" content={`${service.shortDesc} Book your private Akalapuzha boat ride with Phoenix Cruise in Kerala.`} />
        <meta name="twitter:image" content={service.image} />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title={service.title}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />

      <main className="bg-slate-50 font-sans py-14 md:py-20 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Title & Subtitle Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-xs font-sans font-bold uppercase tracking-widest">{service.time}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-dark tracking-wide leading-tight">
                {service.title}
              </h1>
              {service.subtitle && (
                <p className="text-lg md:text-xl font-serif text-accent font-semibold">
                  {service.subtitle}
                </p>
              )}
            </div>

            {/* Premium Image Banner */}
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-w-768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Experience Overview */}
            <section className="space-y-4 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-dark border-b border-slate-100 pb-3 flex items-center">
                <FaShieldAlt className="mr-3 text-primary" /> Experience Overview
              </h2>
              <p className="text-dark/80 font-light leading-relaxed text-base sm:text-lg">
                {service.desc}
              </p>
            </section>

            {/* Why Choose Family & Group Cruise (If present) */}
            {service.whyChoose && (
              <section className="bg-sand/40 rounded-3xl p-6 md:p-8 border border-primary/10 shadow-sm space-y-5">
                <h3 className="font-serif font-bold text-2xl text-dark border-b border-primary/10 pb-3 flex items-center">
                  <FaShieldAlt className="mr-3 text-primary" /> Why Choose Family &amp; Group Cruise?
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.whyChoose.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-dark/80 font-sans leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* PROMINENT PRICING HIGHLIGHT SECTION (DARK ACCENT CARDS ON LIGHT PAGE) */}
            {service.perPersonPricing && service.hourlyCharges && (
              <section className="space-y-8">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs uppercase font-sans font-bold text-primary tracking-widest block mb-1">
                    TRANSPARENT &amp; PROMINENT RATES
                  </span>
                  <h3 className="font-serif font-bold text-3xl text-dark flex items-center">
                    <FaTag className="mr-3 text-primary" /> Package Pricing &amp; Rates
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Per Person Pricing Prominent Dark Card */}
                  <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-[#C9A227]/40 shadow-xl space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#C9A227] text-slate-950 font-sans font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-2xl shadow-md">
                      BEST VALUE
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <span className="text-xs uppercase font-sans font-bold text-[#C9A227] tracking-wider block">Group Packages</span>
                      <h4 className="font-serif font-bold text-2xl text-white">Pricing – Per Person</h4>
                    </div>
                    <div className="space-y-4">
                      {service.perPersonPricing.map((item, idx) => (
                        <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-[#C9A227]/25 flex justify-between items-center hover:border-[#C9A227]/60 transition-colors">
                          <div className="space-y-1">
                            <span className="text-xs uppercase font-sans font-bold text-slate-300 tracking-wider block">{item.group}</span>
                            <span className="text-[10px] font-sans font-bold text-[#C9A227] tracking-widest uppercase bg-[#C9A227]/15 px-2.5 py-0.5 rounded-full inline-block">Group Rate</span>
                          </div>
                          <div className="text-right">
                            <span className="font-serif text-3xl md:text-4xl font-extrabold text-[#C9A227] block">{item.price}</span>
                            <span className="text-[10px] font-sans text-slate-300 uppercase tracking-widest font-semibold">{item.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hourly Boat Charges Prominent Dark Card */}
                  <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-emerald-500/40 shadow-xl space-y-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-sans font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-2xl shadow-md">
                      FLEXIBLE HOURLY
                    </div>
                    <div className="border-b border-white/10 pb-3">
                      <span className="text-xs uppercase font-sans font-bold text-emerald-400 tracking-wider block">Hourly Booking</span>
                      <h4 className="font-serif font-bold text-2xl text-white">Hourly Boat Charges</h4>
                    </div>
                    <div className="space-y-4">
                      {service.hourlyCharges.map((item, idx) => (
                        <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/25 flex justify-between items-center hover:border-emerald-500/60 transition-colors">
                          <div className="space-y-1">
                            <span className="text-xs uppercase font-sans font-bold text-slate-300 tracking-wider block">{item.group}</span>
                            <span className="text-[10px] font-sans font-bold text-emerald-400 tracking-widest uppercase bg-emerald-500/15 px-2.5 py-0.5 rounded-full inline-block">Hourly Rate</span>
                          </div>
                          <div className="text-right">
                            <span className="font-serif text-3xl md:text-4xl font-extrabold text-emerald-400 block">{item.price}</span>
                            <span className="text-[10px] font-sans text-slate-300 uppercase tracking-widest font-semibold">{item.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Custom Quote Card for Family & Group Cruise */}
            {service.isCustomQuote && (
              <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 border border-[#C9A227]/40 shadow-xl space-y-6 relative overflow-hidden">
                <div className="space-y-3">
                  <span className="text-xs uppercase font-sans font-bold text-[#C9A227] tracking-widest block">TAILORED PACKAGES</span>
                  <h3 className="font-serif font-bold text-3xl text-white">Get a Custom Group Quote</h3>
                  <p className="font-sans text-sm text-slate-200 font-light leading-relaxed max-w-2xl">
                    We offer tailored packages for large families, corporate team outings, birthday celebrations, and custom group requirements. Contact our team directly on WhatsApp for customized pricing and vessel arrangements.
                  </p>
                </div>
                <div>
                  <a
                    href={`https://wa.me/918138866919?text=${encodeURIComponent(service.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 py-4 px-8 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-2xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95"
                  >
                    <span>Get a Custom Quote on WhatsApp</span>
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </section>
            )}

            {/* STRONGLY HIGHLIGHTED FACILITIES SECTION (4 CARDS IN 1 ROW ON DESKTOP) */}
            {service.facilities && (
              <section className="space-y-8 bg-slate-900 text-white p-8 md:p-10 rounded-3xl border border-[#C9A227]/40 shadow-2xl relative">
                <div className="border-b border-white/10 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs uppercase font-sans font-bold text-[#C9A227] tracking-widest block mb-1">
                      PREMIUM ONBOARD COMFORT
                    </span>
                    <h3 className="font-serif font-bold text-3xl text-white flex items-center">
                      <FaShieldAlt className="mr-3 text-[#C9A227]" /> Facilities &amp; Amenities
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400 font-sans font-medium">Included in all cruise packages</span>
                </div>

                {/* 4 Large Facility Cards in 1 Row on Desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                  {service.facilities.map((fac, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-950 p-6 rounded-2xl border border-white/10 hover:border-[#C9A227]/70 transition-all duration-300 text-center space-y-3 group hover:-translate-y-1 shadow-lg hover:shadow-[#C9A227]/10"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#C9A227]/15 border border-[#C9A227]/30 text-[#C9A227] mx-auto flex items-center justify-center font-bold text-2xl group-hover:scale-110 group-hover:bg-[#C9A227] group-hover:text-slate-950 transition-all duration-300">
                        {fac.name === "Bathroom" && <FaRestroom />}
                        {fac.name === "DJ Music System" && <FaMusic />}
                        {fac.name === "Microphone" && <FaMicrophone />}
                        {fac.name === "Fan" && <FaFan />}
                      </div>
                      <h4 className="font-serif font-bold text-white text-base group-hover:text-[#C9A227] transition-colors">{fac.name}</h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">{fac.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Food Included & Food Add-ons Section */}
            <section className="space-y-8 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="font-serif font-bold text-2xl text-dark border-b border-slate-100 pb-3 flex items-center">
                <FaUtensils className="mr-3 text-primary" /> Dining &amp; Refreshments
              </h3>

              {/* Food Included Cards */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-sans font-bold text-primary tracking-widest block">
                  Food Included in Package:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-sand/30 p-6 rounded-2xl border border-primary/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Starter</span>
                    <h4 className="font-serif font-bold text-dark text-base">Welcome Drink</h4>
                    <p className="text-xs text-dark/70 font-light leading-relaxed">Chilled fresh fruit refreshments served upon boarding.</p>
                  </div>
                  <div className="bg-sand/30 p-6 rounded-2xl border border-primary/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Main Feast</span>
                    <h4 className="font-serif font-bold text-dark text-base">Lunch Feast</h4>
                    <p className="text-xs text-dark/70 font-light leading-relaxed">Chicken Biriyani OR Traditional Kerala Meals with Fish Fry.</p>
                  </div>
                  <div className="bg-sand/30 p-6 rounded-2xl border border-primary/10 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest block">Evening Snack</span>
                    <h4 className="font-serif font-bold text-dark text-base">Evening Tea &amp; Snacks</h4>
                    <p className="text-xs text-dark/70 font-light leading-relaxed">Hot Kerala tea/coffee served with traditional local snacks.</p>
                  </div>
                </div>
              </div>

              {/* Food Add-ons */}
              {service.foodAddons && (
                <div className="bg-slate-900 text-white rounded-2xl p-6 border border-[#C9A227]/30 space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#C9A227]">Food Add-ons</h4>
                    <p className="font-sans text-xs text-slate-300 font-light mt-1">
                      Enhance your dining experience with additional custom food options available upon request:
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {service.foodAddons.map((addon, idx) => (
                      <div key={idx} className="bg-slate-950 border border-[#C9A227]/40 px-4 py-3 rounded-xl text-center">
                        <span className="font-sans font-bold text-xs text-[#C9A227]">{addon}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Direct Prominent WhatsApp CTA Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-6 text-center border border-[#C9A227]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] via-emerald-500 to-[#C9A227]" />
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-white">
                Ready to Book Your {service.title}?
              </h3>
              <p className="font-sans text-sm text-slate-200 font-light max-w-xl mx-auto leading-relaxed">
                Connect directly with Phoenix Cruise team on WhatsApp for instant availability, custom menu requests, and booking confirmation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/918138866919?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 py-4 px-8 bg-[#C9A227] hover:bg-[#b08d20] text-slate-950 rounded-2xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>{service.ctaTitle || "Enquire on WhatsApp"}</span>
                </a>
                <a
                  href="tel:8138866919"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-4 px-8 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-white/20"
                >
                  <FaPhoneAlt />
                  <span>Call 8138866919</span>
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Metrics Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-dark">Service Specifications</h3>
              
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between items-center py-2.5 border-b border-slate-100">
                  <span className="text-dark/60">Estimated Duration:</span>
                  <span className="font-bold text-dark flex items-center"><FaClock className="mr-1.5 text-accent" /> {service.time}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-dark/60">Status:</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 uppercase text-[9px] tracking-widest">Available</span>
                </div>
              </div>

              <a
                href={`https://wa.me/918138866919?text=Hello%20Phoenix%20Cruise%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md active:scale-95 text-center"
              >
                Book Your Cruise
              </a>
            </div>

            {/* Why Choose Phoenix */}
            <div className="bg-sand/40 border border-primary/10 rounded-3xl p-6 space-y-4">
              <h4 className="font-serif font-bold text-lg text-primary flex items-center">
                <FaShieldAlt className="mr-2" /> Why Choose Phoenix?
              </h4>
              <p className="text-xs text-dark/70 font-light leading-relaxed">
                We implement certified safety standards, live private chef dining, and experienced naval crew members for customer comfort.
              </p>
            </div>

            {/* Related Services List */}
            {related.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-dark">Related Experiences</h4>
                <div className="space-y-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.id}`}
                      className="flex items-center space-x-3 p-3.5 bg-white hover:bg-sand/30 border border-slate-200/80 rounded-2xl transition-all duration-200 group shadow-sm"
                    >
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="48px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h5 className="font-serif text-xs font-bold text-dark truncate group-hover:text-primary transition-colors">
                          {rel.title}
                        </h5>
                        <p className="text-[10px] text-dark/50 truncate font-light mt-0.5">{rel.time}</p>
                      </div>
                      <FaExchangeAlt className="text-dark/20 group-hover:text-primary transition-colors text-xs flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = servicesData.map((s) => ({
    params: { id: s.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = servicesData.find((s) => s.id === params?.id) || null;
  return { props: { service } };
};
