import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaRegWindowClose } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const videoItems = [
  {
    id: 1,
    title: "Cinematic Backwater Voyage",
    description: "A bird's eye view and cinematic cruise of a traditional Kerala houseboat crossing the wide lagoons.",
    url: "https://www.youtube.com/watch?v=k6M3YbWX284",
    thumbnail: "https://i.ibb.co/q2fpRmZ/Whats-App-Image-2026-07-14-at-1-19-37-PM.jpg",
  },
  {
    id: 2,
    title: "Honeymoon Special Setup",
    description: "Peek into the romantic candlelit setups and customized flowers decor designed for newlywed couples.",
    url: "https://www.youtube.com/watch?v=nXF3vDXekTM",
    thumbnail: "https://i.ibb.co/WWVZD0Sf/Whats-App-Image-2026-07-14-at-1-19-44-PM-1.jpg",
  },
  {
    id: 3,
    title: "Traditional Cooking Onboard",
    description: "Watch our private onboard chef prepare authentic Kerala Karimeen Pollichathu and fresh Toddy Shop style fish curry.",
    url: "https://assets.mixkit.co/videos/preview/mixkit-down-the-river-in-a-bamboo-canoe-6804-large.mp4",
    thumbnail: "https://i.ibb.co/N22qQWGz/Whats-App-Image-2026-07-14-at-1-19-41-PM-1.jpg",
  },
  {
    id: 4,
    title: "Exploring Alleppey Narrow Canals",
    description: "A peaceful cruise navigating through the small palm-fringed channels of rural Alleppey.",
    url: "https://www.youtube.com/watch?v=8yR_hP81UVc",
    thumbnail: "https://i.ibb.co/GQkYjgvb/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
  },
  {
    id: 5,
    title: "Scenic Sunset Lake Vembanad",
    description: "Capturing the stunning orange and golden reflections on the Vembanad Lake at sunset.",
    url: "https://www.youtube.com/watch?v=w2ISkshQS28",
    thumbnail: "https://i.ibb.co/m5bDKmp4/Whats-App-Image-2026-07-14-at-1-19-42-PM.jpg",
  },
  {
    id: 6,
    title: "Luxury Double Decker Overview",
    description: "A visual tour showing the premium bedrooms, dining area, and sun decks of our double decker fleet.",
    url: "https://www.youtube.com/watch?v=9cigrWJrAJw",
    thumbnail: "https://i.ibb.co/N290Vy3m/Whats-App-Image-2026-07-14-at-1-19-38-PM-1.jpg",
  },
  {
    id: 7,
    title: "Sunset Boat Cruise",
    description: "A magical backwater boating sunset experience in Akalapuzha.",
    url: "https://youtube.com/shorts/oV-SA52KqSE",
    thumbnail: "https://img.youtube.com/vi/oV-SA52KqSE/hqdefault.jpg",
  },
  {
    id: 8,
    title: "Backwater Shikara Cruise",
    description: "Serene village canal sailing on our premium wooden Shikara boat.",
    url: "https://youtube.com/shorts/jVpx2FbaIN0",
    thumbnail: "https://img.youtube.com/vi/jVpx2FbaIN0/hqdefault.jpg",
  },
  {
    id: 9,
    title: "Village Life Experience",
    description: "Glide past palm shores and local settlements in traditional styles.",
    url: "https://youtube.com/shorts/v5TzrFSgAng",
    thumbnail: "https://img.youtube.com/vi/v5TzrFSgAng/hqdefault.jpg",
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
