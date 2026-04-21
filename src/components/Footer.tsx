export default function Footer() {
  return (
    <footer className="bg-darkforest border-t border-sage/20 py-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-dm-serif text-base text-cream/80">
          Sophie Laurent · Professeure de Yoga
        </p>
        <p className="font-inter text-sm text-cream/50 mt-1">
          Montpellier, France
        </p>

        <div className="mt-6 mb-6 border-t border-sage/10 max-w-xs mx-auto"></div>

        <div className="flex gap-6 justify-center">
          <a
            href="mailto:contact@sophielaurent-yoga.fr"
            className="font-inter text-sm text-sage-light hover:text-cream transition"
          >
            contact@sophielaurent-yoga.fr
          </a>
          <a
            href="https://instagram.com/sophie.yoga.montpellier"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-sm text-sage-light hover:text-cream transition"
          >
            @sophie.yoga.montpellier
          </a>
        </div>

        <p className="font-inter text-xs text-cream/30 mt-8">
          © 2025 · Mentions légales
        </p>
      </div>
    </footer>
  );
}