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
    <section className="bg-sand py-8">
      <div className="flex justify-center items-center">
        <div ref={(el) => { itemsRef.current[0] = el; }} className="text-center px-8 md:px-16 border-r border-text-light/20">
          <div className="font-dm-serif text-3xl text-sage">+200</div>
          <div className="font-inter text-xs text-text-light mt-1">élèves accompagnés</div>
        </div>
        <div ref={(el) => { itemsRef.current[1] = el; }} className="text-center px-8 md:px-16 border-r border-text-light/20">
          <div className="font-dm-serif text-3xl text-sage">8 ans</div>
          <div className="font-inter text-xs text-text-light mt-1">d'enseignement</div>
        </div>
        <div ref={(el) => { itemsRef.current[2] = el; }} className="text-center px-8 md:px-16">
          <div className="font-dm-serif text-3xl text-sage">4.9 ★</div>
          <div className="font-inter text-xs text-text-light mt-1">avis vérifiés</div>
        </div>
      </div>
    </section>
  );
}