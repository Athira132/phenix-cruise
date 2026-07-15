import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CustomCursor from "@/components/CustomCursor";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const galleryItems = [
  { id: 1, title: "Phoenix Gold Class Houseboat", category: "Houseboats", image: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg" },
  { id: 2, title: "Sunset Lake Crossing", category: "Sunset", image: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" },
  { id: 3, title: "Traditional Karimeen Fry Served Hot", category: "Dining", image: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" },
  { id: 4, title: "Serene Golden Canals", category: "Sunset", image: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg" },
  { id: 5, title: "Private Evening Cruise Deck", category: "Cruises", image: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg" },
  { id: 6, title: "Vembanad Lake Horizon", category: "Backwaters", image: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" },
  { id: 7, title: "Traditional Shoreline Boat", category: "Backwaters", image: "https://i.ibb.co/81ym7yK/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg" },
  { id: 8, title: "Luxury Boat Moored by Palm Bank", category: "Houseboats", image: "https://i.ibb.co/h14vRRT4/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" },
];

const videoItems = [
  { id: 1, title: "Cinematic Backwater Voyage", url: "https://www.youtube.com/watch?v=k6M3YbWX284", thumbnail: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg" },
  { id: 2, title: "Honeymoon Special Setup", url: "https://www.youtube.com/watch?v=nXF3vDXekTM", thumbnail: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg" },
  { id: 3, title: "Traditional Cooking Onboard", url: "https://assets.mixkit.co/videos/preview/mixkit-down-the-river-in-a-bamboo-canoe-6804-large.mp4", thumbnail: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg" },
];

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const id = match && match[2].length === 11 ? match[2] : null;
    return id ? { type: "youtube", embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` } : null;
  }
  return { type: "direct", embed: url };
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePhotosCount, setVisiblePhotosCount] = useState(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof videoItems[0] | null>(null);

  const categories = ["All", "Houseboats", "Sunset", "Dining", "Backwaters", "Cruises"];

  const filteredPhotos = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(p => p.category === activeCategory);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotosCount);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const parsedVideo = selectedVideo ? getEmbedUrl(selectedVideo.url) : null;

  return (
    <>
      <Head>
        <title>Photo & Video Gallery | Phoenix Cruise Kerala Tourism</title>
        <meta
          name="description"
          content="Browse high-resolution photographs and cinematic videos of Phoenix Cruise luxury houseboats, sunsets, and traditional dining arrangements in Alleppey."
        />
        <meta name="keywords" content="houseboat photos, alleppey backwaters video, tourism kerala gallery" />
        <link rel="canonical" href="https://phoenixcruise.com/gallery" />
      </Head>

      <CustomCursor />
      <Navbar />

      <PageHeader
        title="Media Gallery"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery" },
        ]}
      />

      <main className="bg-slate-50 font-sans py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          
          {/* Photo Gallery segment */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                PHOTO JOURNEYS
              </span>
              <h2 className="text-3xl font-serif font-bold text-dark">Captured Moments</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisiblePhotosCount(6);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-dark/70 hover:bg-sand/40 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence mode="popLayout">
                {displayedPhotos.map((item, idx) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setLightboxIndex(idx)}
                    className="relative overflow-hidden rounded-[18px] aspect-[4/3] bg-slate-900 border border-slate-100 shadow-sm cursor-pointer group"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Load More Button */}
            {filteredPhotos.length > visiblePhotosCount && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setVisiblePhotosCount(prev => prev + 6)}
                  className="px-8 py-3 bg-white hover:bg-sand/30 border border-slate-300 rounded-[12px] font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm active:scale-95"
                >
                  Load More Photos
                </button>
              </div>
            )}
          </div>

          {/* Video Highlights segment */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold block">
                CINEMATIC HIGHLIGHTS
              </span>
              <h2 className="text-3xl font-serif font-bold text-dark">Watch the Experience</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoItems.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="border border-slate-100 bg-white rounded-2xl overflow-hidden hover:shadow-premium transition-all duration-300 relative aspect-[16/9] group cursor-pointer"
                >
                  <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-w-768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-secondary/30 transition-opacity duration-300 group-hover:bg-secondary/40" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                        <FaPlay className="ml-1 text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[9999] bg-secondary/95 flex items-center justify-center p-4 select-none"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
              aria-label="Close Lightbox"
            >
              <FiX className="text-2xl" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
              aria-label="Next Image"
            >
              <FiChevronRight className="text-2xl" />
            </button>

            <div className="relative max-w-5xl max-h-[80vh] w-full h-[70vh]" onClick={e => e.stopPropagation()}>
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {selectedVideo && parsedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[9999] bg-secondary/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
              aria-label="Close Lightbox"
            >
              <FiX className="text-2xl" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              {parsedVideo.type === "youtube" ? (
                <iframe
                  src={parsedVideo.embed}
                  title={selectedVideo.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <video
                  src={parsedVideo.embed}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
