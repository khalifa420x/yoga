'use client';

import { useLang } from '../contexts/LanguageContext';

export default function Footer() {
  const { tr } = useLang();
  const f = tr.footer;

  return (
    <footer className="bg-primary py-14 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="font-noto-serif italic text-xl text-surface/85">
          {f.brand}
        </p>
        <p className="font-plus-jakarta text-xs tracking-widest text-surface/40 mt-1 uppercase">{f.tagline}</p>
        <p className="font-plus-jakarta text-sm text-surface/35 mt-0.5">{f.location}</p>

        <div className="mt-8 mb-8 max-w-xs mx-auto" style={{ borderTop: '1px solid rgba(90,122,95,0.12)' }} />

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center">
          <a href={`mailto:${f.email}`} className="font-plus-jakarta text-sm text-sage-light hover:text-surface transition">
            {f.email}
          </a>
          <a href="https://instagram.com/maisonnayayoga" target="_blank" rel="noopener noreferrer" className="font-plus-jakarta text-sm text-sage-light hover:text-surface transition">
            {f.instagram}
          </a>
        </div>

        <p className="font-plus-jakarta text-xs text-surface/20 mt-10">
          {f.copyright}
        </p>
      </div>
    </footer>
  );
}
