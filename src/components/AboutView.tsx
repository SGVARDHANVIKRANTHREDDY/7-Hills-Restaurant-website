import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  UtensilsCrossed, 
  Sparkles, 
  Users, 
  Clock, 
  CheckCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

export default function AboutView() {
  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
      
      {/* Page Header Banner */}
      <section className="relative py-20 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
            Our Story & Core Values
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white">
            About 7 Hills <span className="italic font-serif-custom text-[#c5a059]">Restaurant</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed font-sans">
            Discover the rich culinary philosophy and welcoming family atmosphere behind Tirupati's friendly neighborhood multi-cuisine diner.
          </p>
        </div>
      </section>

      {/* SECTION 1: THE STORY (Split Column) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-1.5 text-[#c5a059] font-bold text-xs uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#c5a059]" />
              <span>Catering Since Day One</span>
            </div>
            <h2 className="text-3xl font-light text-white font-heading tracking-tight leading-tight">
              A Passion For <span className="italic font-serif-custom text-[#c5a059]">Traditional Taste</span> & Ultimate Value
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              Founded on the simple belief that outstanding multi-cuisine dining should be healthy, comforting, and accessible to everyone, <strong className="text-white font-semibold">7 Hills Restaurant AC / Non AC</strong> has evolved into a key stopover for visitors and families traveling through Tirupati.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              Located on <strong className="text-white font-semibold">Tiruchanoor Road</strong>, we have specialized in preparing mouthwatering Hyderabadi Dum Biryani, crispy ghee masala dosa, and perfectly charred clay-oven tandoori chicken. Every meal is cooked to order using the finest quality long-grain basmati rice, hand-pounded masalas, and high-quality local produce.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed font-sans">
              As a family-run diner, we treat every customer with utmost respect. Our professional service staff is trained to serve you with care and speed, ensuring you feel right at home after a long spiritual journey or a busy day.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-72 shadow-md bg-black">
                <img
                  src={IMAGES.interior}
                  alt="Dining Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-72 shadow-md mt-6 bg-black">
                <img
                  src={IMAGES.exterior}
                  alt="Restaurant Signage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 brightness-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="bg-[#121212] p-4 rounded-xl border border-white/10 text-center">
              <span className="block font-black text-2xl text-[#c5a059]">₹100 - ₹200</span>
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider font-sans">Average dining cost per person</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: VALUES GRID (BENTO PROPS) */}
      <section className="bg-[#121212] py-20 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
              Our Core Pillars
            </span>
            <h2 className="text-3xl font-light text-white font-heading tracking-tight">
              Why Diners Trust <span className="italic font-serif-custom text-[#c5a059]">7 Hills</span>
            </h2>
            <p className="text-gray-400 text-xs max-w-lg mx-auto">
              Every dish we cook and every service we offer adheres to strict standards of local hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-sm flex flex-col space-y-4">
              <div className="p-3 bg-[#c5a059]/10 text-[#c5a059] rounded-xl w-fit">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-heading">
                Experienced & Caring Chefs
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                Our culinary team has years of deep-rooted experience in preparing classic South Indian breakfast delicacies and authentic North Indian specialties, ensuring home-style spice levels and rich flavors.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-sm flex flex-col space-y-4">
              <div className="p-3 bg-[#c5a059]/10 text-[#c5a059] rounded-xl w-fit">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-heading">
                Dedicated Separate Kitchen Prep
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                We respect dietary practices and pilgrim values. All vegetarian dishes are prepared in highly guarded, dedicated kitchen zones with separate utensils and prep counters for absolute hygiene.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 shadow-sm flex flex-col space-y-4">
              <div className="p-3 bg-[#c5a059]/10 text-[#c5a059] rounded-xl w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white font-heading">
                Warm Pilgrim Hospitality
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                Visiting Tirumala with infants or elderly parents? Our ground-floor, step-free access, professional staff, and spacious tables are optimized to make pilgrim groups feel welcomed and relaxed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE AMENITIES CHECKLIST */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-3xl text-[#e5e5e5] p-8 md:p-12 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-bold uppercase text-[#c5a059] tracking-widest bg-[#c5a059]/10 px-3 py-1 rounded-md border border-[#c5a059]/20">
                Complete Facilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-light font-heading leading-tight text-white">
                Modern Dining Spaces <span className="italic font-serif-custom text-[#c5a059]">Optimized For Comfort</span>
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                Whether you prefer the breezy Non-AC outdoor atmosphere or the dust-free quietness of our AC Family Room, we guarantee comfort.
              </p>
              <div className="pt-2 font-sans">
                <span className="text-sm font-semibold text-[#c5a059] block">☎ Group Bookings & Catering:</span>
                <span className="text-xs text-gray-500">Call us in advance for groups exceeding 15 members.</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RESTAURANT_INFO.amenities.map((amenity, idx) => (
                <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-white font-heading">{amenity.name}</h4>
                    <p className="text-xs text-gray-400 mt-1 font-sans">{amenity.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
