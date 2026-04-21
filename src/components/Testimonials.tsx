'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { revealStagger } from '../lib/animations';

export default function Testimonials() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && cardsRef.current.length > 0) {
      revealStagger(cardsRef.current, 0.15);
    }
  }, []);

  return (
    <section className="bg-primary py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-xs tracking-widest text-sage-light mb-3 font-plus-jakarta uppercase">Ils en parlent mieux que nous</p>
          <h2 className="font-noto-serif text-3xl md:text-4xl text-surface mt-3 mb-16" style={{ letterSpacing: '-0.02em' }}>
            Ce que nos élèves ressentent
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            ref={(el) => { cardsRef.current[0] = el; }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="rounded-3xl p-8"
            style={{ background: '#3e4c31', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          >
            <div className="text-gold text-sm mb-4">★★★★★</div>
            <div className="font-noto-serif text-9xl leading-none -mt-6 mb-2" style={{ color: 'rgba(90,122,95,0.40)' }}>"</div>
            <p className="font-noto-serif italic text-lg text-surface leading-relaxed -mt-4">
              Je venais pour mon dos. Trois mois plus tard, je dors mieux, j'ai moins d'anxiété, et je me sens plus légère dans ma tête. Je n'aurais pas parié là-dessus.
            </p>
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(90,122,95,0.20)' }}>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=85"
                  alt="Sophie M."
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <p className="font-plus-jakarta text-sm text-surface/60">Sophie M. · 38 ans · Hatha depuis 3 mois</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            ref={(el) => { cardsRef.current[1] = el; }}
            whileHover={{ y: -5, transition: { duration: 0.22, ease: 'easeOut' } }}
            className="rounded-3xl p-8"
            style={{ background: '#3e4c31', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
          >
            <div className="text-gold text-sm mb-4">★★★★★</div>
            <div className="font-noto-serif text-9xl leading-none -mt-6 mb-2" style={{ color: 'rgba(90,122,95,0.40)' }}>"</div>
            <p className="font-noto-serif italic text-lg text-surface leading-relaxed -mt-4">
              Marie explique tout simplement. Je n'avais jamais fait de yoga, j'avais peur de ne pas y arriver. Dès la première séance, j'étais à ma place.
            </p>
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(90,122,95,0.20)' }}>
              <div className="flex items-center gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=85"
                  alt="Thomas L."
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <p className="font-plus-jakarta text-sm text-surface/60">Thomas L. · 44 ans · Débutant absolu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
