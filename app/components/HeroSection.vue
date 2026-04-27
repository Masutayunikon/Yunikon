<script setup lang="ts">
const { t, locale } = useI18n()

const siteUrl = 'https://yunikon.re'

useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'alternate', hreflang: 'fr', href: siteUrl },
    { rel: 'alternate', hreflang: 'en', href: `${siteUrl}/en` },
    { rel: 'alternate', hreflang: 'x-default', href: siteUrl },
  ],
})

useSeoMeta({
  title: () => locale.value === 'fr'
      ? 'Quentin Robert — Développeur Freelance Nuxt & Vue.js'
      : 'Quentin Robert — Freelance Nuxt & Vue.js Developer',
  description: () => locale.value === 'fr'
      ? 'Développeur fullstack freelance spécialisé Nuxt 4, Vue.js et Node.js. Je conçois et livre des applications web sur mesure, pensées pour la production. Disponible en remote.'
      : 'Freelance fullstack developer specialising in Nuxt 4, Vue.js and Node.js. I design and ship custom web applications built for production. Available remotely.',
  ogTitle: () => locale.value === 'fr'
      ? 'Quentin Robert — Développeur Freelance Nuxt & Vue.js'
      : 'Quentin Robert — Freelance Nuxt & Vue.js Developer',
  ogDescription: () => locale.value === 'fr'
      ? 'Applications web sur mesure, livrées en production. Spécialisé Nuxt 4, Vue.js, Node.js. Remote worldwide.'
      : 'Custom web applications, shipped to production. Specialised in Nuxt 4, Vue.js, Node.js. Remote worldwide.',
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: 'Yunikon',
  twitterCard: 'summary_large_image',
  twitterTitle: () => locale.value === 'fr'
      ? 'Quentin Robert — Développeur Freelance Nuxt & Vue.js'
      : 'Quentin Robert — Freelance Nuxt & Vue.js Developer',
  twitterDescription: () => locale.value === 'fr'
      ? 'Applications web sur mesure, livrées en production. Spécialisé Nuxt 4, Vue.js, Node.js.'
      : 'Custom web applications, shipped to production. Specialised in Nuxt 4, Vue.js, Node.js.',
  robots: 'index, follow',
})

defineOgImage('Hero.takumi', {
  subtitle: locale.value === 'fr'
      ? 'Je construis des solutions fiables, pensées pour la production.'
      : 'I build reliable solutions, designed to be used in production.',
  locale: locale.value,
})

useSchemaOrg([
  definePerson({
    name: 'Quentin Robert',
    url: siteUrl,
    image: `${siteUrl}/me.png`,
    jobTitle: () => locale.value === 'fr'
        ? 'Développeur Freelance Fullstack'
        : 'Freelance Fullstack Developer',
    description: () => locale.value === 'fr'
        ? 'Développeur freelance spécialisé Nuxt 4, Vue.js et Node.js, disponible en remote worldwide.'
        : 'Freelance developer specialising in Nuxt 4, Vue.js and Node.js, available remote worldwide.',
    sameAs: [],
  }),
  defineWebSite({
    name: 'Yunikon',
    url: siteUrl,
    description: () => locale.value === 'fr'
        ? 'Portfolio et offres freelance de Quentin Robert, développeur fullstack Nuxt & Vue.js.'
        : 'Portfolio and freelance services of Quentin Robert, Nuxt & Vue.js fullstack developer.',
    inLanguage: [locale.value],
  }),
])
</script>

