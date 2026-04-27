<script setup lang="ts">
withDefaults(defineProps<{
  url?: string
  height?: number
}>(), {
  url: 'localhost',
  height: 420,
})
</script>

<template>
  <div
    class="rounded-[10px] overflow-hidden bg-[#FDFBF7] border border-[var(--line)] flex flex-col shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,_0_24px_60px_-28px_rgba(0,0,0,0.22)]"
    :style="{ height: `${height}px` }"
  >
    <div class="h-9 px-3.5 flex items-center gap-2.5 border-b border-[var(--line)] bg-[rgba(0,0,0,0.015)] shrink-0">
      <div class="flex gap-1.5">
        <span
          v-for="c in ['#E0DAC9', '#D4CDB8', '#C4BCA5']"
          :key="c"
          class="w-2.5 h-2.5 rounded-full block"
          :style="{ background: c }"
        />
      </div>
      <div class="flex-1 h-5 ml-2 rounded-[5px] bg-[rgba(0,0,0,0.04)] flex items-center justify-center font-mono text-[11px] text-[var(--muted)] tracking-[0.02em]">
        {{ url }}
      </div>
    </div>
    <div class="flex-1 relative overflow-hidden">
      <slot />
    </div>
  </div>
</template>
