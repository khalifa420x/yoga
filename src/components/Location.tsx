'use client';

import { useRef, useEffect } from 'react';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

export default function Location() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const l = tr.location;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) revealStagger(cardsRef.current, 0.1);
  }, []);

  const cityImages = [
    'https://images.unsplash.com/photo-1555440037-0cf7e21c8a7d?w=600&q=80', // Nice
    'https://images.unsplash.com/photo-1516550135131-f3f84f40c7bc?w=600&q=80', // Cannes
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80', // Monaco
    'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80', // Saint-Tropez
  ];

  return (
    <section id="location" className="bg-surface-low py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <p className="font-plus-jakarta text-xs tracking-widest text-on-surface/40 uppercase mb-3">{l.label}</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary" style={{ letterSpacing: '-0.02em' }}>
            {l.title}
          </h2>
          <p className="font-plus-jakarta text-sm text-on-surface/50 mt-3">{l.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {l.cities.map((city, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="rounded-3xl overflow-hidden group relative"
              style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.10)' }}
            >
              {/* City image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cityImages[i]}
                  alt={`Yoga privé à ${city.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(40,53,28,0.75) 0%, transparent 60%)' }} />
                <h3 className="absolute bottom-4 left-5 font-noto-serif text-2xl text-surface" style={{ letterSpacing: '-0.02em' }}>
                  {city.name}
                </h3>
              </div>

              {/* Description */}
              <div className="bg-surface p-5">
                <p className="font-plus-jakarta text-xs text-on-surface/55 leading-relaxed">{city.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-plus-jakarta text-sm text-on-surface/45 text-center mt-10 italic">
          {l.note}
        </p>
      </div>
    </section>
  );
}
