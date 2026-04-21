'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { revealStagger } from '../lib/animations';

export default function Courses() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.12);
    }
  }, []);

  return (
    <section id="courses" className="bg-surface-low py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-on-surface/40 mb-3 font-plus-jakarta uppercase">Les cours</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-primary mt-3 mb-16" style={{ letterSpacing: '-0.02em' }}>
            Choisissez ce dont vous avez besoin
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 — Hatha */}
          <motion.div
            ref={(el) => { cardsRef.current[0] = el; }}
            whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-surface rounded-3xl p-8 overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-plus-jakarta font-medium rounded-full px-3 py-1">Doux · Débutant</span>
            <h3 className="font-noto-serif text-2xl text-on-surface mt-4 mb-2" style={{ letterSpacing: '-0.02em' }}>Hatha Yoga</h3>
            <p className="font-plus-jakarta italic text-sm text-on-surface/50 mb-4">Vous débutez ou vous manquez de souplesse</p>
            <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed mb-8">
              Le cours le plus accessible. On apprend les postures de base à son rythme, sans effort excessif. Aucun prérequis — ni souplesse, ni expérience. Parfait pour découvrir le yoga en douceur.
            </p>
            <div className="flex justify-between text-xs text-on-surface/40 font-plus-jakarta mb-5">
              <span>⏱ 1h</span>
              <span>👥 8 pers. max</span>
              <span>💶 18€</span>
            </div>
            <span className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2 cursor-pointer">Réserver ce cours →</span>
          </motion.div>

          {/* Card 2 — Vinyasa */}
          <motion.div
            ref={(el) => { cardsRef.current[1] = el; }}
            whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-surface rounded-3xl p-8 overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-plus-jakarta font-medium rounded-full px-3 py-1">Dynamique · Intermédiaire</span>
            <h3 className="font-noto-serif text-2xl text-on-surface mt-4 mb-2" style={{ letterSpacing: '-0.02em' }}>Vinyasa Yoga</h3>
            <p className="font-plus-jakarta italic text-sm text-on-surface/50 mb-4">Vous voulez bouger et sentir votre corps</p>
            <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed mb-8">
              Des postures enchaînées au rythme de la respiration. Plus vivant que le Hatha, sans être un cours de sport. L'objectif : se sentir léger et fort à la fois. Recommandé si vous avez quelques bases.
            </p>
            <div className="flex justify-between text-xs text-on-surface/40 font-plus-jakarta mb-5">
              <span>⏱ 1h</span>
              <span>👥 8 pers. max</span>
              <span>💶 20€</span>
            </div>
            <span className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2 cursor-pointer">Réserver ce cours →</span>
          </motion.div>

          {/* Card 3 — Yin */}
          <motion.div
            ref={(el) => { cardsRef.current[2] = el; }}
            whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-surface rounded-3xl p-8 overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-plus-jakarta font-medium rounded-full px-3 py-1">Profond · Anti-stress</span>
            <h3 className="font-noto-serif text-2xl text-on-surface mt-4 mb-2" style={{ letterSpacing: '-0.02em' }}>Yin Yoga</h3>
            <p className="font-plus-jakarta italic text-sm text-on-surface/50 mb-4">Vous êtes épuisé, stressé, ou vous dormez mal</p>
            <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed mb-8">
              Très lent et méditatif. On tient chaque posture longtemps pour relâcher les tensions profondes que les autres activités n'atteignent pas. Idéal le soir ou pour les personnalités anxieuses.
            </p>
            <div className="flex justify-between text-xs text-on-surface/40 font-plus-jakarta mb-5">
              <span>⏱ 1h15</span>
              <span>👥 6 pers. max</span>
              <span>💶 18€</span>
            </div>
            <span className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2 cursor-pointer">Réserver ce cours →</span>
          </motion.div>

          {/* Card 4 — Privé */}
          <motion.div
            ref={(el) => { cardsRef.current[3] = el; }}
            whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-surface rounded-3xl p-8 overflow-hidden"
            style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.06)' }}
          >
            <span className="inline-block bg-primary/10 text-primary text-xs font-plus-jakarta font-medium rounded-full px-3 py-1">Personnalisé · 1:1</span>
            <h3 className="font-noto-serif text-2xl text-on-surface mt-4 mb-2" style={{ letterSpacing: '-0.02em' }}>Cours Privé</h3>
            <p className="font-plus-jakarta italic text-sm text-on-surface/50 mb-4">Vous avez des contraintes spécifiques ou voulez progresser vite</p>
            <p className="font-plus-jakarta text-sm text-on-surface/60 leading-relaxed mb-8">
              Une séance conçue uniquement pour vous — votre corps, votre niveau, vos objectifs. La façon la plus directe et efficace de commencer ou de progresser.
            </p>
            <div className="flex justify-between text-xs text-on-surface/40 font-plus-jakarta mb-5">
              <span>⏱ 1h</span>
              <span>👤 Individuel</span>
              <span>💶 75€</span>
            </div>
            <span className="font-plus-jakarta text-sm text-primary hover:underline underline-offset-2 cursor-pointer">Réserver ce cours →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
