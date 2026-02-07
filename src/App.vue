<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useAnalytics } from '@/composables/useAnalytics'
import { useTheme } from '@/composables/useTheme'
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
</script>

<template>
  <RouterView />
</template>
