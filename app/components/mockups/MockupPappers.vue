<template>
  <UiBrowserFrame url="pappers.fr/entreprise/airbus" :height="420">
    <div class="grid h-full" style="grid-template-columns: 200px 1fr">
      <!-- Sidebar -->
      <div class="bg-[rgba(0,0,0,0.025)] p-[18px_14px] border-r border-[var(--line)] overflow-hidden">
        <div class="flex items-center gap-2 mb-[18px]">
          <span class="w-[18px] h-[18px] rounded-[5px] bg-[#3A4F5C] block shrink-0" />
          <span class="text-[13px] font-semibold text-[var(--ink)]">Pappers</span>
        </div>
        <div
          v-for="(country, i) in countries"
          :key="country"
          class="px-2.5 py-[7px] text-[12px] rounded-[6px] mb-0.5"
          :class="i === 0 ? 'text-[var(--ink)] bg-[rgba(0,0,0,0.05)] font-medium' : 'text-[var(--muted)]'"
        >{{ country }}</div>
        <div class="h-px bg-[var(--line)] my-3.5" />
        <div v-for="item in navItems" :key="item" class="px-2.5 py-1.5 text-[12px] text-[var(--muted)] rounded-[6px]">{{ item }}</div>
      </div>

      <!-- Main -->
      <div class="p-[22px_24px] overflow-hidden">
        <div class="text-[10px] tracking-[0.16em] uppercase text-[var(--muted)] mb-1.5">Société · 9 220 050 105</div>
        <div class="text-[24px] font-semibold text-[var(--ink)] tracking-[-0.02em] mb-1">Airbus SAS</div>
        <div class="text-[12px] text-[var(--muted)] mb-[18px]">Toulouse · Aéronautique · Active</div>

        <div class="grid grid-cols-3 gap-2.5 mb-[18px]">
          <div v-for="m in metrics" :key="m.k" class="p-[10px_12px] rounded-[7px] border border-[var(--line)] bg-[#FDFBF7]">
            <div class="text-[9px] tracking-[0.16em] uppercase text-[var(--muted)] mb-1">{{ m.k }}</div>
            <div class="text-[15px] font-semibold text-[var(--ink)] [font-variant-numeric:tabular-nums]">{{ m.v }}</div>
          </div>
        </div>

        <div class="p-[14px_14px_8px] rounded-[8px] border border-[var(--line)] bg-[#FDFBF7]">
          <div class="flex justify-between mb-2.5">
            <span class="text-[11px] text-[var(--ink)] font-medium">Évolution CA</span>
            <span class="font-mono text-[10px] text-[var(--muted)]">2018 — 2024</span>
          </div>
          <svg viewBox="0 0 280 60" width="100%" height="60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pgrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#3A4F5C" stop-opacity="0.2" />
                <stop offset="100%" stop-color="#3A4F5C" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 L40,38 L80,42 L120,28 L160,32 L200,18 L240,22 L280,8 L280,60 L0,60 Z" fill="url(#pgrad)" />
            <path d="M0,45 L40,38 L80,42 L120,28 L160,32 L200,18 L240,22 L280,8" stroke="#3A4F5C" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
            <circle v-for="([x, y], i) in chartPoints" :key="i" :cx="x" :cy="y" r="2" fill="#3A4F5C" />
          </svg>
        </div>
      </div>
    </div>
  </UiBrowserFrame>
</template>

<script setup lang="ts">
const countries = ['🇫🇷 France', '🇬🇧 UK', '🇩🇪 Germany', '🇪🇸 España', '🇮🇹 Italia']
const navItems = ['Recherche', 'Surveillance', 'API', 'Documents']
const metrics = [
  { k: 'CA', v: '€78,1B' },
  { k: 'Effectif', v: '134 267' },
  { k: 'Création', v: '1992' },
]
const chartPoints = [[0, 45], [40, 38], [80, 42], [120, 28], [160, 32], [200, 18], [240, 22], [280, 8]]
</script>
