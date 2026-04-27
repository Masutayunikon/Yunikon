<script setup lang="ts">
withDefaults(defineProps<{
  subtitle?: string
  locale?: string
}>(), {
  subtitle: 'I build reliable solutions, designed to be used in production.',
  locale: 'fr',
})


const ink = '#1A1A17'
const muted = '#6B6A63'
const ink2 = '#3A3A35'
const accent = '#6B6355'
const beige = '#F2ECE2'
const beige2 = '#EDE6D9'
const paper = '#FDFBF7'
const green = '#4a7c59'
</script>

<template>
  <div class="w-[1200px] h-[630px] flex relative overflow-hidden" :style="{ background: beige, fontFamily: 'Inter Tight, sans-serif' }">

    <!-- LEFT -->
    <div class="flex-1 flex flex-col justify-between py-16 px-[72px] min-w-0">

      <!-- Brand -->
      <div class="flex items-center gap-[14px]">
        <div class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" :style="{ border: `1.5px solid ${ink}` }">
          <span :style="{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: '16px', color: ink, letterSpacing: '-0.02em', lineHeight: '1' }">qr</span>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-[13px] font-medium tracking-[0.06em]" :style="{ color: muted }">ROBERT</span>
          <span class="text-[22px] leading-none" :style="{ fontFamily: 'Caveat, cursive', fontWeight: '400', color: ink2 }">Quentin</span>
        </div>
      </div>

      <!-- Titles -->
      <div class="flex flex-col">
        <div class="text-[72px] font-light leading-[0.9]" :style="{ color: ink, letterSpacing: '-0.045em' }">
          {{ locale === 'fr' ? 'Développeur' : 'Developer' }}
        </div>
        <div class="text-[84px] leading-[0.9] -mt-1" :style="{ fontFamily: 'Caveat, cursive', fontWeight: '400', color: accent, letterSpacing: '-0.01em' }">
          Fullstack<span :style="{ color: ink }">.</span>
        </div>
        <div class="text-[20px] mt-5 leading-[1.4]" :style="{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', color: muted }">
          {{ subtitle }}
        </div>
      </div>

      <!-- Badges -->
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1.5 text-sm" :style="{ color: muted }">
          <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
            <path d="M6 11s4-3.5 4-6.5a4 4 0 1 0-8 0C2 7.5 6 11 6 11z" :stroke="muted" stroke-width="1.3" />
            <circle cx="6" cy="4.5" r="1.3" :stroke="muted" stroke-width="1.3" />
          </svg>
          Toulouse - Remote worldwide
        </div>
        <div class="flex items-center gap-1.5 text-sm rounded-full px-[14px] py-[5px]" :style="{ color: ink2, background: beige2, border: `1px solid rgba(26,26,23,0.12)` }">
          <div class="w-1.5 h-1.5 rounded-full" :style="{ background: green }" />
          {{ locale === 'fr' ? 'Disponible en freelance' : 'Available as freelance' }}
        </div>
      </div>

    </div>

    <!-- RIGHT -->
    <div class="w-[400px] flex items-stretch shrink-0" style="padding: 48px 52px 48px 0;">
      <div class="relative flex-1">
        <div class="relative h-full p-3.5 overflow-hidden" :style="{ background: paper, border: `2px solid ${ink}` }">
          <img
              src="/me.png"
              class="w-full h-full object-cover object-top block"
              style="filter: saturate(0.85) contrast(1.02);"
          />
          <div class="absolute left-3.5 bottom-3 text-[9px] px-[9px] py-[5px] rounded-[3px]" :style="{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)', background: 'rgba(0,0,0,0.22)' }">
            ROBERT QUENTIN
          </div>
        </div>
      </div>
    </div>

  </div>
</template>