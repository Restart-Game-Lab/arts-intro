<template>
  <mdui-bottom-app-bar class="footer">
    <div class="footer-layout">
      <!-- Left Section: Reserved for future use (e.g. Logos, Links) -->
      <div class="footer-left">
        <slot name="left">
          <div class="placeholder"></div>
        </slot>
      </div>

      <!-- Center Section: Copyright & License Info -->
      <div class="footer-center">
        <p class="mdui-body-small footer-text">
          &copy; {{ currentYear }} {{ props.copyrightName }}. All rights reserved.
        </p>
        <div class="mdui-body-small footer-text beian">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            {{ props.icpLicense }}
          </a>
          <a v-if="props.mpsLicense" :href="`https://beian.mps.gov.cn/#/query/webSearch?code=${MpsCode}`"
            target="_blank" rel="noreferrer">
            {{ props.mpsLicense }}
          </a>
        </div>
      </div>

      <!-- Right Section: Version Info & Actions -->
      <div class="footer-right">
        <a v-if="gitRepo" :href="commitUrl" target="_blank" rel="noopener noreferrer"
          class="version-info mdui-body-small">
          <mdui-icon-fork-right class="commit-icon"></mdui-icon-fork-right>
          <span>{{ commitHash }}</span>
        </a>
        <div v-else class="version-info mdui-body-small">
          <mdui-icon-fork-right class="commit-icon"></mdui-icon-fork-right>
          <span>{{ commitHash }}</span>
        </div>
        <slot name="right"></slot>
      </div>
    </div>
  </mdui-bottom-app-bar>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import '@mdui/icons/fork-right.js'

interface FooterProps {
  copyrightName?: string
  icpLicense?: string
  mpsLicense?: string
  gitRepo?: string
  commitHash?: string
}

const props = defineProps<FooterProps>()

const currentYear = computed(() => new Date().getFullYear())
const MpsCode = computed(() => props.mpsLicense?.replace(/\D/g, ''))
const commitHash = computed(() => props.commitHash || 'unknown')
const commitUrl = computed(() => {
  if (!props.gitRepo) return '#'
  return `${props.gitRepo}/commit/${commitHash.value}`
})
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--mdui-color-surface);
  border-top: 1px solid var(--mdui-color-outline);
  padding: 0.5rem 2rem;
  /* Ensure relative positioning for absolute children */
  position: relative;
}

.footer-layout {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.footer-left,
.footer-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.footer-left {
  left: 0;
  justify-content: flex-start;
  text-align: left;
}

.footer-right {
  right: 0;
  justify-content: flex-end;
  text-align: right;
  gap: 1rem;
}

.footer-center {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0 4rem;
}

.placeholder {
  visibility: hidden;
  /* Occupy same approximate width if needed, or just exist */
  width: 1rem;
}


.version-info {
  /* position: absolute; removed in favor of flex layout */
  font-size: 0.8125rem;
  color: var(--mdui-color-on-surface);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  user-select: none;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;
}

.version-info:hover {
  opacity: 0.7;
}

.commit-icon {
  font-size: 1rem;
}

.footer-text {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
}

.icp-icon {
  font-size: 0.8125rem;
}

.beian {
  gap: 0.75rem;
}

.beian a {
  color: var(--mdui-color-on-surface);
  text-decoration: none;
}

.beian a:hover {
  text-decoration: underline;
}
</style>
