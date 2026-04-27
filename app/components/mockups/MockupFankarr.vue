<template>
  <UiBrowserFrame url="fankarr.local/library" :height="420">
    <div class="grid h-full" style="grid-template-columns: 190px 1fr">
      <!-- Sidebar -->
      <div class="bg-[rgba(0,0,0,0.025)] p-[16px_12px] border-r border-[var(--line)] overflow-hidden">
        <div class="flex items-center gap-2 mb-[18px]">
          <span class="w-[22px] h-[22px] rounded-[5px] bg-[#4A3A5C] flex items-center justify-center text-[12px] text-white shrink-0">カ</span>
          <span class="text-[13px] font-semibold text-[var(--ink)]">Fankarr</span>
        </div>
        <div
          v-for="item in menuItems"
          :key="item.l"
          class="px-2.5 py-[7px] text-[12px] mb-0.5 rounded-[6px]"
          :class="item.s ? 'text-[var(--ink)] bg-[rgba(0,0,0,0.05)] font-medium' : 'text-[var(--muted)]'"
        >{{ item.l }}</div>
        <div class="h-px bg-[var(--line)] my-3.5" />
        <div class="text-[10px] tracking-[0.16em] uppercase text-[var(--muted)] mb-2">System</div>
        <div class="text-[11px] text-[var(--ink-2)] mb-1">● Docker · running</div>
        <div class="text-[11px] text-[var(--ink-2)] mb-1">● Workers · 4/4</div>
      </div>

      <!-- Library -->
      <div class="p-[18px_22px] overflow-hidden">
        <div class="flex justify-between items-baseline mb-3.5">
          <span class="text-[18px] font-semibold text-[var(--ink)] tracking-[-0.01em]">Library</span>
          <span class="font-mono text-[11px] text-[var(--muted)]">247 series · 4 actives</span>
        </div>
        <div
          v-for="item in libraryItems"
          :key="item.name"
          class="flex items-center gap-3.5 p-[12px_14px] rounded-[7px] border border-[var(--line)] bg-[#FDFBF7] mb-2"
        >
          <div class="w-9 h-12 rounded-[4px] shrink-0" style="background: linear-gradient(135deg, rgba(74,58,92,0.67), #E5DFE8)" />
          <div class="flex-1 min-w-0">
            <div class="text-[13px] font-medium text-[var(--ink)] mb-[3px] overflow-hidden text-ellipsis whitespace-nowrap">{{ item.name }}</div>
            <div class="font-mono text-[11px] text-[var(--muted)]">{{ item.ep }}</div>
          </div>
          <div class="w-[120px] shrink-0">
            <div class="h-[3px] bg-[rgba(0,0,0,0.06)] rounded-sm overflow-hidden">
              <div
                class="h-full rounded-sm"
                :style="{ width: `${item.prog}%`, background: item.status === 'downloaded' ? '#4a8a5c' : '#4A3A5C' }"
              />
            </div>
            <div class="font-mono text-[10px] text-[var(--muted)] mt-1 tracking-[0.04em]">{{ item.status.toUpperCase() }}</div>
          </div>
        </div>
      </div>
    </div>
  </UiBrowserFrame>
</template>

<script setup lang="ts">
const menuItems = [
  { l: 'Library', s: true },
  { l: 'Calendar', s: false },
  { l: 'Activity', s: false },
  { l: 'Indexers', s: false },
  { l: 'Settings', s: false },
]

const libraryItems = [
  { name: "Frieren · Beyond Journey's End", ep: 'S01E18 / 28', status: 'downloaded', prog: 100 },
  { name: 'Vinland Saga', ep: 'S02E24 / 24', status: 'downloaded', prog: 100 },
  { name: 'Apothecary Diaries', ep: 'S02E07 / 24', status: 'queued', prog: 42 },
  { name: 'Dandadan', ep: 'S01E12 / 12', status: 'monitoring', prog: 0 },
]
</script>
