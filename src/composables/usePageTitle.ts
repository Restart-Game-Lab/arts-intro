import { watch, toValue, type MaybeRefOrGetter } from 'vue'

/**
 * 动态更新文档标题
 * @param title 标题内容，可以是 字符串、Ref 或 Getter 函数
 * @param appName 基础应用名称 (e.g. "My App") - 必须提供，建议从环境变量注入
 */
export function usePageTitle(title: MaybeRefOrGetter<string>, appName: string = '') {
  const baseTitle = appName

  watch(
    () => toValue(title),

    (newTitle) => {
      document.title = newTitle ? (baseTitle ? `${newTitle} | ${baseTitle}` : newTitle) : baseTitle
    },
    { immediate: true },
  )
}
