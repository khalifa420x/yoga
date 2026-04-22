'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../contexts/LanguageContext';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { tr, toggle, lang } = useLang();
  const n = tr.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-16 flex items-center justify-between px-4 md:px-10 transition-all duration-500 w-full ${
        scrolled ? 'backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(252,249,239,0.88)' } : undefined}
    >
      {/* Logo */}
      <a href="#" className="font-noto-serif italic text-lg md:text-xl text-primary tracking-tight shrink-0 leading-tight">
        {n.brand}
      </a>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center space-x-7">
        {([['#about', n.about], ['#services', n.services], ['#experience', n.experience], ['#testimonials', n.testimonials], ['#location', n.location], ['#contact', n.contact]] as const).map(([href, label]) => (
          <a key={href} href={href} className="font-plus-jakarta text-sm text-on-surface/65 hover:text-primary transition-colors">
            {label}
          </a>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Language toggle */}
        <button
          onClick={toggle}
          className="font-plus-jakarta text-xs text-on-surface/50 hover:text-primary transition-colors px-2 py-1 hidden md:block"
          aria-label={`Switch to ${lang === 'fr' ? 'English' : 'Français'}`}
        >
          {n.toggleLang}
        </button>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="text-surface rounded-full px-4 py-2 md:px-5 md:py-2.5 font-plus-jakarta text-sm font-medium"
          style={{ background: 'linear-gradient(135deg, #28351c 0%, #3e4c31 100%)', boxShadow: '0 4px 16px rgba(40,53,28,0.18)' }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(40,53,28,0.28)' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {n.cta}
        </motion.a>
      </div>
    </nav>
  );
}
