<script setup lang="ts">
import { useEnvStore } from '@/stores/env'
import { usePageTitle } from '@/composables/usePageTitle'

const envStore = useEnvStore()
const appName = envStore.appName

usePageTitle('关于我们', appName)
</script>

<template>
  <div class="content-container">
    <h1 class="page-title">关于我们</h1>
    <p class="page-description">关于 Restart Game Lab 的故事。</p>

    <div class="about-content" style="margin-top: 2rem;">
      <p>Restart Game Lab 致力于...xxxxxxxxxxxx</p>
      <br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx<br />xxxxxxxxxxxx
    </div>
  </div>
</template>

<style scoped>
.content-container {
  max-width: 800px;
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

.about-content p {
  color: rgb(var(--mdui-color-on-surface));
  line-height: 1.6;
}
</style>
