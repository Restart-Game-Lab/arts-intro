<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME

usePageTitle('小应用', appName)
</script>

<template>
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
</template>

<style scoped>
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(64px + 2rem);
  padding-bottom: calc(112px + 2rem);
  min-height: 100vh;
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
