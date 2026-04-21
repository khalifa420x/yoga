'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function About() {
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      if (photoRef.current) {
        gsap.fromTo(photoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8 });
      }
      if (textRef.current) {
        gsap.fromTo(textRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.15 });
      }
    }
  }, []);

  return (
    <section className="bg-forest py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div ref={photoRef}>
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85"
              alt="Sophie Laurent, professeure de yoga à Montpellier"
              width={480}
              height={600}
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Text */}
          <div ref={textRef}>
            <span className="text-xs tracking-widest text-sage-light mb-4 block">VOTRE PROFESSEURE</span>
            <h2 className="font-dm-serif text-4xl text-cream mb-1">Sophie Laurent</h2>
            <p className="font-inter text-sm text-cream/60 mb-8">Professeure certifiée · 8 ans · 200h RYT</p>
            <div className="space-y-4">
              <p className="font-inter text-base text-cream/80 leading-relaxed">
                J'enseigne le yoga parce que j'en ai moi-même eu besoin. Après une période d'épuisement intense, le yoga m'a aidée à retrouver mon équilibre — pas en devenant quelqu'un d'autre, mais en prenant soin de moi simplement.
              </p>
              <p className="font-inter text-base text-cream/80 leading-relaxed">
                Mes cours sont accessibles, sans jargon. On part de là où vous en êtes aujourd'hui, avec le corps que vous avez.
              </p>
            </div>
            <a
              href="#approach"
              className="text-sm text-sage-light underline mt-8 inline-block hover:text-cream transition"
            >
              Mon approche en détail ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}