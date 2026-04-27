<template>
  <div class="site-root">
    <slot />
  </div>
</template>

<style scoped>
.site-root {
  min-height: 100svh;
  background: var(--beige);
  color: var(--ink);
  overflow-x: hidden;
  width: 100%;
}
</style>
