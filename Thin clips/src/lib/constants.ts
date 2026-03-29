export const BRAND = {
  name: 'ThinClipCaptures',
  tagline: 'Capture Moments That Matter',
  phone: '9997779723',
  whatsapp: '9997779723',
  location: 'Bangalore, Karnataka',
  email: 'hello@thinclipcaptures.com',
  instagram: 'https://instagram.com/thinclipcaptures',
};

export const WHATSAPP_URL = `https://wa.me/91${BRAND.whatsapp}?text=Hi%20ThinClipCaptures!%20I%20would%20like%20to%20book%20a%20photography%20session.`;

export const getWhatsAppUrl = (service?: string) => {
  const text = service
    ? `Hi%20ThinClipCaptures!%20I%20am%20interested%20in%20${encodeURIComponent(service)}%20photography.%20Please%20share%20details.`
    : `Hi%20ThinClipCaptures!%20I%20would%20like%20to%20book%20a%20photography%20session.`;
  return `https://wa.me/91${BRAND.whatsapp}?text=${text}`;
};

export const SERVICES = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    slug: 'wedding',
    icon: '💍',
    theme: 'gold',
    shortDesc: 'Timeless elegance for your most precious day.',
    description:
      'Your wedding day is the most beautiful chapter of your love story. We capture every tender glance, every joyful tear, every golden moment with cinematic precision and artistic vision. From the morning rituals to the grand reception, our team is there for every heartbeat of your day.',
    features: [
      'Full-day coverage (up to 12 hours)',
      'Pre-wedding shoot included',
      'Cinematic video highlights',
      'Edited album delivery in 30 days',
      'Two professional photographers',
      'Drone shots available',
    ],
    image: '/images/hero-wedding.jpg',
    gallery: ['/images/gallery-1.jpg', '/images/gallery-2.jpg', '/images/gallery-8.jpg'],
    color: 'from-amber-900 to-yellow-700',
    accent: '#C9A84C',
    bgClass: 'bg-amber-50',
  },
  {
    id: 'baby',
    title: 'Baby Shower Photography',
    slug: 'baby',
    icon: '🍼',
    theme: 'pastel',
    shortDesc: 'Soft, warm memories of your little miracle.',
    description:
      'Welcoming a new life is the most profound joy. Our baby shower and newborn sessions are crafted with the utmost care — soft lighting, gentle setups, and a calm environment that lets your little one shine. Every yawn, every tiny finger, every smile — beautifully preserved forever.',
    features: [
      'Newborn & baby shower sessions',
      'Soft, natural lighting setups',
      'Props and themes included',
      'Family portraits included',
      'Quick 15-day delivery',
      'Safe, child-friendly environment',
    ],
    image: '/images/hero-baby.jpg',
    gallery: ['/images/gallery-3.jpg', '/images/gallery-5.jpg', '/images/gallery-7.jpg'],
    color: 'from-pink-300 to-rose-200',
    accent: '#F9A8C9',
    bgClass: 'bg-rose-50',
  },
  {
    id: 'events',
    title: 'Birthday & Events',
    slug: 'events',
    icon: '🎉',
    theme: 'vibrant',
    shortDesc: 'Every celebration deserves to be remembered.',
    description:
      'From intimate birthday gatherings to grand corporate events, we bring energy, creativity, and precision to every celebration. Our candid approach captures genuine emotions and the true spirit of your event — the laughter, the surprises, the connections.',
    features: [
      'Birthday parties & milestone celebrations',
      'Corporate events & conferences',
      'Candid + posed photography',
      'Same-day preview available',
      'Large group management',
      'Customized packages',
    ],
    image: '/images/hero-events.jpg',
    gallery: ['/images/gallery-5.jpg', '/images/gallery-8.jpg', '/images/gallery-1.jpg'],
    color: 'from-purple-600 to-pink-500',
    accent: '#9333EA',
    bgClass: 'bg-purple-50',
  },
  {
    id: 'engagement',
    title: 'Engagement Shoots',
    slug: 'engagement',
    icon: '❤️',
    theme: 'romantic',
    shortDesc: 'Your love story, told through light and shadow.',
    description:
      'An engagement shoot is more than just photos — it is the beginning of your visual love story. We find the perfect locations across Bangalore to frame your connection authentically. Candid, romantic, and utterly you.',
    features: [
      'Location scouting in Bangalore',
      'Golden hour sessions',
      'Candid + artistic portraits',
      'Outfit change included',
      'Online gallery within 7 days',
      'Printed album option',
    ],
    image: '/images/hero-engagement.jpg',
    gallery: ['/images/gallery-2.jpg', '/images/gallery-6.jpg', '/images/gallery-8.jpg'],
    color: 'from-rose-600 to-pink-400',
    accent: '#E11D48',
    bgClass: 'bg-pink-50',
  },
  {
    id: 'vehicle',
    title: 'Vehicle Shoots',
    slug: 'vehicle',
    icon: '🚗',
    theme: 'dark',
    shortDesc: 'Bold, dramatic shots for your prized machines.',
    description:
      'Your car or bike is more than transport — it is a statement. Our vehicle photography sessions are crafted for enthusiasts who demand perfection. Studio lighting, dramatic outdoor settings, and a keen eye for automotive beauty produce images worthy of magazine covers.',
    features: [
      'Cars, bikes & supercars',
      'Studio & outdoor sessions',
      'Dramatic lighting setups',
      'Detail & beauty shots',
      'Social media optimized edits',
      'RAW files available',
    ],
    image: '/images/hero-vehicle.jpg',
    gallery: ['/images/gallery-4.jpg', '/images/gallery-9.jpg', '/images/gallery-7.jpg'],
    color: 'from-gray-900 to-zinc-700',
    accent: '#18181B',
    bgClass: 'bg-zinc-900',
  },
  {
    id: 'private',
    title: 'Private & Lifestyle Shoots',
    slug: 'private',
    icon: '✨',
    theme: 'cinematic',
    shortDesc: 'Cinematic storytelling for your personal journey.',
    description:
      'Whether it is a solo trip through the mountains, a lifestyle brand shoot, or a personal milestone — we create cinematic, editorial-quality imagery that tells your unique story. Every frame is composed with intention, every edit crafted with artistry.',
    features: [
      'Solo & group lifestyle shoots',
      'Travel & destination photography',
      'Brand & influencer content',
      'Cinematic editing style',
      'Flexible locations',
      'Personal stylist coordination available',
    ],
    image: '/images/hero-private.jpg',
    gallery: ['/images/gallery-7.jpg', '/images/gallery-2.jpg', '/images/gallery-6.jpg'],
    color: 'from-slate-800 to-indigo-900',
    accent: '#4F46E5',
    bgClass: 'bg-slate-50',
  },
];
