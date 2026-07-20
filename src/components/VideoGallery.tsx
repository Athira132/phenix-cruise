import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaRegWindowClose } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const videoItems = [
  {
    id: 1,
    title: "Akalapuzha Backwater Shikara Cruise Highlights",
    description: "Experience peaceful sailing on the calm backwater lake of Akalapuzha with Phoenix Cruise.",
    url: "https://youtube.com/shorts/9_p0tpAz-Ak?si=CfmhTmmnLJwf1dq3",
    thumbnail: "https://img.youtube.com/vi/9_p0tpAz-Ak/hqdefault.jpg",
  },
  {
    id: 2,
    title: "Phoenix Cruise Backwater Voyage Experience",
    description: "Unwind on a relaxing boating journey through palm-fringed village channels.",
    url: "https://youtube.com/shorts/bSFPXygxrMI?si=3YHd7Y5bupw50UzN",
    thumbnail: "https://img.youtube.com/vi/bSFPXygxrMI/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Scenic Golden Hour Boating in Akalapuzha",
    description: "Watch breathtaking golden sunset reflections over Akalapuzha lake.",
    url: "https://youtube.com/shorts/uj7uFjIhOtI?si=rvSI_bH1B67jvSpw",
    thumbnail: "https://img.youtube.com/vi/uj7uFjIhOtI/hqdefault.jpg",
  },
  {
    id: 4,
    title: "Fresh Onboard Kerala Dining & Cruise",
    description: "Delight in freshly prepared Kerala cuisine served right on board during your cruise.",
    url: "https://youtube.com/shorts/1xesva6zYMQ?si=epjTIB_X8dmKCvMP",
    thumbnail: "https://img.youtube.com/vi/1xesva6zYMQ/hqdefault.jpg",
  },
  {
    id: 5,
    title: "Family & Group Boating Adventure",
    description: "Enjoy comfortable seating, safety systems, and memorable moments with loved ones.",
    url: "https://youtube.com/shorts/wJPzy58yID0?si=wvqhWtCCHuUZ_e8f",
    thumbnail: "https://img.youtube.com/vi/wJPzy58yID0/hqdefault.jpg",
  },
];

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const id = match && match[2].length === 11 ? match[2] : null;
    return id ? { type: "youtube", embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` } : null;
  }
  if (url.includes("vimeo.com")) {
    const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)/;
    const match = url.match(regExp);
    const id = match ? match[1] : null;
    return id ? { type: "vimeo", embed: `https://player.vimeo.com/video/${id}?autoplay=1` } : null;
  }
  return { type: "direct", embed: url };
}

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videoItems[0] | null>(null);

  const parsedVideo = selectedVideo ? getEmbedUrl(selectedVideo.url) : null;

  return (
    <section id="video-gallery" className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-sand/20 rounded-full blur-[100px] pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-sans font-semibold block mb-3">
            Cinematic Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark tracking-wide mb-4">
            Experience Phoenix Cruise
          </h2>
          <div className="w-16 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-dark/70 font-sans font-light leading-relaxed text-sm md:text-base">
            Watch our houseboats glide through serene lakes, catch views of traditional dining, and witness backwater sunsets.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-primary/5 rounded-luxury overflow-hidden hover:shadow-premium transition-all duration-300 relative aspect-[16/9] group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                <Image
                  src={video.thumbnail}
                  alt="Video Thumbnail"
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/35 transition-opacity duration-300 group-hover:bg-secondary/45" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <FaPlay className="ml-1 text-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Lightbox Modal */}
        <AnimatePresence>
          {selectedVideo && parsedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-secondary/95 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 z-[100]"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close Lightbox"
              >
                <FiX className="text-2xl" />
              </button>

              {/* Video Content Iframe or direct Video Tag */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {parsedVideo.type === "youtube" || parsedVideo.type === "vimeo" ? (
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
      </div>
    </section>
  );
}
