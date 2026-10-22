import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// No GitHub Pages o site fica em /kezia-duarte; com domínio próprio, defina SITE_URL e BASE_PATH='/'.
const site = process.env.SITE_URL ?? 'https://chrystianomoura.github.io';
// Em desenvolvimento o site fica na raiz (localhost:4321); só o build de produção usa o subcaminho.
const base = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/kezia-duarte' : '/');

export default defineConfig({
  site,
  base,
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
