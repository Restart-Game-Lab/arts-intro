<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import '@mdui/icons/light-mode.js';
import '@mdui/icons/dark-mode.js';
import '@mdui/icons/brightness-auto.js';
import '@mdui/icons/account-circle.js';

const props = defineProps<{
    title?: string
}>()

const { themeIcon, toggleTheme } = useTheme()
</script>

<template>
    <mdui-top-app-bar>
        <mdui-top-app-bar-title>{{ props.title }}</mdui-top-app-bar-title>
        <div style="flex-grow: 1"></div>

        <mdui-tooltip content="用户中心">
            <mdui-button-icon href="/user">
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
</style>
