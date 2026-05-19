// ──────────────────────────────────────────────────────────────────────
// CV - Marc-Aurel AHOUANDJINOU
// Deux variantes : "vue" (Vue/Nuxt specialist) et "react" (React/Next specialist).
// Toutes les données passent par getCV(variant) - c'est la seule API publique.
// ──────────────────────────────────────────────────────────────────────

export type Variant = "vue" | "react";

// ─── Identité (partagée) ──────────────────────────────────────────────
const identity = {
  fullName: "Marc-Aurel M. L'H. Dona AHOUANDJINOU",
  firstName: "Marc-Aurel M. L'H. Dona",
  handle: "marcaureldev",
  location: "Abomey-Calavi, Bénin",
  availability: "Ouvert aux opportunités : CDI, Freelance remote, CDD",
  email: "ahouandjinoumarcaurel10@gmail.com",
  phone: "+229 01 59 65 98 29",
  github: "github.com/marcaureldev",
  githubUrl: "https://github.com/marcaureldev",
  linkedin: "linkedin.com/in/marc-aurel-ahouandjinou",
  linkedinUrl: "https://www.linkedin.com/in/marc-aurel-ahouandjinou",
  wakatime: "wakatime.com/@marcaurel",
  wakatimeUrl: "https://wakatime.com/@marcaurel",
};

// ─── Headlines par variante ───────────────────────────────────────────
const headlines: Record<Variant, { title: string; tagline: string; sub: string }> = {
  vue: {
    title: "Vue & Nuxt Frontend Developer",
    tagline: "I craft fast, modern, pixel-perfect interfaces.",
    sub: "Vue 3 · Nuxt · Pinia · Tailwind · TypeScript. Figma to code, performance first.",
  },
  react: {
    title: "React & Next.js Frontend Developer",
    tagline: "I ship modern, performant React apps.",
    sub: "Next.js · React · Tailwind · TypeScript. App Router, Server Components, full integration.",
  },
};

// ─── Stats hero (4 chiffres XXL) ──────────────────────────────────────
const stats: Record<Variant, { value: string; label: string }[]> = {
  vue: [
    { value: "2", label: "ans de code" },
    { value: "42", label: "repos github" },
    { value: "27h", label: "code / semaine" },
    { value: "5", label: "récompenses" },
  ],
  react: [
    { value: "2", label: "ans de code" },
    { value: "3", label: "apps Next.js déployées" },
    { value: "27h", label: "code / semaine" },
    { value: "5", label: "récompenses" },
  ],
};

// ─── About (paragraphe d'intro) ───────────────────────────────────────
const about: Record<Variant, string[]> = {
  vue: [
  "Je suis Marc-Aurel AHOUANDJINOU, Développeur Front-End spécialisé dans l’écosystème Vue.js et Nuxt.js",
    "Je transforme des maquettes Figma en interfaces modernes, conçues pour être performantes, intuitives et optimisées pour le SEO, avec une rigueur que je m'efforce d'appliquer du composant le plus simple à l'architecture complète.",
    "J'applique les bonnes pratiques du développement Front-End, notamment l’optimisation des performances, la structuration du code et l’intégration d’API, tout en maintenant une veille technologique active sur l’écosystème Vue",
    "J'apprends vite, je livre, je documente.",
  ],
  react: [
    "Je suis Marc-Aurel, développeur frontend spécialisé en React et Next.js, orienté vers la création d’applications web dynamiques, scalables et optimisées pour les performances et le SEO.",
    "J'applique les bonnes pratiques du développement Front-End, notamment l’optimisation des performances, la structuration du code et l’intégration d’API, tout en maintenant une veille technologique active sur l’écosystème React et Next.js",
    "J'apprends vite, je livre, je documente.",
  ],
};

// ─── Expériences : chaque exp a deux framings selon la variante ───────
type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: Record<Variant, string>;
  highlights: Record<Variant, string[]>;
  showIn: Variant[];
};

