'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-16 md:h-18 flex items-center justify-between px-4 md:px-10 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(252,249,239,0.85)' } : undefined}
    >
      {/* Logo */}
      <div className="font-noto-serif italic text-xl text-primary tracking-tight">
        Sophie · Yoga
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="font-plus-jakarta text-sm text-on-surface/70 hover:text-primary transition-colors">
          About
        </a>
        <a href="#cours" className="font-plus-jakarta text-sm text-on-surface/70 hover:text-primary transition-colors">
          Cours
        </a>
        <a href="#horaires" className="font-plus-jakarta text-sm text-on-surface/70 hover:text-primary transition-colors">
          Horaires
        </a>
        <a href="#contact" className="font-plus-jakarta text-sm text-on-surface/70 hover:text-primary transition-colors">
          Contact
        </a>
      </div>

      {/* Button */}
      <motion.button
        className="text-surface rounded-full px-6 py-2.5 font-plus-jakarta text-sm font-medium"
        style={{
          background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)',
          boxShadow: '0 4px 16px rgba(40,53,28,0.18)',
        }}
        whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(40,53,28,0.28)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Réserver une séance
      </motion.button>
    </nav>
  );
}
