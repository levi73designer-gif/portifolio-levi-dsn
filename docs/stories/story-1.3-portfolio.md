# Story 1.3 — Seção Portfólio com Filtro

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Draft  
**Created:** 2026-04-24

---

## Story

Como visitante do site, quero filtrar projetos por categoria (Identidade Visual, Social Media, Projetos Digitais), para encontrar rapidamente o tipo de trabalho que me interessa.

---

## Tasks

- [ ] 1. Criar estrutura de dados `portfolio.ts` com 6 projetos
- [ ] 2. Criar componente `Portfolio.tsx` (container da seção)
- [ ] 3. Criar componente `PortfolioFilter.tsx` (abas de filtro)
- [ ] 4. Criar componente `ProjectCard.tsx` (card individual)
- [ ] 5. Implementar lógica de filtro por categoria
- [ ] 6. Estilizar cards com hover effects
- [ ] 7. Implementar responsividade (grid adaptativo)
- [ ] 8. Adicionar placeholders para imagens

---

## Acceptance Criteria

- [ ] 3 categorias de filtro: Identidade Visual, Social Media, Projetos Digitais
- [ ] 6 projetos cadastrados (2 por categoria)
- [ ] Filtro funciona com clique nas abas
- [ ] Cards exibem: nome do projeto, tipo, contexto
- [ ] Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop)
- [ ] Hover effect nos cards
- [ ] Placeholders para imagens (serão substituídas depois)
- [ ] Animação de transição ao filtrar

---

## Dev Notes

**Projetos por Categoria:**

**Identidade Visual:**
1. Levi.dsn — Marca Pessoal
2. Levaint.inc — Estúdio Institucional

**Social Media Institucional:**
1. IEQ — 1ª Igreja Quadrangular de Santa Gertrudes
2. SEEC/SP — Secretaria Estadual de Educação e Cultura

**Projetos Digitais:**
1. Virada — Landing Page de Lançamento
2. Tropa do Recomeço — Apresentação de Projeto

**Data Structure:**
```typescript
interface PortfolioProject {
  id: string;
  category: 'identity' | 'social' | 'digital';
  name: string;
  type: string;
  context: string;
  deliveries?: string[];
  image: string;
}
```

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
- [ ] `src/components/portfolio/Portfolio.tsx`
- [ ] `src/components/portfolio/PortfolioFilter.tsx`
- [ ] `src/components/portfolio/ProjectCard.tsx`
- [ ] `src/components/portfolio/Portfolio.module.css`
- [ ] `src/data/portfolio.ts`

---

## Testing

- [ ] Filtro alterna entre categorias
- [ ] Todos os 6 projetos exibidos corretamente
- [ ] Grid responsivo em mobile/tablet/desktop
- [ ] Animação de filtro suave
- [ ] Placeholders de imagem carregam

---

**Estimated Effort:** 3h  
**Actual Effort:** ___  
**Ready for Review:** [ ]
