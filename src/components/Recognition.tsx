'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { revealStagger } from '../lib/animations';
import { Card } from '../ui/card';

export default function Recognition() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.13);
    }
  }, []);

  return (
    <section className="bg-cream py-20">
      <div className="text-center">
        <p className="text-xs tracking-widest text-text-light mb-3">CE SITE EST FAIT POUR VOUS SI...</p>
        <h2 className="font-dm-serif text-3xl md:text-4xl text-text-main mt-3 mb-12">
          Vous vous reconnaissez ici ?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-6">
        <motion.div
          ref={(el) => (cardsRef.current[0] = el)}
          whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: { duration: 0.22, ease: 'easeOut' } }}
        >
          <Card className="bg-white border border-sand rounded-2xl p-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage mb-5">
              <path d="M12 2l-1 9h2l-1 9-4-6h-4l6-12z" />
            </svg>
            <h3 className="font-inter font-medium text-base text-text-main mb-3">
              Vous n'avez jamais fait de yoga
            </h3>
            <p className="font-inter text-sm text-text-muted leading-relaxed">
              Et vous avez peur de ne pas y arriver. Les cours débutants sont conçus exactement pour ça. Aucun niveau requis, aucune souplesse nécessaire.
            </p>
          </Card>
        </motion.div>

        <motion.div
          ref={(el) => (cardsRef.current[1] = el)}
          whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: { duration: 0.22, ease: 'easeOut' } }}
        >
          <Card className="bg-white border border-sand rounded-2xl p-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage mb-5">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <h3 className="font-inter font-medium text-base text-text-main mb-3">
              Vous rentrez épuisé et stressé
            </h3>
            <p className="font-inter text-sm text-text-muted leading-relaxed">
              Vous cherchez à vraiment décompresser, pas juste à vous distraire. Une heure de cours suffit pour repartir différent.
            </p>
          </Card>
        </motion.div>

        <motion.div
          ref={(el) => (cardsRef.current[2] = el)}
          whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: { duration: 0.22, ease: 'easeOut' } }}
        >
          <Card className="bg-white border border-sand rounded-2xl p-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage mb-5">
              <path d="M12 2a2 2 0 0 0-2 2v2H8a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2h2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2z" />
            </svg>
            <h3 className="font-inter font-medium text-base text-text-main mb-3">
              Vous avez des douleurs chroniques
            </h3>
            <p className="font-inter text-sm text-text-muted leading-relaxed">
              Dos, tensions, insomnies. Le yoga adapté soulage. Pas en une séance, mais rapidement et durablement.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}