<script setup lang="ts">
import StudioLogo from '@/components/StudioLogo.vue'
import { usePageTitle } from '@/composables/usePageTitle'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const appName = import.meta.env.VITE_APP_NAME

usePageTitle('首页', appName)
</script>

<template>
  <div class="center-container">
    <!-- Studio Name Animation -->
    <StudioLogo class="studio-logo" />

    <div class="slogan-container">
      <p class="slogan-text" :class="{ 'played': appStore.logoAnimationPlayed }">为了我们的幻想乡</p>
    </div>
  </div>
</template>

<style scoped lang="css">
/* Force HMR update */
.center-container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.slogan-text {
  font-family: var(--mdui-typescale-headline-small-font, system-ui, -apple-system, sans-serif);
  color: rgb(var(--mdui-color-on-surface-variant));
  font-size: var(--mdui-typescale-headline-small-size, 1.5rem);
  font-weight: var(--mdui-typescale-headline-small-weight, 400);
  line-height: var(--mdui-typescale-headline-small-line-height, 2rem);
  letter-spacing: 0.2rem;
  text-align: center;

  opacity: 0;
  /* Animation duration tailored to SVG draw time (~3.8s in full) */
  animation: fadeIn 1.5s ease-out 3.8s forwards;
  will-change: opacity, transform;
}

.slogan-text.played {
  animation: none !important;
  opacity: 1 !important;
  transform: translateY(0) !important;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
