import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { servicesData } from "../services";
import { FaClock, FaCheckCircle, FaExclamationTriangle, FaExchangeAlt, FaShieldAlt } from "react-icons/fa";

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
        <title>{service.category === "cruises" ? `${service.title} | Akalapuzha Boating Service` : `${service.title} | Phoenix Custom Services`}</title>
        <meta name="description" content={service.category === "cruises" ? `${service.shortDesc} Book your private boat ride with our trusted Akalapuzha Boating Service in Kerala.` : service.shortDesc} />
        <link rel="canonical" href={`https://phoenixcruise.com/services/${service.id}`} />
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

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Image Banner */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-w-768px) 100vw, 60vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Service Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-dark border-b border-slate-200 pb-3">
                Service Overview
              </h2>
              <p className="text-dark/80 font-light leading-relaxed text-base sm:text-lg">
                {service.desc}
              </p>
            </section>

            {/* Benefits & Problems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
                <h3 className="font-serif font-bold text-lg text-emerald-800 flex items-center">
                  <FaCheckCircle className="mr-2 text-emerald-500" /> Key Benefits
                </h3>
                <ul className="space-y-2.5 text-xs text-dark/70 font-light">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problems */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
                <h3 className="font-serif font-bold text-lg text-rose-800 flex items-center">
                  <FaExclamationTriangle className="mr-2 text-rose-500" /> Common Challenges
                </h3>
                <ul className="space-y-2.5 text-xs text-dark/70 font-light">
                  {service.problems.map((p, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-rose-500 mr-2">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>



          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Metrics Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-dark">Service Specifications</h3>
              
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-dark/50">Estimated Duration:</span>
                  <span className="font-bold text-dark flex items-center"><FaClock className="mr-1.5 text-accent" /> {service.time}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-dark/50">Pricing Structure:</span>
                  <span className="font-bold text-primary">{service.price}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-dark/50">Status:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold border border-emerald-200 uppercase text-[9px] tracking-wider">Available</span>
                </div>
              </div>

              <Link
                href="/booking"
                className="w-full inline-flex items-center justify-center py-3.5 bg-primary hover:bg-primary-hover text-white rounded-[12px] font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-premium active:scale-95"
              >
                Book This Service Now
              </Link>
            </div>

            {/* Why Choose Us */}
            <div className="bg-sand/30 border border-primary/5 rounded-2xl p-6 space-y-4">
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
                <h4 className="font-serif font-bold text-lg text-dark">Related Services</h4>
                <div className="space-y-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.id}`}
                      className="flex items-center space-x-3 p-3 bg-white hover:bg-sand/10 border border-slate-100 rounded-xl transition-all duration-200 group"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
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
                        <p className="text-[10px] text-dark/50 truncate font-light mt-0.5">{rel.price}</p>
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
