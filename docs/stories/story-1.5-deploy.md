# Story 1.5 — Deploy e Configuração Vercel

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Draft  
**Created:** 2026-04-24

---

## Story

Como proprietário do portfólio, quero que o site esteja publicado e acessível via Vercel, para que potenciais clientes possam visualizar meu trabalho.

---

## Tasks

- [ ] 1. Configurar projeto na Vercel
- [ ] 2. Conectar repositório GitHub (`levi73designer-gif`)
- [ ] 3. Configurar build settings (Antigravity)
- [ ] 4. Realizar deploy de produção
- [ ] 5. Testar site publicado
- [ ] 6. Configurar domínio personalizado (se aplicável)
- [ ] 7. Validar performance (Lighthouse)
- [ ] 8. Validar acessibilidade (WCAG AA)

---

## Acceptance Criteria

- [ ] Projeto conectado na Vercel
- [ ] Deploy automático configurado (push → deploy)
- [ ] Site acessível via URL da Vercel
- [ ] Todas as 4 seções funcionando (Hero, Sobre, Portfólio, Contato)
- [ ] Filtro do portfólio funcional
- [ ] Links de contato funcionando
- [ ] Lighthouse Performance > 90
- [ ] WCAG AA compliance (contraste, navegação teclado)
- [ ] Responsivo em mobile, tablet, desktop

---

## Dev Notes

**Vercel Configuration:**
```json
{
  "framework": "antigravity",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

**Checklist Pré-Deploy:**
- [ ] Todas as stories anteriores completas
- [ ] Tests passando
- [ ] Lint sem erros
- [ ] Build local bem-sucedido
- [ ] README.md atualizado

**Performance Targets:**
- FCP: < 1.5s
- TTI: < 3s
- Lighthouse: > 90

---

## Dev Agent Record

### Implementation Notes
<!-- Developer fills during implementation -->

### Debug Log
<!-- References to debug logs if any -->

### Completion Notes
- [ ] All tasks completed
- [ ] All acceptance criteria met
- [ ] Code reviewed and tested

### Change Log
| Date | Change | Author |
|------|--------|--------|
| | | |

### File List
<!-- List all files created/modified/deleted -->
- [ ] `vercel.json`
- [ ] `.github/workflows/deploy.yml` (opcional)

---

## Testing

- [ ] URL da Vercel acessível
- [ ] Navegação por âncoras funciona
- [ ] Filtro do portfólio funciona online
- [ ] Links de contato funcionam
- [ ] Site responsivo em dispositivos reais
- [ ] Lighthouse score > 90

---

**Estimated Effort:** 1.5h  
**Actual Effort:** ___  
**Ready for Review:** [ ]

---

## Deployment Info

| Item | Value |
|------|-------|
| Vercel URL | |
| Domain | |
| Deploy Date | |
| Last Commit | |
