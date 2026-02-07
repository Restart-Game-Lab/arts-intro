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
  <mdui-layout full-height style="height: 100vh; overflow: hidden; display: flex; flex-direction: column;">
    <div style="flex-shrink: 0; z-index: 2000; position: relative;">
      <HeaderBar :title="appName" :nav-items="navItems"
        style="view-transition-name: page-header; position: relative !important; width: 100%;" />
    </div>

    <mdui-layout-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in" :css="true">
          <component :is="Component" />
        </transition>
      </router-view>
    </mdui-layout-main>

    <div style="flex-shrink: 0; z-index: 2000; position: relative;">
      <FooterBar :copyright-name="copyright" :icp-license="icp" :mps-license="mps" :git-repo="gitRepo"
        :commit-hash="commitHash"
        style="view-transition-name: page-footer; position: relative !important; width: 100%; top: auto; bottom: auto; left: auto; right: auto;" />
    </div>
  </mdui-layout>
</template>

<style scoped>
.main-content {
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  min-height: 0;
}
</style>
