'use client';

import { useEffect, useRef } from 'react';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

const icons = [
  // Tailored
  <svg key="tailored" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  // Home
  <svg key="home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>,
  // All levels
  <svg key="levels" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  // Flexible
  <svg key="flex" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  // Transformation
  <svg key="transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>,
  // Expertise
  <svg key="cert" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>,
];

export default function ValueProp() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const v = tr.valueProp;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) revealStagger(cardsRef.current, 0.1);
  }, []);

  return (
    <section className="bg-surface py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-plus-jakarta text-xs tracking-widest text-on-surface/40 uppercase mb-3">{v.label}</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary" style={{ letterSpacing: '-0.02em' }}>
            {v.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {v.items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-surface-high rounded-3xl p-7 md:p-8"
              style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
            >
              <div className="mb-5">{icons[i]}</div>
              <h3 className="font-noto-serif text-lg text-on-surface mb-2" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
              <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