const experiences: Experience[] = [
  {
    period: "Oct 2025 - Présent",
    role: "Frontend Developer",
    company: "Godjeli",
    location: "Remote, Temps partiel",
    summary: {
      vue: "Plateforme e-commerce transfrontalière (achat international, livraison Afrique). Développement frontend client et back-office admin.",
      react:
        "Plateforme e-commerce transfrontalière (achat international, livraison Afrique). Développement de l'app web client et conception du back-office administrateur, avec Next.js et Tailwind CSS.",
    },
    highlights: {
      vue: [
        "Développement frontend client et back-office",
        "Interfaces responsive haute performance",
        "Collaboration avec l'équipe produit",
      ],
      react: [
        "App client et back-office admin en Next.js / Tailwind",
        "Interfaces responsive performantes pour l'achat international",
        "Collaboration avec l'équipe produit sur les flows critiques",
      ],
    },
    showIn: ["vue", "react"],
  },
  {
    period: "Sept 2025 - Juil 2026",
    role: "Internship Frontend Developer",
    company: "Cyberspector",
    location: "Cotonou, Bénin",
    summary: {
      vue: "Spectorly : plateforme de résilience humaine en cybersécurité. Maintenance v1 et développement v2 en Vue/Nuxt.",
      react:
        "Spectorly : plateforme de résilience humaine en cybersécurité. Frontend development et E2E testing, intégration API et collaboration produit/backend.",
    },
    highlights: {
      vue: [
        "Maintenance v1 et développement v2 du produit Spectorly",
        "Intégration d'APIs backend",
        "Tests end-to-end avec Playwright",
        "Collaboration avec les équipes produit et backend",
      ],
      react: [
        "Maintenance v1 et participation à la v2 du produit",
        "Intégration d'APIs backend",
        "Tests end-to-end avec Playwright",
        "Collaboration avec les équipes produit et backend",
      ],
    },
    showIn: ["vue", "react"],
  },
  {
    period: "Avr 2025 - Juin 2025",
    role: "Internship Frontend Developer",
    company: "Friym",
    location: "Porto-Novo, Bénin",
    summary: {
      vue: "Contribution au développement frontend de l'application, intégration d'interfaces utilisateur.",
      react: "Contribution au développement frontend de l'application, intégration d'interfaces utilisateur.",
    },
    highlights: {
      vue: [
        "Intégration d'interfaces utilisateur",
        "Collaboration avec l'équipe technique sur les fonctionnalités",
      ],
      react: [
        "Intégration d'interfaces utilisateur",
        "Collaboration avec l'équipe technique sur les fonctionnalités",
      ],
    },
    showIn: ["vue", "react"],
  },
  {
    period: "Févr 2025 - Juin 2025",
    role: "Frontend Developer (Freelance)",
    company: "Bomunto",
    location: "Cameroun, remote",
    summary: {
      vue: "Développement des interfaces utilisateur pour les produits internes. Traduction de maquettes UI/UX en code Vue.js et Tailwind, communication API REST.",
      react: "Développement des interfaces utilisateur pour les produits internes. Traduction de maquettes UI/UX en code interactif, communication API REST.",
    },
    highlights: {
      vue: [
        "Maquettes UI/UX vers code Vue.js modulaire",
        "Style avec Tailwind CSS",
        "Communication avec une API REST pour données dynamiques",
        "Cohérence entre interfaces et logique métier",
      ],
      react: [
        "Maquettes UI/UX vers code interactif modulaire",
        "Style avec Tailwind CSS",
        "Communication avec une API REST pour données dynamiques",
        "Cohérence entre interfaces et logique métier",
      ],
    },
    showIn: ["vue", "react"],
  },
];

// ─── Projets phares par variante ─────────────────────────────────────
type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  link?: string;
  live?: string;
};

