import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { BRAND, WHATSAPP_URL } from '../lib/constants';

const contactInfo = [
  { icon: Phone, label: 'Phone & WhatsApp', value: BRAND.phone, href: `tel:+91${BRAND.phone}`, bg: '#d9eeee', iconColor: '#1f6b6c' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, Karnataka, India', href: 'https://maps.google.com/?q=Bangalore', bg: '#e4ede4', iconColor: '#4d834d' },
  { icon: Clock, label: 'Response Time', value: 'Within 2 hours', href: WHATSAPP_URL, bg: '#ede8ff', iconColor: '#6340cc' },
  { icon: Instagram, label: 'Instagram', value: '@thinclipcaptures', href: BRAND.instagram, bg: '#fce7f3', iconColor: '#be185d' },
];

export default function Contact() {
  return (
    <div className="overflow-x-hidden" style={{ background: '#fdfcf8' }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#071a1a' }}>
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-main.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(7,26,26,0.96) 0%, rgba(31,107,108,0.15) 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#4a9fa0] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Let's Create
              <span className="font-serif-display italic font-normal" style={{ color: '#7bbebe' }}> Something Beautiful</span>
            </h1>
            <p className="text-[#4a9fa0] text-xl max-w-2xl mx-auto font-light">
              Ready to book a session or just have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <motion.a key={info.label} href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="block bg-white border border-[#d9eeee] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#0d2e2e]/8 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: info.bg }}>
                  <info.icon size={21} style={{ color: info.iconColor }} />
                </div>
                <p className="text-[11px] font-bold text-[#4a9fa0] uppercase tracking-[0.12em] mb-1">{info.label}</p>
                <p className="text-[#0d2e2e] font-semibold text-sm">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section style={{ background: '#f0f7f7' }} className="py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black text-[#0d2e2e] mb-2">Send Us a Message</h2>
              <p className="text-[#4a9fa0] mb-8 font-light">Fill in the form and we'll get back to you within 2 hours.</p>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#d9eeee]">
                <LeadForm />
              </div>
            </motion.div>

            {/* WhatsApp CTA + Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black text-[#0d2e2e] mb-2">Prefer to Chat Directly?</h2>
              <p className="text-[#4a9fa0] mb-8 font-light">WhatsApp us and get an instant response. We're available 9 AM – 9 PM daily.</p>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-2xl shadow-xl shadow-green-500/20 hover:shadow-green-500/35 transition-all duration-300 mb-7 group">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </div>
                <div>
                  <p className="font-black text-lg">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">+91 {BRAND.whatsapp} · Usually replies in minutes</p>
                </div>
              </a>

              <div className="bg-white rounded-2xl p-6 border border-[#d9eeee] shadow-sm mb-5">
                <h3 className="font-bold text-[#0d2e2e] mb-4">Service Areas in Bangalore</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Koramangala','Indiranagar','Whitefield','Jayanagar','HSR Layout','Marathahalli','Electronic City','Yelahanka','Hebbal','Bannerghatta'].map(area => (
                    <div key={area} className="flex items-center gap-2 text-sm text-[#185455]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4a9fa0]" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#d9eeee]/50 border border-[#b0d9d9] rounded-2xl p-6">
                <h3 className="font-bold text-[#0d2e2e] mb-2">📍 Based in Bangalore</h3>
                <p className="text-[#185455] text-sm leading-relaxed font-light">
                  We operate across all of Bangalore and are available for destination shoots across Karnataka. Contact us for outstation packages.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
