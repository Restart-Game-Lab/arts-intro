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

usePageTitle('小应用', appName)
</script>

<template>
  <mdui-layout full-height>
    <HeaderBar :title="appName" :nav-items="navItems"
      style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" />

    <mdui-layout-main class="main-content">
      <div class="content-container">
        <h1 class="page-title">小应用</h1>
        <p class="page-description">这里包含了一些实用的小工具和实验性质的应用。</p>

        <div
          style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 2rem;">
          <mdui-card variant="elevated" clickable style="padding: 1rem;">
            <h3>示例应用</h3>
            <p>这是一个应用占位符。</p>
          </mdui-card>
        </div>
      </div>
    </mdui-layout-main>

    <FooterBar :copyright-name="copyright" :icp-license="icp" :mps-license="mps" :git-repo="gitRepo"
      style="position: fixed; bottom: 0; left: 0; width: 100%; z-index: 1000;" />
  </mdui-layout>
</template>

<style scoped>
.main-content {
  height: 100vh;
  margin: 0;
  padding: 64px 0 100px 0;
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
