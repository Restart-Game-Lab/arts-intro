<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import StudioLogo from '@/components/StudioLogo.vue'
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME
const copyright = import.meta.env.VITE_APP_COPYRIGHT
const icp = import.meta.env.VITE_APP_ICP_LICENSE
const mps = import.meta.env.VITE_APP_MPS_LICENSE
const gitRepo = import.meta.env.VITE_APP_GIT_REPO

usePageTitle('首页', appName)
</script>

<template>
  <mdui-layout full-height style="min-height: 100vh; overflow: hidden;">
    <HeaderBar :title="appName" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" />
    <mdui-layout-main class="main-content">
      <div class="center-container">
        <!-- Studio Name Animation -->
        <StudioLogo class="studio-logo" />

        <div class="slogan-container">
          <p class="slogan-text">重启，是探索未知的开始。</p>
        </div>
      </div>
    </mdui-layout-main>
    <FooterBar :copyright-name="copyright" :icp-license="icp" :mps-license="mps" :git-repo="gitRepo"
      style="position: fixed; bottom: 0; left: 0; width: 100%; z-index: 1000;" />
  </mdui-layout>
</template>

<style scoped lang="css">
.main-content {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/* Force HMR update */
.center-container {
  height: 100%;
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
  /* Animation duration tailored to SVG draw time (~9s in full) */
  animation: fadeIn 1.5s ease-out 9.5s forwards;
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
