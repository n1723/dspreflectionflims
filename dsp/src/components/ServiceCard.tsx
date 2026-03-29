import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  image: string;
  index?: number;
}

export default function ServiceCard({ id, title, icon, shortDesc, image, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
    >
      <Link to={`/services/${id}`} className="group block relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md hover:shadow-2xl hover:shadow-[#0d2e2e]/15 transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: 'scale(1)' }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071a1a]/85 via-[#0d2e2e]/25 to-transparent" />
        {/* Teal tint on hover */}
        <div className="absolute inset-0 bg-[#1f6b6c]/0 group-hover:bg-[#1f6b6c]/15 transition-colors duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-2xl mb-2 block">{icon}</span>
          <h3 className="text-white text-lg font-bold mb-1 leading-tight">{title}</h3>
          <p className="text-white/65 text-xs mb-3 leading-relaxed">{shortDesc}</p>
          <div className="flex items-center gap-1.5 text-[#7bbebe] text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Explore <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
