import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Utensils, 
  Clock, 
  MapPin, 
  Car, 
  Smile, 
  Snowflake, 
  Phone, 
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Page } from '../types';
import { RESTAURANT_INFO, MENU_ITEMS, REVIEWS, IMAGES } from '../data/restaurantData';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: IMAGES.biryani,
      title: "Handcrafted Hyderabadi Biryani",
      tagline: "SPICY, FRAGRANT & DUM-COOKED",
      desc: "Perfectly steamed basmati rice infused with secret spices and loaded with fresh juicy chicken.",
    },
    {
      image: IMAGES.dosa,
      title: "Famous Crispy Masala Dosa",
      tagline: "TRADITIONAL SOUTH INDIAN CLASSIC",
      desc: "Fresh stone-ground batter crisped in fresh ghee, filled with savory spiced potato masala.",
    },
    {
      image: IMAGES.interior,
      title: "Family Dining Space (AC / Non AC)",
      tagline: "COOL, COMFORTABLE & CLEAN",
      desc: "Spacious seating ideal for family gatherings and pilgrims visiting the Tirumala temple.",
    }
  ];

  // Rotate hero slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const featuredDishes = MENU_ITEMS.filter(item => item.isPopular);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION 1: HERO CONTAINER (SLIDESHOW) */}
      <section className="relative h-[85vh] md:h-[90vh] bg-[#0a0a0a] overflow-hidden" id="home-hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0.4, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              className="w-full h-full object-cover object-center brightness-[0.3]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/60"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start text-[#e5e5e5]">
          <div className="max-w-3xl space-y-6">
            
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#c5a059]/10 rounded-md text-[10px] uppercase tracking-[0.25em] text-[#c5a059] border border-[#c5a059]/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{slides[activeSlide].tagline}</span>
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight"
            >
              <span className="font-heading block">{slides[activeSlide].title.split(" (")[0]}</span>
              {slides[activeSlide].title.includes("AC / Non AC") && (
                <span className="italic font-serif-custom text-[#c5a059] text-3xl sm:text-4xl md:text-5xl block mt-2">Premium AC & Non-AC Settings</span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-300 font-sans leading-relaxed max-w-2xl"
            >
              {slides[activeSlide].desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
              <button
                onClick={() => setCurrentPage('menu')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-bold uppercase tracking-widest cursor-pointer text-xs"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059] font-bold uppercase tracking-widest text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Order</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'bg-[#c5a059] scale-125 w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* SECTION 2: DINER WELCOME & UNIQUE PROPOSITIONS */}
      <section className="bg-[#0a0a0a] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
                Welcome to 7 Hills Tirupati
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                A Symphony of <span className="italic font-serif-custom text-[#c5a059]">Authentic Flavors</span> Built For Families & Pilgrims
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                Conveniently located on the busy <strong className="text-white font-semibold">Tiruchanoor Road</strong>, 7 Hills Restaurant is a local favorite offering delicious, multi-cuisine North and South Indian dining at highly affordable rates (average range <strong className="text-[#c5a059] font-semibold">₹100–200 per person</strong>).
              </p>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                Whether you are craving our perfectly cooked, crispy, golden ghee masala dosa at 5:00 AM before a temple visit, or a massive steaming plate of Hyderabadi Dum Biryani with juicy tandoori chicken for family dinner, our professional staff is here to provide you with spectacular service.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#e5e5e5]">Clean Separate Kitchen Zone</h4>
                    <p className="text-xs text-gray-400">Vegetarian items prepared under strict clean standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#e5e5e5]">AC & Non-AC Diners</h4>
                    <p className="text-xs text-gray-400">Cool air-conditioned rooms or breezy open seating.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-1.5 text-[#c5a059] font-bold hover:underline group text-xs uppercase tracking-wider cursor-pointer"
                >
                  <span>Learn Our Complete Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Quick Summary Cards Right Panel */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#121212] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="p-3 bg-[#c5a059]/10 rounded-xl w-fit text-[#c5a059] mb-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-md text-[#e5e5e5] mb-1">Authentic Taste</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Cooked by chefs with deep roots in local Indian spice blends.</p>
                </div>
              </div>

              <div className="bg-[#121212] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="p-3 bg-[#c5a059]/10 rounded-xl w-fit text-[#c5a059] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-md text-[#e5e5e5] mb-1">5 AM - 11 PM</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Early morning hot idlis to late night biryani cravings.</p>
                </div>
              </div>

              <div className="bg-[#121212] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="p-3 bg-[#c5a059]/10 rounded-xl w-fit text-[#c5a059] mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-md text-[#e5e5e5] mb-1">Free Parking</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Dedicated front spaces to easily park traveler vans & family cars.</p>
                </div>
              </div>

              <div className="bg-[#121212] p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
                <div className="p-3 bg-[#c5a059]/10 rounded-xl w-fit text-[#c5a059] mb-4">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-md text-[#e5e5e5] mb-1">Pilgrim Welcome</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Fast-moving batches, warm hospitality, step-free wheelchair setup.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE SPECIALTIES PORTFOLIO */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10" id="featured-dishes">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
              Taste Our Pride
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white font-heading tracking-tight">
              Highly Rated <span className="italic font-serif-custom text-[#c5a059]">Signature Dishes</span>
            </h2>
            <p className="text-gray-400 text-xs max-w-2xl mx-auto">
              These are the culinary crowd-pleasers mentioned repeatedly in our 440+ Google Business reviews. Crafted fresh, day in and day out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <motion.div
                key={dish.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-sm flex flex-col h-full group"
              >
                {/* Dish Image Container */}
                <div className="relative h-64 overflow-hidden bg-[#121212]">
                  <img
                    src={dish.image || IMAGES.biryani}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category badge & Veg badge overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-gray-300 bg-black/80 px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                      {dish.category === 'breakfast' ? 'Breakfast' : 'Lunch & Dinner'}
                    </span>
                    <span className={`inline-flex items-center justify-center p-1.5 rounded-md border ${
                      dish.isVegetarian 
                        ? 'bg-black border-green-500 text-green-500' 
                        : 'bg-black border-red-500 text-red-500'
                    }`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${dish.isVegetarian ? 'bg-green-500' : 'bg-red-500'}`} />
                    </span>
                  </div>

                  {/* Price Overlay */}
                  <div className="absolute bottom-4 right-4 bg-[#c5a059] text-black text-sm font-extrabold px-3.5 py-1.5 rounded-md shadow-md font-sans">
                    ₹{dish.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <h3 className="font-bold text-lg text-white font-heading group-hover:text-[#c5a059] transition-colors">
                        {dish.name}
                      </h3>
                      {dish.isSpicy && <span className="text-xs">🌶</span>}
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-semibold">
                    <span className="text-[#c5a059] text-[11px]">✓ Premium Quality</span>
                    <span className="text-[#c5a059] group-hover:underline cursor-pointer flex items-center gap-1 text-[11px]" onClick={() => setCurrentPage('menu')}>
                      <span>Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('menu')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-bold uppercase tracking-widest cursor-pointer text-xs"
            >
              <span>Explore Complete Food Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4: BENTO BOX DINING EXPERIENCE */}
      <section className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
              Built For Your Comfort
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white font-heading tracking-tight">
              A Cool & <span className="italic font-serif-custom text-[#c5a059]">Welcoming Atmosphere</span>
            </h2>
            <p className="text-gray-400 text-xs max-w-xl mx-auto">
              Our seating is designed to cater both to comfort-seeking families and travelers needing quick, clean meals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento 1: AC Section */}
            <div className="md:col-span-2 bg-[#121212] rounded-3xl border border-white/10 overflow-hidden p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
              <div className="space-y-4 max-w-md">
                <div className="flex items-center gap-2 text-[#c5a059] font-bold uppercase text-xs tracking-wider">
                  <Snowflake className="w-4 h-4 animate-spin" />
                  <span>Fully Air-Conditioned Section</span>
                </div>
                <h3 className="text-2xl font-light text-white font-heading">
                  Cool Interior Dining
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  Escaping Tirupati’s warm weather is simple! Step into our cool, air-conditioned interior section. Featuring quiet settings, neat tables, and cozy family arrangements. Perfect for families, older guests, and pilgrim groups seeking calm.
                </p>
                <div className="flex items-center gap-3 text-xs text-[#c5a059] font-bold">
                  <span>✔ Safe & Sanitized</span>
                  <span>•</span>
                  <span>✔ High Comfort</span>
                </div>
              </div>
              <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden bg-black shrink-0 shadow-inner">
                <img
                  src={IMAGES.interior}
                  alt="AC Dining room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Bento 2: Operating Hours Card */}
            <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] text-[#e5e5e5] border border-[#c5a059]/30 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-[#c5a059]/5 rounded-full" />
              
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/30 px-2.5 py-1 rounded-full">
                  Early Till Late
                </span>
                <h3 className="text-2xl font-light font-heading text-[#c5a059]">
                  Open Daily From 5:00 AM
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  We match the early schedule of pilgrims. Fresh, steaming hot filter coffee, idlis, and crispy dosas are served immediately starting 5:00 AM.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-semibold text-gray-400">
                <span>Mo - Su (All Days)</span>
                <span>5:00 AM - 11:00 PM</span>
              </div>
            </div>

            {/* Bento 3: Free Front Parking */}
            <div className="bg-[#121212] rounded-3xl border border-white/10 p-8 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="p-3 bg-[#c5a059]/10 text-[#c5a059] rounded-2xl w-fit">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Free Front Parking
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  Tiruchanoor Road is a busy arterial route. Parking can be tough, but not here! Enjoy complimentary customer-only parking spaces right in front of our diner.
                </p>
              </div>
              <span className="text-[11px] text-[#c5a059] font-bold bg-[#c5a059]/5 px-3 py-1.5 rounded-lg border border-[#c5a059]/15 w-fit mt-4">
                ✓ Space for 8+ SUVs / Traveler Vans
              </span>
            </div>

            {/* Bento 4: Pilgrim-Friendly Seating */}
            <div className="md:col-span-2 bg-[#121212] rounded-3xl border border-white/10 overflow-hidden p-8 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
              <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden bg-black shrink-0 shadow-inner order-last md:order-first">
                <img
                  src={IMAGES.exterior}
                  alt="Restaurant exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 max-w-md">
                <div className="text-[#c5a059] font-bold uppercase text-xs tracking-wider flex items-center gap-2">
                  <span>✈ Tour-friendly and Pilgrim-ready</span>
                </div>
                <h3 className="text-2xl font-light text-white font-heading">
                  Vibrant Non-AC Dining
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  Need a quick bite or traveling in large pilgrim batches? Our spacious Non-AC open dining lounge offers dynamic, fast table turnovers and step-free wheelchair access for elderly family members.
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400 font-semibold">
                  <span>• Speedy Service</span>
                  <span>• Pocket Friendly Prices</span>
                  <span>• Accessible Layout</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: GOOGLE REVIEWS HIGHLIGHTS */}
      <section className="bg-[#121212] py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
                Guest Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white font-heading tracking-tight">
                Consistently Praised <span className="italic font-serif-custom text-[#c5a059]">Service Quality</span>
              </h2>
              <p className="text-gray-400 text-xs">
                Real feedback left on Google by our diners. We maintain an average 4.0/5.0 star score!
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-4 rounded-2xl border border-white/10 text-center md:text-left shrink-0">
              <div className="flex items-center gap-2 text-[#c5a059] mb-1">
                <span className="text-3xl font-black text-white font-heading">4.0</span>
                <div className="flex text-lg font-bold">★★★★★</div>
              </div>
              <p className="text-xs text-gray-400">Based on 447 Verified Google Reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-3.5">
                  <div className="flex text-[#c5a059] text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span key={i} className="text-gray-700">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed italic font-sans">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#c5a059] text-black flex items-center justify-center font-extrabold text-xs shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#e5e5e5]">{review.author}</h4>
                    <span className="text-[10px] text-gray-500 block">{review.relativeTime} • Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('reviews')}
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black font-extrabold rounded-full transition-all cursor-pointer text-xs uppercase tracking-wider"
            >
              <span>See All Google Reviews & Write Yours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: MAP, DIRECTIONS, ORDER & PICKUP INFO */}
      <section className="bg-[#0a0a0a] text-[#e5e5e5] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
        {/* Dynamic decorative backdrop */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
                Easy Ordering & Pickup
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight leading-tight">
                Takeaway or Swiggy / <span className="italic font-serif-custom text-[#c5a059]">Zomato Delivery</span>
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Traveling in a bus, van, or with a huge pilgrim family? You can dial us directly to pre-order bulky family packs or breakfast catering.
              </p>
              
              <div className="space-y-4 font-sans">
                <div className="flex items-start gap-3 bg-[#121212] p-4 rounded-2xl border border-white/5">
                  <span className="text-[#c5a059] text-md font-bold mt-0.5">📞</span>
                  <div>
                    <h4 className="font-bold text-sm text-[#c5a059]">Direct Calling Order Line</h4>
                    <p className="text-xs text-gray-400">Avoid waiting! Call us to pre-order and collect your hot food packets immediately on arrival.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#121212] p-4 rounded-2xl border border-white/5">
                  <span className="text-[#c5a059] text-md font-bold mt-0.5">📍</span>
                  <div>
                    <h4 className="font-bold text-sm text-[#c5a059]">Located Conveniently on Tiruchanoor Road</h4>
                    <p className="text-xs text-gray-400">A smooth direct stop for local pilgrims coming from Padmavathi Temple or heading towards Tirumala Hills.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-extrabold rounded-full transition-all text-xs uppercase tracking-widest shadow-lg shadow-[#c5a059]/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order</span>
                </a>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#121212] hover:bg-[#121212]/80 text-[#e5e5e5] border border-white/10 font-extrabold rounded-full transition-all text-xs uppercase tracking-widest cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  <span>View On Map & Directions</span>
                </button>
              </div>
            </div>

            {/* Mini map preview */}
            <div className="lg:col-span-6 bg-[#121212] p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-[380px] flex flex-col justify-between">
              <div className="w-full h-[280px] rounded-2xl overflow-hidden bg-black shadow-inner">
                {/* Embedded dynamic map */}
                <iframe
                  title="7 Hills Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0601550711684!2d79.4790802!3d13.6596132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4939ee83c6c9%3A0x35ed100a508b68ad!2s7%20Hills%20Restaurant%20AC%2F%20Non%20AC!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-300 font-semibold pt-2 px-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#c5a059]" />
                  <span>Revenue Colony, Tirupati</span>
                </span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=13.6596132,79.4816551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c5a059] flex items-center gap-1.5 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
