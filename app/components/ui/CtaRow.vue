<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex gap-[clamp(8px,1svh,14px)] flex-wrap">
    <a
        class="btn btn-primary"
        href="#projects"
        style="font-size: clamp(12px, 1.6svh, 18px); padding: clamp(10px, 1.4svh, 18px) clamp(16px, 2svh, 28px); gap: clamp(6px, 0.8svh, 12px);"
    >
      {{ $t('hero.cta_projects') }}
      <svg
          class="btn-arrow"
          :width="'clamp(12px,1.6svh,18px)'"
          :height="'clamp(12px,1.6svh,18px)'"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </a>
    <a
        class="btn btn-ghost"
        href="#contact"
        style="font-size: clamp(12px, 1.6svh, 18px); padding: clamp(10px, 1.4svh, 18px) clamp(16px, 2svh, 28px);"
    >
      {{ $t('hero.cta_contact') }}
    </a>
  </div>
</template>