import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 内部 Store：用于跨组件共享 Logo 动画状态
 * 确保 StudioLogo 组件可以独立于应用层 Store 运作
 */
const useLogoAnimationStore = defineStore('arts-logo-anim', () => {
    const logoAnimationPlayed = ref(false)

    const setLogoAnimationPlayed = () => {
        logoAnimationPlayed.value = true
    }

    return {
        logoAnimationPlayed,
        setLogoAnimationPlayed
    }
})

/**
 * Logo 动画状态 Composable
 */
export function useLogoAnimation() {
    const store = useLogoAnimationStore()

    return {
        logoAnimationPlayed: computed(() => store.logoAnimationPlayed),
        setLogoAnimationPlayed: store.setLogoAnimationPlayed
    }
}