const projects: Record<Variant, Project[]> = {
  vue: [
    {
      name: "BookMarkly",
      tagline: "Gestionnaire de favoris Vue/Nuxt",
      description:
        "Application complète de gestion de bookmarks avec authentification, dashboard stats (Nuxt Charts), tags, recherche, gestion des collections.",
      stack: ["Vue 3", "Nuxt 4", "TypeScript", "Tailwind", "Nuxt Charts", "JWT", "Supabase"],
      live: "bookmarkdev.vercel.app"
    },
    {
      name: "Restaurant Food",
      tagline: "Site vitrine restaurant, Nuxt et Pinia",
      description:
        "Site vitrine moderne et responsive avec menu, système de panier (Pinia), animations fluides. Déployé sur Vercel.",
      stack: ["Nuxt 3", "Vue 3", "Pinia", "Tailwind"],
      link: "github.com/marcaureldev/restaurant-website",
      live: "food-restaurant-aurel.vercel.app",
    },
    {
      name: "TokenaWebApp",
      tagline: "Figma vers code, crypto app temps réel",
      description:
        "Conversion pixel-perfect d'une maquette Figma en app Nuxt. Intégration API Coingecko pour les cours crypto temps réel.",
      stack: ["Nuxt 3", "Vue 3", "Tailwind", "Coingecko API"],
      live: "figma-to-code-ed2-week3-aurel.vercel.app"
    },
  ],
  react: [
    {
      name: "Colisync",
      tagline: "Plateforme d'envoi et suivi de colis",
      description:
        "App Next.js full-stack avec authentification (JWT et bcrypt), OTP par email (Nodemailer), ORM Prisma, UI Radix et Tailwind.",
      stack: ["Next.js", "TypeScript", "Prisma", "JWT", "Tailwind", "Radix UI", "Nodemailer"],
      link: "github.com/marcaureldev/colisync-project",
    },
    {
      name: "BeninTrip",
      tagline: "Plateforme de découverte touristique du Bénin",
      description:
      "Projet collaboratif de développement d’une application web dédiée à la promotion du tourisme au Bénin. Participation à la conception et au développement d’une interface moderne et responsive permettant de découvrir des destinations et expériences locales, avec un focus sur l’expérience utilisateur.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Convex"],
      link: "github.com/ines-abike/MVP-CodeTeam",
      live: "benintrip.vercel.app",
    },
    {
      name: "Gestion Factures",
      tagline: "SaaS de gestion de factures, Next + Prisma + Clerk",
      description:
        "Application SaaS de gestion de factures avec authentification Clerk, base de données Prisma, App Router Next.js 15.",
      stack: ["Next.js 15", "TypeScript", "Prisma", "Clerk", "Tailwind"],
      link: "github.com/marcaureldev/gestionFactureNextPrismaClerk",
    },
  ],
};

// ─── Skills par variante ─────────────────────────────────────────────
const skills: Record<Variant, { label: string; items: string[] }[]> = {
  vue: [
    {
      label: "Core",
      items: ["Vue 3", "Nuxt 3", "Composition API", "Pinia", "Vue Router", "TypeScript", "JavaScript"],
    },
    {
      label: "Style & UI",
      items: ["Tailwind CSS", "Figma to code", "Responsive design", "Animations CSS"],
    },
    {
      label: "Outils & Plateformes",
      items: ["Vite", "Git / GitHub / GitLab", "Vercel", "Firebase", "WebSocket", "Astro"],
    },
    {
      label: "Intégration",
      items: ["API REST", "Axios", "JWT auth", "Chart.js", "WebGL (OGL)"],
    },
  ],
  react: [
    {
      label: "Core",
      items: ["React", "Next.js (App Router)", "Server Components", "TypeScript", "JavaScript"],
    },
    {
      label: "Style & UI",
      items: ["Tailwind CSS", "Radix UI / shadcn", "Motion (Framer)", "Figma to code", "Responsive design"],
    },
    {
      label: "Backend & Data",
      items: ["Prisma ORM", "Auth (Clerk, JWT, bcrypt)", "Nodemailer", "API REST", "WebSocket"],
    },
    {
      label: "Outils & Plateformes",
      items: ["Git / GitHub / GitLab", "Vercel", "Playwright (E2E)", "Astro"],
    },
  ],
};

