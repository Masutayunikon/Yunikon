<script setup lang="ts">
withDefaults(defineProps<{
  height?: number
  fontSize?: number
  color?: string
  text: string
}>(), {
  height: 72,
  fontSize: 70,
  color: 'currentColor',
  text: ''
})
</script>

<template>
  <svg
    class="handwriting-svg"
    viewBox="0 0 340 90"
    :height="height"
    :style="{ color, overflow: 'visible', display: 'block' }"
    :aria-label="text"
    role="img"
  >
    <text
      x="2"
      y="66"
      font-family="Caveat, cursive"
      font-weight="500"
      :font-size="fontSize"
      letter-spacing="0.5"
      :style="{ paintOrder: 'stroke', fill: 'none' }"
    >
      {{ text }}
    </text>
  </svg>
</template>
