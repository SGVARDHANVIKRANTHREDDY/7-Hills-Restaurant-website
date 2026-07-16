import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { Page } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleLinkClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-[#e5e5e5] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1.5 flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-[#c5a059] font-heading">
                7 HILLS
              </span>
              <span className="text-[10px] font-bold text-[#c5a059] border border-[#c5a059]/30 px-1 py-0.5 rounded uppercase tracking-wider bg-[#c5a059]/10">
                AC / Non AC
              </span>
            </div>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Friendly neighborhood multi-cuisine family diner in Tirupati. Dedicated to serving home-style South and North Indian food to locals and pilgrims alike since inception.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs bg-white/5 text-gray-300 px-3 py-1.5 rounded border border-white/10">
                ★ 4.0/5.0 Google Rated
              </span>
              <span className="text-xs bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 px-3 py-1.5 rounded">
                Family Friendly
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-md font-extrabold tracking-wider uppercase text-[#c5a059] border-b border-white/10 pb-2 font-heading">
              Dining Hours
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Breakfast Hours:</span>
                  <span className="text-xs text-gray-400">Daily 5:00 AM – 11:30 AM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Lunch & Dinner:</span>
                  <span className="text-xs text-gray-400">Daily 11:30 AM – 11:00 PM</span>
                </div>
              </li>
              <li className="text-[11px] text-[#c5a059] bg-[#c5a059]/5 px-2.5 py-1.5 rounded border border-[#c5a059]/20 font-medium">
                ☀ We are open all 365 days, including major pilgrim festival days.
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-md font-extrabold tracking-wider uppercase text-[#c5a059] border-b border-white/10 pb-2 font-heading">
              Explore Site
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 font-medium font-sans">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('menu')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Our Food Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Our Story (About)
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Restaurant Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('reviews')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Google Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#c5a059] transition-colors cursor-pointer text-left block py-1 w-full">
                  » Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-md font-extrabold tracking-wider uppercase text-[#c5a059] border-b border-white/10 pb-2 font-heading">
              Our Location
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="text-xs text-gray-400 font-sans leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#c5a059] transition-colors font-medium">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#c5a059] transition-colors text-xs text-gray-400">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=13.6596132,79.4816551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/30 text-[#c5a059] font-bold text-xs rounded transition-all duration-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-px bg-white/10 my-10"></div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {currentYear} 7 Hills Restaurant AC / Non AC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-[#c5a059] flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy & Terms</span>
            </button>
            <span>|</span>
            <span className="text-[11px] text-gray-600">Handcrafted with Design Agency standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
