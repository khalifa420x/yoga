'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';

export default function Contact() {
  const { tr } = useLang();
  const c = tr.contact;
  const f = c.form;

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', level: '', message: '' });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const body = `Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nVille: ${form.city}\nNiveau: ${form.level}\n\n${form.message}`;
    window.open(`mailto:contact@maisonnayayoga.fr?subject=Demande de séance — Maison Naya Yoga&body=${encodeURIComponent(body)}`, '_blank');
    setTimeout(() => setStatus('sent'), 800);
  };

  const buildWALink = () => {
    const msg = `Bonjour Naya,\n\nJe m'appelle ${form.name || '…'} et je souhaite réserver une séance de yoga privé.\n\nVille : ${form.city || '…'}\nNiveau : ${form.level || '…'}\n\n${form.message}`;
    return `https://wa.me/33600000000?text=${encodeURIComponent(msg)}`;
  };

  const inputCls = 'w-full bg-surface rounded-2xl px-4 py-3.5 font-plus-jakarta text-sm text-on-surface placeholder-on-surface/35 outline-none focus:ring-2 focus:ring-primary/20 transition';
  const selectCls = `${inputCls} appearance-none cursor-pointer`;

  return (
    <section id="contact" className="bg-surface py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — text */}
          <div>
            <p className="font-plus-jakarta text-xs tracking-widest text-on-surface/40 uppercase mb-3">{c.label}</p>
            <h2 className="font-noto-serif text-3xl md:text-4xl text-primary mb-4" style={{ letterSpacing: '-0.02em' }}>
              {c.title}
            </h2>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed mb-10">{c.subtitle}</p>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-high flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.11 19.79 19.79 0 01.78 .4 2 2 0 012.78 2H5.9a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.86a16 16 0 006.29 6.29l1.22-1.22a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-plus-jakarta text-xs text-on-surface/40 mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2">
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-high flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-plus-jakarta text-xs text-on-surface/40 mb-0.5">Email</p>
                  <a href="mailto:contact@maisonnayayoga.fr" className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2">
                    contact@maisonnayayoga.fr
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-high flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-plus-jakarta text-xs text-on-surface/40 mb-0.5">Zone</p>
                  <p className="font-plus-jakarta text-sm text-on-surface/70">Nice · Cannes · Monaco · Saint-Tropez</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface-high rounded-3xl p-6 md:p-8" style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}>
            {status === 'sent' ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="font-noto-serif text-xl text-primary">{f.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder={f.name} value={form.name} onChange={set('name')} className={inputCls} />
                  <input required type="email" placeholder={f.email} value={form.email} onChange={set('email')} className={inputCls} />
                </div>
                <input placeholder={f.phone} value={form.phone} onChange={set('phone')} className={inputCls} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <select required value={form.city} onChange={set('city')} className={selectCls}>
                      <option value="">{f.city}</option>
                      {f.cityOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <svg viewBox="0 0 16 16" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface/35 pointer-events-none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="relative">
                    <select required value={form.level} onChange={set('level')} className={selectCls}>
                      <option value="">{f.level}</option>
                      {f.levelOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <svg viewBox="0 0 16 16" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface/35 pointer-events-none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <textarea rows={3} placeholder={f.message} value={form.message} onChange={set('message')} className={`${inputCls} resize-none`} />

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full text-surface rounded-full py-4 font-plus-jakarta text-sm font-medium disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)', boxShadow: '0 8px 24px rgba(40,53,28,0.18)' }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  {status === 'sending' ? f.sending : f.submit}
                </motion.button>

                <a
                  href={buildWALink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-plus-jakarta text-sm text-on-surface/50 hover:text-primary transition mt-1"
                >
                  {f.whatsApp}
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
