# Story 1.1 — Seção Hero com CTAs

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Ready for Dev  
**Created:** 2026-04-24

---

## Story

Como visitante do site, quero ver uma seção Hero impactante com nome, tagline e dois CTAs claros, para entender imediatamente o propósito do portfólio e navegar para as próximas seções.

---

## Tasks

- [x] 1. Criar componente `Hero.tsx`
- [x] 2. Implementar tipografia (Archivo Black para nome)
- [x] 3. Adicionar tagline "Arte com propósito"
- [x] 4. Criar botão primário "Veja meu trabalho" (âncora #portfolio)
- [x] 5. Criar botão secundário "Fale comigo" (âncora #contato)
- [x] 6. Estilizar com fundo escuro e cor primária #E8181A
- [x] 7. Implementar responsividade (mobile-first)

---

## Acceptance Criteria

- [x] Nome "Levi.dsn" visível em destaque (Archivo Black)
- [x] Tagline "Arte com propósito" abaixo do nome
- [x] Botão primário "Veja meu trabalho" com scroll suave para #portfolio
- [x] Botão secundário "Fale comigo" com scroll suave para #contato
- [x] Fundo escuro (#0A0A0A) com elementos em vermelho (#E8181A)
- [x] Layout responsivo (mobile, tablet, desktop)
- [x] Animação suave de entrada (fade-in ou slide-up)
- [x] Hero ocupa 100vh (tela cheia)

---

## Dev Notes

**Hero Copy:**
- Nome: `Levi.dsn`
- Tagline: `Arte com propósito`
- CTA Primário: `Veja meu trabalho` → âncora #portfolio
- CTA Secundário: `Fale comigo` → âncora #contato

**Design Specs:**
- Background: `#0A0A0A`
- Primary Color: `#E8181A`
- Font Heading: `Archivo Black`
- Font Body: `Kanit`

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
- [x] `src/components/hero/Hero.tsx` — Componente Hero principal
- [x] `src/components/hero/Hero.module.css` — Estilos do Hero
- [x] `src/components/ui/Button.tsx` — Componente Button reutilizável
- [x] `src/components/ui/Button.module.css` — Estilos do Button
- [x] `src/app/App.tsx` — Atualizado com Hero

---

## Testing

- [x] Scroll suave funciona nos dois CTAs
- [x] Tipografia carrega corretamente
- [x] Botões responsivos em mobile
- [x] Contraste de cores WCAG AA

---

**Estimated Effort:** 1.5h  
**Actual Effort:** 1h  
**Ready for Review:** [x]
