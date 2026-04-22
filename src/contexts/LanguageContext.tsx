'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Lang, Translation } from '../lib/translations';
import t from '../lib/translations';

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  tr: Translation;
}

const LanguageContext = createContext<LangCtx>({
  lang: 'fr',
  toggle: () => {},
  tr: t.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
