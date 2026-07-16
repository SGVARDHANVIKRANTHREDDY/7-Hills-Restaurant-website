import React from 'react';
import { ShieldCheck, Calendar, Lock, Globe } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function PrivacyView() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-24 font-sans">
      
      {/* Banner */}
      <section className="relative py-16 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <ShieldCheck className="w-12 h-12 text-[#c5a059] mx-auto" />
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white">
            Privacy <span className="italic font-serif-custom text-[#c5a059]">Policy</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed">
            Your trust is our highest priority. Read how we protect and manage guest details.
          </p>
        </div>
      </section>

      {/* Main text content container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-[#121212] p-8 md:p-12 rounded-3xl border border-white/10 shadow-sm space-y-8 text-xs text-gray-300 leading-relaxed font-sans">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/5 pb-4">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <Calendar className="w-4 h-4 text-[#c5a059]" />
              <span>Effective Date: July 10, 2026</span>
            </span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              7 Hills Restaurant AC / Non AC
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light text-white font-heading flex items-center gap-2">
              <span className="p-1.5 bg-[#c5a059]/10 text-[#c5a059] rounded-md border border-[#c5a059]/20 text-xs font-bold font-sans">1</span>
              <span>Information We Collect</span>
            </h3>
            <p>
              When you interact with our website (either by filling out our Contact Form or posting a live review in our dynamic guest reviews board), we collect personal variables provided explicitly by you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Form:</strong> Your full name, email address, and the contents of your questions.</li>
              <li><strong>Reviews Form:</strong> Your name, star rating score, and review descriptions.</li>
              <li><strong>Automatic details:</strong> This static website does not run tracking cookies. However, standard anonymized server logs may store basic web addresses and routing data to optimize performance.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light text-white font-heading flex items-center gap-2">
              <span className="p-1.5 bg-[#c5a059]/10 text-[#c5a059] rounded-md border border-[#c5a059]/20 text-xs font-bold font-sans">2</span>
              <span>How We Use Your Information</span>
            </h3>
            <p>
              The details you share with 7 Hills Restaurant are exclusively applied for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding directly to your dining queries, catering requests, or parking-space checks.</li>
              <li>Displaying your reviews transparently on our guest experience board to assist other pilgrims.</li>
              <li>Ensuring safe network transactions and reducing spam inside our website blocks.</li>
            </ul>
            <p>
              We are strictly a family-run diner. We <strong className="text-white font-semibold">never sell, rent, or trade</strong> your personal email address or information to third-party advertisers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light text-white font-heading flex items-center gap-2">
              <span className="p-1.5 bg-[#c5a059]/10 text-[#c5a059] rounded-md border border-[#c5a059]/20 text-xs font-bold font-sans">3</span>
              <span>Security Practices</span>
            </h3>
            <p className="flex items-start gap-2 bg-black p-4 rounded-xl border border-white/5">
              <Lock className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
              <span>
                To secure our visitor data, this website runs strictly under encrypted <strong className="text-white font-semibold font-sans">HTTPS (SSL)</strong> channels. Any submission forms or local states are safeguarded with sanitization routines to block malicious script injections.
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light text-white font-heading flex items-center gap-2">
              <span className="p-1.5 bg-[#c5a059]/10 text-[#c5a059] rounded-md border border-[#c5a059]/20 text-xs font-bold font-sans">4</span>
              <span>Third-Party Embed Services</span>
            </h3>
            <p>
              Our website links directly to third-party entities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Maps:</strong> We embed Google Map frame widgets on our landing and contact pages. These are bound under standard Google Inc. privacy terms, which may log coordinates or click history if you are logged into your Google Account.</li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/5">
            <h3 className="text-md font-semibold text-white">Contact Our Privacy Manager:</h3>
            <p className="text-gray-400 text-xs">
              If you wish to request the deletion of your custom reviews, or have any other questions about this statement, please reach out to us:
            </p>
            <div className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5 w-fit text-white space-y-1">
              <span className="block font-semibold">7 Hills Restaurant AC / Non AC</span>
              <span className="block text-xs font-normal text-gray-400 font-sans">{RESTAURANT_INFO.address}</span>
              <span className="block text-xs font-normal text-gray-500 font-sans">Email: {RESTAURANT_INFO.email}</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
