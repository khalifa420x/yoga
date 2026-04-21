import { gsap } from 'gsap';

export function revealSection(element) {
  gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
}

export function revealStagger(elements) {
  gsap.fromTo(elements, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 });
}