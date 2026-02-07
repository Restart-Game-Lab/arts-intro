<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useAnalytics } from '@/composables/useAnalytics'
import { useTheme } from '@/composables/useTheme'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { navItems } from '@/router'
import 'mdui/mdui.css'
import 'mdui'
import '@/styles/main.css'

// 初始化应用 Store
useAppStore()

// 初始化主题 (使用环境变量配置)
useTheme({
  defaultPrimaryColor: import.meta.env.VITE_APP_PRIMARY_COLOR
})

// 初始化分析工具 (Clarity, Google Analytics)
useAnalytics({
  clarityId: import.meta.env.VITE_APP_MICROSOFT_CLARITY_ID,
  gaId: import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID
})

const appName = import.meta.env.VITE_APP_NAME
const copyright = import.meta.env.VITE_APP_COPYRIGHT
const icp = import.meta.env.VITE_APP_ICP_LICENSE
const mps = import.meta.env.VITE_APP_MPS_LICENSE
const gitRepo = import.meta.env.VITE_APP_GIT_REPO
const commitHash = __COMMIT_HASH__
</script>

<template>
  <mdui-layout full-height style="min-height: 100vh;">
    <HeaderBar :title="appName" :nav-items="navItems"
      style="position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; view-transition-name: page-header;" />

    <mdui-layout-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in" :css="true">
          <component :is="Component" />
        </transition>
      </router-view>
    </mdui-layout-main>

    <FooterBar :copyright-name="copyright" :icp-license="icp" :mps-license="mps" :git-repo="gitRepo"
      :commit-hash="commitHash"
      style="position: fixed; bottom: 0; left: 0; width: 100%; z-index: 1000; view-transition-name: page-footer;" />
  </mdui-layout>
</template>

<style scoped>
.main-content {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
