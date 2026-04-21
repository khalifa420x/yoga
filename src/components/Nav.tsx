'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-16 md:h-18 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <div className="font-dm-serif text-xl text-text-main">
        Sophie · Yoga
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="font-inter text-sm text-text-muted hover:text-text-main transition-colors">
          About
        </a>
        <a href="#cours" className="font-inter text-sm text-text-muted hover:text-text-main transition-colors">
          Cours
        </a>
        <a href="#horaires" className="font-inter text-sm text-text-muted hover:text-text-main transition-colors">
          Horaires
        </a>
        <a href="#contact" className="font-inter text-sm text-text-muted hover:text-text-main transition-colors">
          Contact
        </a>
      </div>

      {/* Button */}
      <motion.button
        className="bg-sage text-white rounded-full px-6 py-2.5 font-inter text-sm"
        whileHover={{ scale: 1.03, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Réserver une séance
      </motion.button>
    </nav>
  );
}