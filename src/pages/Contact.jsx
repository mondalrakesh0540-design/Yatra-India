import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { contactApi } from '../services/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Destination Planning',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', text: '' });
    setLoading(true);

    try {
      const res = await contactApi.submitContact(formData);
      setStatusMessage({
        type: 'success',
        text: res.message || 'Your inquiry has been received! Our travel team will respond within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Destination Planning',
        message: ''
      });
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to submit your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'Are the destinations and transit timings verified?',
      a: 'Yes, all 180+ tourist destinations include verified transit junction coordinates, nearest airport/railway codes, distance estimates, and recommended local transport.'
    },
    {
      q: 'Can I generate confirmed e-tickets for flights, trains, and buses?',
      a: 'Yes! The booking engine on Yatra India generates real-time verified PNR codes and printable e-tickets with route details, passenger records, and fare summaries.'
    },
    {
      q: 'How do I add a new tourism spot to Yatra India?',
      a: 'Authorized administrators can create, edit, or remove destinations and hotel listings directly through the Admin CMS portal.'
    },
    {
      q: 'Is my personal booking data and account information secure?',
      a: 'All authentication is powered by secure bcrypt password hashing and JSON Web Tokens (JWT) with strict Role-Based Access Control and rate-limiting.'
    }
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
          We’re Here to Help You Explore India
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 font-light">
          Have questions regarding an itinerary, booking confirmation, or custom tourist route? Send us a message or reach our 24/7 travel desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Column */}
        <div className="space-y-4">
          <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 shadow-glass space-y-6">
            <h3 className="text-lg font-bold text-white">Contact Information</h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-saffron-500/10 text-saffron-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Helpline (Toll-Free)</span>
                  <a href="tel:1800112233" className="text-white font-semibold hover:text-saffron-400 transition-colors">
                    1800-11-2233 / +91 11 2345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Support Email</span>
                  <a href="mailto:support@yatraindia.com" className="text-white font-semibold hover:text-saffron-400 transition-colors">
                    support@yatraindia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Headquarters</span>
                  <p className="text-white font-medium leading-relaxed">
                    Yatra India Heritage Centre, Barakhamba Road, Connaught Place, New Delhi - 110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Operating Hours</span>
                  <p className="text-white font-medium">Monday – Sunday: 24/7 Digital Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-2 bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-glass">
          <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
          <p className="text-xs text-slate-400 mb-6">Fill out the form below and we will get back to you promptly.</p>

          {statusMessage.text && (
            <div className={`mb-6 p-4 rounded-xl text-xs flex items-start gap-3 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
            }`}>
              {statusMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <span className="leading-relaxed">{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Aarav Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="traveler@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-saffron-500"
                >
                  <option value="Destination Planning">Destination Planning</option>
                  <option value="Booking Inquiry">Booking & PNR Inquiry</option>
                  <option value="Hotel Partnership">Hotel & Stay Listing</option>
                  <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Your Message</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we assist your travel plans?"
                className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-saffron-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 rounded-xl bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-xs shadow-glow-saffron transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting inquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-navy-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-glass space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs text-saffron-400 font-bold uppercase tracking-wider mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl font-bold font-serif text-white">Got Questions? We’ve Got Answers</h2>
        </div>

        <div className="divide-y divide-white/10 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-white hover:text-saffron-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-saffron-400' : ''}`} />
                </button>
                {isOpen && (
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-light">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
