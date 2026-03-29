import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const whatsappNumber = '9997779723';

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tighter text-slate-900 group-hover:text-teal-600 transition-colors">ThinClip</div>
              <div className="text-[10px] text-teal-500 -mt-1 tracking-[2px]">CAPTURES</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-teal-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href={`tel:${whatsappNumber}`}
              className="flex items-center gap-2 px-5 py-2.5 text-sm border border-slate-300 hover:border-slate-400 text-slate-700 rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hi%20ThinClipCaptures%2C%20I%27d%20like%20to%20book%20a%20photography%20session`}
              target="_blank"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 transition-colors text-white px-6 py-2.5 rounded-full text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-700 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-slate-200 shadow-lg"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg py-2 text-slate-700 hover:text-teal-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">
              <a 
                href={`tel:${whatsappNumber}`}
                className="flex items-center justify-center gap-3 py-4 border border-slate-300 text-slate-700 rounded-2xl"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="flex items-center justify-center gap-3 py-4 bg-teal-500 text-white rounded-2xl font-semibold"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
