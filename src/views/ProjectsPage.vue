<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME

usePageTitle('项目一览', appName)
</script>

<template>
  <div class="content-container">
    <h1 class="page-title">项目一览</h1>
    <p class="page-description">这里展示了 Restart Game Lab 正在进行或已完成的项目。</p>

    <mdui-card variant="outlined" style="margin-top: 2rem; padding: 1rem;">
      <h3>Project Placeholder</h3>
      <p>更多精彩项目即将上线...</p>
    </mdui-card>
  </div>
</template>

<style scoped>
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  box-sizing: border-box;
}

.page-title {
  margin-bottom: 0.5rem;
  color: rgb(var(--mdui-color-on-surface));
}

.page-description {
  color: rgb(var(--mdui-color-on-surface-variant));
}
</style>
