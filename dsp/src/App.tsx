import { useState, useEffect } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import { Camera, Heart, Baby, Cake, Gift, Car, Star, MapPin } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_desc: string;
  image_url: string;
  icon: string;
  theme_color: string;
  price_range: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  rating: number;
  image_url: string;
}

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image_url: string;
  description: string;
}

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/9997779723"
      target="_blank"
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 transition-all hover:scale-110"
    >
      <div className="w-5 h-5">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.149-.67-1.612-.917-2.207-.24-.596-.49-.52-.67-.52-.18 0-.384.068-.52.2-.137.134-.52.51-.52 1.24 0 .73.533 1.438.607 1.537.074.1.99 1.51 2.39 2.29 1.4.78 1.4 1.17 2.09 1.3.69.13 1.1.1 1.51.06.41-.04 1.27-.52 1.45-.99.18-.47.18-.88.13-1.01zM12 2C6.48 2 2 6.59 2 12.25c0 2.74 1.04 5.23 2.75 7.1L2 22l2.77-1.05C6.67 22 9.17 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
      </div>
    </a>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then((services: Service[]) => {
        const found = services.find(s => s.slug === slug);
        setService(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-zinc-950 flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-teal-500 border-t-transparent rounded-full"></div></div>;
  }

  if (!service) {
    return <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center">Service not found</div>;
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-8 h-8" />;
      case 'Baby': return <Baby className="w-8 h-8" />;
      case 'Cake': return <Cake className="w-8 h-8" />;
      case 'Ring': return <Gift className="w-8 h-8" />;
      case 'Car': return <Car className="w-8 h-8" />;
      default: return <Camera className="w-8 h-8" />;
    }
  };



  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={service.image_url} 
          alt={service.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-black/60 text-teal-500 text-sm tracking-[3px] px-8 py-3 rounded-full mb-8 border border-teal-500/30">
            {getIcon(service.icon)} {service.name.toUpperCase()}
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6 leading-none">{service.name}</h1>
          <p className="text-xl text-white/80 max-w-md mx-auto">{service.short_desc}</p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="text-teal-500 text-xs tracking-widest mb-2">SCROLL TO EXPLORE</div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-12 bg-gradient-to-b from-transparent via-teal-500 to-transparent"></motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-4xl font-medium tracking-tight mb-8">The Experience</h2>
              <p className="text-lg leading-relaxed text-zinc-300 mb-8">{service.description}</p>
              <p className="text-lg leading-relaxed text-zinc-300">Our photographers specialize in capturing authentic emotions in Bangalore's most beautiful locations. From heritage palaces to modern rooftops, we create images that will be cherished for generations.</p>
            </div>

            <div className="mt-16">
              <h3 className="uppercase text-sm tracking-[2px] text-teal-500 mb-8">WHAT'S INCLUDED</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['Pre-shoot consultation', 'Full day coverage', 'Professional editing', 'Online gallery', 'Print rights', 'Unlimited revisions'].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex-shrink-0 flex items-center justify-center text-teal-500 mt-0.5">✓</div>
                    <div className="text-slate-500">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-8 sticky top-24">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <div className="text-xs tracking-widest text-zinc-500">STARTING AT</div>
                  <div className="text-4xl font-semibold text-teal-500">{service.price_range}</div>
                </div>
                <div className="px-5 py-1 text-xs border border-teal-500/40 text-teal-500 rounded-full">BANGALORE</div>
              </div>
              
              <LeadForm selectedService={service.name} />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Teaser */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-medium mb-10">Recent Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={`https://picsum.photos/id/${90 + i}/600/450`} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <a href="https://wa.me/9997779723" target="_blank" className="inline-flex items-center gap-4 text-xl border border-white/60 hover:bg-white hover:text-black transition-all px-16 py-6 rounded-3xl">
          BOOK THIS SERVICE ON WHATSAPP <span className="text-3xl">→</span>
        </a>
      </div>
    </div>
  );
};

