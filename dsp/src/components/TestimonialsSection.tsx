import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  review: string;
  rating: number;
  location: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(r => r.json())
      .then(data => { setTestimonials(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    setActiveIndex(clamped);
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[clamped] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 16, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.children[0] as HTMLElement)?.offsetWidth || 1;
    const idx = Math.round(el.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.max(0, Math.min(idx, testimonials.length - 1)));
  };

  if (loading) return null;

  return (
    <section style={{ background: '#f0f7f7' }} className="py-10 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header — compact single row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <span className="text-[#2d8485] text-[10px] font-bold uppercase tracking-[0.3em] mb-1 block">Client Stories</span>
            <h2 className="text-xl sm:text-2xl font-black text-[#0d2e2e] leading-tight">
              Moments They'll
              <span className="font-serif-display italic font-normal text-[#1f6b6c]"> Never Forget</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-9 h-9 rounded-full border border-[#d9eeee] bg-white flex items-center justify-center text-[#2d8485] hover:border-[#1f6b6c] hover:text-[#1f6b6c] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
              className="w-9 h-9 rounded-full border border-[#d9eeee] bg-white flex items-center justify-center text-[#2d8485] hover:border-[#1f6b6c] hover:text-[#1f6b6c] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll track */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="snap-start shrink-0 w-[80vw] sm:w-[340px] lg:w-[320px] bg-white border border-[#d9eeee] rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg hover:shadow-[#1f6b6c]/8 transition-all duration-300 group cursor-default"
              >
                {/* Top: quote icon + stars inline */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Quote size={20} className="text-[#b0d9d9] group-hover:text-[#4a9fa0] transition-colors shrink-0" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={11} className="fill-[#4a9fa0] text-[#4a9fa0]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#185455] text-[13px] leading-relaxed font-light line-clamp-4">{t.review}</p>
                </div>

                {/* Bottom: author */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#f0f7f7]">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1f6b6c 0%, #4a9fa0 100%)' }}
                  >
                    {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="text-[#0d2e2e] font-semibold text-xs leading-tight">{t.name}</p>
                    <p className="text-[#4a9fa0] text-[11px] mt-0.5">{t.service} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {testimonials.map((_t, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-5 h-1.5 bg-[#1f6b6c]'
                  : 'w-1.5 h-1.5 bg-[#b0d9d9] hover:bg-[#4a9fa0]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
