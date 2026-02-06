/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_SUPPORT: string
  readonly VITE_APP_URL_ROOT: string
  readonly VITE_APP_ICP_LICENSE: string
  readonly VITE_APP_MPS_LICENSE: string
  readonly VITE_APP_COPYRIGHT: string
  readonly VITE_APP_GOOGLE_ANALYTICS_ID: string
  readonly VITE_APP_MICROSOFT_CLARITY_ID: string
  readonly VITE_APP_PRIMARY_COLOR: string
  readonly VITE_APP_GIT_REPO: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __COMMIT_HASH__: string
