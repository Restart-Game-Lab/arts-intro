<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { usePageTitle } from '@/composables/usePageTitle'
import { navItems } from '@/router'

const appName = import.meta.env.VITE_APP_NAME
const copyright = import.meta.env.VITE_APP_COPYRIGHT
const icp = import.meta.env.VITE_APP_ICP_LICENSE
const mps = import.meta.env.VITE_APP_MPS_LICENSE
const gitRepo = import.meta.env.VITE_APP_GIT_REPO
const commitHash = __COMMIT_HASH__

usePageTitle('项目一览', appName)
</script>

<template>
  <mdui-layout full-height>
    <HeaderBar :title="appName" :nav-items="navItems"
      style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" />

    <mdui-layout-main class="main-content">
      <div class="content-container">
        <h1 class="page-title">项目一览</h1>
        <p class="page-description">这里展示了 Restart Game Lab 正在进行或已完成的项目。</p>

        <mdui-card variant="outlined" style="margin-top: 2rem; padding: 1rem;">
          <h3>Project Placeholder</h3>
          <p>更多精彩项目即将上线...</p>
        </mdui-card>
      </div>
    </mdui-layout-main>

    <FooterBar :copyright-name="copyright" :icp-license="icp" :mps-license="mps" :git-repo="gitRepo"
      :commit-hash="commitHash" style="position: fixed; bottom: 0; left: 0; width: 100%; z-index: 1000;" />
  </mdui-layout>
</template>

<style scoped>
.main-content {
  height: 100vh;
  margin: 0;
  padding: 64px 0 100px 0;
  /* Header and Footer offset */
  overflow-y: auto;
  box-sizing: border-box;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  margin-bottom: 0.5rem;
  color: rgb(var(--mdui-color-on-surface));
}

.page-description {
  color: rgb(var(--mdui-color-on-surface-variant));
}
</style>
