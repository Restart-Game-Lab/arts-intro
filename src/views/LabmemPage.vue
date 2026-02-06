<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME
const copyright = import.meta.env.VITE_APP_COPYRIGHT
const icp = import.meta.env.VITE_APP_ICP_LICENSE
const mps = import.meta.env.VITE_APP_MPS_LICENSE
const gitRepo = import.meta.env.VITE_APP_GIT_REPO

usePageTitle('成员介绍', appName)
</script>

<template>
  <mdui-layout full-height>
    <HeaderBar :title="appName" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;" />
    
    <mdui-layout-main class="main-content">
      <div class="content-container">
        <h1 class="page-title">成员介绍</h1>
        <p class="page-description">认识一下 Restart Game Lab 的所有成员。</p>
        
        <mdui-list style="margin-top: 2rem; max-width: 600px;">
          <mdui-list-item headline="Member Name" description="Role / Title">
            <mdui-avatar slot="icon">A</mdui-avatar>
          </mdui-list-item>
        </mdui-list>
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
