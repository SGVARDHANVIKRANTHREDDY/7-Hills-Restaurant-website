import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, Filter, ThumbsUp, CheckCircle, PenTool } from 'lucide-react';
import { Review } from '../types';
import { REVIEWS } from '../data/restaurantData';

export default function ReviewsView() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');
  
  // Review Form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Filter reviews
  const filteredReviews = useMemo(() => {
    if (selectedRatingFilter === 'all') {
      return reviewsList;
    }
    return reviewsList.filter((r) => r.rating === selectedRatingFilter);
  }, [reviewsList, selectedRatingFilter]);

  // Aggregate statistics
  const stats = useMemo(() => {
    const total = reviewsList.length;
    const ratingsSum = reviewsList.reduce((acc, r) => acc + r.rating, 0);
    const avg = total > 0 ? (ratingsSum / total).toFixed(1) : "0.0";
    
    // Star counts
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsList.forEach((r) => {
      const ratingKey = r.rating as 5|4|3|2|1;
      if (counts[ratingKey] !== undefined) {
        counts[ratingKey]++;
      }
    });

    return { total, avg, counts };
  }, [reviewsList]);

  // Handle Form Submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!newAuthor.trim() || !newText.trim()) {
      setErrorMessage('Please fill in both your name and review comments.');
      return;
    }

    // Colors for avatars
    const colors = [
      'bg-red-600', 'bg-green-600', 'bg-blue-600', 'bg-yellow-600', 
      'bg-purple-600', 'bg-pink-600', 'bg-indigo-600', 'bg-[#c5a059]'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Initials
    const initials = newAuthor
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    const createdReview: Review = {
      id: `custom-review-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      text: newText,
      date: new Date().toISOString().split('T')[0],
      relativeTime: 'Just now',
      initials: initials || 'G',
      avatarBg: randomColor
    };

    setReviewsList((prev) => [createdReview, ...prev]);
    setIsSubmitSuccessful(true);
    
    // Clear inputs
    setNewAuthor('');
    setNewText('');
    setNewRating(5);

    setTimeout(() => {
      setIsSubmitSuccessful(false);
    }, 5000);
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen pb-24 font-sans">
      
      {/* Page Header */}
      <section className="relative py-16 bg-[#0a0a0a] text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/5 via-[#c5a059]/10 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 px-3.5 py-1.5 rounded-md border border-[#c5a059]/20">
            Real Diners, Real Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-light font-heading tracking-tight text-white">
            Guest <span className="italic font-serif-custom text-[#c5a059]">Experiences</span>
          </h1>
          <p className="text-gray-400 text-xs max-w-2xl mx-auto leading-relaxed">
            See why pilgrims, local families, and travelers consistently rate 7 Hills as an exceptional dining destination in Tirupati.
          </p>
        </div>
      </section>

      {/* Statistics Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Aggregate Left Box */}
          <div className="lg:col-span-4 bg-[#121212] p-8 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-center items-center text-center">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              Google Maps Rating
            </h3>
            <span className="text-6xl font-light text-white font-heading">
              {stats.avg}
            </span>
            <div className="flex text-[#c5a059] text-2xl my-2.5">
              ★★★★★
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Based on <strong className="text-white">447 reviews</strong> left by verified guests. Consistent praise for fast service & budget value.
            </p>
          </div>

          {/* Star breakdowns middle Box */}
          <div className="lg:col-span-4 bg-[#121212] p-8 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 text-center lg:text-left">
              Star Distribution
            </h3>
            <div className="space-y-2.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = stats.counts[star as 5|4|3|2|1];
                const pct = stats.total > 0 ? (count / stats.total) * 100 : 0;
                return (
                  <button
                    key={star}
                    onClick={() => setSelectedRatingFilter(star)}
                    className="flex items-center gap-3 w-full hover:bg-white/5 p-1.5 rounded-lg transition-colors cursor-pointer text-left"
                  >
                    <span className="text-xs font-bold font-sans text-gray-300 w-3 shrink-0">{star}</span>
                    <span className="text-[#c5a059] text-xs shrink-0">★</span>
                    <div className="flex-grow h-2 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-[#c5a059] rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-[11px] text-gray-500 w-6 text-right font-bold">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prompt action right Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#121212] to-black text-[#e5e5e5] p-8 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c5a059]/10 text-[#c5a059] border border-[#c5a059]/20 px-2.5 py-1 rounded-md">
                Share Your Opinion
              </span>
              <h3 className="text-xl font-light text-white font-heading mt-2">
                Had a Meal With Us?
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-sans">
                Whether you enjoyed our aromatic chicken biryani, crispy golden masala dosa, or standard service, we value your support. Write a review below to let us know!
              </p>
            </div>
            <a
              href="#review-form-anchor"
              className="mt-6 flex items-center justify-center gap-2 py-3 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-extrabold text-xs rounded-full transition-all uppercase tracking-wide cursor-pointer"
            >
              <PenTool className="w-4 h-4" />
              <span>Scroll to Write Review</span>
            </a>
          </div>

        </div>
      </section>

      {/* Star Filtering List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h3 className="font-light text-xl text-white font-heading">
            Diner Reviews <span className="text-xs text-gray-400 font-sans ml-2">({filteredReviews.length} shown)</span>
          </h3>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedRatingFilter}
              onChange={(e) => setSelectedRatingFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="bg-[#121212] border border-white/10 text-[#e5e5e5] rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-[#c5a059] cursor-pointer"
            >
              <option value="all">Show All Ratings</option>
              <option value="5">5-Star Only</option>
              <option value="4">4-Star Only</option>
              <option value="3">3-Star Only</option>
            </select>
          </div>
        </div>

        {/* Grid Reviews display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review) => (
              <motion.div
                layout
                key={review.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#121212] p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 shadow-sm group"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#c5a059] text-sm">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {Array.from({ length: 5 - review.rating }).map((_, i) => (
                        <span key={i} className="text-gray-700">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold font-sans">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed italic font-sans">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer block */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-[#e5e5e5]">{review.author}</h4>
                      <span className="text-[10px] text-gray-500 block">{review.relativeTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-[#c5a059] cursor-pointer bg-[#c5a059]/10 hover:bg-[#c5a059]/20 px-2.5 py-1 rounded-md border border-[#c5a059]/20">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Helpful</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* WRITE A REVIEW FORM */}
      <section className="max-w-3xl mx-auto px-4 mt-20" id="review-form-anchor">
        <div className="bg-[#121212] p-8 rounded-3xl border border-white/10 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-light font-heading text-white">
              Write Your Guest <span className="italic font-serif-custom text-[#c5a059]">Experience</span>
            </h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
              Your feedback is displayed instantly below. Let other diners and pilgrims know about your culinary visit!
            </p>
          </div>

          {/* Success Dialog */}
          <AnimatePresence>
            {isSubmitSuccessful && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-green-500/10 text-green-400 border border-green-500/20 p-4 rounded-xl flex items-center gap-3 text-xs font-bold"
              >
                <CheckCircle className="w-5 h-5 shrink-0" />
                <div>
                  <span className="block">Review Posted Successfully!</span>
                  <span className="text-[10px] text-gray-400 font-medium font-sans">Your comment is loaded in the dynamic reviews section above. Thank you.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmitReview} className="space-y-4">
            {errorMessage && (
              <p className="text-xs font-bold text-red-400 bg-red-950/20 p-3 rounded-xl border border-red-500/20">{errorMessage}</p>
            )}

            {/* Author Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                Your Full Name:
              </label>
              <input
                type="text"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                placeholder="Ramesh Kumar / Deepika Reddy"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-[#c5a059] text-xs transition-all font-sans"
              />
            </div>

            {/* Rating Star Selection */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                Your Rating (1 - 5 Stars):
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className="p-1 text-2xl transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                  >
                    <span className={star <= newRating ? 'text-[#c5a059]' : 'text-gray-700'}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Review text */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-[#c5a059] uppercase tracking-wider">
                Your Review Message:
              </label>
              <textarea
                rows={4}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Write your detailed dining experience. Talk about our biryani, dosa, or professional staff service..."
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-600 rounded-xl focus:outline-none focus:border-[#c5a059] text-xs transition-all font-sans"
              ></textarea>
            </div>

            {/* Action submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#c5a059] hover:bg-[#c5a059]/90 text-black font-extrabold rounded-xl transition-all uppercase text-xs tracking-wider cursor-pointer shadow-lg shadow-black/30"
            >
              Post Live Review
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
