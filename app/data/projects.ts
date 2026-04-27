export interface ProjectLink {
  kind: 'demo' | 'github'
  href: string
}

export interface ProjectTranslation {
  kicker: string
  desc: string
  context: string
  solution: string[]
  result: string
}

export interface BeforeAfterPair {
  before: string
  after: string
}

export interface Project {
  id: string
  num: string
  title: string
  stack: string[]
  links: ProjectLink[]
  images: string[]
  beforeAfterPairs?: BeforeAfterPair[]
  community?: { href: string; label: string }
  tone: { hue: string; soft: string }
  translations: {
    fr: ProjectTranslation
    en: ProjectTranslation
  }
}

export const projects: Project[] = [
  {
    id: 'pappers',
    num: '01',
    title: 'Pappers',
    stack: ['Nuxt 3', 'TypeScript', 'Tailwind', 'Storybook', 'Figma'],
    links: [
      { kind: 'demo', href: 'https://pappers.be' }
    ],
    images: [],
    beforeAfterPairs: [
      {
        before: '/projects/pappers/home-before.png',
        after:  '/projects/pappers/home-after.png',
      },
      {
        before: '/projects/pappers/advanced-search-before.png',
        after:  '/projects/pappers/advanced-search-after.png',
      },
      {
        before: '/projects/pappers/company-before.png',
        after:  '/projects/pappers/company-after.png',
      },
      {
        before: '/projects/pappers/company2-before.png',
        after:  '/projects/pappers/company2-after.png',
      },
      {
        before: '/projects/pappers/company3-before.png',
        after:  '/projects/pappers/company3-after.png',
      },
      {
        before: '/projects/pappers/company4-before.png',
        after:  '/projects/pappers/company4-after.png',
      },
    ],
    tone: { hue: '#3A4F5C', soft: '#E5E8E0' },
    translations: {
      fr: {
        kicker: 'Refonte internationale',
        desc: 'Refonte frontend et internationalisation d\'une plateforme multi-pays.',
        context: 'Refonte complète du frontend sur 1 an dans le cadre d\'une expansion vers 5 pays (Belgique, Espagne, UK, Allemagne, Suisse). Migration du framework existant, adaptation des formats locaux et refonte UI/UX complète à partir de maquettes Figma.',
        solution: [
          'Migration Laravel → Nuxt 3',
          'i18n 5 pays (dates, devises, formats)',
          'Optimisation',
          'Design system Storybook',
          'Refonte UI/UX sur maquettes Figma',
        ],
        result: 'Application entièrement refaite, déployée sur 5 marchés européens avec une base de code modulaire et maintenable.',
      },
      en: {
        kicker: 'International redesign',
        desc: 'Frontend redesign and internationalisation of a multi-country platform.',
        context: 'Full frontend overhaul over 1 year as part of an expansion into 5 countries (Belgium, Spain, UK, Germany, Switzerland). Framework migration, local format adaptation and complete UI/UX redesign from Figma mockups.',
        solution: [
          'Migration Laravel → Nuxt 3',
          'i18n 5 countries (dates, currencies, formats)',
          'Optimisation',
          'Storybook design system',
          'UI/UX redesign from Figma mockups',
        ],
        result: 'Fully rebuilt application, deployed across 5 European markets with a modular and maintainable codebase.',
      },
    },
  },
  {
    id: 'bbn',
    num: '02',
    title: 'Framework BBN',
    stack: ['Vue 2', 'PHP', 'Node.js', 'JavaScript', 'PostgreSQL', 'SCSS', 'SSH / Linux', 'API REST'],
    links: [
      { kind: 'demo', href: 'https://bbn.io' },
    ],
    images: [
      '/projects/bbn/mail.png',
      '/projects/bbn/ide.png',
      '/projects/bbn/refonte.png',
      '/projects/bbn/ide-autocomplete.png',
      '/projects/bbn/ide-eslint.png',
      '/projects/bbn/finder.png',
    ],
    tone: { hue: '#5C4A3A', soft: '#E8E0D8' },
    translations: {
      fr: {
        kicker: 'Outils internes & framework',
        desc: 'Écosystème d\'outils web fullstack développé sur 3 stages cumulés.',
        context: 'Au sein d\'une petite équipe (patron + 1 dev), j\'ai contribué pendant plus d\'un an à un écosystème d\'outils accessibles depuis le navigateur. En charge de modules entiers en autonomie, j\'ai également encadré 3 stagiaires et effectué la refonte d\'une application existante.',
        solution: [
          'IDE web (CodeMirror + LSP + ESLint, Emmet, thèmes)',
          'Boîte mail full-custom (IMAP + back PHP sans librairie)',
          'Explorateur de fichiers type Finder (SSH)',
          'Interface GPT-like via API ChatGPT',
          'CMS — parser + interface d\'édition de pages',
          'Documentation technique',
        ],
        result: 'Écosystème complet en production, autonomie totale sur des modules critiques, encadrement de 3 stagiaires.',
      },
      en: {
        kicker: 'Internal tools & framework',
        desc: 'Fullstack web tools ecosystem built across 3 cumulative internships.',
        context: 'Within a small team (founder + 1 dev), I contributed for over a year to a browser-based developer tools ecosystem. Fully autonomous on entire modules, I also mentored 3 interns and led the redesign of a legacy application.',
        solution: [
          'Web IDE (CodeMirror + LSP + ESLint, Emmet, themes)',
          'Fully custom mailbox (IMAP + PHP back-end, no library)',
          'Finder-style file explorer (SSH)',
          'GPT-like interface via ChatGPT API',
          'CMS — parser + page editing interface',
          'Technical documentation',
        ],
        result: 'Full ecosystem in production, full ownership of critical modules, mentored 3 interns.',
      },
    },
  },
  {
    id: 'fankarr',
    num: '03',
    title: 'Fankarr',
    stack: ['Vue 3', 'Express', 'Python', 'TypeScript', 'Docker', 'Bun', 'CI/CD'],
    links: [
      { kind: 'github', href: 'https://github.com/Masutayunikon/FanKarr' },
    ],
    community: { href: 'https://fan-kai.fandom.com/fr', label: 'Fan-Kai · Communauté' },
    images: [
      '/projects/fankarr/catalog.png',
      '/projects/fankarr/serie.png',
      '/projects/fankarr/logs.png',
      '/projects/fankarr/downloads.png',
      '/projects/fankarr/settings.png',
    ],
    tone: { hue: '#4A3A5C', soft: '#E5DFE8' },
    translations: {
      fr: {
        kicker: 'Projet perso en production',
        desc: 'Système fullstack d\'automatisation de téléchargement d\'animes, utilisé par une communauté active.',
        context: 'Inspiré de Sonarr / Radarr, Fankarr remplace les anciens utilitaires utilisés par la communauté. Conçu et développé seul de A à Z — scraping, backend, frontend, packaging et déploiement.',
        solution: [
          'Scraper Python — liaison API Fankai → torrents',
          'Intégration 5+ clients torrent (qBittorrent, Transmission, Synology, uTorrent, rTorrent…)',
          'Architecture extensible pour nouveaux clients',
          'Backend Express + API REST',
          'Frontend Vue 3 + Tailwind',
          'Binaires natifs Bun (Linux / macOS / Windows)',
          'CI/CD + Docker',
        ],
        result: 'Application fullstack en production, adoptée par une communauté active en remplacement des anciens outils.',
      },
      en: {
        kicker: 'Personal project in production',
        desc: 'Fullstack anime download automation system, used by an active community.',
        context: 'Inspired by Sonarr / Radarr, Fankarr replaces the legacy utilities used by the community. Designed and built solo from scratch — scraping, backend, frontend, packaging and deployment.',
        solution: [
          'Python scraper — Fankai API → torrent mapping',
          '5+ torrent client integrations (qBittorrent, Transmission, Synology, uTorrent, rTorrent…)',
          'Extensible architecture for new clients',
          'Express backend + REST API',
          'Vue 3 + Tailwind frontend',
          'Native Bun binaries (Linux / macOS / Windows)',
          'CI/CD + Docker',
        ],
        result: 'Fullstack application in production, adopted by an active community as a replacement for legacy tools.',
      },
    },
  },
]

export type Locale = 'fr' | 'en'

export function useLocalizedProjects(locale: Locale) {
  return projects.map(p => ({
    id: p.id,
    num: p.num,
    title: p.title,
    stack: p.stack,
    links: p.links,
    images: p.images,
    beforeAfterPairs: p.beforeAfterPairs,
    community: p.community,
    tone: p.tone,
    ...p.translations[locale],
  }))
}

export type LocalizedProject = ReturnType<typeof useLocalizedProjects>[number]