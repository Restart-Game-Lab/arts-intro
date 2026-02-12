import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import { routes } from './router'
import { baseUrl } from './stores/env'
import './styles/view-transition.css'

export const createApp = ViteSSG(
  App,
  { routes, base: baseUrl },
  ({ app }) => {
    app.use(createPinia())
  },
)
