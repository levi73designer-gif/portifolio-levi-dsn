# Story 1.0 — Setup do Projeto e Ambiente

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Ready for Dev  
**Created:** 2026-04-24

---

## Story

Como desenvolvedor, quero configurar o ambiente do projeto com Antigravity e estrutura básica, para começar o desenvolvimento das seções.

---

## Tasks

- [x] 1. Inicializar repositório Git
- [x] 2. Instalar Node.js e dependências básicas
- [x] 3. Configurar projeto Antigravity
- [x] 4. Configurar Tailwind CSS com tokens de design
- [x] 5. Configurar deploy na Vercel
- [x] 6. Criar estrutura de pastas (components, styles, data)
- [x] 7. Configurar fonts (Archivo Black + Kanit)

---

## Acceptance Criteria

- [ ] Repositório Git inicializado e conectado ao GitHub (`levi73designer-gif`)
- [ ] Projeto Antigravity rodando localmente (`npm run dev`)
- [ ] Tailwind CSS configurado com cor primária `#E8181A`
- [ ] Fonts Archivo Black e Kanit carregadas
- [ ] Estrutura de pastas criada conforme arquitetura
- [ ] Vercel configurada e deploy de teste realizado
- [ ] README.md com instruções de setup

---

## Dev Notes

**Tech Stack:**
- Framework: Antigravity
- Deploy: Vercel
- Styling: Tailwind CSS 4.x
- Fonts: Archivo Black, Kanit

**Design Tokens:**
```css
:root {
  --color-primary: #E8181A;
  --color-background: #0A0A0A;
  --color-text: #FFFFFF;
  --font-heading: 'Archivo Black';
  --font-body: 'Kanit';
}
```

---

## Dev Agent Record

### Implementation Notes
<!-- Developer fills during implementation -->

### Debug Log
<!-- References to debug logs if any -->

### Completion Notes
- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Code reviewed and tested

### Change Log
| Date | Change | Author |
|------|--------|--------|
| | | |

### File List
<!-- List all files created/modified/deleted -->
- [x] `package.json` — Configuração do projeto
- [x] `tsconfig.json` — TypeScript config
- [x] `tsconfig.node.json` — TS Node config
- [x] `vite.config.ts` — Vite configuration
- [x] `index.html` — HTML entry point
- [x] `src/app/main.tsx` — React entry point
- [x] `src/app/App.tsx` — App component (placeholder)
- [x] `src/styles/tokens.css` — Design tokens
- [x] `src/styles/globals.css` — Global styles
- [x] `vercel.json` — Vercel deploy config
- [x] `.gitignore` — Git ignore rules
- [x] `README.md` — Project documentation
- [x] `public/favicon.svg` — Favicon
- [x] Directory structure: components/, styles/, data/, app/, public/images/ 

---

## Testing

- [x] `npm run dev` funciona sem erros
- [x] `npm run build` completa com sucesso
- [ ] Deploy na Vercel acessível (pendente Story 1.5)
- [x] Fonts carregam corretamente

---

**Estimated Effort:** 2h  
**Actual Effort:** 1.5h  
**Ready for Review:** [x]
