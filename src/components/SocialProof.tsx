'use client';

import { useEffect, useRef } from 'react';
import { revealStagger } from '../lib/animations';

export default function SocialProof() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && itemsRef.current.length > 0) {
      revealStagger(itemsRef.current, 0.15);
    }
  }, []);

  return (
    <section className="bg-surface-high py-10">
      <div className="flex justify-center items-center gap-0">
        <div ref={(el) => { itemsRef.current[0] = el; }} className="text-center px-10 md:px-20">
          <div className="font-noto-serif text-4xl text-primary">+200</div>
          <div className="font-plus-jakarta text-xs text-on-surface/50 mt-1.5 tracking-wide">élèves accompagnés</div>
        </div>
        <div ref={(el) => { itemsRef.current[1] = el; }} className="text-center px-10 md:px-20">
          <div className="font-noto-serif text-4xl text-primary">8 ans</div>
          <div className="font-plus-jakarta text-xs text-on-surface/50 mt-1.5 tracking-wide">d'enseignement</div>
        </div>
        <div ref={(el) => { itemsRef.current[2] = el; }} className="text-center px-10 md:px-20">
          <div className="font-noto-serif text-4xl text-primary">4.9 ★</div>
          <div className="font-plus-jakarta text-xs text-on-surface/50 mt-1.5 tracking-wide">avis vérifiés</div>
        </div>
      </div>
    </section>
  );
}
