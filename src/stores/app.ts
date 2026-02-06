import { defineStore } from 'pinia'
import { useTheme } from '@/composables/useTheme'

/**
 * 此时 AppStore 可以作为一个集成层
 * 聚合来自设计系统 (useTheme) 和业务相关的状态
 */
export const useAppStore = defineStore('app', () => {
  const themeData = useTheme()

  return {
    ...themeData,
  }
})
