import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Phone } from 'lucide-react';
import { SERVICES, getWhatsAppUrl, BRAND } from '../lib/constants';
import LeadForm from '../components/LeadForm';

const WA_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
);

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#0d2e2e] mb-4">Service not found</h2>
        <Link to="/services" className="text-[#1f6b6c] hover:underline">Back to Services</Link>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-hidden" style={{ background: '#fdfcf8' }}>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,26,26,0.88) 0%, rgba(13,46,46,0.40) 60%, transparent 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(31,107,108,0.20) 0%, transparent 60%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 w-full">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#7bbebe]/70 hover:text-[#7bbebe] text-sm mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{service.title}</h1>
            <p className="text-[#7bbebe] text-xl max-w-2xl font-light">{service.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#2d8485] text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">About This Service</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0d2e2e] mb-6 leading-tight">
                Why Our {service.title}
                <span className="font-serif-display italic font-normal text-[#1f6b6c]"> Stands Apart</span>
              </h2>
              <p className="text-lg text-[#185455] leading-relaxed mb-8 font-light">{service.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, i) => (
                  <motion.div key={feature} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f0f7f7] border border-[#d9eeee]">
                    <div className="w-5 h-5 rounded-full bg-[#1f6b6c] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-[#185455]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {service.gallery.map((img, i) => (
                <div key={img} className={`overflow-hidden rounded-2xl shadow-md ${
                  i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                }`}>
                  <img src={img} alt={`${service.title} ${i + 1}`} loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#f0f7f7' }} className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d2e2e] mb-4">Why Choose ThinClipCaptures</h2>
            <p className="text-[#4a9fa0] max-w-xl mx-auto font-light">Bangalore's most trusted photography studio, delivering cinematic quality with a personal touch.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🎯', title: 'Precision', desc: 'Every shot composed with intention and artistic vision.' },
              { emoji: '💎', title: 'Premium Quality', desc: 'High-end equipment, meticulous editing, stunning results.' },
              { emoji: '⚡', title: 'Fast Delivery', desc: 'Edited photos delivered within our promised timeline.' },
              { emoji: '🤝', title: 'Personal Touch', desc: 'We work closely with you to capture your unique story.' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl text-center bg-white border border-[#d9eeee] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="font-bold text-[#0d2e2e] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4a9fa0] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#071a1a' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,26,26,0.97) 0%, rgba(31,107,108,0.12) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Book Your
                <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> {service.title} Session</span>
              </h2>
              <p className="text-[#4a9fa0] text-lg mb-8 font-light">
                Ready to create something extraordinary? Reach out and let's plan your perfect shoot in Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getWhatsAppUrl(service.title)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-full transition-all duration-300">
                  <WA_ICON /> WhatsApp Now
                </a>
                <a href={`tel:+91${BRAND.phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-[#2d8485]/60 text-[#7bbebe] font-semibold rounded-full hover:border-[#4a9fa0] transition-all duration-300">
                  <Phone size={17} /> Call Us
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-3xl p-8 border border-[#1f6b6c]/50 backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.04)' }}>
              <LeadForm defaultService={service.title} dark />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
