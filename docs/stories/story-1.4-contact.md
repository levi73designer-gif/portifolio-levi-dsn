# Story 1.4 — Seção Contato

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Ready for Dev  
**Created:** 2026-04-24

---

## Story

Como visitante interessado, quero ver claramente as opções de contato (WhatsApp, E-mail, Instagram) e um botão direto para WhatsApp, para iniciar uma conversa rapidamente.

---

## Tasks

- [x] 1. Criar componente `Contact.tsx`
- [x] 2. Implementar headline "Tem um projeto? Me chama."
- [x] 3. Adicionar link para WhatsApp com API (`wa.me`)
- [x] 4. Adicionar link para E-mail (`mailto:`)
- [x] 5. Adicionar link para Instagram
- [x] 6. Criar botão CTA principal para WhatsApp
- [x] 7. Estilizar com ícones/redes sociais
- [x] 8. Implementar responsividade

---

## Acceptance Criteria

- [x] Headline "Tem um projeto? Me chama." em destaque
- [x] WhatsApp: (+55 19 99953-1669) com link `https://wa.me/5519999531669`
- [x] E-mail: (levi73designer@gmail.com) com link `mailto:`
- [x] Instagram: (@levi.dsn) com link para perfil
- [x] Botão CTA principal "Chamar no WhatsApp" em vermelho #E8181A
- [x] Ícones ou indicators visuais para cada canal
- [x] Layout responsivo
- [x] Links abrem em nova aba (`target="_blank"`)

---

## Dev Notes

**Contact Info:**
- WhatsApp: `+55 19 99953-1669`
- E-mail: `levi73designer@gmail.com`
- Instagram: `@levi.dsn`

**Links:**
- WhatsApp: `https://wa.me/5519999531669`
- E-mail: `mailto:levi73designer@gmail.com`
- Instagram: `https://instagram.com/levi.dsn`

**CTA Principal:**
- Texto: "Chamar no WhatsApp"
- Cor: `#E8181A`
- Ação: Abre WhatsApp em nova aba

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
- [x] `src/components/contact/Contact.tsx` — Componente Contact completo
- [x] `src/components/contact/Contact.module.css` — Estilos do Contact
- [x] `src/app/App.tsx` — Atualizado com Contact (site completo!)

---

## Testing

- [x] Link do WhatsApp abre corretamente
- [x] Link do E-mail abre cliente de e-mail
- [x] Link do Instagram abre perfil
- [x] Botão CTA responsivo em mobile
- [x] Todos links com `target="_blank"` e `rel="noopener"`

---

**Estimated Effort:** 1h  
**Actual Effort:** 45min  
**Ready for Review:** [x]
