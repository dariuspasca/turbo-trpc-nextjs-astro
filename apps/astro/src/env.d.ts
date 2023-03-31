/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
