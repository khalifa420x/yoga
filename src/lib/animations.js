import { gsap } from 'gsap';

export function revealSection(element) {
  if (typeof window === 'undefined') return;
  if (!element) return;
  gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
}

export function revealStagger(elements, stagger = 0.1) {
  if (typeof window === 'undefined') return;
  if (!elements || elements.length === 0) return;
  gsap.fromTo(elements, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, stagger: stagger });
}