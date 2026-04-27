<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
  color?: string
}>(), {
  size: 22,
  color: 'var(--ink)',
})

const corners = [
  { top: '-1px', left: '-1px', borderTopWidth: '2px', borderLeftWidth: '2px', borderBottomWidth: 0, borderRightWidth: 0 },
  { top: '-1px', right: '-1px', borderTopWidth: '2px', borderRightWidth: '2px', borderBottomWidth: 0, borderLeftWidth: 0 },
  { bottom: '-1px', left: '-1px', borderBottomWidth: '2px', borderLeftWidth: '2px', borderTopWidth: 0, borderRightWidth: 0 },
  { bottom: '-1px', right: '-1px', borderBottomWidth: '2px', borderRightWidth: '2px', borderTopWidth: 0, borderLeftWidth: 0 },
]
</script>

<template>
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div
      v-for="(pos, i) in corners"
      :key="i"
      :style="{
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        top: pos.top,
        right: pos.right,
        bottom: pos.bottom,
        left: pos.left,
        borderStyle: 'solid',
        borderColor: color,
        borderTopWidth: pos.borderTopWidth,
        borderBottomWidth: pos.borderBottomWidth,
        borderLeftWidth: pos.borderLeftWidth,
        borderRightWidth: pos.borderRightWidth,
        pointerEvents: 'none',
      }"
    />
  </div>
</template>
