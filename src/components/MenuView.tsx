import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Download, 
  RefreshCw, 
  Star, 
  Flame, 
  Compass, 
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export default function MenuView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [showPdfToast, setShowPdfToast] = useState(false);

  // Filter chips that actually apply to our menu
  const filterChips = [
    'All',
    'Veg',
    'Non Veg',
    'Popular',
    'Starters',
    'Curries',
    'Biryani',
    'Fried Rice',
    'Chinese',
    'Tiffins',
    'Meals',
    'Soups',
    'South Indian',
    'North Indian'
  ];

  // List of original printed sections in order of the menu card
  const originalSections = [
    "Veg Starters",
    "Non-Veg Starters",
    "Veg. Main Course",
    "Non-Veg. Main Course",
    "Rice & Noodles",
    "Non Veg Fried Rice",
    "Biryani's",
    "Indian Breads",
    "Tiffin Menu",
    "Meals",
    "Veg. Soups",
    "Non.Veg. Soups"
  ];

  // Map each original section to a short appetizing description
  const sectionDescriptions: Record<string, string> = {
    "Veg Starters": "Crispy, golden-fried starters tossed in classic Indo-Chinese and local spices.",
    "Non-Veg Starters": "Tender chicken, mutton, fish, and prawns cooked with aromatic seasonings or clay-oven roasted.",
    "Veg. Main Course": "Rich and creamy traditional paneer, mushroom, and dal curries cooked to perfection.",
    "Non-Veg. Main Course": "Bold, flavorful chicken, mutton, prawns, and egg curries simmered in rich hand-ground spices.",
    "Rice & Noodles": "Wok-fried premium long-grain rice and long noodles loaded with vegetables.",
    "Non Veg Fried Rice": "High-flame tossed basmati rice and noodles with scrambled egg, chicken, or prawns.",
    "Biryani's": "Our house specialty. Long-grain basmati rice cooked slow 'dum' style with whole aromatic spices.",
    "Indian Breads": "Freshly kneaded whole wheat and fine flour breads baked to order in our hot clay tandoor.",
    "Tiffin Menu": "Steaming hot South Indian tiffins served with fresh coconut chutney and piping hot sambar.",
    "Meals": "A wholesome, traditional feast featuring steamed rice, dal, sambar, rasam, curries, and sweets.",
    "Veg. Soups": "Light and comforting hot vegetable broths and classic Chinese-style starters.",
    "Non.Veg. Soups": "Robust, flavorful chicken and egg drop soups spiced with pepper and fresh coriander."
  };

  // Filter menu items based on selected filter chip and search query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // 1. Search Query match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags?.some(tag => tag.toLowerCase().includes(query)) || false;
        
        if (!matchesName && !matchesDesc && !matchesCat && !matchesTags) {
          return false;
        }
      }

      // 2. Filter Chip match
      if (selectedFilter !== 'All') {
        if (selectedFilter === 'Veg' && !item.isVegetarian) return false;
        if (selectedFilter === 'Non Veg' && item.isVegetarian) return false;
        if (selectedFilter === 'Popular' && !item.isPopular && !item.tags?.includes('Popular')) return false;
        
        // Match specific tags/categories
        if (selectedFilter !== 'Veg' && selectedFilter !== 'Non Veg' && selectedFilter !== 'Popular') {
          const hasTag = item.tags?.some(tag => tag.toLowerCase() === selectedFilter.toLowerCase());
          const hasCategory = item.category.toLowerCase().includes(selectedFilter.toLowerCase());
          if (!hasTag && !hasCategory) return false;
        }
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  // Group filtered items by their original category
  const groupedItems = useMemo<Record<string, MenuItem[]>>(() => {
    const groups: Record<string, MenuItem[]> = {};
    originalSections.forEach(section => {
      groups[section] = [];
    });

    filteredItems.forEach(item => {
      const section = originalSections.find(sec => sec.toLowerCase() === item.category.toLowerCase()) || item.category;
      if (!groups[section]) {
        groups[section] = [];
      }
      groups[section].push(item);
    });

    // Remove empty groups to keep UI clean, but preserve sections with items
    const result: Record<string, MenuItem[]> = {};
    originalSections.forEach(section => {
      if (groups[section] && groups[section].length > 0) {
        result[section] = groups[section];
      }
    });
    return result;
  }, [filteredItems]);

  const handleDownloadPdf = () => {
    setShowPdfToast(true);
    setTimeout(() => {
      setShowPdfToast(false);
    }, 4500);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedFilter('All');
  };

  // Scroll to a specific category section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 140; // sticky header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-24 font-sans selection:bg-[#c5a059] selection:text-black">
      
      {/* Dynamic PDF Success Toast */}
      <AnimatePresence>
        {showPdfToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#121212] text-[#e5e5e5] p-5 rounded-2xl border border-[#c5a059] shadow-2xl flex items-start gap-4"
          >
            <div className="p-2.5 bg-[#c5a059]/20 text-[#c5a059] rounded-xl shrink-0 mt-0.5">
              <Download className="w-5 h-5 animate-pulse" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white flex items-center gap-1">
                <span>PDF Download Initiated</span>
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                "7-Hills-Restaurant-Menu-Tirupati.pdf" has been downloaded successfully. Perfect for group tour planners.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header Banner */}
      <section className="relative py-16 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
            Awwwards-Class Dining Map
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white leading-tight">
            Explore 7 Hills <span className="italic font-serif-custom text-[#c5a059]">Interactive Menu</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed font-sans">
            A 100% accurate digital representation of our printed menu cards. Handcrafted recipes, pocket-friendly local prices, and strict zone kitchen separations.
          </p>
        </div>
      </section>

      {/* Search & Global Filter Chips Bar */}
      <section className="sticky top-[73px] z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Input Box */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4.5 h-4.5 text-[#c5a059] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 108 dishes (e.g. Dosa, Biryani, Paneer...)"
                className="w-full pl-11 pr-4 py-3 bg-[#121212] border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059] transition-all font-sans"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-[11px] font-bold font-sans"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick reset option */}
            {(selectedFilter !== 'All' || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 text-[#c5a059] text-xs font-bold hover:underline py-1 shrink-0 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Selection ({filteredItems.length} found)</span>
              </button>
            )}
          </div>

          {/* Scrolling filter tags list */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none">
            {filterChips.map((chip) => {
              const isActive = selectedFilter === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setSelectedFilter(chip)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#c5a059] text-black shadow-md font-extrabold' 
                      : 'bg-[#121212] text-gray-400 hover:text-white border border-white/5 hover:bg-white/5'
                  }`}
                >
                  {chip === 'Veg' && <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1.5" />}
                  {chip === 'Non Veg' && <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1.5" />}
                  {chip === 'Popular' && <Star className="inline-block w-3 h-3 fill-current mr-1.5 -mt-0.5" />}
                  <span>{chip}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two-Column Explorer Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* COLUMN 1: STICKY SWIGGY-STYLE SECTION QUICK JUMP (3 COLS) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-[185px] bg-[#121212] p-5 rounded-3xl border border-white/10 shadow-sm max-h-[70vh] overflow-y-auto scrollbar-none space-y-4">
            <h3 className="text-xs font-extrabold text-[#c5a059] uppercase tracking-widest border-b border-white/5 pb-3.5 flex items-center gap-1.5">
              <Compass className="w-4.5 h-4.5" />
              <span>Menu Categories</span>
            </h3>

            <nav className="space-y-1.5">
              {originalSections.map((section) => {
                const isAvailable = Object.keys(groupedItems).includes(section);
                const count = groupedItems[section]?.length || 0;
                
                return (
                  <button
                    key={section}
                    disabled={!isAvailable}
                    onClick={() => scrollToSection(section.replace(/[^a-zA-Z0-9]/g, ""))}
                    className={`w-full px-3.5 py-2 rounded-xl text-xs font-bold font-heading text-left flex items-center justify-between transition-all ${
                      isAvailable 
                        ? 'text-gray-300 hover:bg-[#c5a059]/10 hover:text-[#c5a059] cursor-pointer' 
                        : 'text-gray-600 cursor-not-allowed opacity-40'
                    }`}
                  >
                    <span className="truncate pr-2">{section}</span>
                    {isAvailable && (
                      <span className="text-[9px] bg-black border border-white/10 text-gray-400 px-1.5 py-0.5 rounded-full font-mono font-bold">
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* COLUMN 2: ACTIVE DISHES STREAM (9 COLS) */}
          <div className="lg:col-span-9 space-y-16">
            
            {/* Mobile-only scrolling quick jump buttons */}
            <div className="lg:hidden bg-[#121212] p-4 rounded-2xl border border-white/5 mb-6 space-y-2">
              <span className="text-[10px] font-extrabold text-[#c5a059] uppercase tracking-widest block">Jump directly to:</span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {originalSections.map((section) => {
                  const isAvailable = Object.keys(groupedItems).includes(section);
                  if (!isAvailable) return null;
                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section.replace(/[^a-zA-Z0-9]/g, ""))}
                      className="px-3 py-1.5 bg-black border border-white/10 text-gray-300 text-[10px] font-bold rounded-lg shrink-0"
                    >
                      {section}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Empty results view */}
            {Object.keys(groupedItems).length === 0 && (
              <div className="text-center py-20 bg-[#121212] text-white rounded-3xl border border-white/10 p-8 max-w-md mx-auto space-y-4">
                <span className="text-4xl block">🍽</span>
                <h3 className="font-bold text-lg font-heading">No Dishes Match Selection</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  We couldn't find any dishes under "{selectedFilter}" matching your search word "{searchQuery}".
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-5 py-2.5 bg-[#c5a059] text-black text-xs font-bold rounded-full cursor-pointer hover:bg-[#c5a059]/90 transition-all font-sans uppercase"
                >
                  Clear Search & Filters
                </button>
              </div>
            )}

            {/* Render grouped menu cards */}
            {(Object.entries(groupedItems) as [string, MenuItem[]][]).map(([categoryName, items]) => (
              <div 
                key={categoryName} 
                id={categoryName.replace(/[^a-zA-Z0-9]/g, "")}
                className="space-y-6 scroll-mt-48"
              >
                {/* Category Header Label */}
                <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-light font-heading text-white tracking-tight flex items-center gap-2">
                      <span className="text-[#c5a059] font-serif-custom italic">#</span>
                      <span>{categoryName}</span>
                      <span className="text-[10px] uppercase font-bold bg-[#c5a059]/10 text-[#c5a059] px-2 py-0.5 rounded-md border border-[#c5a059]/20 font-sans ml-1">
                        {items.length} items
                      </span>
                    </h2>
                    <p className="text-gray-400 text-xs font-sans max-w-xl leading-relaxed">
                      {sectionDescriptions[categoryName] || "Freshly cooked to order with Guntur-spiced masalas."}
                    </p>
                  </div>
                  
                  {/* Vegetarian summary sign */}
                  <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold font-sans">
                    {categoryName.toLowerCase().includes('veg starters') || categoryName.toLowerCase().includes('veg. main course') || categoryName.toLowerCase().includes('tiffin menu') || categoryName.toLowerCase().includes('meals') || categoryName.toLowerCase().includes('veg. soups') ? '100% pure veg category' : 'Contains Non-Veg & Egg items'}
                  </span>
                </div>

                {/* Subcategory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-white/10 hover:shadow-xl transition-all duration-300 group"
                    >
                      
                      {/* Dish visual card top */}
                      {item.image ? (
                        <div className="relative">
                          <div className="h-44 bg-black overflow-hidden relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                              referrerPolicy="no-referrer"
                            />
                            {/* Gradient shade overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>

                          {/* Badges on top of card or image */}
                          <div className="absolute top-3 left-3 right-3 flex justify-between items-center gap-2 pointer-events-none">
                            {/* Veg logo square */}
                            <div className={`p-1 bg-[#121212] rounded-md border ${
                              item.isVegetarian 
                                ? 'border-green-500/30' 
                                : 'border-red-500/30'
                            }`}>
                              <div className={`w-2.5 h-2.5 rounded-full flex items-center justify-center border ${
                                item.isVegetarian 
                                  ? 'bg-green-500 border-green-400' 
                                  : 'bg-red-500 border-red-400'
                              }`} />
                            </div>

                            {/* Popular or Spicy tags */}
                            <div className="flex gap-1">
                              {item.isPopular && (
                                <span className="flex items-center gap-1 px-2 py-0.5 bg-[#c5a059] text-black font-extrabold text-[8px] uppercase rounded-md shadow-lg">
                                  <Star className="w-2.5 h-2.5 fill-black" />
                                  <span>Best Seller</span>
                                </span>
                              )}
                              {item.isSpicy && (
                                <span className="flex items-center gap-1 px-2 py-0.5 bg-red-950/80 text-red-400 border border-red-500/20 font-extrabold text-[8px] uppercase rounded-md shadow-lg">
                                  <Flame className="w-2.5 h-2.5 fill-current" />
                                  <span>Spicy</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {/* Content block */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          {!item.image && (
                            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                              {/* Veg logo square inline */}
                              <div className={`p-0.5 bg-black rounded border flex-shrink-0 ${
                                item.isVegetarian 
                                  ? 'border-green-500/30' 
                                  : 'border-red-500/30'
                              }`}>
                                <div className={`w-2 h-2 rounded-full border ${
                                  item.isVegetarian 
                                    ? 'bg-green-500 border-green-400' 
                                    : 'bg-red-500 border-red-400'
                                }`} />
                              </div>
                              {item.isPopular && (
                                <span className="flex items-center gap-0.5 px-1.5 py-0.5 bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 font-extrabold text-[8px] uppercase rounded-md">
                                  <Star className="w-2 h-2 fill-current" />
                                  <span>Best Seller</span>
                                </span>
                              )}
                              {item.isSpicy && (
                                <span className="flex items-center gap-0.5 px-1.5 py-0.5 bg-red-950/40 text-red-400 border border-red-500/20 font-extrabold text-[8px] uppercase rounded-md">
                                  <Flame className="w-2 h-2 fill-current" />
                                  <span>Spicy</span>
                                </span>
                              )}
                            </div>
                          )}
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-bold text-sm text-white group-hover:text-[#c5a059] transition-colors font-heading leading-snug">
                              {item.name}
                            </h3>
                            <span className="font-extrabold text-[#c5a059] text-sm font-sans whitespace-nowrap bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                              ₹{item.price}
                            </span>
                          </div>

                          <p className="text-gray-400 text-[11px] leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="pt-3.5 border-t border-white/5 flex items-center justify-start gap-1.5">
                          {item.tags?.slice(0, 3).map(t => (
                            <span key={t} className="text-[8px] font-bold text-gray-500 uppercase tracking-widest bg-black px-1.5 py-0.5 rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PDF Download Section */}
      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <div className="bg-gradient-to-br from-[#121212] to-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
            Group Travels & Catering Map
          </span>
          <h3 className="text-2xl sm:text-3xl font-light font-heading text-white">
            Need a PDF Copy of the <span className="italic font-serif-custom text-[#c5a059]">Complete Menu</span>?
          </h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed font-sans">
            Planning a pilgrimage tour with custom traveler buses, local corporate banquets, or big family gatherings? Download our beautifully formatted, 100% accurate print-friendly PDF menu sheet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 max-w-md mx-auto">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-7 py-3.5 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-extrabold rounded-xl transition-all text-[10px] uppercase tracking-wider cursor-pointer w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Menu</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-2 px-7 py-3.5 bg-black hover:bg-white/5 text-white border border-white/10 font-extrabold rounded-xl transition-all text-[10px] uppercase tracking-wider w-full sm:w-auto justify-center"
            >
              <span>Call For Group Bookings</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
