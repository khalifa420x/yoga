'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useLang } from '../contexts/LanguageContext';

export default function About() {
  const photoRef = useRef(null);
  const textRef = useRef(null);
  const { tr } = useLang();
  const a = tr.about;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      if (photoRef.current) gsap.fromTo(photoRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 });
      if (textRef.current) gsap.fromTo(textRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 1, delay: 0.2 });
    }
  }, []);

  return (
    <section id="about" className="bg-primary py-28 md:py-32 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <div ref={photoRef} className="w-full">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=90"
              alt="Naya — professeure de yoga privé dans le Sud de la France"
              width={560}
              height={680}
              className="rounded-3xl w-full object-cover max-w-full"
              style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.25)' }}
            />
          </div>

          {/* Text */}
          <div ref={textRef}>
            <span className="font-plus-jakarta text-xs tracking-widest text-sage-light uppercase mb-4 block">{a.label}</span>
            <h2 className="font-noto-serif text-4xl md:text-5xl text-surface mb-2" style={{ letterSpacing: '-0.02em' }}>{a.name}</h2>
            <p className="font-plus-jakarta text-sm text-surface/45 mb-10">{a.certif}</p>
            <div className="space-y-5">
              <p className="font-plus-jakarta text-base text-surface/80 leading-relaxed">{a.bio1}</p>
              <p className="font-plus-jakarta text-base text-surface/80 leading-relaxed">{a.bio2}</p>
            </div>
            <a href="#services" className="font-plus-jakarta text-sm text-sage-light underline underline-offset-4 mt-10 inline-block hover:text-surface transition">
              {a.link}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
