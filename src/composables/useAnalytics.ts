import { onMounted } from 'vue'

/**
 * 分析工具全局对象的类型定义
 */
interface AnalyticsWindow extends Window {
  // Clarity
  clarity?: ((...args: unknown[]) => void) & { q?: unknown[] }
  // Google Analytics
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

/**
 * 统一分析工具 Composable
 * 在组件挂载后异步加载所有配置的分析脚本
 * 读取 .env 配置
 *
 * 目前包含:
 * 1. Microsoft Clarity
 * 2. Google Analytics 4
 */
export interface AnalyticsOptions {
  clarityId?: string
  gaId?: string
}

export function useAnalytics(options?: AnalyticsOptions) {
  const clarityId = options?.clarityId || import.meta.env.VITE_APP_MICROSOFT_CLARITY_ID
  const gaId = options?.gaId || import.meta.env.VITE_APP_GOOGLE_ANALYTICS_ID

  onMounted(() => {
    // 延迟异步加载所有分析脚本，避免阻塞页面渲染
    setTimeout(() => {
      if (clarityId) {
        initMicrosoftClarity(clarityId)
      }
      if (gaId) {
        initGoogleAnalytics(gaId)
      }
    }, 0)
  })
}

/**
 * 初始化 Microsoft Clarity
 */
function initMicrosoftClarity(projectId: string) {
  const win = window as AnalyticsWindow

  if (win.clarity) return

  // 初始化 Clarity 全局对象
  win.clarity =
    win.clarity ||
    ((...args: unknown[]) => {
      const existingQueue = win.clarity?.q || []
      win.clarity!.q = existingQueue
      if (Array.isArray(existingQueue)) {
        existingQueue.push(...args)
      }
    })

  // 注入 Clarity 脚本
  injectScript(`https://www.clarity.ms/tag/${projectId}`)
}

/**
 * 初始化 Google Analytics 4
 */
function initGoogleAnalytics(measurementId: string) {
  const win = window as AnalyticsWindow

  if (win.gtag) return

  // 1. 注入 gtag.js
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`)

  // 2. 初始化 dataLayer 和 gtag 函数
  win.dataLayer = win.dataLayer || []

  // 定义 gtag 函数
  win.gtag = function (...args: unknown[]) {
    // GA 期望参数作为 arguments 对象或数组被推入 dataLayer
    win.dataLayer?.push(args)
  }

  // 3. 配置 GA
  win.gtag('js', new Date())
  win.gtag('config', measurementId)
}

/**
 * 通用脚本注入辅助函数
 * @param src 脚本 URL
 */
function injectScript(src: string) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = src

  // 插入到第一个 script 标签之前，或者 head 中
  const firstScript = document.getElementsByTagName('script')[0]
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
  } else {
    document.head.appendChild(script)
  }
}
