<script setup lang="ts">
defineProps<{
  photo?: boolean
}>()
</script>

<template>
  <div class="w-[30px] h-[30px] rounded-[6px] border border-current flex items-center justify-center shrink-0"
       :class="{ 'overflow-hidden': photo }"
  >
    <NuxtImg
        v-if="photo"
        src="/me.png"
        alt=""
        width="30"
        height="30"
        format="webp"
        quality="80"
        loading="eager"
        class="w-full h-full object-cover object-top block"
        aria-hidden="true"
    />
    <span v-else class="font-serif-it text-[16px] tracking-[-0.02em] text-current leading-none">qr</span>
  </div>
</template>