function App() {
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLightbox, setShowLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [servicesRes, testimonialsRes, galleryRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/testimonials'),
          fetch('/api/gallery')
        ]);
        
        const servicesData = await servicesRes.json();
        const testimonialsData = await testimonialsRes.json();
        const galleryData = await galleryRes.json();
        
        setServices(servicesData);
        setTestimonials(testimonialsData);
        setGalleryItems(galleryData);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    fetchAll();
  }, []);

  const filteredGallery = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = ['all', 'wedding', 'baby-shower', 'events', 'engagement', 'vehicle'];

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return 'All';
    if (cat === 'baby-shower') return 'Baby Shower';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden">
      <Routes>
        {/* HOME */}
        <Route path="/" element={
          <>
            <Navbar />
            
            {/* HERO */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[length:50px_50px] opacity-40"></div>
              <img 
                src="/images/wedding-hero.jpg" 
                alt="Hero" 
                className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
              />
              
              <div className="relative z-10 text-center px-5 max-w-5xl">
                <div className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-teal-500 text-xs font-mono tracking-[4px] px-8 py-3 rounded-3xl border border-white/10">
                  BANGALORE'S PREMIUM PHOTOGRAPHY STUDIO
                </div>
                
                <h1 className="text-[92px] md:text-[130px] leading-[0.9] font-semibold tracking-[-6px] mb-6">
                  CAPTURE<br />MOMENTS<br />THAT MATTER
                </h1>
                
                <p className="max-w-md mx-auto text-xl text-white/70 mb-14">Luxury photography for life's most beautiful chapters. Based in Bangalore.</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <a href="#services" className="px-10 py-5 border border-white/70 hover:bg-white hover:text-black text-lg font-medium rounded-3xl transition-all">Explore Our Work</a>
                  <a 
                    href="https://wa.me/9997779723?text=Hello%20ThinClipCaptures%2C%20I%20would%20like%20to%20discuss%20a%20photoshoot"
                    target="_blank"
                    className="px-10 py-5 bg-white text-black text-lg font-semibold rounded-3xl flex items-center gap-3 hover:bg-teal-500 transition-all"
                  >
                    BOOK A SHOOT
                  </a>
                </div>
              </div>

              <div className="absolute bottom-16 left-1/2 flex flex-col items-center">
                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-xs tracking-widest text-white/40"
                >
                  SCROLL TO DISCOVER
                </motion.div>
              </div>
            </div>

            {/* SERVICES GRID */}
            <div id="services" className="max-w-7xl mx-auto px-6 py-24">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <div className="font-mono text-xs text-teal-500 tracking-widest">OUR EXPERTISE</div>
                  <h2 className="text-5xl font-medium tracking-tight">Signature Services</h2>
                </div>
                <Link to="/services" className="hidden md:block text-sm border-b border-white pb-1 hover:text-teal-500 transition-colors">View all services →</Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -12 }}
                    className="group bg-white shadow-sm border border-slate-100 rounded-3xl overflow-hidden cursor-pointer"
                    onClick={() => window.location.href = `/services/${service.slug}`}
                  >
                    <div className="h-80 relative overflow-hidden">
                      <img 
                        src={service.image_url} 
                        alt={service.name} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80"></div>
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex items-center gap-3 text-teal-500 mb-4">
                          {service.icon === 'Heart' && <Heart />}
                          {service.icon === 'Baby' && <Baby />}
                          {service.icon === 'Cake' && <Cake />}
                          {service.icon === 'Ring' && <Gift />}
                          {service.icon === 'Car' && <Car />}
                          {service.icon === 'Camera' && <Camera />}
                        </div>
                        <h3 className="text-3xl font-medium">{service.name}</h3>
                        <p className="text-white/60 mt-2 text-sm line-clamp-2">{service.short_desc}</p>
                      </div>
                    </div>
                    <div className="px-8 py-6 flex justify-between items-center text-xs">
                      <div className="text-teal-500 font-medium">{service.price_range}</div>
                      <div className="text-white/60 group-hover:text-teal-500 transition-colors">Learn more →</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FEATURED GALLERY */}
            <div className="bg-black py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                  <div>
                    <div className="uppercase text-xs tracking-[3px] text-zinc-500">PORTFOLIO</div>
                    <h2 className="text-5xl font-medium tracking-tight">Featured Moments</h2>
                  </div>
                  <Link to="/gallery" className="text-sm flex items-center gap-2 hover:text-teal-500">Full Gallery <span className="text-xl">↗</span></Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {galleryItems.slice(0, 6).map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`relative overflow-hidden rounded-3xl cursor-pointer group ${index === 0 || index === 5 ? 'md:col-span-7' : 'md:col-span-5'}`}
                      onClick={() => setShowLightbox(item)}
                    >
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-2/3"></div>
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="text-xs uppercase tracking-widest text-teal-500 mb-2">{item.category}</div>
                        <div className="text-2xl font-light">{item.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TESTIMONIALS */}
            <div className="max-w-7xl mx-auto px-6 py-24">
              <div className="text-center mb-16">
                <div className="inline px-5 py-2 bg-white shadow-sm border border-slate-100 rounded-3xl text-sm">CLIENT LOVE</div>
                <h2 className="text-5xl font-medium mt-5">Real Stories, Real Moments</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white shadow-sm border border-slate-100 p-10 rounded-3xl"
                  >
                    <div className="flex gap-1 mb-8">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="text-teal-500 w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed text-white/90 mb-10">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img src={testimonial.image_url} alt="" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div>{testimonial.name}</div>
                        <div className="text-xs text-zinc-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ABOUT PREVIEW */}
            <div className="bg-white shadow-sm border border-slate-100 py-24">
              <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-x-20 items-center">
                <div className="md:col-span-5">
                  <div className="sticky top-28">
                    <div className="uppercase text-teal-500 text-sm">OUR STORY</div>
                    <h2 className="text-[42px] leading-none tracking-tight font-medium mt-4">Photography that tells your story</h2>
                    <div className="h-px w-16 bg-teal-500 my-10"></div>
                    <p className="text-lg text-slate-500">ThinClipCaptures was founded in Bangalore with a passion for documenting life's most precious moments with artistry and sensitivity.</p>
                    <Link to="/about" className="mt-8 inline-flex items-center gap-3 text-sm uppercase border-b pb-px border-white">Meet the team →</Link>
                  </div>
                </div>
                <div className="md:col-span-7 mt-16 md:mt-0">
                  <img src="https://picsum.photos/id/1016/900/620" alt="Studio" className="rounded-3xl" />
                </div>
              </div>
            </div>

            {/* LEAD FORM SECTION */}
            <div className="max-w-2xl mx-auto px-6 py-28">
              <div className="text-center mb-12">
                <div className="text-teal-500 text-sm font-medium tracking-widest">START YOUR JOURNEY</div>
                <h2 className="text-5xl font-semibold tracking-tight mt-3">Let's create memories together</h2>
              </div>
              <div className="bg-white shadow-sm border border-slate-100 rounded-3xl p-12">
                <LeadForm />
              </div>
            </div>

            <Footer />
          </>
        } />

        {/* SERVICES LIST PAGE */}
        <Route path="/services" element={
          <div>
            <Navbar />
            <div className="pt-16 pb-12 bg-zinc-950">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                  <div className="text-teal-500 tracking-[4px] text-xs">WHAT WE OFFER</div>
                  <h1 className="text-6xl font-semibold mt-3">Our Services</h1>
                  <p className="max-w-xs mx-auto mt-6 text-slate-500">Premium photography experiences in Bangalore for every milestone in life</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-24">
              {services.map(service => (
                <Link 
                  key={service.id} 
                  to={`/services/${service.slug}`}
                  className="group bg-white shadow-sm border border-slate-100 rounded-3xl p-2 flex flex-col"
                >
                  <div className="overflow-hidden rounded-3xl">
                    <img src={service.image_url} className="w-full h-80 object-cover group-hover:scale-110 transition-transform" alt="" />
                  </div>
                  <div className="p-9">
                    <div className="flex justify-between">
                      <h3 className="text-3xl font-medium">{service.name}</h3>
                      <div className="text-right">
                        <div className="text-xs text-slate-500">FROM</div>
                        <div className="font-mono text-teal-500">{service.price_range.split('-')[0]}</div>
                      </div>
                    </div>
                    <p className="mt-6 text-slate-500">{service.short_desc}</p>
                    <div className="mt-8 text-xs flex items-center gap-2 text-teal-500">VIEW DETAILS <span className="text-base">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
            <Footer />
          </div>
        } />

        {/* DYNAMIC SERVICE DETAIL */}
        <Route path="/services/:slug" element={<ServiceDetail />} />

        {/* GALLERY */}
        <Route path="/gallery" element={
          <>
            <Navbar />
            <div className="pt-20 pb-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h1 className="text-6xl font-semibold tracking-tighter">Gallery</h1>
                    <p className="text-slate-500 mt-3">Moments frozen in time</p>
                  </div>
                  
                  <div className="flex gap-3 flex-wrap">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-7 py-3 text-sm rounded-3xl transition-all ${selectedCategory === cat ? 'bg-white text-black' : 'bg-white shadow-sm border border-slate-100 text-white hover:bg-zinc-800'}`}
                      >
                        {getCategoryLabel(cat)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredGallery.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setShowLightbox(item)}
                    className="break-inside-avoid group relative cursor-zoom-in overflow-hidden rounded-3xl"
                  >
                    <img 
                      src={item.image_url} 
                      alt={item.title} 
                      className="w-full transition-all group-hover:scale-105" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-8 text-xs">
                      <div className="text-teal-500/90 mb-1 tracking-widest text-[10px]">{item.category.toUpperCase()}</div>
                      <div className="font-medium text-lg">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showLightbox && (
              <div 
                className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
                onClick={() => setShowLightbox(null)}
              >
                <div className="max-w-5xl w-full relative" onClick={e => e.stopPropagation()}>
                  <button onClick={() => setShowLightbox(null)} className="absolute -top-16 right-0 text-white text-sm flex items-center gap-2">CLOSE <span className="text-xl">✕</span></button>
                  <img src={showLightbox.image_url} alt={showLightbox.title} className="max-h-[82vh] mx-auto rounded-3xl shadow-2xl" />
                  <div className="text-center mt-6 text-slate-500">{showLightbox.description}</div>
                </div>
              </div>
            )}

            <Footer />
          </>
        } />

        {/* ABOUT */}
        <Route path="/about" element={
          <div className="bg-zinc-950">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
              <div className="max-w-lg">
                <div className="text-teal-500 text-sm">EST. 2018 • BANGALORE</div>
                <h1 className="text-7xl font-medium tracking-tighter leading-none mt-6">We don't just take photos.<br />We preserve feelings.</h1>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-20 text-slate-500 text-[21px] leading-tight">
              ThinClipCaptures was born from a deep appreciation for the way light falls on faces filled with emotion. Over the years, we've had the privilege of documenting over 380 weddings, 120 baby showers, countless birthdays, engagements and personal stories across Karnataka and beyond.
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white shadow-sm border border-slate-100">
              {[
                { num: '380+', label: 'Weddings' },
                { num: '210+', label: 'Private Shoots' },
                { num: '92', label: 'Cities' },
                { num: '4.98', label: 'Avg Rating' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-zinc-950 p-12 text-center">
                  <div className="text-6xl text-teal-500 font-light">{stat.num}</div>
                  <div className="mt-4 text-sm tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto px-6 py-24 text-center text-xl text-zinc-300">
              Our approach is simple: get to know you, understand your vision, and create photographs that feel like you. 
              Every frame is carefully considered, every moment anticipated.
            </div>

            <Footer />
          </div>
        } />

        {/* CONTACT */}
        <Route path="/contact" element={
          <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
              <div className="grid md:grid-cols-12 gap-20">
                <div className="md:col-span-5">
                  <div className="text-6xl font-medium tracking-tighter leading-none">Let's create<br />something<br />beautiful.</div>
                  
                  <div className="mt-16 space-y-10">
                    <div>
                      <div className="text-xs text-zinc-500 mb-2">REACH US DIRECTLY</div>
                      <a href="tel:9997779723" className="block text-4xl hover:text-teal-500 transition-colors">+91 99977 79723</a>
                    </div>
                    
                    <div>
                      <div className="text-xs text-zinc-500 mb-3">WHATSAPP</div>
                      <a href="https://wa.me/9997779723" target="_blank" className="inline-flex items-center gap-4 px-8 py-5 rounded-3xl border border-white/30 text-lg hover:bg-white hover:text-zinc-950">Message us instantly</a>
                    </div>
                  </div>

                  <div className="mt-20 flex items-center gap-3 text-xs text-zinc-500">
                    <MapPin className="w-4 h-4" /> BANGALORE, KARNATAKA
                  </div>
                </div>

                <div className="md:col-span-7">
                  <div className="bg-white shadow-sm border border-slate-100 p-10 rounded-3xl">
                    <LeadForm />
                  </div>
                </div>
              </div>
            </div>
            
            <Footer />
          </div>
        } />
      </Routes>

      <FloatingWhatsApp />
    </div>
  );
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-y-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-teal-500 w-9 h-9 rounded-2xl flex items-center justify-center">
              <Camera className="text-black w-5 h-5" />
            </div>
            <div className="font-medium text-3xl tracking-tighter">ThinClipCaptures</div>
          </div>
          <div className="mt-8 max-w-xs text-slate-500 text-sm">Premium photography studio based in Bangalore specializing in weddings, events, lifestyle and automotive photography.</div>
          
          <div className="mt-12 text-xs text-zinc-500">© {new Date().getFullYear()} THINCLIPCAPTURES. ALL RIGHTS RESERVED.</div>
        </div>

        <div className="md:col-span-3 text-sm">
          <div className="text-white mb-6 text-xs tracking-widest">QUICK LINKS</div>
          <div className="space-y-4 text-slate-500">
            <div><Link to="/services" className="hover:text-white">Services</Link></div>
            <div><Link to="/gallery" className="hover:text-white">Gallery</Link></div>
            <div><Link to="/about" className="hover:text-white">About Us</Link></div>
            <div><Link to="/contact" className="hover:text-white">Contact</Link></div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs tracking-widest text-white mb-6">GET IN TOUCH</div>
          <div className="font-mono text-3xl text-white">99977 79723</div>
          <a href="https://wa.me/9997779723" target="_blank" className="block mt-8 text-xs bg-white text-black w-fit px-6 py-3.5 rounded-2xl">WHATSAPP US</a>
          <div className="mt-auto pt-16 text-[10px] text-zinc-600">Crafted with passion in Bangalore, India</div>
        </div>
      </div>
    </footer>
  );
};

export default App;

