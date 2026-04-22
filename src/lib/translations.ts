export type Lang = "fr" | "en";

export interface ServiceCard {
  badge: string;
  title: string;
  duration: string;
  price: string;
  desc: string;
  features: readonly string[];
  cta: string;
  highlight: boolean;
}

export interface ExperienceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface TestimonialQuote {
  text: string;
  name: string;
  detail: string;
  avatar: string;
}

export interface CityItem {
  name: string;
  desc: string;
}

export interface Translation {
  nav: {
    brand: string;
    about: string;
    services: string;
    experience: string;
    testimonials: string;
    location: string;
    contact: string;
    cta: string;
    toggleLang: string;
  };
  hero: {
    label: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  socialProof: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
    stat4: { value: string; label: string };
  };
  valueProp: {
    label: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  about: {
    label: string;
    name: string;
    certif: string;
    bio1: string;
    bio2: string;
    link: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    cards: ServiceCard[];
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  testimonials: {
    label: string;
    title: string;
    quotes: TestimonialQuote[];
  };
  location: {
    label: string;
    title: string;
    subtitle: string;
    cities: CityItem[];
    note: string;
  };
  finalCta: {
    label: string;
    title: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaEmail: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      city: string;
      cityOptions: string[];
      level: string;
      levelOptions: string[];
      message: string;
      submit: string;
      whatsApp: string;
      sending: string;
      success: string;
    };
  };
  footer: {
    brand: string;
    tagline: string;
    location: string;
    email: string;
    instagram: string;
    copyright: string;
  };
}

const t: Record<Lang, Translation> = {
  fr: {
    nav: {
      brand: "Maison Naya Yoga",
      about: "À propos",
      services: "Séances",
      experience: "Expérience",
      testimonials: "Avis",
      location: "Zones",
      contact: "Contact",
      cta: "Réserver",
      toggleLang: "EN",
    },
    hero: {
      label: "Yoga privé · Sud de la France",
      h1: "Yoga privé haut de gamme dans le Sud de la France",
      subtitle: "Des séances personnalisées à domicile, adaptées à tous les niveaux — du débutant à la pratique avancée. Nice, Cannes, Monaco, Saint-Tropez.",
      ctaPrimary: "Réserver une séance",
      ctaSecondary: "Découvrir les séances ↓",
    },
    socialProof: {
      stat1: { value: "4 villes", label: "Nice · Cannes · Monaco · Saint-Tropez" },
      stat2: { value: "Tous niveaux", label: "Du débutant à la pratique avancée" },
      stat3: { value: "10 ans", label: "D'expérience certifiée" },
      stat4: { value: "4.9 ★", label: "Avis vérifiés" },
    },
    valueProp: {
      label: "Pourquoi Maison Naya",
      title: "Une expérience yoga comme nulle autre",
      items: [
        { title: "Sur mesure", desc: "Chaque séance est conçue pour vous, selon votre niveau, vos objectifs et votre corps du moment." },
        { title: "À domicile", desc: "Chez vous, dans votre villa ou sur votre terrasse. Zéro déplacement, 100% confort." },
        { title: "Tous niveaux", desc: "Jamais touché un tapis ? Pratique avancée ? Vous êtes au bon endroit, exactement là où vous en êtes." },
        { title: "Horaires flexibles", desc: "Matin, midi, soir — selon votre agenda. Disponible 7j/7 sur réservation." },
        { title: "Transformation réelle", desc: "Corps, souffle et mental. Pas juste une heure de stretching — une pratique qui change votre quotidien." },
        { title: "Expertise certifiée", desc: "200h RYT, 10 ans de pratique et d'enseignement. Une pédagogie douce, précise et bienveillante." },
      ],
    },
    about: {
      label: "Votre professeure",
      name: "Naya",
      certif: "Professeure certifiée 200h RYT · 10 ans · Sud de la France",
      bio1: "J'ai découvert le yoga lors d'une période de grande tension — professionnelle, personnelle, physique. Ce qui devait être un simple cours s'est révélé être une transformation profonde. Depuis, j'enseigne avec une conviction absolue : le yoga est accessible à toutes, quel que soit le point de départ.",
      bio2: "Mes séances sont pensées pour vous. Pas un cours collectif où vous suivez en bout de tapis — une heure entièrement dédiée à votre corps, vos besoins, votre progression. Dans le confort de votre espace de vie, quelque part sur la Côte d'Azur.",
      link: "Découvrir mon approche ↓",
    },
    services: {
      label: "Séances & Tarifs",
      title: "Choisissez votre formule",
      subtitle: "Toutes les séances se déroulent à votre domicile. Matériel fourni sur demande.",
      cards: [
        {
          badge: "Idéal pour commencer",
          title: "Séance privée",
          duration: "1h · 1 personne",
          price: "120 €",
          desc: "Une heure entièrement dédiée à votre pratique. Bilan initial inclus à la première séance. Parfait pour les débutants ou pour reprendre après une longue pause.",
          features: ["Bilan de votre niveau", "Postures adaptées", "Respiration & détente", "Conseils pour pratiquer seul(e)"],
          cta: "Réserver cette séance",
          highlight: false,
        },
        {
          badge: "Notre best-seller",
          title: "Pack 5 séances",
          duration: "5 × 1h · Économisez 50€",
          price: "550 €",
          desc: "5 séances pour vraiment sentir la différence. La progression est visible dès la 3ème session. Recommandé pour ancrer une nouvelle habitude durablement.",
          features: ["Tout inclus de la séance privée", "Progression structurée", "Programme personnalisé écrit", "Accès prioritaire aux créneaux"],
          cta: "Réserver ce pack",
          highlight: true,
        },
        {
          badge: "Transformation complète",
          title: "Accompagnement mensuel",
          duration: "8 séances / mois",
          price: "850 €",
          desc: "Un mois de pratique intensive avec suivi quotidien par message. Pour les personnes qui veulent transformer leur corps et leur mental en profondeur.",
          features: ["8 séances au choix", "Suivi WhatsApp quotidien", "Programme nutrition basique", "Méditations guidées audio"],
          cta: "Commencer ce mois",
          highlight: false,
        },
      ],
    },
    experience: {
      label: "L'expérience",
      title: "Le yoga qui vient à vous",
      subtitle: "Fini les parkings impossibles et les studios bondés. Votre séance vous attend chez vous.",
      items: [
        { title: "Votre espace, sublimé", desc: "Salon, chambre, terrasse, jardin — je m'adapte à votre espace et le transforme en studio éphémère. Tout ce qu'il faut est apporté.", icon: "home" },
        { title: "Équipement premium", desc: "Tapis, blocs, sangles, coussins — tout le matériel est fourni à première demande. Vous n'avez besoin de rien, juste de vous.", icon: "mat" },
        { title: "Votre rythme, toujours", desc: "Aucune urgence, aucun groupe à suivre. La séance s'adapte à votre énergie du jour. C'est votre heure.", icon: "time" },
      ],
    },
    testimonials: {
      label: "Elles en parlent",
      title: "Ce que vivent nos élèves",
      quotes: [
        {
          text: "J'avais toujours eu peur de commencer le yoga — peur de ne pas être assez souple, assez sportive. Naya a tout changé. Dès la première séance, j'étais à l'aise. Trois mois plus tard, je me sens dans un corps différent.",
          name: "Camille R.",
          detail: "Nice · Débutante · 4 mois de pratique",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=85",
        },
        {
          text: "Je pratique depuis 8 ans, j'avais besoin d'un regard neuf sur ma pratique. Les corrections de Naya sont précises, bienveillantes et m'ont permis de débloquer des postures que je croyais inaccessibles. Un luxe rare.",
          name: "Isabella M.",
          detail: "Monaco · Pratique avancée · 6 mois",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=85",
        },
      ],
    },
    location: {
      label: "Zones d'intervention",
      title: "Je me déplace chez vous",
      subtitle: "Disponible dans toute la Côte d'Azur et les environs.",
      cities: [
        { name: "Nice", desc: "Promenade des Anglais, Cimiez, Carré d'Or, Vieux-Nice" },
        { name: "Cannes", desc: "La Croisette, Le Cannet, Californie, Super-Cannes" },
        { name: "Monaco", desc: "Monte-Carlo, Fontvieille, La Condamine" },
        { name: "Saint-Tropez", desc: "Village, Pampelonne, Ramatuelle, Gassin" },
      ],
      note: "Une autre ville ? Contactez-moi — je me déplace volontiers sur la Côte d'Azur et au-delà.",
    },
    finalCta: {
      label: "Prête à commencer ?",
      title: "Commencez votre pratique dès aujourd'hui",
      subtitle: "Première séance découverte · Aucun engagement · Matériel fourni",
      ctaWhatsApp: "Écrire sur WhatsApp",
      ctaEmail: "Envoyer un message",
    },
    contact: {
      label: "Contact",
      title: "Réservez votre séance",
      subtitle: "Réponse sous 24h · Séance découverte sans engagement",
      form: {
        name: "Votre prénom",
        email: "Email",
        phone: "Téléphone (optionnel)",
        city: "Votre ville",
        cityOptions: ["Nice", "Cannes", "Monaco", "Saint-Tropez", "Autre"],
        level: "Votre niveau",
        levelOptions: ["Débutant(e)", "Quelques bases", "Intermédiaire", "Avancé(e)"],
        message: "Un message ? (optionnel)",
        submit: "Envoyer ma demande",
        whatsApp: "Ou directement sur WhatsApp →",
        sending: "Envoi en cours…",
        success: "Message envoyé ! Naya vous répond sous 24h.",
      },
    },
    footer: {
      brand: "Maison Naya Yoga",
      tagline: "Yoga privé haut de gamme · Sud de la France",
      location: "Nice · Cannes · Monaco · Saint-Tropez",
      email: "contact@maisonnayayoga.fr",
      instagram: "@maisonnayayoga",
      copyright: "© 2025 Maison Naya Yoga · Mentions légales",
    },
  },

  en: {
    nav: {
      brand: "Maison Naya Yoga",
      about: "About",
      services: "Sessions",
      experience: "Experience",
      testimonials: "Reviews",
      location: "Coverage",
      contact: "Contact",
      cta: "Book",
      toggleLang: "FR",
    },
    hero: {
      label: "Private yoga · South of France",
      h1: "Premium private yoga in the South of France",
      subtitle: "Personalized sessions at home, tailored to all levels — from complete beginners to advanced practitioners. Nice, Cannes, Monaco, Saint-Tropez.",
      ctaPrimary: "Book a session",
      ctaSecondary: "Explore sessions ↓",
    },
    socialProof: {
      stat1: { value: "4 cities", label: "Nice · Cannes · Monaco · Saint-Tropez" },
      stat2: { value: "All levels", label: "From beginner to advanced practice" },
      stat3: { value: "10 years", label: "Certified experience" },
      stat4: { value: "4.9 ★", label: "Verified reviews" },
    },
    valueProp: {
      label: "Why Maison Naya",
      title: "A yoga experience unlike any other",
      items: [
        { title: "Tailored", desc: "Every session is crafted for you — your level, your goals, your body on that specific day." },
        { title: "At home", desc: "At your home, villa or terrace. Zero commute, 100% comfort." },
        { title: "All levels", desc: "Never touched a mat? Advanced practitioner? You're in the right place, exactly as you are." },
        { title: "Flexible", desc: "Morning, noon, evening — around your schedule. Available 7 days a week by appointment." },
        { title: "Real transformation", desc: "Body, breath and mind. Not just an hour of stretching — a practice that transforms your daily life." },
        { title: "Certified expertise", desc: "200h RYT, 10 years of practice and teaching. Gentle, precise and caring pedagogy." },
      ],
    },
    about: {
      label: "Your instructor",
      name: "Naya",
      certif: "Certified 200h RYT · 10 years · South of France",
      bio1: "I discovered yoga during a period of intense tension — professional, personal, physical. What was supposed to be a simple class turned into a profound transformation. Since then, I teach with absolute conviction: yoga is accessible to everyone, regardless of where they start.",
      bio2: "My sessions are designed for you. Not a group class where you follow along at the back — one full hour dedicated to your body, your needs, your progression. In the comfort of your own space, somewhere on the French Riviera.",
      link: "Discover my approach ↓",
    },
    services: {
      label: "Sessions & Pricing",
      title: "Choose your formula",
      subtitle: "All sessions take place at your home. Equipment provided on request.",
      cards: [
        {
          badge: "Perfect to start",
          title: "Private session",
          duration: "1h · 1 person",
          price: "€120",
          desc: "One full hour dedicated to your practice. Initial assessment included in the first session. Perfect for beginners or returning after a long break.",
          features: ["Level assessment", "Adapted postures", "Breathing & relaxation", "Tips to practice solo"],
          cta: "Book this session",
          highlight: false,
        },
        {
          badge: "Our best-seller",
          title: "5-session pack",
          duration: "5 × 1h · Save €50",
          price: "€550",
          desc: "5 sessions to truly feel the difference. Progress is visible from the 3rd session. Recommended to build a lasting new habit.",
          features: ["Everything in private session", "Structured progression", "Written personalized program", "Priority booking access"],
          cta: "Book this pack",
          highlight: true,
        },
        {
          badge: "Complete transformation",
          title: "Monthly program",
          duration: "8 sessions / month",
          price: "€850",
          desc: "A month of intensive practice with daily message follow-up. For those who want to transform their body and mind in depth.",
          features: ["8 sessions of your choice", "Daily WhatsApp support", "Basic nutrition guidance", "Guided meditation audio"],
          cta: "Start this month",
          highlight: false,
        },
      ],
    },
    experience: {
      label: "The experience",
      title: "Yoga that comes to you",
      subtitle: "No more impossible parking and crowded studios. Your session awaits at home.",
      items: [
        { title: "Your space, transformed", desc: "Living room, bedroom, terrace, garden — I adapt to your space and turn it into an ephemeral studio. Everything needed is brought.", icon: "home" },
        { title: "Premium equipment", desc: "Mats, blocks, straps, cushions — all equipment is provided on request. You need nothing, just yourself.", icon: "mat" },
        { title: "Always your pace", desc: "No rush, no group to follow. The session adapts to your energy for the day. This is your hour.", icon: "time" },
      ],
    },
    testimonials: {
      label: "They talk about it",
      title: "What our students experience",
      quotes: [
        {
          text: "I had always been afraid to start yoga — afraid of not being flexible enough, athletic enough. Naya changed everything. From the very first session, I felt at ease. Three months later, I feel like I'm in a different body.",
          name: "Camille R.",
          detail: "Nice · Beginner · 4 months of practice",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=85",
        },
        {
          text: "I've been practicing for 8 years and needed a fresh perspective. Naya's corrections are precise, caring and helped me unlock postures I thought were beyond reach. A rare luxury.",
          name: "Isabella M.",
          detail: "Monaco · Advanced practice · 6 months",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=85",
        },
      ],
    },
    location: {
      label: "Coverage area",
      title: "I come to you",
      subtitle: "Available throughout the French Riviera and surrounding areas.",
      cities: [
        { name: "Nice", desc: "Promenade des Anglais, Cimiez, Carré d'Or, Old Town" },
        { name: "Cannes", desc: "La Croisette, Le Cannet, Californie, Super-Cannes" },
        { name: "Monaco", desc: "Monte-Carlo, Fontvieille, La Condamine" },
        { name: "Saint-Tropez", desc: "Village, Pampelonne, Ramatuelle, Gassin" },
      ],
      note: "Another city? Contact me — I'm happy to travel across the Côte d'Azur and beyond.",
    },
    finalCta: {
      label: "Ready to begin?",
      title: "Start your practice today",
      subtitle: "Discovery session · No commitment · Equipment provided",
      ctaWhatsApp: "Message on WhatsApp",
      ctaEmail: "Send a message",
    },
    contact: {
      label: "Contact",
      title: "Book your session",
      subtitle: "Reply within 24h · No-commitment discovery session",
      form: {
        name: "Your first name",
        email: "Email",
        phone: "Phone (optional)",
        city: "Your city",
        cityOptions: ["Nice", "Cannes", "Monaco", "Saint-Tropez", "Other"],
        level: "Your level",
        levelOptions: ["Beginner", "Some basics", "Intermediate", "Advanced"],
        message: "A message? (optional)",
        submit: "Send my request",
        whatsApp: "Or directly on WhatsApp →",
        sending: "Sending…",
        success: "Message sent! Naya will reply within 24h.",
      },
    },
    footer: {
      brand: "Maison Naya Yoga",
      tagline: "Premium private yoga · South of France",
      location: "Nice · Cannes · Monaco · Saint-Tropez",
      email: "contact@maisonnayayoga.fr",
      instagram: "@maisonnayayoga",
      copyright: "© 2025 Maison Naya Yoga · Legal notice",
    },
  },
};

export default t;
