import React, { useState } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Menu', page: 'menu' },
    { label: 'About Us', page: 'about' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Reviews', page: 'reviews' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      {/* Top Banner with info */}
      <div className="hidden sm:flex justify-between items-center px-4 md:px-8 py-1.5 bg-[#121212] text-gray-400 text-xs font-medium tracking-wide border-b border-white/5">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:underline">{RESTAURANT_INFO.phone}</a>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Tiruchanoor Road, Tirupati</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] bg-[#c5a059]/10 text-[#c5a059] px-2 py-0.5 rounded-full border border-[#c5a059]/20">
            ★ 4.0 Google (447 Reviews)
          </span>
          <span className="font-semibold text-[#c5a059]">Open: 5:00 AM - 11:00 PM</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start focus:outline-none group text-left cursor-pointer"
          id="nav-logo"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-extrabold tracking-tight text-[#c5a059] group-hover:text-[#c5a059]/85 transition-colors font-heading">
              7 HILLS
            </span>
            <span className="text-[10px] font-bold text-[#c5a059] border border-[#c5a059]/30 px-1 py-0.5 rounded uppercase tracking-wider bg-[#c5a059]/5 font-sans">
              AC / Non AC
            </span>
          </div>
          <div className="flex items-center gap-1 w-full mt-0.5">
            <div className="h-[2px] bg-[#c5a059] w-2/3 rounded-full"></div>
            <div className="h-[2px] bg-white/10 w-1/3 rounded-full"></div>
          </div>
          <span className="text-[9px] text-gray-400 font-semibold tracking-widest uppercase mt-0.5 font-sans">
            Multi-Cuisine Family Diner
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.page}
              id={`nav-link-${item.page}`}
              onClick={() => handleNavClick(item.page)}
              className={`relative px-3.5 py-2 rounded-md text-sm font-semibold tracking-wide cursor-pointer transition-colors ${
                currentPage === item.page
                  ? 'text-[#c5a059] font-bold'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
              {currentPage === item.page && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#c5a059] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            id="nav-call-cta"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#c5a059] hover:bg-[#c5a059]/90 rounded-full transition-all duration-300 shadow-sm shadow-[#c5a059]/10"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Order</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="p-2 text-[#c5a059] hover:bg-white/5 rounded-full"
            aria-label="Call restaurant"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-[#e5e5e5] hover:text-[#c5a059] hover:bg-white/5 rounded-md focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-[#121212]"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  id={`mobile-nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-bold tracking-wide transition-colors ${
                    currentPage === item.page
                      ? 'bg-[#c5a059]/10 text-[#c5a059]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-[#c5a059]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5 px-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-black bg-[#c5a059] rounded-full hover:bg-[#c5a059]/90 transition-all text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
