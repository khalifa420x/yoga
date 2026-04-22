'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const s = tr.services;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) revealStagger(cardsRef.current, 0.13);
  }, []);

  return (
    <section id="services" className="bg-surface-low py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-6">
          <p className="font-plus-jakarta text-xs tracking-widest text-on-surface/40 uppercase mb-3">{s.label}</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary" style={{ letterSpacing: '-0.02em' }}>
            {s.title}
          </h2>
          <p className="font-plus-jakarta text-sm text-on-surface/50 mt-3">{s.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {s.cards.map((card, i) => (
            <motion.div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
              className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${card.highlight ? '' : ''}`}
              style={
                card.highlight
                  ? { background: 'linear-gradient(145deg, #28351c 0%, #3e4c31 100%)', boxShadow: '0 30px 60px rgba(40,53,28,0.22)' }
                  : { background: '#fcf9ef', boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }
              }
            >
              {/* Badge */}
              <span
                className={`inline-block text-xs font-plus-jakarta font-medium rounded-full px-3 py-1 mb-6 self-start ${
                  card.highlight ? 'bg-surface/15 text-surface' : 'bg-primary/10 text-primary'
                }`}
              >
                {card.badge}
              </span>

              {/* Title */}
              <h3
                className={`font-noto-serif text-2xl mb-1 ${card.highlight ? 'text-surface' : 'text-on-surface'}`}
                style={{ letterSpacing: '-0.02em' }}
              >
                {card.title}
              </h3>
              <p className={`font-plus-jakarta text-xs mb-4 ${card.highlight ? 'text-surface/50' : 'text-on-surface/40'}`}>
                {card.duration}
              </p>

              {/* Price */}
              <div className={`font-noto-serif text-4xl font-bold mb-5 ${card.highlight ? 'text-surface' : 'text-primary'}`}>
                {card.price}
              </div>

              {/* Description */}
              <p className={`font-plus-jakarta text-sm leading-relaxed mb-6 ${card.highlight ? 'text-surface/70' : 'text-on-surface/55'}`}>
                {card.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {card.features.map((f, j) => (
                  <li key={j} className={`font-plus-jakarta text-sm flex items-start gap-2.5 ${card.highlight ? 'text-surface/80' : 'text-on-surface/60'}`}>
                    <svg viewBox="0 0 16 16" fill="none" className={`w-4 h-4 mt-0.5 shrink-0 ${card.highlight ? 'text-sage-light' : 'text-primary'}`}>
                      <path d="M13 4L6 11l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`text-center rounded-full px-6 py-3.5 font-plus-jakarta text-sm font-medium transition-opacity hover:opacity-90 ${
                  card.highlight
                    ? 'bg-surface text-primary'
                    : 'text-surface'
                }`}
                style={card.highlight ? undefined : { background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)' }}
              >
                {card.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
