import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    devProxy: {},
    compressPublicAssets: true,
  },

  routeRules: {
    '/**': {
      headers: { 'X-Powered-By': '' },
    },
  },

  runtimeConfig: {
    siteUrl: 'https://yunikon.re',
    mailHost: '',
    mailPort: '',
    mailSecure: '',
    mailUser: '',
    mailPass: '',
    mailTo: '',
  },

  ogImage: {
    fonts: ['Inter Tight:500', 'Instrument Serif:400', 'Caveat:400'],
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Inter Tight', provider: 'google', weights: [300, 400, 500, 600, 700], global: true },
      { name: 'Instrument Serif', provider: 'google', styles: ['normal', 'italic'], global: true },
      { name: 'Caveat', provider: 'google', weights: [400, 500, 600, 700], global: true },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500] },
    ],
  },

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'no_prefix',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
    },
  },

  site: {
    url: 'https://yunikon.re',
    name: 'Yunikon',
    description: 'Développeur fullstack freelance à Toulouse, spécialisé en Nuxt, TypeScript et applications web modernes. Disponible en remote.',
    defaultLocale: 'fr',
  },

  // Sitemap auto-généré par @nuxtjs/seo
  // Accessible sur https://yunikon.re/sitemap.xml
  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      {
        loc: '/',
        changefreq: 'monthly',
        priority: 1.0,
        alternatives: [
          { hreflang: 'fr', href: 'https://yunikon.re/' },
          { hreflang: 'en', href: 'https://yunikon.re/en' },
        ],
      },
      {
        loc: '/en',
        changefreq: 'monthly',
        priority: 0.9,
      },
    ],
  },

  // Robots.txt auto-généré par @nuxtjs/seo
  // Accessible sur https://yunikon.re/robots.txt
  robots: {
    disallow: ['/api/'],
  },

  image: {
    quality: 80,
    format: ['webp'],
    domains: ['images.unsplash.com'],
  },
})