import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Camera, Heart, Star, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

const values = [
  { icon: Camera, title: 'Artistic Vision', desc: 'Every shot is composed with a filmmaker\'s eye — light, angle, emotion, story.' },
  { icon: Heart, title: 'Emotional Depth', desc: 'We don\'t just photograph moments. We capture the feeling behind them.' },
  { icon: Award, title: 'Uncompromising Quality', desc: 'Professional-grade equipment, meticulous editing, relentless pursuit of perfection.' },
  { icon: Star, title: 'Client-First Always', desc: 'Your comfort, vision, and satisfaction are at the center of everything we do.' },
];

const milestones = [
  { year: '2019', event: 'Founded ThinClipCaptures in Bangalore' },
  { year: '2020', event: 'First 100 wedding sessions completed' },
  { year: '2021', event: 'Expanded to vehicle & commercial photography' },
  { year: '2022', event: 'Reached 200+ happy clients milestone' },
  { year: '2023', event: 'Launched private & lifestyle shoot packages' },
  { year: '2024', event: '300+ clients, 4.9★ average rating' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden" style={{ background: '#fdfcf8' }}>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#071a1a' }}>
        <div className="absolute inset-0 opacity-15">
          <img src="/images/about-hero.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(7,26,26,0.95) 0%, rgba(31,107,108,0.20) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#4a9fa0] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              We Are
              <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> ThinClip</span>
              <br />Captures
            </h1>
            <p className="text-[#4a9fa0] text-xl max-w-2xl leading-relaxed font-light">
              Bangalore's premium photography studio — where every frame is a feeling, every session a story, and every client a lifelong memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">The Beginning</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0d2e2e] mb-6">
                A Camera, A Dream,
                <span className="font-serif-display italic font-normal text-[#1f6b6c]"> A City</span>
              </h2>
              <p className="text-[#185455] text-lg leading-relaxed mb-6 font-light">
                ThinClipCaptures was born in 2019 from a simple belief: that every person's story deserves to be told beautifully. What started as a passion project in Bangalore's vibrant streets has grown into one of the city's most trusted photography studios.
              </p>
              <p className="text-[#4a9fa0] leading-relaxed mb-6 font-light">
                We've had the privilege of capturing over 500 sessions — from intimate baby showers in Jayanagar to grand weddings in Whitefield, from sleek car shoots in Electronic City to cinematic lifestyle sessions across Bangalore's most beautiful locations.
              </p>
              <p className="text-[#4a9fa0] leading-relaxed font-light">
                Our approach is simple: listen deeply, plan meticulously, and shoot with your heart. The result? Images that don't just look beautiful — they <em>feel</em> like the moment itself.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-[#0d2e2e]/15 aspect-[4/5]">
                <img src="/images/about-hero.jpg" alt="ThinClipCaptures photographer" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 rounded-2xl p-6 shadow-xl text-white"
                style={{ background: 'linear-gradient(135deg, #1f6b6c 0%, #2d8485 100%)' }}>
                <div className="text-3xl font-black">500+</div>
                <div className="text-sm font-medium opacity-90">Sessions Completed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#f0f7f7' }} className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">What Drives Us</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d2e2e] mb-4">Our Core Values</h2>
            <p className="text-[#4a9fa0] max-w-xl mx-auto font-light">The principles that guide every session, every edit, every interaction.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#d9eeee] hover:shadow-lg hover:shadow-[#1f6b6c]/8 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #d9eeee 0%, #f0f7f7 100%)' }}>
                  <v.icon size={24} className="text-[#1f6b6c]" />
                </div>
                <h3 className="font-bold text-[#0d2e2e] mb-3">{v.title}</h3>
                <p className="text-[#4a9fa0] text-sm leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 block">Our Journey</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0d2e2e]">5 Years of Excellence</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #4a9fa0, #b0d9d9)' }} />
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-block text-white text-sm font-black px-4 py-1.5 rounded-full mb-2"
                    style={{ background: 'linear-gradient(135deg, #1f6b6c 0%, #2d8485 100%)' }}>
                    {m.year}
                  </div>
                  <p className="text-[#185455] font-medium">{m.event}</p>
                </div>
                <div className="w-4 h-4 rounded-full border-4 border-white shadow-md shrink-0 z-10"
                  style={{ background: 'linear-gradient(135deg, #2d8485, #4a9fa0)' }} />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section style={{ background: '#f0f7f7' }} className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-[#0d2e2e] mb-6">Best Photography Studio in Bangalore</h2>
            <p className="text-[#185455] leading-relaxed mb-4 font-light">
              Looking for the <strong className="font-semibold text-[#0d2e2e]">best photographer in Bangalore</strong>? ThinClipCaptures has been Bangalore's go-to photography studio since 2019. We specialize in <strong className="font-semibold text-[#0d2e2e]">wedding photography Bangalore</strong>, baby shower sessions, engagement shoots, and much more.
            </p>
            <p className="text-[#185455] leading-relaxed mb-4 font-light">
              Our photographers have covered sessions across Bangalore's most iconic locations — Cubbon Park, Lalbagh, Nandi Hills, Whitefield, Indiranagar, Koramangala, and beyond.
            </p>
            <p className="text-[#185455] leading-relaxed font-light">
              Whether you're planning a grand wedding in a 5-star venue or an intimate birthday party at home, ThinClipCaptures brings the same level of professionalism, creativity, and passion to every single shoot. That's why we're rated 4.9 stars by 300+ clients across Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#1f6b6c' }}>
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Let's Create Together</h2>
            <p className="text-[#b0d9d9] text-xl mb-8 font-light">Your story deserves to be told beautifully. Let's start the conversation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0d2e2e] font-black rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                Book via WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
