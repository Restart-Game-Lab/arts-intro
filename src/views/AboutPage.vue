<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME
const copyright = import.meta.env.VITE_APP_COPYRIGHT
const icp = import.meta.env.VITE_APP_ICP_LICENSE
const mps = import.meta.env.VITE_APP_MPS_LICENSE
const gitRepo = import.meta.env.VITE_APP_GIT_REPO

usePageTitle('关于我们', appName)
</script>

<template>
  <mdui-layout full-height>
    <HeaderBar :title="appName" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" />
    
    <mdui-layout-main class="main-content">
      <div class="content-container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-description">关于 Restart Game Lab 的故事。</p>
        
        <div class="about-content" style="margin-top: 2rem;">
          <p>Restart Game Lab 致力于...</p>
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
  max-width: 800px;
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

.about-content p {
  color: rgb(var(--mdui-color-on-surface));
  line-height: 1.6;
}
</style>
