import { fileURLToPath, URL } from 'node:url'
// import fs from 'node:fs'
import { execSync } from 'node:child_process'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

let commitHash = ''
try {
  // 优先判定 CI 环境 (如 GitHub Actions)
  if (process.env['GITHUB_SHA']) {
    commitHash = process.env['GITHUB_SHA'].slice(0, 7)
  } else {
    // 本地开发环境
    commitHash = execSync('git rev-parse --short HEAD').toString().trim()
  }
} catch {
  commitHash = 'unknown'
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 所有以 mdui- 开头的标签名都是 mdui 组件
          isCustomElement: (tag) => tag.startsWith('mdui-'),
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: false,
    // https: {
    //   key: fs.readFileSync('./cert/server.key'),
    //   cert: fs.readFileSync('./cert/fullchain.crt'),
    // },
    host: '0.0.0.0',
    cors: true,
    // allowedHosts: ['test.arts'],
  },
})
