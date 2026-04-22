'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useLang } from '../contexts/LanguageContext';

export default function Hero() {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const { tr } = useLang();
  const h = tr.hero;

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced && bgRef.current) {
      gsap.fromTo(bgRef.current, { scale: 1 }, { scale: 1.05, duration: 14, ease: 'none' });
    }
    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, delay: 0.3, duration: 1 });
    }
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, delay: 0.9, duration: 0.7 });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden w-full" aria-label="Hero">
      {/* Background */}
      <Image
        ref={bgRef}
        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=90"
        alt="Séance de yoga privée dans une villa du Sud de la France"
        fill
        className="object-cover object-top md:object-[center_20%]"
        priority
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(150deg, rgba(26,31,20,0.88) 0%, rgba(26,31,20,0.50) 50%, rgba(26,31,20,0.20) 100%)' }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-20 md:pb-28 px-4 md:pl-16 md:pr-8">
        <div ref={textRef} className="max-w-3xl">
          <span className="font-plus-jakarta text-xs tracking-widest text-surface/60 uppercase mb-4 block">
            {h.label}
          </span>
          <h1
            className="font-noto-serif font-bold text-4xl md:text-6xl lg:text-7xl text-surface leading-[0.93]"
            style={{ letterSpacing: '-0.02em' }}
          >
            {h.h1}
          </h1>
          <p className="font-plus-jakarta text-base md:text-lg text-surface/80 mt-6 max-w-xl leading-relaxed">
            {h.subtitle}
          </p>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-3xl">
          <motion.a
            href="#contact"
            className="text-surface rounded-full px-8 py-4 font-plus-jakarta text-base font-medium w-full sm:w-auto text-center"
            style={{ background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)', boxShadow: '0 20px 40px rgba(40,53,28,0.35)' }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            {h.ctaPrimary}
          </motion.a>
          <a
            href="#services"
            className="text-surface/70 text-sm font-plus-jakarta underline underline-offset-4 self-center text-center"
          >
            {h.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
