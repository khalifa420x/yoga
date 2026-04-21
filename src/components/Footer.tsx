export default function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-noto-serif italic text-lg text-surface/80">
          Sophie Laurent · Professeure de Yoga
        </p>
        <p className="font-plus-jakarta text-sm text-surface/40 mt-1">
          Montpellier, France
        </p>

        <div className="mt-8 mb-8 max-w-xs mx-auto" style={{ borderTop: '1px solid rgba(90,122,95,0.15)' }} />

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="mailto:contact@sophielaurent-yoga.fr"
            className="font-plus-jakarta text-sm text-sage-light hover:text-surface transition"
          >
            contact@sophielaurent-yoga.fr
          </a>
          <a
            href="https://instagram.com/sophie.yoga.montpellier"
            target="_blank"
            rel="noopener noreferrer"
            className="font-plus-jakarta text-sm text-sage-light hover:text-surface transition"
          >
            @sophie.yoga.montpellier
          </a>
        </div>

        <p className="font-plus-jakarta text-xs text-surface/25 mt-10">
          © 2025 · Mentions légales
        </p>
      </div>
    </footer>
  );
}
