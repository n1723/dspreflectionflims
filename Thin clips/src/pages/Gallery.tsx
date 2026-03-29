import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Wedding', 'Baby', 'Events', 'Engagement', 'Vehicle', 'Private'];

const allImages = [
  { src: '/images/gallery-1.jpg', category: 'Wedding', title: 'Wedding Ceremony' },
  { src: '/images/gallery-2.jpg', category: 'Engagement', title: 'Golden Hour Couple' },
  { src: '/images/gallery-3.jpg', category: 'Baby', title: 'Newborn Joy' },
  { src: '/images/gallery-4.jpg', category: 'Vehicle', title: 'Sports Car' },
  { src: '/images/gallery-5.jpg', category: 'Events', title: 'Birthday Celebration' },
  { src: '/images/gallery-6.jpg', category: 'Engagement', title: 'Romantic Portrait' },
  { src: '/images/gallery-7.jpg', category: 'Private', title: 'Lifestyle Shoot' },
  { src: '/images/gallery-8.jpg', category: 'Wedding', title: 'Reception Dance' },
  { src: '/images/gallery-9.jpg', category: 'Vehicle', title: 'Motorcycle' },
  { src: '/images/hero-wedding.jpg', category: 'Wedding', title: 'Bride Portrait' },
  { src: '/images/hero-baby.jpg', category: 'Baby', title: 'Newborn Wrapped' },
  { src: '/images/hero-engagement.jpg', category: 'Engagement', title: 'Sunset Silhouette' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const filtered = activeCategory === 'All' ? allImages : allImages.filter(img => img.category === activeCategory);

  return (
    <div className="" style={{ background: '#fdfcf8' }}>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#071a1a' }}>
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #4a9fa0 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#4a9fa0] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Every Frame,
              <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> A Masterpiece</span>
            </h1>
            <p className="text-[#4a9fa0] text-xl max-w-2xl mx-auto font-light">
              Browse our curated collection of photography work across Bangalore and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 md:top-20 z-30 py-4 border-b border-[#d9eeee] shadow-sm"
        style={{ background: 'rgba(253,252,248,0.97)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1f6b6c] text-white shadow-md shadow-[#1f6b6c]/20'
                    : 'bg-[#f0f7f7] text-[#2d8485] hover:bg-[#d9eeee] border border-[#d9eeee]'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12" style={{ background: '#f0f7f7' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div key={img.src + img.category} layout
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid mb-4 group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#0d2e2e]/12 transition-all duration-300 border border-[#d9eeee]"
                  onClick={() => setLightbox({ src: img.src, title: img.title })}>
                  <img src={img.src} alt={img.title} loading="lazy"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#071a1a]/0 group-hover:bg-[#071a1a]/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={30} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(7,26,26,0.75) 0%, transparent 100%)' }}>
                    <p className="text-white text-xs font-semibold">{img.title}</p>
                    <p className="text-[#7bbebe] text-xs">{img.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(7,26,26,0.97)' }}
            onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ background: 'rgba(45,132,133,0.25)' }}
              onClick={() => setLightbox(null)}>
              <X size={22} />
            </button>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              className="max-w-5xl max-h-[90vh] w-full"
              onClick={e => e.stopPropagation()}>
              <img src={lightbox.src} alt={lightbox.title}
                className="w-full h-full object-contain rounded-2xl max-h-[85vh]" />
              <p className="text-[#4a9fa0] text-center text-sm mt-4">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
