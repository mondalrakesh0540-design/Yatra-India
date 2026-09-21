import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye, MapPin, Sparkles } from 'lucide-react';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'Mountains', 'Beaches', 'Heritage', 'Wildlife', 'Culture', 'Offbeat'];

  const photos = [
    { id: 1, title: 'Monks at Thiksey Monastery', location: 'Leh, Ladakh', category: 'Culture', url: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80' },
    { id: 2, title: 'Houseboat on Dal Lake at Sunrise', location: 'Srinagar, J&K', category: 'Mountains', url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80' },
    { id: 3, title: 'Radhanagar White Coral Beach', location: 'Havelock, Andaman', category: 'Beaches', url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80' },
    { id: 4, title: 'Amber Fort Elephant Ramparts', location: 'Jaipur, Rajasthan', category: 'Heritage', url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80' },
    { id: 5, title: 'Bengal Tiger on Prowl', location: 'Ranthambore NP', category: 'Wildlife', url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80' },
    { id: 6, title: 'Living Root Bridge', location: 'Nongriat, Meghalaya', category: 'Offbeat', url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80' },
    { id: 7, title: 'Emerald Tea Hills of Munnar', location: 'Munnar, Kerala', category: 'Mountains', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80' },
    { id: 8, title: 'Hampi Ruins at Sunset', location: 'Hampi, Karnataka', category: 'Heritage', url: 'https://images.unsplash.com/photo-1600100397608-f010f443bbf6?auto=format&fit=crop&w=1200&q=80' },
    { id: 9, title: 'Ganga Aarti Ceremony', location: 'Varanasi, UP', category: 'Culture', url: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80' },
    { id: 10, title: 'Taj Mahal at Dawn', location: 'Agra, UP', category: 'Heritage', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80' },
    { id: 11, title: 'Pangong Lake Azure Shore', location: 'Ladakh', category: 'Mountains', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80' },
    { id: 12, title: 'Backwaters of Alleppey', location: 'Alappuzha, Kerala', category: 'Offbeat', url: 'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=1200&q=80' },
    { id: 13, title: 'Golden Temple Reflection', location: 'Amritsar, Punjab', category: 'Culture', url: 'https://images.unsplash.com/photo-1514222709925-d39ced736370?auto=format&fit=crop&w=1200&q=80' },
    { id: 14, title: 'Calangute Sunset Beach', location: 'Goa', category: 'Beaches', url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80' },
    { id: 15, title: 'One-Horned Rhino', location: 'Kaziranga NP, Assam', category: 'Wildlife', url: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=1200&q=80' },
    { id: 16, title: 'Spiti Valley Moonscape', location: 'Spiti, HP', category: 'Offbeat', url: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80' },
  ];

  const filteredPhotos = selectedCategory === 'All' ? photos : photos.filter((p) => p.category === selectedCategory);

  const navigateLightbox = (dir) => {
    setActiveImageIndex((prev) => {
      if (prev === null) return 0;
      const next = prev + dir;
      if (next < 0) return filteredPhotos.length - 1;
      if (next >= filteredPhotos.length) return 0;
      return next;
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Camera className="w-3.5 h-3.5" />
          <span>Visual Odyssey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          India Through the Lens
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          A breathtaking visual journey — from the snow-capped Himalayas to tropical shores, ancient forts to living forests.
        </p>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setActiveImageIndex(null); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                  : 'bg-navy-900 border border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid — varied heights for masonry feel */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setActiveImageIndex(index)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 shadow-glass break-inside-avoid mb-4"
            style={{ display: 'inline-block', width: '100%' }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              loading="lazy"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ minHeight: '160px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Eye icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-3 rounded-full bg-saffron-500/90 text-white shadow-lg backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
            </div>

            {/* Photo caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-1 text-[10px] font-bold text-saffron-400 uppercase tracking-wider mb-0.5">
                <MapPin className="w-2.5 h-2.5" />
                {photo.location}
              </span>
              <h4 className="text-xs font-bold text-white font-serif truncate">{photo.title}</h4>
            </div>

            {/* Category Badge */}
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-slate-300 border border-white/10">
              {photo.category}
            </span>
          </div>
        ))}
      </div>

      {/* View count indicator */}
      <p className="text-center text-xs text-slate-500 mt-6">
        Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} • Click any photo to view fullscreen
      </p>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/97 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-saffron-500 text-white transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-saffron-500 text-white transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Photo Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {activeImageIndex + 1} / {filteredPhotos.length}
          </span>

          <div
            className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[activeImageIndex]?.url}
              alt={filteredPhotos[activeImageIndex]?.title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-5 space-y-1">
              <h3 className="text-xl font-bold font-serif text-white">
                {filteredPhotos[activeImageIndex]?.title}
              </h3>
              <p className="text-xs text-saffron-400 flex items-center justify-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {filteredPhotos[activeImageIndex]?.location}
                <span className="text-slate-500">•</span>
                <Sparkles className="w-3 h-3 text-amber-400" />
                {filteredPhotos[activeImageIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
