import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Car, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';

export default function ContactView() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("f1"); // pre-open first FAQ
  
  // Contact Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [formError, setFormError] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError('Please fill in all form fields before submitting.');
      return;
    }

    if (!email.includes('@')) {
      setFormError('Please provide a valid email address.');
      return;
    }

    // Simulate success
    setIsSubmitSuccessful(true);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setIsSubmitSuccessful(false);
    }, 6000);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-24 font-sans">
      
      {/* Banner */}
      <section className="relative py-16 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
            Visit or Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white">
            Contact 7 Hills <span className="italic font-serif-custom text-[#c5a059]">Restaurant</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed">
            Conveniently located on Tiruchanoor Road. Speak directly to our professional staff or plan your driving route with ease.
          </p>
        </div>
      </section>

      {/* SECTION 1: MAP AND DIRECTIONS DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Map Embed Card */}
          <div className="lg:col-span-7 bg-[#121212] p-6 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-between space-y-4">
            <div className="w-full h-[380px] rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                title="7 Hills Interactive Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0601550711684!2d79.4790802!3d13.6596132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4939ee83c6c9%3A0x35ed100a508b68ad!2s7%20Hills%20Restaurant%20AC%2F%20Non%20AC!5e0!3m2!1sen!2sin!4v1716301234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-semibold pt-2 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-gray-300">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Revenue Colony, Tiruchanoor Road, Tirupati</span>
              </span>
              <a
                href="https://www.google.com/maps/place/7+Hills+Restaurant+AC%2F+Non+AC/@13.6596132,79.4790802,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a059] flex items-center gap-1.5 hover:underline font-sans"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Directions Info */}
          <div className="lg:col-span-5 bg-[#121212] p-8 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-light text-white font-heading border-b border-white/5 pb-3">
                Location Guidelines
              </h3>
              
              <ul className="space-y-4 text-xs text-gray-300 leading-relaxed font-sans">
                <li className="flex gap-2.5">
                  <span className="text-brand-red text-base font-bold">📍</span>
                  <div>
                    <strong className="text-[#c5a059] block">Key Landmarks:</strong>
                    <span>Opposite Revenue Colony arch, near major pilgrim bypass routes on Tiruchanoor Road.</span>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-brand-green text-base font-bold">🚘</span>
                  <div>
                    <strong className="text-[#c5a059] block">Parking Spaces:</strong>
                    <span>Complimentary client-only front parking slots. Fully monitored, big enough for multi-seat traveler vans and SUVs.</span>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-brand-red text-base font-bold">♿</span>
                  <div>
                    <strong className="text-[#c5a059] block">Wheelchair Accessibility:</strong>
                    <span>Fully level ground-floor step-free access and spacious walkways designed for older pilgrim groups.</span>
                  </div>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-brand-green text-base font-bold">🕒</span>
                  <div>
                    <strong className="text-[#c5a059] block">Flexible Hours:</strong>
                    <span>Daily 5:00 AM to 11:00 PM. Serving breakfast from 5:00 AM. Lunch starts at 11:30 AM, dinner runs late.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 w-full py-3.5 bg-[#c5a059] text-black text-xs font-bold rounded-full hover:bg-[#c5a059]/90 transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CONTACT FORM & ACCORDION FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion Left Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#c5a059] uppercase tracking-widest bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20 inline-block">
                Common Questions
              </span>
              <h3 className="text-2xl font-light text-white font-heading">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-400 text-xs">
                Quick answers regarding catering, dietary restrictions, separate kitchen practices, and hours.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-[#121212] rounded-2xl border border-white/5 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-white text-sm font-heading flex items-center gap-2">
                        <HelpCircle className="w-4.5 h-4.5 text-[#c5a059] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-[#c5a059]" /> : <ChevronDown className="w-4 h-4 text-[#c5a059]" />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-5 pt-1 text-xs text-gray-400 leading-relaxed font-sans border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Message Form Right Panel */}
          <div className="lg:col-span-6 bg-[#121212] p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-light font-heading text-white">
                Drop Us A <span className="italic font-serif-custom text-[#c5a059]">Message</span>
              </h3>
              <p className="text-xs text-gray-400">
                Have an inquiry about large pilgrim groupings or catering? Send us a quick note below.
              </p>
            </div>

            {/* Success dialogue popup */}
            <AnimatePresence>
              {isSubmitSuccessful && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-500/10 text-green-400 border border-green-500/20 p-4 rounded-xl flex items-center gap-3 text-xs font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="block">Message Sent Successfully!</span>
                    <span className="text-[10px] text-gray-400 font-medium font-sans">Our restaurant managers will respond to your registered email address within 24 hours.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSendMessage} className="space-y-4">
              {formError && (
                <p className="text-xs font-bold text-red-400 bg-red-950/20 p-3 rounded-xl border border-red-500/20">{formError}</p>
              )}

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                  Your Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul S."
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-[#c5a059] text-xs transition-all font-sans"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                  Your Email Address:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-[#c5a059] text-xs transition-all font-sans"
                />
              </div>

              {/* Message body */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                  Your Message:
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask us anything about food preparation, travel bus parking space, or catering..."
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-[#c5a059] text-xs transition-all font-sans"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-extrabold rounded-xl transition-all uppercase text-xs tracking-wider cursor-pointer shadow-lg shadow-black/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
