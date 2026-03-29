import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Award, Camera, Users } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialsSection from '../components/TestimonialsSection';
import LeadForm from '../components/LeadForm';
import { SERVICES, WHATSAPP_URL } from '../lib/constants';

const stats = [
  { icon: Camera, value: '500+', label: 'Sessions Shot' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
  { icon: Award, value: '5+', label: 'Years Experience' },
];

const WA_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-x-hidden" style={{ background: '#fdfcf8' }}>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src="/images/hero-main.jpg" alt="ThinClipCaptures - Premium Photography Bangalore"
            className="w-full h-full object-cover object-top" />
          {/* Cool blue-teal cinematic overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(7,26,26,0.82) 0%, rgba(13,46,46,0.60) 55%, rgba(31,107,108,0.25) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,26,0.70) 0%, transparent 60%)' }} />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
          <motion.div initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>

            {/* Brand wordmark */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 leading-none"
            >
              <span
                className="block font-black tracking-tighter"
                style={{
                  fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                  lineHeight: 0.88,
                  background: 'linear-gradient(110deg, #ffffff 0%, #b0d9d9 45%, #4a9fa0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Thin
              </span>
              <span
                className="block font-black tracking-tighter"
                style={{
                  fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                  lineHeight: 0.88,
                  background: 'linear-gradient(110deg, #7bbebe 0%, #2d8485 55%, #1f6b6c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Clips
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-6">
              Capture Moments
              <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> That Matter</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
              Bangalore's most trusted photography studio — crafting cinematic memories for weddings, families, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#1f6b6c] hover:bg-[#185455] text-white font-bold rounded-full shadow-2xl shadow-[#1f6b6c]/40 hover:shadow-[#1f6b6c]/60 hover:scale-105 transition-all duration-300 text-[15px]">
                <WA_ICON /> Book via WhatsApp
              </a>
              <Link to="/gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-[15px]">
                <Play size={16} /> View Portfolio
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-white border-b border-[#d9eeee]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <stat.icon size={26} className="text-[#2d8485] mx-auto mb-3" />
                <div className="text-3xl font-black text-[#0d2e2e] mb-1">{stat.value}</div>
                <div className="text-sm text-[#4a9fa0] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: '#f0f7f7' }} className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">What We Shoot</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d2e2e] mb-4">
              Every Story,
              <span className="font-serif-display italic font-normal text-[#1f6b6c]"> Beautifully Told</span>
            </h2>
            <p className="text-[#4a9fa0] max-w-xl mx-auto text-lg font-light">From intimate moments to grand celebrations — we specialize in capturing life's most meaningful chapters.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {SERVICES.map((service, i) => <ServiceCard key={service.id} {...service} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#1f6b6c] text-[#1f6b6c] font-semibold rounded-full hover:bg-[#1f6b6c] hover:text-white transition-all duration-300">
              View All Services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12">
            <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d2e2e] mb-4">A Glimpse of Our Portfolio</h2>
            <p className="text-[#4a9fa0] max-w-lg mx-auto font-light">Each image is a story. Each frame, a feeling. Explore a selection of our finest work.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {['/images/gallery-1.jpg','/images/gallery-2.jpg','/images/gallery-8.jpg','/images/gallery-4.jpg','/images/gallery-6.jpg','/images/gallery-9.jpg'].map((src, i) => (
              <motion.div key={src} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`overflow-hidden rounded-2xl group cursor-pointer ${i === 0 || i === 4 ? 'row-span-2' : ''}`}>
                <img src={src} alt={`ThinClipCaptures portfolio ${i + 1}`} loading="lazy"
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i === 0 || i === 4 ? 'h-full min-h-[400px]' : 'h-52 md:h-64'
                  }`} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0d2e2e] text-white font-semibold rounded-full hover:bg-[#185455] transition-all duration-300">
              View Full Gallery <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl shadow-[#0d2e2e]/15">
                <img src="/images/about-hero.jpg" alt="ThinClipCaptures team" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,26,0.45) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-[#0d2e2e]/10 p-6 border border-[#d9eeee]">
                <div className="text-3xl font-black text-[#0d2e2e]">5+</div>
                <div className="text-sm text-[#4a9fa0]">Years of Excellence</div>
                <div className="text-xs text-[#2d8485] font-semibold mt-1">in Bangalore</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0d2e2e] mb-6 leading-tight">
                Born from a Passion
                <span className="font-serif-display italic font-normal text-[#1f6b6c]"> for Light</span>
              </h2>
              <p className="text-[#185455] text-lg leading-relaxed mb-6 font-light">
                ThinClipCaptures was founded in Bangalore with a singular mission: to create photographs that don't just look beautiful — they <em>feel</em> beautiful.
              </p>
              <p className="text-[#4a9fa0] leading-relaxed mb-8 font-light">
                With 5+ years of experience and 300+ satisfied clients across Bangalore, we've built a reputation for cinematic quality, emotional depth, and flawless delivery.
              </p>
              <Link to="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1f6b6c] text-white font-bold rounded-full shadow-lg shadow-[#1f6b6c]/20 hover:bg-[#185455] hover:scale-105 transition-all duration-300">
                Our Story <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#071a1a' }}>
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-wedding.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        {/* Teal gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,26,26,0.97) 0%, rgba(31,107,108,0.15) 100%)' }} />
        {/* Decorative circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #4a9fa0 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-[#4a9fa0] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">Book a Session</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Create
                <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> Something Beautiful?</span>
              </h2>
              <p className="text-[#4a9fa0] text-lg leading-relaxed mb-8 font-light">
                Tell us about your vision. We'll craft a custom package that fits your story, your budget, and your timeline. Based in Bangalore, available across Karnataka.
              </p>
              <div className="flex flex-col gap-3">
                {['Free consultation call', 'Custom package pricing', 'Fast response within 2 hours', 'Flexible scheduling'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1f6b6c]/40 border border-[#2d8485]/50 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7bbebe]" />
                    </div>
                    <span className="text-[#7bbebe] text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 border border-[#1f6b6c]/50 backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <h3 className="text-white font-bold text-xl mb-6">Get a Free Quote</h3>
              <LeadForm dark />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
