<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useAnalytics } from '@/composables/useAnalytics'
import 'mdui/mdui.css'
import 'mdui'

// 初始化应用 Store，它会自动触发设计系统的主题引擎
useAppStore()

// 初始化分析工具 (Clarity, Google Analytics)
useAnalytics()
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  /* 在浅色模式下强制背景为纯白色 */
  --mdui-color-background-light: 255, 255, 255;
  --mdui-color-surface-light: 255, 255, 255;
  --mdui-color-surface-container-light: 255, 255, 255;
  --mdui-color-surface-container-low-light: 255, 255, 255;
  --mdui-color-surface-container-lowest-light: 255, 255, 255;
}

body {
  background-color: rgb(var(--mdui-color-background));
  margin: 0;
  padding: 0;
  transition: background-color 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}
</style>
