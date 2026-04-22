'use client';

import { useEffect, useRef } from 'react';
import { revealStagger } from '../lib/animations';
import { useLang } from '../contexts/LanguageContext';

export default function SocialProof() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { tr } = useLang();
  const s = tr.socialProof;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && itemsRef.current.length > 0) revealStagger(itemsRef.current, 0.12);
  }, []);

  const stats = [s.stat1, s.stat2, s.stat3, s.stat4];

  return (
    <section className="bg-surface-high py-8 md:py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="text-center py-2 md:py-0"
            >
              <div className="font-noto-serif text-2xl md:text-3xl text-primary">{stat.value}</div>
              <div className="font-plus-jakarta text-xs text-on-surface/45 mt-1 leading-snug px-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
