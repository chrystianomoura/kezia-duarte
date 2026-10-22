# kezia-duarte

Site de uma página da psicóloga clínica Kezia Duarte (psicoterapia online). Astro + Tailwind, 100% estático.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # gera dist/
```

- Textos, contatos e mensagens do WhatsApp: `src/data/content.ts`
- Cores e fontes: `src/styles/global.css`
- Fotos: `src/assets/`

## Deploy

Push na `main` publica no GitHub Pages (`.github/workflows/deploy.yml`).
Com domínio próprio, defina `SITE_URL` e `BASE_PATH=/` no build.
