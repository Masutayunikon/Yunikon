<script setup lang="ts">
const { t, locale } = useI18n()

// ── SEO ──────────────────────────────────────────────────────────────
useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogType: 'website',
  ogUrl: 'https://yunikon.re',
  ogImage: 'https://yunikon.re/og-image.jpg',
  ogImageAlt: () => t('seo.og_image_alt'),
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  robots: 'index, follow',
})

useHead({
  htmlAttrs: { lang: locale },
  link: [
    { rel: 'canonical', href: 'https://yunikon.re' },
    { rel: 'alternate', hreflang: 'fr', href: 'https://yunikon.re' },
    { rel: 'alternate', hreflang: 'en', href: 'https://yunikon.re/en' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://yunikon.re' },
  ],
})

// ── Structured data (JSON-LD) ─────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://yunikon.re/#person',
      name: 'Quentin Robert',
      jobTitle: 'Développeur Fullstack Freelance',
      url: 'https://yunikon.re',
      email: 'quentin@yunikon.re',
      image: 'https://yunikon.re/og-image.jpg',
      sameAs: [
        'https://github.com/Masutayunikon',
        'https://www.linkedin.com/in/quentinrbt/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toulouse',
        addressCountry: 'FR',
      },
      knowsAbout: [
        'Nuxt.js', 'Vue.js', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL',
        'Développement fullstack', 'Applications web', 'Freelance',
      ],
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://yunikon.re/#organization',
        name: 'Yunikon',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://yunikon.re/#organization',
      name: 'Yunikon',
      url: 'https://yunikon.re',
      logo: 'https://yunikon.re/logo.png',
      founder: { '@id': 'https://yunikon.re/#person' },
      description: 'Studio de développement freelance spécialisé Nuxt, TypeScript et applications web modernes.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Toulouse',
        addressCountry: 'FR',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://yunikon.re/#website',
      url: 'https://yunikon.re',
      name: 'Yunikon',
      author: { '@id': 'https://yunikon.re/#person' },
      inLanguage: ['fr-FR', 'en-US'],
    },
  ],
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
})

// ── Reveal animation on scroll ────────────────────────────────────────
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <main>
    <HeroSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>
