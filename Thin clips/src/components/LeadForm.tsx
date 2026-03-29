import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { getWhatsAppUrl } from '../lib/constants';

const SERVICES_LIST = [
  'Wedding Photography',
  'Baby Shower Photography',
  'Birthday & Events',
  'Engagement Shoots',
  'Vehicle Shoots',
  'Private & Lifestyle Shoots',
  'Other',
];

interface LeadFormProps {
  defaultService?: string;
  dark?: boolean;
}

export default function LeadForm({ defaultService = '', dark = false }: LeadFormProps) {
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setTimeout(() => { window.open(getWhatsAppUrl(form.service), '_blank'); }, 1200);
    } catch {
      setStatus('error');
    }
  };

  const inputBase = `w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 outline-none border`;
  const inputClass = dark
    ? `${inputBase} bg-white/8 border-white/15 text-white placeholder-white/40 focus:border-[#4a9fa0] focus:bg-white/12`
    : `${inputBase} bg-white border-[#d9eeee] text-[#0d2e2e] placeholder-[#7bbebe]/60 focus:border-[#2d8485] focus:ring-2 focus:ring-[#2d8485]/10 shadow-sm`;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-[#d9eeee] flex items-center justify-center">
          <CheckCircle size={36} className="text-[#1f6b6c]" />
        </div>
        <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-[#0d2e2e]'}`}>We've Got Your Request!</h3>
        <p className={`text-sm max-w-xs ${dark ? 'text-white/60' : 'text-[#4a9fa0]'}`}>
          Redirecting you to WhatsApp so we can connect instantly...
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-[11px] font-semibold mb-1.5 uppercase tracking-[0.12em] ${dark ? 'text-[#7bbebe]' : 'text-[#2d8485]'}`}>Your Name *</label>
          <input type="text" required placeholder="Priya Sharma" value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
        </div>
        <div>
          <label className={`block text-[11px] font-semibold mb-1.5 uppercase tracking-[0.12em] ${dark ? 'text-[#7bbebe]' : 'text-[#2d8485]'}`}>Phone Number *</label>
          <input type="tel" required placeholder="9876543210" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass} />
        </div>
      </div>
      <div>
        <label className={`block text-[11px] font-semibold mb-1.5 uppercase tracking-[0.12em] ${dark ? 'text-[#7bbebe]' : 'text-[#2d8485]'}`}>Service *</label>
        <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className={inputClass}>
          <option value="">Select a service...</option>
          {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className={`block text-[11px] font-semibold mb-1.5 uppercase tracking-[0.12em] ${dark ? 'text-[#7bbebe]' : 'text-[#2d8485]'}`}>Message (Optional)</label>
        <textarea rows={3} placeholder="Event date, location, special requirements..."
          value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`} />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or WhatsApp us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-[#1f6b6c] hover:bg-[#185455] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#1f6b6c]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <><Loader2 size={20} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={17} /> Get a Free Quote</>
        )}
      </button>
      <p className={`text-xs text-center ${dark ? 'text-white/30' : 'text-[#7bbebe]'}`}>
        We'll reach out within 2 hours. No spam, ever.
      </p>
    </form>
  );
}
