# Story 1.3 — Seção Portfólio com Filtro

**Epic:** E1 — Levi.dsn Portfolio Site  
**Priority:** HIGH  
**Status:** Ready for Dev  
**Created:** 2026-04-24

---

## Story

Como visitante do site, quero filtrar projetos por categoria (Identidade Visual, Social Media, Projetos Digitais), para encontrar rapidamente o tipo de trabalho que me interessa.

---

## Tasks

- [x] 1. Criar estrutura de dados `portfolio.ts` com 6 projetos
- [x] 2. Criar componente `Portfolio.tsx` (container da seção)
- [x] 3. Criar componente `PortfolioFilter.tsx` (abas de filtro)
- [x] 4. Criar componente `ProjectCard.tsx` (card individual)
- [x] 5. Implementar lógica de filtro por categoria
- [x] 6. Estilizar cards com hover effects
- [x] 7. Implementar responsividade (grid adaptativo)
- [x] 8. Adicionar placeholders para imagens

---

## Acceptance Criteria

- [x] 3 categorias de filtro: Identidade Visual, Social Media, Projetos Digitais
- [x] 6 projetos cadastrados (2 por categoria)
- [x] Filtro funciona com clique nas abas
- [x] Cards exibem: nome do projeto, tipo, contexto
- [x] Grid responsivo (1 coluna mobile, 2 tablet, 3 desktop)
- [x] Hover effect nos cards
- [x] Placeholders para imagens (serão substituídas depois)
- [x] Animação de transição ao filtrar

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
- [x] All tasks completed
- [x] All acceptance criteria met
- [x] Code reviewed and tested

### Change Log
| Date | Change | Author |
|------|--------|--------|
| | | |

### File List
<!-- List all files created/modified/deleted -->
- [x] `src/data/portfolio.ts` — Dados dos 6 projetos + categorias
- [x] `src/components/portfolio/Portfolio.tsx` — Container da seção com filtro
- [x] `src/components/portfolio/PortfolioFilter.tsx` — Componente de abas
- [x] `src/components/portfolio/PortfolioFilter.module.css` — Estilos do filtro
- [x] `src/components/portfolio/ProjectCard.tsx` — Card individual
- [x] `src/components/portfolio/ProjectCard.module.css` — Estilos do card
- [x] `src/components/portfolio/Portfolio.module.css` — Estilos do grid
- [x] `src/app/App.tsx` — Atualizado com Portfolio

---

## Testing

- [x] Filtro alterna entre categorias
- [x] Todos os 6 projetos exibidos corretamente
- [x] Grid responsivo em mobile/tablet/desktop
- [x] Animação de filtro suave
- [x] Placeholders de imagem carregam

---

**Estimated Effort:** 3h  
**Actual Effort:** 2h  
**Ready for Review:** [x]
