import { Link } from 'react-router-dom';
import { Aperture, MapPin, Phone, Instagram } from 'lucide-react';
import { BRAND } from '../lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: '#071a1a' }} className="text-[#7bbebe]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#1f6b6c] flex items-center justify-center">
                <Aperture size={18} className="text-[#b0d9d9]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[15px] text-white tracking-tight">ThinClip</span>
                <span className="font-light text-[11px] tracking-[0.18em] uppercase text-[#4a9fa0]">Captures</span>
              </div>
            </div>
            <p className="text-[#4a9fa0] text-sm leading-relaxed max-w-xs mb-6">
              Bangalore's premium photography studio crafting timeless memories through artistry, emotion, and light. Every frame tells a story worth keeping.
            </p>
            <div className="flex items-center gap-3 text-sm mb-3">
              <MapPin size={15} className="text-[#4a9fa0] shrink-0" />
              <span className="text-[#7bbebe]">{BRAND.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={15} className="text-[#4a9fa0] shrink-0" />
              <a href={`tel:+91${BRAND.phone}`} className="text-[#7bbebe] hover:text-white transition-colors">{BRAND.phone}</a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Navigate</h4>
            <ul className="space-y-3">
              {[['Home', '/'], ['Services', '/services'], ['Gallery', '/gallery'], ['About', '/about'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-[#4a9fa0] hover:text-[#7bbebe] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3">
              {[['Wedding', '/services/wedding'], ['Baby Shower', '/services/baby'], ['Events', '/services/events'], ['Engagement', '/services/engagement'], ['Vehicle', '/services/vehicle'], ['Private Shoots', '/services/private']].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-[#4a9fa0] hover:text-[#7bbebe] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1f6b6c]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2d8485]">
            © {new Date().getFullYear()} ThinClipCaptures. All rights reserved. Bangalore, India.
          </p>
          <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-[#4a9fa0] hover:text-[#7bbebe] transition-colors">
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