<template>
  <section
      class="w-full bg-[var(--beige)] relative h-[100svh] overflow-hidden"
      aria-label="Hero"
  >
    <div class="h-full grid grid-cols-[1.4fr_1fr] md:max-lg:grid-cols-[1.8fr_1fr] max-sm2:grid-cols-1">

      <!-- LEFT -->
      <div
          class="h-full flex flex-col justify-between min-h-0 min-w-0 px-[5vw] py-[4svh] md:max-lg:px-[3vw] md:max-lg:py-[5svh] max-sm2:px-[5vw] max-sm2:py-[3svh]"
      >

        <!-- Brand bar -->
        <div class="flex items-center gap-[1.4svh] rise rise-d1 shrink-0">
          <UiAppMonogram photo class="sm2:hidden" />
          <UiAppMonogram class="hidden sm2:flex" />
          <div class="flex items-baseline gap-[0.8svh]">
            <span
                class="tracking-[0.02em] text-muted"
                style="font-size: clamp(10px, 1.4svh, 18px);"
            >ROBERT</span>
            <span
                class="font-caveat text-ink-2 leading-none translate-y-[2px] inline-block"
                style="font-size: clamp(16px, 2.8svh, 36px);"
            >Quentin</span>
          </div>
        </div>

        <!-- Main content -->
        <div class="min-h-0 flex flex-col justify-center flex-1 py-[2svh]">
          <h1
              class="m-0 leading-[0.92] tracking-[-0.045em] font-medium text-ink rise rise-d2"
              style="font-family:'Inter Tight',sans-serif"
          >
            <span class="block" style="font-size: clamp(28px, min(10svh, 6.5vw), 180px);">
              {{ $t('hero.h1_line1') }}
            </span>
            <span
                class="inline-block font-caveat font-semibold leading-[0.9] tracking-[-0.01em] text-accent -mt-1"
                style="font-size: clamp(32px, min(12svh, 7.5vw), 206px);"
            >
              {{ $t('hero.h1_caveat') }}<span class="text-ink">.</span>
            </span>
          </h1>

          <p
              class="font-serif-it leading-[1.3] text-muted mt-[1.5svh] break-words rise rise-d3"
              style="font-size: clamp(12px, 2svh, 22px);"
          >
            {{ $t('hero.subtext') }}
          </p>

          <p
              class="mt-[1.5svh] leading-[1.5] text-ink-2 font-normal break-words rise rise-d4"
              style="font-size: clamp(11px, 1.6svh, 17px);"
          >
            {{ $t('hero.body') }}
            <em class="font-serif-it text-muted" style="font-style:normal">{{ $t('hero.body_italic') }}</em>
          </p>

          <div class="mt-[2svh] rise rise-d5">
            <UiCtaRow />
          </div>
        </div>

        <!-- Bottom badges -->
        <div class="rise rise-d5 shrink-0">
          <div
              class="flex items-center w-full gap-[1.2svh]"
              style="font-size: clamp(10px, 1.3svh, 16px);"
          >
            <span class="inline-flex items-center flex-1 min-w-0 text-ink-2 gap-[0.6svh]">
              <svg
                  class="shrink-0"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  style="width: clamp(10px, 1.3svh, 16px); height: clamp(10px, 1.3svh, 16px);"
              >
                <path d="M6 11s4-3.5 4-6.5a4 4 0 1 0-8 0C2 7.5 6 11 6 11z" stroke="currentColor" stroke-width="1.3" />
                <circle cx="6" cy="4.5" r="1.3" stroke="currentColor" stroke-width="1.3" />
              </svg>
              <span class="hidden sm2:inline whitespace-nowrap truncate">
                {{ $t('hero.location') }}<span class="text-muted"> · {{ $t('hero.remote') }}</span>
              </span>
              <span class="sm2:hidden whitespace-nowrap text-muted truncate">
                {{ $t('hero.remote') }}
              </span>
            </span>
            <span
                class="chip flex-none"
                style="font-size: clamp(10px, 1.3svh, 16px); padding: 0.6svh 1svh; gap: 0.7svh;"
            >
              <span class="chip-dot" style="width: clamp(5px, 0.7svh, 8px); height: clamp(5px, 0.7svh, 8px);" />
              {{ $t('hero.available') }}
            </span>
          </div>
        </div>

      </div>

      <!-- RIGHT: Portrait — caché sous sm2 -->
      <div
          class="py-[4svh] pr-[5vw] flex items-stretch max-sm2:hidden md:max-lg:py-[5svh] md:max-lg:pr-[3vw] rise rise-d2 min-h-0"
      >
        <div class="relative flex-1 min-h-0">
          <span class="absolute -top-[0.8svh] -left-[0.8svh] w-[2.5svh] h-[2.5svh] max-w-7 max-h-7 border-t-[2.5px] border-l-[2.5px] border-ink pointer-events-none z-10" aria-hidden="true" />
          <span class="absolute -top-[0.8svh] -right-[0.8svh] w-[2.5svh] h-[2.5svh] max-w-7 max-h-7 border-t-[2.5px] border-r-[2.5px] border-ink pointer-events-none z-10" aria-hidden="true" />
          <span class="absolute -bottom-[0.8svh] -left-[0.8svh] w-[2.5svh] h-[2.5svh] max-w-7 max-h-7 border-b-[2.5px] border-l-[2.5px] border-ink pointer-events-none z-10" aria-hidden="true" />
          <span class="absolute -bottom-[0.8svh] -right-[0.8svh] w-[2.5svh] h-[2.5svh] max-w-7 max-h-7 border-b-[2.5px] border-r-[2.5px] border-ink pointer-events-none z-10" aria-hidden="true" />
          <div class="relative h-full bg-[#FDFBF7] p-[1.2svh] shadow-[0_1px_0_rgba(0,0,0,0.04),_0_18px_40px_-20px_rgba(0,0,0,0.18)]">
            <div class="relative h-full overflow-hidden">
              <NuxtImg
                  src="/me.png"
                  :alt="$t('hero.portrait_mark')"
                  width="600"
                  height="800"
                  format="webp"
                  quality="80"
                  loading="eager"
                  fetchpriority="high"
                  class="w-full h-full object-cover object-top block"
                  style="filter: saturate(0.85) contrast(1.02)"
                  sizes="sm:100vw md:50vw lg:600px"
              />
              <div
                  class="absolute left-[1.2svh] bottom-[1svh] z-[2] font-mono tracking-[0.18em] text-[rgba(255,255,255,0.85)] bg-[rgba(0,0,0,0.22)] rounded-[3px]"
                  style="font-size: clamp(8px, 1svh, 11px); padding: 0.5svh 0.8svh; backdrop-filter: blur(4px)"
                  aria-hidden="true"
              >
                {{ $t('hero.portrait_mark') }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>