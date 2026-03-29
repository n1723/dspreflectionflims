import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES, WHATSAPP_URL } from '../lib/constants';

export default function Services() {
  return (
    <div className="" style={{ background: '#fdfcf8' }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#071a1a' }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-wedding.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-px left-0 right-0 h-16" style={{ background: 'linear-gradient(to bottom, transparent, #fdfcf8)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#4a9fa0] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Our Photography
              <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> Services</span>
            </h1>
            <p className="text-[#4a9fa0] text-xl max-w-2xl mx-auto font-light">
              From intimate family moments to grand celebrations — every service is crafted with the same passion, precision, and artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ background: '#f0f7f7' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/services/${service.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#0d2e2e]/10 border border-[#d9eeee] transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden h-60">
                    <img src={service.image} alt={service.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,26,0.65) 0%, transparent 60%)' }} />
                    <span className="absolute top-4 left-4 text-3xl">{service.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0d2e2e] mb-2 group-hover:text-[#1f6b6c] transition-colors">{service.title}</h3>
                    <p className="text-[#4a9fa0] text-sm leading-relaxed mb-4 font-light">{service.shortDesc}</p>
                    <div className="flex items-center gap-2 text-[#2d8485] text-sm font-semibold">
                      Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#1f6b6c' }}>
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Not Sure Which Package?</h2>
            <p className="text-[#b0d9d9] text-xl mb-8 font-light">Let's have a quick chat. We'll help you find the perfect fit for your vision and budget.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0d2e2e] font-black rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
              Chat with Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
