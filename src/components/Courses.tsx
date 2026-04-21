'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { revealStagger } from '../lib/animations';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function Courses() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.12);
    }
  }, []);

  return (
    <section id="courses" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-text-light mb-3">LES COURS</p>
          <h2 className="font-dm-serif text-3xl md:text-4xl text-text-main mt-3 mb-12">
            Choisissez ce dont vous avez besoin
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            ref={(el) => { cardsRef.current[0] = el; }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)', transition: { duration: 0.22, ease: 'easeOut' } }}
          >
            <Card className="bg-white border border-sand/60 rounded-2xl p-8 overflow-hidden">
              <Badge variant="outline" className="bg-sage-pale text-forest border-0">Doux · Débutant</Badge>
              <h3 className="font-dm-serif text-2xl text-text-main mt-4 mb-2">Hatha Yoga</h3>
              <p className="font-inter italic text-sm text-text-muted mb-4">Vous débutez ou vous manquez de souplesse</p>
              <p className="font-inter text-sm text-text-muted leading-relaxed mb-6">
                Le cours le plus accessible. On apprend les postures de base à son rythme, sans effort excessif. Aucun prérequis — ni souplesse, ni expérience. Parfait pour découvrir le yoga en douceur.
              </p>
              <div className="border-t border-sand"></div>
              <div className="flex justify-between pt-4 text-xs text-text-light">
                <span>⏱ 1h</span>
                <span>👥 8 pers. max</span>
                <span>💶 18€</span>
              </div>
              <span className="text-sm text-sage hover:underline mt-5 inline-block cursor-pointer">Réserver ce cours →</span>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            ref={(el) => { cardsRef.current[1] = el; }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)', transition: { duration: 0.22, ease: 'easeOut' } }}
          >
            <Card className="bg-white border border-sand/60 rounded-2xl p-8 overflow-hidden">
              <Badge variant="outline" className="bg-blue-pale text-indigo-800 border-0">Dynamique · Intermédiaire</Badge>
              <h3 className="font-dm-serif text-2xl text-text-main mt-4 mb-2">Vinyasa Yoga</h3>
              <p className="font-inter italic text-sm text-text-muted mb-4">Vous voulez bouger et sentir votre corps</p>
              <p className="font-inter text-sm text-text-muted leading-relaxed mb-6">
                Des postures enchaînées au rythme de la respiration. Plus vivant que le Hatha, sans être un cours de sport. L'objectif : se sentir léger et fort à la fois. Recommandé si vous avez quelques bases.
              </p>
              <div className="border-t border-sand"></div>
              <div className="flex justify-between pt-4 text-xs text-text-light">
                <span>⏱ 1h</span>
                <span>👥 8 pers. max</span>
                <span>💶 20€</span>
              </div>
              <span className="text-sm text-sage hover:underline mt-5 inline-block cursor-pointer">Réserver ce cours →</span>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            ref={(el) => { cardsRef.current[2] = el; }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)', transition: { duration: 0.22, ease: 'easeOut' } }}
          >
            <Card className="bg-white border border-sand/60 rounded-2xl p-8 overflow-hidden">
              <Badge variant="outline" className="bg-terra-pale text-amber-900 border-0">Profond · Anti-stress</Badge>
              <h3 className="font-dm-serif text-2xl text-text-main mt-4 mb-2">Yin Yoga</h3>
              <p className="font-inter italic text-sm text-text-muted mb-4">Vous êtes épuisé, stressé, ou vous dormez mal</p>
              <p className="font-inter text-sm text-text-muted leading-relaxed mb-6">
                Très lent et méditatif. On tient chaque posture longtemps pour relâcher les tensions profondes que les autres activités n'atteignent pas. Idéal le soir ou pour les personnalités anxieuses.
              </p>
              <div className="border-t border-sand"></div>
              <div className="flex justify-between pt-4 text-xs text-text-light">
                <span>⏱ 1h15</span>
                <span>👥 6 pers. max</span>
                <span>💶 18€</span>
              </div>
              <span className="text-sm text-sage hover:underline mt-5 inline-block cursor-pointer">Réserver ce cours →</span>
            </Card>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            ref={(el) => { cardsRef.current[3] = el; }}
            whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(0,0,0,0.10)', transition: { duration: 0.22, ease: 'easeOut' } }}
          >
            <Card className="bg-white border border-sand/60 rounded-2xl p-8 overflow-hidden">
              <Badge variant="outline" className="bg-violet-pale text-purple-900 border-0">Personnalisé · 1:1</Badge>
              <h3 className="font-dm-serif text-2xl text-text-main mt-4 mb-2">Cours Privé</h3>
              <p className="font-inter italic text-sm text-text-muted mb-4">Vous avez des contraintes spécifiques ou voulez progresser vite</p>
              <p className="font-inter text-sm text-text-muted leading-relaxed mb-6">
                Une séance conçue uniquement pour vous — votre corps, votre niveau, vos objectifs. La façon la plus directe et efficace de commencer ou de progresser.
              </p>
              <div className="border-t border-sand"></div>
              <div className="flex justify-between pt-4 text-xs text-text-light">
                <span>⏱ 1h</span>
                <span>👤 Individuel</span>
                <span>💶 75€</span>
              </div>
              <span className="text-sm text-sage hover:underline mt-5 inline-block cursor-pointer">Réserver ce cours →</span>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}