'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

export default function Testimonials() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const t = tr.testimonials;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) revealStagger(cardsRef.current, 0.15);
  }, []);

  return (
    <section id="testimonials" className="bg-primary py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-plus-jakarta text-xs tracking-widest text-sage-light uppercase mb-3">{t.label}</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-surface" style={{ letterSpacing: '-0.02em' }}>
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.quotes.map((q, i) => (
            <motion.div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
              className="rounded-3xl p-8"
              style={{ background: '#3e4c31', boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}
            >
              <div className="text-gold text-sm mb-3">★★★★★</div>
              <div
                className="font-noto-serif text-8xl leading-none -mt-4 mb-1 select-none"
                style={{ color: 'rgba(90,122,95,0.35)' }}
                aria-hidden
              >
                "
              </div>
              <p className="font-noto-serif italic text-lg text-surface leading-relaxed -mt-2">
                {q.text}
              </p>
              <div className="mt-7 pt-6 flex items-center gap-4" style={{ borderTop: '1px solid rgba(90,122,95,0.18)' }}>
                <Image
                  src={q.avatar}
                  alt={q.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-plus-jakarta text-sm font-medium text-surface">{q.name}</p>
                  <p className="font-plus-jakarta text-xs text-surface/50 mt-0.5">{q.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
