<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useEnvStore } from '@/stores/env'
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

// 初始化环境变量 Store
const env = useEnvStore()

// 初始化主题 (使用环境变量配置)
useTheme({
  defaultPrimaryColor: env.primaryColor
})

// 初始化分析工具 (Clarity, Google Analytics)
useAnalytics({
  clarityId: env.microsoftClarityId,
  gaId: env.googleAnalyticsId
})

const appName = env.appName
const copyright = env.copyright
const icp = env.icpLicense
const mps = env.mpsLicense
const gitRepo = env.gitRepo
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

/* 防止页面切换时滚动条引起的布局跳动 */
.mdui-layout {
  scrollbar-gutter: stable;
}
</style>
