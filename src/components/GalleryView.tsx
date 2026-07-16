import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { IMAGES } from '../data/restaurantData';

interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'food' | 'interior';
}

export default function GalleryView() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'food' | 'interior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos: GalleryPhoto[] = [
    {
      id: "p1",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jYUm29I-3SGXPzIe5mTdIVEmLZpklQnVaGX-s_1zhQ&s=10",
      title: "Signature Hyderabadi Biryani",
      description: "A close-up shot of our steaming hot Hyderabadi Dum Biryani, layered with saffron basmati rice and roasted chicken.",
      category: "food"
    },
    {
      id: "p2",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMGYSKpocGE_1CQSfsTaHZ8uN7fu8fSJOF6D1gc8CtQ&s=10",
      title: "Crispy Ghee Masala Dosa",
      description: "A traditional South Indian specialty, crisp-fried in pure ghee and served with fresh steel-chutney bowls and sambar.",
      category: "food"
    },
    {
      id: "p3",
      url: IMAGES.interior,
      title: "Family Dining Room (AC)",
      description: "A spacious view of our quiet air-conditioned dining lounge featuring neat setups and comfortable family seating.",
      category: "interior"
    },
    {
      id: "p4",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReq4MhtcCuwXZfYCrvVg-fDjPyF0eZkIHTw0JCQM0VDQ&s=10",
      title: "Clay Oven Tandoori Chicken",
      description: "Perfectly charred juicy chicken leg and breast pieces fresh from the clay oven, garnished with lemon and mint.",
      category: "food"
    },
    {
      id: "p5",
      url: IMAGES.exterior,
      title: "7 Hills Main Road Exterior",
      description: "Clean, welcoming entrance on Tiruchanoor Road, highlighting our signature crimson red and green striped signage.",
      category: "interior"
    }
  ];

  // Filter photos based on selection
  const filteredPhotos = selectedTab === 'all' 
    ? photos 
    : photos.filter(p => p.category === selectedTab);

  const handleOpenLightbox = (photoId: string) => {
    const idx = photos.findIndex(p => p.id === photoId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-24">
      
      {/* Banner */}
      <section className="relative py-16 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
            A Visual Feast
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white">
            Our Photo <span className="italic font-serif-custom text-[#c5a059]">Gallery</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed font-sans">
            Take a virtual tour of our warm family dining space and explore our fresh, high-quality, authentic multi-cuisine delicacies.
          </p>
        </div>
      </section>

      {/* Tab Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center space-y-6">
        <div className="inline-flex items-center p-1.5 bg-[#121212] border border-white/10 rounded-2xl shadow-sm gap-1">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all cursor-pointer ${
              selectedTab === 'all'
                ? 'bg-[#c5a059] text-black'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            All Photos ({photos.length})
          </button>
          <button
            onClick={() => setSelectedTab('food')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all cursor-pointer ${
              selectedTab === 'food'
                ? 'bg-[#c5a059] text-black'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            Signature Dishes
          </button>
          <button
            onClick={() => setSelectedTab('interior')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide transition-all cursor-pointer ${
              selectedTab === 'interior'
                ? 'bg-[#c5a059] text-black'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            Dining & Atmosphere
          </button>
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden shadow-sm group cursor-pointer relative"
                onClick={() => handleOpenLightbox(photo.id)}
              >
                {/* Photo frame */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover visual cue overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 bg-[#c5a059]/20 backdrop-blur-md rounded-full text-[#c5a059] border border-[#c5a059]/30">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 text-[9px] font-bold tracking-widest uppercase bg-black/80 text-[#c5a059] px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm font-sans">
                    {photo.category === 'food' ? 'Dish Showcase' : 'Diner Atmosphere'}
                  </span>
                </div>

                {/* Captions area */}
                <div className="p-5 text-left border-t border-white/5">
                  <h3 className="font-extrabold text-white text-base font-heading group-hover:text-[#c5a059] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed font-sans line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8"
            onClick={handleCloseLightbox}
          >
            {/* Top Bar inside Lightbox */}
            <div className="flex justify-between items-center text-[#e5e5e5] w-full max-w-5xl mx-auto relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#c5a059] font-sans">
                Photo {lightboxIndex + 1} of {photos.length}
              </span>
              <button
                onClick={handleCloseLightbox}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Slide content */}
            <div className="flex-grow flex items-center justify-center max-w-5xl mx-auto w-full relative">
              {/* Left Slider Arrow */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-0 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* High-res Image Box */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-h-[60vh] sm:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center"
              >
                <img
                  src={photos[lightboxIndex].url}
                  alt={photos[lightboxIndex].title}
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Right Slider Arrow */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-0 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Captions panel */}
            <div className="bg-[#121212]/85 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-white max-w-3xl mx-auto w-full text-center space-y-2">
              <h4 className="font-extrabold text-lg text-[#c5a059] font-heading">
                {photos[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl mx-auto font-sans">
                {photos[lightboxIndex].description}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
