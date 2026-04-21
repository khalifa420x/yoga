'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export default function Hero() {
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && bgRef.current) {
      gsap.fromTo(bgRef.current, { scale: 1 }, { scale: 1.05, duration: 12, ease: 'none' });
    }
    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3, duration: 0.9 });
    }
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, delay: 0.8, duration: 0.7 });
    }
  }, []);

  const handleScrollToCourses = () => {
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        ref={bgRef}
        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=85"
        alt="Yoga background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay — dark gradient bottom-left, subtle */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,31,20,0.80) 0%, rgba(28,31,20,0.35) 55%, transparent 100%)'
        }}
      />

      {/* Content — bottom left, editorial */}
      <div className="absolute bottom-0 left-0 pb-16 pl-6 md:pb-24 md:pl-16 max-w-2xl">
        <div ref={textRef}>
          <h1
            className="font-noto-serif font-bold text-6xl md:text-8xl text-surface leading-[0.92] tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Retrouvez<br />un corps<br />léger
          </h1>
          <p className="font-plus-jakarta text-lg text-surface/85 mt-6 max-w-md leading-relaxed">
            Des cours accessibles à tous, même si vous n'avez jamais fait de yoga.
          </p>
        </div>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4">
          <motion.button
            className="text-surface rounded-full px-8 py-4 font-plus-jakarta text-base font-medium w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)',
              boxShadow: '0 20px 40px rgba(40,53,28,0.30)',
            }}
            whileHover={{ scale: 1.03, transition: { duration: 0.22 } }}
          >
            Réserver ma première séance →
          </motion.button>
          <button
            onClick={handleScrollToCourses}
            className="text-surface/70 text-sm font-plus-jakarta underline underline-offset-4 self-center"
          >
            Découvrir les cours ↓
          </button>
        </div>
      </div>

      {/* Desktop vignette — no border, soft rounded */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="w-40 h-52 rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(40,53,28,0.20)' }}>
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=85"
            alt="Studio Montpellier"
            width={160}
            height={208}
            className="object-cover"
          />
        </div>
        <p className="text-surface/60 text-xs mt-2 text-center font-plus-jakarta">
          Studio · Montpellier
        </p>
      </div>
    </section>
  );
}
