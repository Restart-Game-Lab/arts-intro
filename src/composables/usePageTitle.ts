import { watch, toValue, type MaybeRefOrGetter } from 'vue'

/**
 * 动态更新文档标题
 * @param title 标题内容，可以是 字符串、Ref 或 Getter 函数
 */
export function usePageTitle(title: MaybeRefOrGetter<string>, appName?: string) {
  const baseTitle = appName || import.meta.env.VITE_APP_NAME

  watch(
    () => toValue(title),

    (newTitle) => {
      document.title = newTitle ? `${newTitle} | ${baseTitle}` : baseTitle
    },
    { immediate: true },
  )
}
