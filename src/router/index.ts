import { createRouter, createWebHistory } from 'vue-router'

export const navItems = [
  { name: '项目', path: '/projects' },
  { name: '应用', path: '/gadgets' },
  { name: '成员', path: '/labmems' },
  { name: '关于', path: '/about' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // Lazy load the component
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsPage.vue'),
    },
    {
      path: '/gadgets',
      name: 'gadgets',
      component: () => import('@/views/GadgetsPage.vue'),
    },
    {
      path: '/labmems',
      name: 'members',
      component: () => import('@/views/LabmemPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
  ],
})

export default router
