import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { name: string; href?: string }[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative min-h-[40vh] md:min-h-[45vh] flex items-center justify-center overflow-hidden bg-slate-950 select-none pt-24">
      {/* Background Image Layer with natural colors & overlay */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40">
        <img
          src="https://i.ibb.co/3Z9wVvK/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg"
          alt="Phoenix Cruise Backwaters Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-1" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-12 pb-8 flex flex-col items-center">
        {/* Breadcrumbs */}
        <nav className="mb-4 inline-flex items-center space-x-2 text-white/70 text-xs sm:text-sm font-sans tracking-wide">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center">
              {idx > 0 && <span className="mx-2 text-[#C9A227]">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#C9A227] transition-colors duration-200">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white font-semibold">{crumb.name}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}
