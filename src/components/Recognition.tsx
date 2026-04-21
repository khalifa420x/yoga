'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { revealStagger } from '../lib/animations';

export default function Recognition() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.13);
    }
  }, []);

  return (
    <section className="bg-surface py-32">
      <div className="text-center">
        <p className="text-xs tracking-widest text-on-surface/40 mb-3 font-plus-jakarta uppercase">Ce site est fait pour vous si…</p>
        <h2 className="font-noto-serif text-3xl md:text-4xl text-primary mt-3 mb-16" style={{ letterSpacing: '-0.02em' }}>
          Vous vous reconnaissez ici ?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        <motion.div
          ref={(el) => { cardsRef.current[0] = el; }}
          whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
          className="bg-surface-high rounded-3xl p-8"
          style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary mb-5">
            <path d="M12 2l-1 9h2l-1 9-4-6h-4l6-12z" />
          </svg>
          <h3 className="font-plus-jakarta font-semibold text-base text-on-surface mb-3">
            Vous n'avez jamais fait de yoga
          </h3>
          <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed">
            Et vous avez peur de ne pas y arriver. Les cours débutants sont conçus exactement pour ça. Aucun niveau requis, aucune souplesse nécessaire.
          </p>
        </motion.div>

        <motion.div
          ref={(el) => { cardsRef.current[1] = el; }}
          whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
          className="bg-surface-high rounded-3xl p-8"
          style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary mb-5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <h3 className="font-plus-jakarta font-semibold text-base text-on-surface mb-3">
            Vous rentrez épuisé et stressé
          </h3>
          <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed">
            Vous cherchez à vraiment décompresser, pas juste à vous distraire. Une heure de cours suffit pour repartir différent.
          </p>
        </motion.div>

        <motion.div
          ref={(el) => { cardsRef.current[2] = el; }}
          whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
          className="bg-surface-high rounded-3xl p-8"
          style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary mb-5">
            <path d="M12 2a2 2 0 0 0-2 2v2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2z" />
          </svg>
          <h3 className="font-plus-jakarta font-semibold text-base text-on-surface mb-3">
            Vous avez des douleurs chroniques
          </h3>
          <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed">
            Dos, tensions, insomnies. Le yoga adapté soulage. Pas en une séance, mais rapidement et durablement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