// ─── Awards (partagés) ────────────────────────────────────────────────
const awards = [
  { year: "2024", title: "3e Prix : Hackathon Innovation Hub Parakou" },
  { year: "2024", title: "2e Prix : Concours d'Innovation CDE Parakou" },
  {
    year: "2024",
    title: "Prix d'Excellence : Initiative La Ceinture et la Route de la Soie",
    sub: "Ambassade de la République Populaire de Chine au Bénin",
  },
  { year: "2024", title: "Certificat de Reconnaissance : Innovation & Engagement", sub: "IUT, Université de Parakou" },
  { year: "2024", title: "Certificat de Mérite : Figma to Code Challenge Bénin" },
];

// ─── Éducation (partagée) ─────────────────────────────────────────────
const education = [
  {
    period: "Sept 2022 - Juil 2025",
    title: "Diplôme Universitaire de Technologie",
    field: "Informatique de Gestion",
    school: "IUT, Université de Parakou, Bénin",
    detail: "Génie logiciel, algorithmes & structures de données, bases de données, programmation.",
  },
  {
    period: "Déc 2024 - Mars 2025",
    title: "Formation Développement Web",
    field: "Programme DCLIC",
    school: "Organisation Internationale de la Francophonie (OIF)",
    detail: "HTML, CSS, JavaScript, Node.js, projets concrets, ateliers et mentorats.",
  },
];

// ─── Wakatime live stats ──────────────────────────────────────────────
const wakatime = {
  totalLast7Days: "26h48",
  dailyAverage: "3h49",
  editor: "Cursor (98.9%)",
};

// ─── API publique ────────────────────────────────────────────────────
export function getCV(variant: Variant) {
  return {
    variant,
    identity,
    headline: headlines[variant],
    stats: stats[variant],
    about: about[variant],
    experiences: experiences.filter((e) => e.showIn.includes(variant)),
    projects: projects[variant],
    skills: skills[variant],
    awards,
    education,
    wakatime,
  };
}

export type CV = ReturnType<typeof getCV>;

// ─── Compatibility shim pour les anciennes variantes prototypes ──────
// Les pages editorial, terminal, brutalist (legacy), swiss utilisent `cv`
// avec l'ancienne forme. On l'adapte à partir de la variante Vue.
const _v = getCV("vue");
export const cv = {
  identity: {
    name: identity.fullName,
    handle: "@" + identity.handle,
    title: _v.headline.title,
    tagline: _v.headline.tagline,
    location: identity.location,
    availability: identity.availability,
    email: identity.email,
    website: identity.github,
    github: identity.github,
    linkedin: identity.linkedin,
  },
  about: _v.about,
  stats: _v.stats,
  experience: _v.experiences.map((e) => ({
    period: e.period,
    role: e.role,
    company: e.company,
    location: e.location,
    summary: e.summary.vue,
    highlights: e.highlights.vue,
  })),
  projects: _v.projects.map((p) => ({
    name: p.name,
    tagline: p.tagline,
    stack: p.stack,
    link: p.link ?? "",
  })),
  skills: {
    languages: _v.skills.find((s) => s.label === "Core")?.items ?? [],
    infra: _v.skills.find((s) => s.label === "Outils & Plateformes")?.items ?? [],
    security: _v.skills.find((s) => s.label === "Intégration")?.items ?? [],
  },
  education: _v.education.map((e) => ({
    year: e.period.split(" ").pop() ?? "",
    title: e.title,
    school: e.school,
  })),
  writing: [] as { date: string; title: string; where: string }[],
};
