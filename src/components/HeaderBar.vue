<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import '@mdui/icons/light-mode.js';
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/brightness-auto.js';
import '@mdui/icons/account-circle.js';

const props = defineProps<{
    title?: string
    navItems?: { name: string, path: string }[]
}>()

const { themeIcon, toggleTheme } = useTheme()
const router = useRouter()
const route = useRoute()

const currentPath = computed(() => route.path)

const isActive = (path: string) => {
    return currentPath.value === path
}

const navigate = async (to: string) => {
    if (to === currentPath.value) return
    await router.push(to)
}
</script>

<template>
    <mdui-top-app-bar class="header">
        <div class="header-layout">
            <div class="header-left">
                <mdui-top-app-bar-title class="logo-title" @click="navigate('/')">
                    {{ props.title }}
                </mdui-top-app-bar-title>
            </div>

            <div class="header-center">
                <div class="nav-links">
                    <mdui-button v-for="item in props.navItems" :key="item.path" variant="text" class="nav-btn"
                        :class="{ 'active': isActive(item.path) }" @click="navigate(item.path)">{{ item.name
                        }}</mdui-button>
                </div>
            </div>

            <div class="header-right">
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
            </div>
        </div>
    </mdui-top-app-bar>
</template>

<style scoped>
.header {
    --mdui-color-surface: transparent;
    padding-left: 2rem;
    padding-right: 2rem;
}

.header-layout {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* Flow starts from left */
    height: 100%;
    position: relative;
}

.header-left {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.header-center {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding-left: 1.5rem;
    /* Space between logo and buttons */
}

.header-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* Increase gap between right buttons */
}

.logo-title {
    cursor: pointer;
    margin-right: 1.5rem;
    flex-grow: 0;
    min-width: auto;
    /* Reset mdui-top-app-bar-title default styling if necessary */
    padding-left: 0;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
}

.nav-btn {
    --mdui-color-primary: var(--mdui-color-on-surface);
    border-radius: 8px;
    /* Standard rounded rectangle */
    transition: background-color 0.2s;
    /* Smooth transition */
}

.nav-btn.active {
    background-color: rgba(var(--mdui-color-on-surface), 0.08);
    /* Light gray background */
}

mdui-top-app-bar-title {
    flex: none;
}
</style>
