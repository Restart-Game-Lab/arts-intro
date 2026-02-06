<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { useRouter } from 'vue-router'
import { useViewTransition } from '@/composables/useViewTransition'
import '@mdui/icons/light-mode.js';
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/brightness-auto.js';
import '@mdui/icons/account-circle.js';

const props = defineProps<{
    title?: string
}>()

const { themeIcon, toggleTheme } = useTheme()
const router = useRouter()

const navigate = (to: string, event: MouseEvent) => {
    const { startTransition } = useViewTransition(async () => {
        await router.push(to)
    })
    startTransition(event)
}
</script>

<template>
    <mdui-top-app-bar>
        <mdui-top-app-bar-title class="logo-title" @click="navigate('/', $event)">
            {{ props.title }}
        </mdui-top-app-bar-title>

        <div class="nav-links">
            <mdui-button variant="text" @click="navigate('/projects', $event)">项目</mdui-button>
            <mdui-button variant="text" @click="navigate('/gadgets', $event)">应用</mdui-button>
            <mdui-button variant="text" @click="navigate('/labmem', $event)">成员</mdui-button>
            <mdui-button variant="text" @click="navigate('/about', $event)">关于</mdui-button>
        </div>

        <div style="flex-grow: 1"></div>

        <mdui-tooltip content="用户中心">
            <mdui-button-icon href="https://babel.restart.org.cn">
                <mdui-icon-account-circle></mdui-icon-account-circle>
            </mdui-button-icon>
        </mdui-tooltip>

        <mdui-tooltip :content="`切换主题`">
            <mdui-button-icon @click="toggleTheme">
                <component :is="`mdui-icon-${themeIcon}`"></component>
            </mdui-button-icon>
        </mdui-tooltip>
    </mdui-top-app-bar>
</template>

<style scoped>
mdui-top-app-bar {
    --mdui-color-surface: transparent;
    padding-left: 2rem;
    padding-right: 2rem;
}

.logo-title {
    cursor: pointer;
    margin-right: 1.5rem;
    flex-grow: 0;
    min-width: auto;
}

.nav-links {
    display: flex;
    gap: 0.25rem;
}

mdui-top-app-bar-title {
    flex: none;
}
</style>
