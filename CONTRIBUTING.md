# 贡献指南 (Contributing Guide)

为了保持代码库的整洁和历史记录的可读性，请遵循以下提交和分支命名规范。

## 提交规范 (Commit Convention)

提交信息 (`Commit Message`) 应遵循以下格式：

`[Type] 描述信息`

**Type 类型列表：**

- `[Add]`: 新题 (一般指新增功能/Feature)
- `[Fix]`: 修复 (Bug修复)
- `[Ref]`: 重构 (代码重构，不改变外部行为)
- `[Merge]`: 合并 (分支合并记录)
- `[Del]`: 删除 (代码或是文件删除)

## 开发流程建议

在提交代码前，请务必运行以下命令以确保代码质量：

1.  **类型检查**: `npm run type-check`
2.  **代码风格检查**: `npm run lint`
3.  **格式化**: `npm run format`

---

## 分支管理规范 (Branch Naming Convention)

本项目严格遵循 **Git Flow** 简化流程，仅允许使用以下四类分支：

### 1. 核心分支

- **master**: 生产环境分支。永远保持随时可发布状态。仅接受来自 `develop` 或 `hotfix` 的合并。
- **develop**: 主开发分支。包含最新完成开发的功能。

### 2. 功能开发分支 (Feature)

- **前缀**：`feat/`
- **来源**：从 `develop` 分支检出。
- **流程**：开发完成后合并回 `develop`。
- **命名示例**：
  - `feat/user-login`
  - `feat/20260212_payment-integration`

### 3. 修复分支 (Fix)

- **前缀**：`fix/`
- **来源**：从 `develop` 分支检出。
- **流程**：修复完成后合并回 `develop`。

### 4. 重构分支 (Refactor)

- **前缀**：`ref/`
- **来源**：从 `develop` 分支检出。
- **流程**：重构完成后合并回 `develop`。
- **命名示例**：
  - `fix/login-error`
  - `fix/css-overflow_20260212`

> **注意**: 除 `master` 和 `develop` 外，其余分支在合并后通常应删除。禁止直接在 `master` 分支提交代码。
