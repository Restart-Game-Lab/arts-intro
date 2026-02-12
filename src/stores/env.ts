import { defineStore } from 'pinia'

/**
 * 环境变量管理 Store
 * 集中管理所有环境变量，提供类型安全和响应式访问
 */
export const useEnvStore = defineStore('env', () => {
  // APP主属性
  const appName = import.meta.env.VITE_APP_NAME
  const support = import.meta.env.VITE_APP_SUPPORT
  const urlRoot = import.meta.env.VITE_APP_URL_ROOT
  const icpLicense = import.meta.env.VITE_APP_ICP_LICENSE
  const mpsLicense = import.meta.env.VITE_APP_MPS_LICENSE
  const copyright = import.meta.env.VITE_APP_COPYRIGHT

  // APP外部分析ID
  const googleAnalyticsId = import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID
  const microsoftClarityId = import.meta.env.VITE_APP_MICROSOFT_CLARITY_ID

  // APP Git Repo
  const gitRepo = import.meta.env.VITE_APP_GIT_REPO

  // 其他可能的变量（如果需要扩展）
  const primaryColor = import.meta.env.VITE_APP_PRIMARY_COLOR

  return {
    appName,
    support,
    urlRoot,
    icpLicense,
    mpsLicense,
    copyright,
    googleAnalyticsId,
    microsoftClarityId,
    gitRepo,
    primaryColor,
  }
})