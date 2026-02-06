import { nextTick } from 'vue'

/**
 * 使用 View Transitions API 创建圆形扩散过渡效果
 * @param callback 状态更新回调函数
 * @returns startTransition 函数，接收 MouseEvent 触发过渡
 */
export function useViewTransition(callback: () => void | Promise<void>) {
  const startTransition = async (event?: MouseEvent) => {
    // 浏览器不支持或无事件对象时，直接执行回调
    if (!document.startViewTransition || !event) {
      await callback()
      return
    }

    const x = event.clientX
    const y = event.clientY
    // 计算从点击位置到屏幕最远角的距离，作为扩散圆的最终半径
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = document.startViewTransition(async () => {
      await callback()
      await nextTick()
    })

    await transition.ready

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
      },
      {
        duration: 300,
        easing: 'ease-out',
        // 指定伪元素，需与 CSS 中的 ::view-transition-new(root) 配合
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }

  return {
    startTransition,
  }
}
