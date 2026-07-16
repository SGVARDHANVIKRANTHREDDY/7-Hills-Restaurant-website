import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import AboutView from './components/AboutView';
import GalleryView from './components/GalleryView';
import ReviewsView from './components/ReviewsView';
import ContactView from './components/ContactView';
import PrivacyView from './components/PrivacyView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle browser back/forward buttons or hash changes if user uses standard URL routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'menu', 'about', 'gallery', 'reviews', 'contact', 'privacy'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update hash when page state changes
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={handlePageChange} />;
      case 'menu':
        return <MenuView />;
      case 'about':
        return <AboutView />;
      case 'gallery':
        return <GalleryView />;
      case 'reviews':
        return <ReviewsView />;
      case 'contact':
        return <ContactView />;
      case 'privacy':
        return <PrivacyView />;
      default:
        return <HomeView setCurrentPage={handlePageChange} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#e5e5e5] selection:bg-[#c5a059] selection:text-black">
      
      {/* Dynamic Header */}
      <Header currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Main Page Area with page transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <Footer setCurrentPage={handlePageChange} />

    </div>
  );
}
