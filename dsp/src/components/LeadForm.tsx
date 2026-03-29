import { useState } from 'react';
import { motion } from 'framer-motion';

interface LeadFormProps {
  selectedService?: string;
  onSuccess?: () => void;
}

const LeadForm = ({ selectedService = '', onSuccess }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          const whatsappUrl = `https://wa.me/9997779723?text=Hi%20ThinClipCaptures!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20I'm%20interested%20in%20${encodeURIComponent(formData.service)}%20photography.`;
          window.open(whatsappUrl, '_blank');
          if (onSuccess) onSuccess();
          // Reset form
          setFormData({ name: '', phone: '', service: selectedService || '', message: '' });
          setSubmitted(false);
        }, 1200);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-teal-50 border border-teal-200 text-teal-700 p-8 rounded-3xl text-center"
      >
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
        <p className="text-teal-600">We've received your inquiry. Redirecting to WhatsApp...</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1.5">YOUR NAME</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-white border border-slate-200 focus:border-teal-400 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 outline-none"
          placeholder="Aarav Sharma"
        />
      </div>
      
      <div>
        <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1.5">PHONE NUMBER</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full bg-white border border-slate-200 focus:border-teal-400 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 outline-none"
          placeholder="9997779723"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1.5">SERVICE INTERESTED IN</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full bg-white border border-slate-200 focus:border-teal-400 rounded-2xl px-6 py-4 text-slate-900 outline-none"
        >
          <option value="">Select a service</option>
          <option value="Wedding Photography">Wedding Photography</option>
          <option value="Baby Shower Photography">Baby Shower Photography</option>
          <option value="Birthday & Event Coverage">Birthday & Event Coverage</option>
          <option value="Engagement Shoots">Engagement Shoots</option>
          <option value="Vehicle Shoots">Vehicle Shoots</option>
          <option value="Private Shoots">Private Shoots</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1.5">MESSAGE (OPTIONAL)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full bg-white border border-slate-200 focus:border-teal-400 rounded-3xl px-6 py-4 text-slate-900 placeholder:text-slate-400 outline-none resize-y"
          placeholder="Please share more details about your event..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-teal-500 hover:bg-teal-600 transition-all text-white font-semibold text-lg rounded-2xl flex items-center justify-center gap-3 disabled:opacity-70"
      >
        {loading ? 'SENDING...' : 'SEND INQUIRY • GET A QUOTE'}
      </button>

      <p className="text-center text-[10px] text-slate-500 pt-2">We respect your time. Expect a reply within 2 hours.</p>
    </form>
  );
};

export default LeadForm;
