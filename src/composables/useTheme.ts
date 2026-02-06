import { ref, computed, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useViewTransition } from '@/composables/useViewTransition'
import { setTheme, setColorScheme } from 'mdui'

export type ThemeMode = 'light' | 'dark' | 'auto'

/**
 * 内部 Pinia Store，用于持久化和响应式同步
 * 包含在 Composable 文件中是为了使其作为一个“可复用模块”整体迁移
 */
const useThemeStore = defineStore('arts-theme-store', () => {
  // 使用 ref 作为单一真实数据源，确保响应式
  const theme = ref<ThemeMode>((localStorage.getItem('theme') as ThemeMode) || 'auto')

  // 3. 从环境变量读取默认主色调，如果未配置则回退到蓝色
  const envColor = import.meta.env.VITE_APP_PRIMARY_COLOR
  const primaryColor = ref(envColor || '#2196F3')

  // 4. 响应式监听：处理副作用（DOM 操作和持久化）
  // watchEffect 会自动追踪依赖，并在组件卸载时（如果是组件内调用）自动停止，但在 Store 中会一直保持活跃，这是符合预期的全局行为
  watchEffect(() => {
    setTheme(theme.value)
    setColorScheme(primaryColor.value)
    localStorage.setItem('theme', theme.value)
  })

  return {
    theme,
    primaryColor,
  }
})

/**
 * 主题管理 Composable (Pinia 依赖版)
 * 既保证了逻辑的复用性，又利用了 Pinia 提供全局状态和调试支持
 */
export function useTheme() {
  const store = useThemeStore()
  const { startTransition } = useViewTransition(toggleThemeLogic)

  function toggleThemeLogic() {
    const current = store.theme
    if (current === 'auto') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      store.theme = isDark ? 'light' : 'dark'
    } else {
      store.theme = current === 'dark' ? 'light' : 'dark'
    }
  }

  const themeIcon = computed(() => {
    switch (store.theme) {
      case 'light':
        return 'light-mode'
      case 'dark':
        return 'dark-mode'
      default:
        return 'brightness-auto'
    }
  })

  const themeLabel = computed(() => {
    switch (store.theme) {
      case 'light':
        return '浅色模式'
      case 'dark':
        return '深色模式'
      default:
        return '跟随系统'
    }
  })

  return {
    theme: computed(() => store.theme),
    themeIcon,
    themeLabel,
    toggleTheme: startTransition,
  }
}
