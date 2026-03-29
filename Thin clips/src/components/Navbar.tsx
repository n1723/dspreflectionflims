import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Menu, X, Aperture } from 'lucide-react';
import { BRAND } from '../lib/constants';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// How far down (px) before the nav appears
const SHOW_THRESHOLD = 80;

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Raw scroll progress (0 → 1 over the first SHOW_THRESHOLD px)
  const rawProgress = useMotionValue(0);
  // Smooth spring so it eases in/out
  const progress = useSpring(rawProgress, { stiffness: 120, damping: 22, mass: 0.6 });
  // Map progress [0,1] → y offset [-28px, 0px]  and opacity [0, 1]
  const navY = useTransform(progress, [0, 1], [-28, 0]);
  const navOpacity = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const p = Math.min(y / SHOW_THRESHOLD, 1);
      rawProgress.set(p);
      setVisible(y > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount so pages that start scrolled look correct
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [rawProgress]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      {/* Floating capsule — hidden until user scrolls */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4 px-4">
        <motion.nav
          style={{ y: navY, opacity: navOpacity }}
          className={`pointer-events-auto w-full max-w-5xl rounded-full bg-[#f0f7f7] border border-[#b0d9d9] shadow-lg shadow-[#0d2e2e]/10 transition-opacity duration-300 ${visible ? '' : 'pointer-events-none'}`}
        >
          <div className="flex items-center justify-between h-14 px-4 sm:px-5">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#1f6b6c] flex items-center justify-center shadow-md group-hover:bg-[#2d8485] transition-colors duration-300">
                <Aperture size={15} className="text-[#d9eeee]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[14px] tracking-tight text-[#0d2e2e]">
                  ThinClip
                </span>
                <span className="font-light text-[10px] tracking-[0.18em] uppercase text-[#2d8485]">
                  Captures
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[13px] font-medium tracking-wide transition-all duration-300 relative group text-[#185455] hover:text-[#0d2e2e] ${
                    location.pathname === link.path ? 'text-[#0d2e2e]' : ''
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#2d8485] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <a
                href={`https://wa.me/91${BRAND.whatsapp}?text=Hi%20ThinClipCaptures!%20I%20want%20to%20book%20a%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-[#1f6b6c] text-white hover:bg-[#185455] shadow-sm"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1.5 rounded-full text-[#185455] hover:text-[#0d2e2e] transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#fdfcf8] pt-24"
          >
            <div className="flex flex-col items-center gap-7 pt-8 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`text-2xl font-semibold tracking-wide transition-colors ${
                      location.pathname === link.path ? 'text-[#1f6b6c]' : 'text-[#0d2e2e] hover:text-[#1f6b6c]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                href={`https://wa.me/91${BRAND.whatsapp}?text=Hi%20ThinClipCaptures!%20I%20want%20to%20book%20a%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full py-4 bg-[#1f6b6c] text-white text-lg font-bold rounded-2xl text-center shadow-xl"
              >
                Book via WhatsApp
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 }}
                href={`tel:+91${BRAND.phone}`}
                className="w-full py-4 border-2 border-[#b0d9d9] text-[#185455] text-lg font-semibold rounded-2xl text-center"
              >
                Call Us: {BRAND.phone}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
