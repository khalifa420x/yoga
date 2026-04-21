'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { revealStagger } from '../lib/animations';

export default function Testimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.15);
    }
  }, []);

  return (
    <section className="bg-forest py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-sage-light mb-3">ILS EN PARLENT MIEUX QUE NOUS</p>
          <h2 className="font-dm-serif text-3xl md:text-4xl text-cream mt-3 mb-12">
            Ce que nos élèves ressentent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1 */}
          <motion.div
            ref={(el) => (cardsRef.current[0] = el)}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.20)', transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-forest border border-sage/20 rounded-2xl p-8"
          >
            <div className="text-gold text-sm mb-4">★★★★★</div>
            <div className="font-dm-serif text-8xl text-sage/30 leading-none -mt-4 mb-2">"</div>
            <p className="font-dm-serif italic text-lg text-cream leading-relaxed">
              Je venais pour mon dos. Trois mois plus tard, je dors mieux, j'ai moins d'anxiété, et je me sens plus légère dans ma tête. Je n'aurais pas parié là-dessus.
            </p>
            <div className="border-t border-sage/20 mt-6 pt-6">
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=85"
                  alt="Sophie M."
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <p className="font-inter text-sm text-cream/70">Sophie M. · 38 ans · Hatha depuis 3 mois</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            ref={(el) => (cardsRef.current[1] = el)}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.20)', transition: { duration: 0.22, ease: 'easeOut' } }}
            className="bg-forest border border-sage/20 rounded-2xl p-8"
          >
            <div className="text-gold text-sm mb-4">★★★★★</div>
            <div className="font-dm-serif text-8xl text-sage/30 leading-none -mt-4 mb-2">"</div>
            <p className="font-dm-serif italic text-lg text-cream leading-relaxed">
              Marie explique tout simplement. Je n'avais jamais fait de yoga, j'avais peur de ne pas y arriver. Dès la première séance, j'étais à ma place.
            </p>
            <div className="border-t border-sage/20 mt-6 pt-6">
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=85"
                  alt="Thomas L."
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <p className="font-inter text-sm text-cream/70">Thomas L. · 44 ans · Débutant absolu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}