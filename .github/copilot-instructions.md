# Copilot Instructions for arts-intro

## Project Overview

A Vue 3 (Composition API) web application serving as an introduction site for the "Restart Game Lab".
**Crucially, this project acts as the foundational "Design System Source" for the entire Arts Website series.**
The folders `src/components`, `src/composables`, and `src/styles` are designed to be arguably copy-pasted or packaged to provide a unified UI/UX across multiple projects.

## Key Architecture & Patterns

- **Framework**: Vue 3 + Vite + TypeScript.
- **UI Components**:
  - **Base**: [mdui](https://www.mdui.org/) Web Components.
  - **Shared UI**: `src/components/HeaderBar.vue`, `FooterBar.vue` & `StudioLogo.vue`. These are "dumb" components driven by props for maximum reuse.
- **State Management**:
  - **Pinia**: Used globally.
  - **Pattern**: Core UI state (like Theme) is managed effectively inside `src/composables/useTheme.ts` using a private internal Store, making the composable self-contained and portable.
- **Routing**: Vue Router (`src/router/`).

## Design System & Reusability (IMPORTANT)

This project imposes a strict separation of concerns to facilitate code reuse:

1.  **`src/composables/` (The Logic)**:
    - Must NOT import from `src/stores/*`.
    - Should contain their own internal Pinia store definitions if global state is needed (e.g., `useTheme.ts`).
    - Logic like `usePageTitle`, `useAnalytics` must accept configuration arguments rather than hardcoding `import.meta.env`.
    - `useViewTransition.ts` provides the standard circular reveal navigation effect.

2.  **`src/components/` (The Shell)**:
    - `HeaderBar` and `FooterBar` are the standard app shell.
    - They accept content via **Props** (`title`, `copyrightName`, `icpLicense`).
    - Defaults can use `import.meta.env`, but the component must remain functional if props are provided manually.

3.  **`src/styles/` (The Look)**:
    - Contains global transition effects (`view-transition.css`).
    - Relies on standard CSS Variables that map to `mdui` tokens.

## Coding Standards & Conventions

- **Component Styling**:
  - Prefer `mdui` design tokens (CSS variables) like `var(--mdui-color-surface)` and `var(--mdui-color-outline)`.
  - Use `mdui` utility classes (e.g., `mdui-body-small`) for typography.
- **Icons**: Import specific icons from `@mdui/icons/*.js`. Example: `import '@mdui/icons/article.js';` then use `<mdui-icon-article></mdui-icon-article>`.
- **Environment Variables**: Use `import.meta.env.VITE_APP_*` for metadata like ICP license (`VITE_APP_ICP_LICENSE`) and Copyright (`VITE_APP_COPYRIGHT`), passed down to components via Props.
- **TypeScript**: Strict type checking is enforced via `vue-tsc`. Always define props and emits with types.

## Git Commit Guidelines

When generating commit messages, you **MUST** follow the project's specific convention:

**Format**: `[Type] Description`

**Allowed Types**:

- `[Add]`: New feature or functionality
- `[Fix]`: Bug fix
- `[Ref]`: Refactoring (no logic change)
- `[Merge]`: Merge branch code
- `[Del]`: Deleting code or files

**Example**: `[Add] Implement user login composable`

## Git Branching Workflow

You **MUST** adhere to the strict project workflow using only the following branches:

- **Sources**: `master` (Production), `develop` (Development).
- **Work Branches**:
  - `feat/NAME`: For new features (branch off `develop`, merge to `develop`).
  - `fix/NAME`: For bug fixes (branch off `develop`, merge to `develop`).

**Workflow Rules**:

1.  **Branching Strategy (Strict Traceability)**:
    - **Creation**: Always create a new branch from `develop`: `git checkout develop; git checkout -b TYPE/NAME`.
    - **Pushing**: Once a feature/fix is ready locally, ALWAYS push the branch to remote to ensure traceability: `git push -u origin TYPE/NAME`.
    - **Merging**:
      - Use **Non-Fast-Forward Merge** locally to preserve branch history graph: `git checkout develop; git merge --no-ff TYPE/NAME`.
      - Push updated `develop`: `git push origin develop`.
      - _Optionally clean up local branch, but consider keeping remote branch._

2.  **Copilot Interaction Protocol**:
    - **Checking Out**: Upon receiving a task, IMMEDIATELY create and switch to the appropriate `feat/` or `fix/` branch.
    - **Development Phase**: Perform all edits, builds, and verifies on this feature branch. **DO NOT COMMOT, MERGE, OR PUSH** unless explicitly instructed by the user (e.g., "Submit code", "Merge branch").
    - **Submission Phase**: Only when the user commands to finalize:
      1.  Run build verification.
      2.  Git add & commit (using convention).
      3.  Push feature branch to origin (Backup/Traceability).
      4.  Merge to `develop` with `--no-ff` (Preserve History).
      5.  Push `develop` to origin.

3.  **Forbidden Actions**:
    - Never commit directly to `master`.
    - Never commit directly to `develop` (Always merge into it).
    - Never perform a default (fast-forward) merge for features/fixes; verify `--no-ff` is used or implied.

## Critical Workflows

- **Development**: `npm run dev` starts the Vite server. Note: `vite.config.ts` allows `test.arts` as a host.
- **Production Build**: `npm run build` performs type-checking and minification.
- **Deployment**: Standard Vite build via `npm run build`. The `dist` folder is ready for static hosting.

## Code Quality & Verification

**After every file modification, you MUST run compilation verification to ensure no errors:**

- Run `npm run build` to verify TypeScript compilation and catch any type errors
- Run `npm run dev` to ensure the dev server starts without issues
- Fix any compilation errors before completing your task
- Do not consider a task complete until both commands pass successfully

This ensures code quality and prevents broken builds.

## Important Files

- [vite.config.ts](vite.config.ts): Contains custom element configuration for `mdui-` components and dev server host settings.
- [src/App.vue](src/App.vue): Global imports for `mdui` CSS and side-effects.
- [src/components/FooterBar.vue](src/components/FooterBar.vue): Example of `mdui` usage, environment variables, and scoped styling with design tokens.
