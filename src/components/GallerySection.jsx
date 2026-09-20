import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, X, Compass, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const categories = ['All', 'Mountains', 'Beaches', 'Heritage', 'Wildlife', 'Culture', 'Offbeat'];

  const photos = [
    {
      id: 1,
      title: 'Monks at Thiksey Monastery, Ladakh',
      location: 'Leh, Ladakh',
      category: 'Culture',
      url: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Houseboat on Dal Lake at Sunrise',
      location: 'Srinagar, Jammu & Kashmir',
      category: 'Mountains',
      url: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Radhanagar White Coral Beach',
      location: 'Havelock, Andaman & Nicobar',
      category: 'Beaches',
      url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Amber Fort Elephant Ramparts',
      location: 'Jaipur, Rajasthan',
      category: 'Heritage',
      url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 5,
      title: 'Mighty Bengal Tiger on Prowl',
      location: 'Ranthambore National Park',
      category: 'Wildlife',
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 6,
      title: 'Double Decker Living Root Bridge',
      location: 'Nongriat, Meghalaya',
      category: 'Offbeat',
      url: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 7,
      title: 'Emerald Rolling Hills of Tea',
      location: 'Munnar, Kerala',
      category: 'Mountains',
      url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 8,
      title: 'Sunset over Matanga Hill Boulders',
      location: 'Hampi, Karnataka',
      category: 'Heritage',
      url: 'https://images.unsplash.com/photo-1600100397608-f010f443bbf6?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const filteredPhotos = photos.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-saffron-500/20">
          <Camera className="w-3.5 h-3.5" />
          <span>Visual Odyssey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4">
          India Through Your Eyes
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          A high-resolution visual celebration of the subcontinent’s dramatic landscapes, wildlife encounters, and timeless human rituals.
        </p>

        {/* Categories Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
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

      {/* Masonry-Style Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setActiveImageIndex(index)}
            className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-glass transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={photo.url}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-3 rounded-full bg-saffron-500/90 text-white shadow-lg backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-saffron-400 uppercase tracking-wider block">
                {photo.location}
              </span>
              <h4 className="text-xs font-bold text-white font-serif truncate">
                {photo.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[activeImageIndex].url}
              alt={filteredPhotos[activeImageIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center mt-4">
              <h3 className="text-lg font-bold font-serif text-white">
                {filteredPhotos[activeImageIndex].title}
              </h3>
              <p className="text-xs text-saffron-400 mt-0.5">
                {filteredPhotos[activeImageIndex].location} • {filteredPhotos[activeImageIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
