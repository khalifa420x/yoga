'use client';

import { useEffect, useRef } from 'react';
import { revealStagger } from '../lib/animations';

export default function Benefits() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && itemsRef.current.length > 0) {
      revealStagger(itemsRef.current, 0.1);
    }
  }, []);

  return (
    <section className="bg-surface-high py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-on-surface/40 mb-3 font-plus-jakarta uppercase">Pourquoi le yoga</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary mt-3 mb-16" style={{ letterSpacing: '-0.02em' }}>
            Ce que vous allez ressentir dès les premières séances
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-4">
          <div ref={(el) => { itemsRef.current[0] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <path d="M12 2v20M5 9l7-7 7 7M5 15l7-7 7 7" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Moins de stress</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Vous décompressez vraiment, pas juste en surface</p>
          </div>

          <div ref={(el) => { itemsRef.current[1] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Meilleur sommeil</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Corps et tête apaisés, endormissement plus facile</p>
          </div>

          <div ref={(el) => { itemsRef.current[2] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <path d="M12 2v20M8 6h8M8 10h8M8 14h8M8 18h8" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Dos soulagé</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Les tensions chroniques s'allègent progressivement</p>
          </div>

          <div ref={(el) => { itemsRef.current[3] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <path d="M12 2v20M8 8l4-4 4 4M8 16l4 4 4-4" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Meilleure posture</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Votre corps se tient mieux, naturellement</p>
          </div>

          <div ref={(el) => { itemsRef.current[4] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <circle cx="12" cy="8" r="4" />
              <path d="M12 12v4M10 14h4" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Mental plus clair</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Vous pensez mieux, vous vous emballez moins</p>
          </div>

          <div ref={(el) => { itemsRef.current[5] = el; }} className="flex flex-col items-start md:items-center text-left md:text-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-primary mb-4">
              <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
              <line x1="23" y1="13" x2="23" y2="11" />
            </svg>
            <h3 className="font-noto-serif text-base text-on-surface mb-2">Énergie retrouvée</h3>
            <p className="font-plus-jakarta text-sm text-on-surface/55 leading-relaxed">Vous repartez rechargé, pas épuisé</p>
          </div>
        </div>
      </div>
    </section>
  );
}
