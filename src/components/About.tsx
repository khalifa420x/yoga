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
        gsap.fromTo(photoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.9 });
      }
      if (textRef.current) {
        gsap.fromTo(textRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.9, delay: 0.18 });
      }
    }
  }, []);

  return (
    <section id="about" className="bg-primary py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div ref={photoRef}>
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85"
              alt="Sophie Laurent, professeure de yoga à Montpellier"
              width={480}
              height={600}
              className="rounded-3xl w-full object-cover"
              style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.20)' }}
            />
          </div>

          {/* Text */}
          <div ref={textRef}>
            <span className="text-xs tracking-widest text-sage-light mb-4 block font-plus-jakarta uppercase">Votre professeure</span>
            <h2 className="font-noto-serif text-4xl text-surface mb-1" style={{ letterSpacing: '-0.02em' }}>Sophie Laurent</h2>
            <p className="font-plus-jakarta text-sm text-surface/50 mb-10">Professeure certifiée · 8 ans · 200h RYT</p>
            <div className="space-y-5">
              <p className="font-plus-jakarta text-base text-surface/80 leading-relaxed">
                J'enseigne le yoga parce que j'en ai moi-même eu besoin. Après une période d'épuisement intense, le yoga m'a aidée à retrouver mon équilibre — pas en devenant quelqu'un d'autre, mais en prenant soin de moi simplement.
              </p>
              <p className="font-plus-jakarta text-base text-surface/80 leading-relaxed">
                Mes cours sont accessibles, sans jargon. On part de là où vous en êtes aujourd'hui, avec le corps que vous avez.
              </p>
            </div>
            <a
              href="#approach"
              className="font-plus-jakarta text-sm text-sage-light underline underline-offset-4 mt-10 inline-block hover:text-surface transition"
            >
              Mon approche en détail ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
