<script setup lang="ts">
import { usePageTitle } from '@/composables/usePageTitle'

const appName = import.meta.env.VITE_APP_NAME

usePageTitle('成员介绍', appName)
</script>

<template>
  <div class="content-container">
    <h1 class="page-title">成员介绍</h1>
    <p class="page-description">认识一下 Restart Game Lab 的所有成员。</p>

    <mdui-list style="margin-top: 2rem; max-width: 600px;">
      <mdui-list-item headline="Member Name" description="Role / Title">
        <mdui-avatar slot="icon">A</mdui-avatar>
      </mdui-list-item>
    </mdui-list>
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
