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

    // Background zoom animation
    if (!prefersReducedMotion && bgRef.current) {
      gsap.fromTo(bgRef.current, { scale: 1 }, { scale: 1.05, duration: 12, ease: 'none' });
    }

    // Text reveal
    if (textRef.current) {
      gsap.fromTo(textRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, delay: 0.3, duration: 0.8 });
    }

    // CTA reveal
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, delay: 0.75, duration: 0.6 });
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
        className="hero-bg object-cover"
        priority
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(42,42,36,0.75) 0%, rgba(42,42,36,0.20) 60%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 pb-12 pl-6 md:pb-20 md:pl-16">
        <div ref={textRef} className="hero-text">
          <h1 className="font-dm-serif italic text-4xl md:text-6xl text-white leading-tight">
            Retrouvez un corps léger et un esprit calme
          </h1>
          <p className="font-inter text-base text-white/80 mt-4 max-w-md">
            Des cours accessibles à tous, même si vous n'avez jamais fait de yoga.
          </p>
        </div>

        <div ref={ctaRef} className="hero-cta mt-8">
          <motion.button
            className="bg-sage text-white rounded-full px-8 py-4 font-inter text-base"
            whileHover={{
              scale: 1.03,
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              transition: { duration: 0.22 }
            }}
          >
            Réserver ma première séance →
          </motion.button>
          <button
            onClick={handleScrollToCourses}
            className="text-white/70 underline text-sm mt-3 block font-inter"
          >
            Découvrir les cours ↓
          </button>
        </div>
      </div>

      {/* Desktop Vignette */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <div className="w-40 h-52 rounded-2xl overflow-hidden border-2 border-white/20">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=85"
            alt="Studio Montpellier"
            width={160}
            height={208}
            className="object-cover"
          />
        </div>
        <p className="text-white/60 text-xs mt-2 text-center font-inter">
          Studio · Montpellier
        </p>
      </div>
    </section>
  );
}