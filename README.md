# arts-intro

An introductory Vue 3 web application for the Restart Game Lab, serving as the foundational design system for the ARTS Website series.

## 项目简介

本项目是Restart Game Lab的官方介绍网站，旨在提供相关资讯和展示。

## 技术栈

- **核心框架**: [Vue 3](https://vuejs.org/) (Composition API)
- **构建工具**: [Vite](https://vitejs.dev/)
- **编程语言**: [TypeScript](https://www.typescriptlang.org/)
- **UI 框架**: [mdui](https://www.mdui.org/) (基于 Material Design 3 的 Web Components 框架)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **路由管理**: [Vue Router](https://router.vuejs.org/)
- **代码规范**: ESLint + Prettier

## 项目架构

项目采用模块化的 Vue 3 架构，结合 `mdui` 的 Web Components 访问性：

- `src/components/`: 存放全局通用组件，如 [FooterBar.vue](src/components/FooterBar.vue)、[HeaderBar.vue](src/components/HeaderBar.vue) 和 [StudioLogo.vue](src/components/StudioLogo.vue)。
- `src/composables/`: 存放可复用的组合式函数，例如主题控制 (`useTheme.ts`) 和动态页面标题 (`usePageTitle.ts`)。
- `src/stores/`: 使用 Pinia 进行应用级状态管理。
- `src/views/`: 存放页面级视图组件。
- `src/router/`: 统一管理 Vue Router 路由配置。

## 关键特性

- **mdui 深度集成**: 利用 mdui 的设计令牌 (Design Tokens) 和实用类，确保视觉风格符合 Material Design 3 规范。
- **部署准备**: 预留了构建脚本 `npm run build`，产出 `dist` 目录可用于静态部署。
- **强类型保证**: 全面使用 TypeScript 进行开发，并结合 `vue-tsc` 在构建时进行严格的类型检查。

## 开发与维护

### 环境准备

- Node.js (建议使用最新的 LTS 版本)
- 推荐 IDE: VS Code + Vue - Official 插件

### 常用命令

- **安装依赖**: `npm install`
- **开发运行**: `npm run dev`
- **构建生产包**: `npm run build`
- **代码格式化**: `npm run format`

## 参与贡献 (Contributing)

请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解我们的提交规范和分支管理流程。
