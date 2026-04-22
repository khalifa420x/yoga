'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

const expIcons = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  mat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary">
      <rect x="2" y="7" width="20" height="10" rx="3"/>
      <path d="M7 7V5a2 2 0 014 0v2M13 7V5a2 2 0 014 0v2"/>
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
};

export default function Experience() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const e = tr.experience;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) revealStagger(itemsRef.current, 0.12);
  }, []);

  return (
    <section id="experience" className="bg-surface-high py-28 md:py-32 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-plus-jakarta text-xs tracking-widest text-on-surface/40 uppercase mb-3">{e.label}</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary" style={{ letterSpacing: '-0.02em' }}>
            {e.title}
          </h2>
          <p className="font-plus-jakarta text-sm text-on-surface/50 mt-3 max-w-md mx-auto">{e.subtitle}</p>
        </div>

        {/* Image + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — full image */}
          <div className="rounded-3xl overflow-hidden w-full" style={{ boxShadow: '0 30px 60px rgba(40,53,28,0.12)' }}>
            <Image
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=90"
              alt="Séance de yoga privée dans une villa luxueuse — Côte d'Azur"
              width={600}
              height={500}
              className="w-full object-cover max-w-full"
              style={{ aspectRatio: '6/5' }}
            />
          </div>

          {/* Right — 3 items */}
          <div className="space-y-6">
            {e.items.map((item, i) => (
              <div
                key={i}
                ref={(el) => { itemsRef.current[i] = el; }}
                className="bg-surface rounded-3xl p-7 flex gap-5 items-start"
                style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
              >
                <div className="shrink-0 mt-0.5">{expIcons[item.icon as keyof typeof expIcons]}</div>
                <div>
                  <h3 className="font-noto-serif text-lg text-on-surface mb-1.5" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
