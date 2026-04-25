# Frontend Architecture — Levi.dsn Portfolio

**Document ID:** ARCH-FE-001  
**Version:** 1.0  
**Status:** Approved  
**Created:** 2026-04-24

---

## 1. Technology Stack

### 1.1 Core Stack
| Layer | Technology | Version | Justification |
|-------|------------|---------|---------------|
| Framework | Antigravity | Latest | Solicitado no briefing |
| Deploy | Vercel | Latest | Solicitado no briefing |
| Language | TypeScript | 5.x | Type safety, melhor DX |
| Styling | Tailwind CSS | 4.x | Design tokens, utilitários |

### 1.2 Design Tokens
```yaml
colors:
  primary: '#E8181A'  # Vermelho Quente
  background: '#0A0A0A'  # Fundo escuro
  text: '#FFFFFF'
  text-muted: '#A1A1AA'

typography:
  heading: 'Archivo Black'
  body: 'Kanit'
```

---

## 2. Project Structure

```
portifolio-levi-dsn/
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── about/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── portfolio/
│   │   │   ├── Portfolio.tsx
│   │   │   ├── PortfolioFilter.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── Portfolio.module.css
│   │   ├── contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Section.tsx
│   │       └── Filter.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css
│   ├── data/
│   │   └── portfolio.ts
│   └── app/
│       └── page.tsx
├── public/
│   └── images/
│       ├── identity/
│       ├── social/
│       └── digital/
├── docs/
│   ├── stories/
│   ├── prd/
│   └── architecture/
└── vercel.json
```

---

## 3. Component Architecture

### 3.1 Atomic Design Levels

**Atoms:**
- `Button` — Botões primário/secundário
- `Section` — Container de seções
- `Filter` — Filtro de categorias

**Molecules:**
- `HeroCTA` — Combinação de botões no Hero
- `ProjectCard` — Card de projeto (imagem + info)
- `PortfolioFilter` — Filtro com abas

**Organisms:**
- `Hero` — Seção completa Hero
- `About` — Seção Sobre
- `Portfolio` — Seção Portfólio com filtro
- `Contact` — Seção Contato

**Template:**
- `HomePage` — Layout one-page completo

---

## 4. Data Structure

### 4.1 Portfolio Data Model
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

const portfolioProjects: PortfolioProject[] = [
  {
    id: 'levi-dsn',
    category: 'identity',
    name: 'Levi.dsn',
    type: 'Identidade Visual — Marca Pessoal',
    context: '...',
    image: '/images/identity/levi-dsn.jpg'
  },
  // ... demais projetos
];
```

---

## 5. Routing & Navigation

### 5.1 Anchor Navigation
```
/ (one-page)
├── #hero
├── #sobre
├── #portfolio
└── #contato
```

### 5.2 Scroll Behavior
- Smooth scroll entre âncoras
- Scroll spy para highlight da seção ativa

---

## 6. Performance Strategy

### 6.1 Optimization Tactics
- Lazy loading de imagens do portfólio
- CSS crítico inline
- Fontes otimizadas (font-display: swap)
- Imagens em formato WebP

### 6.2 Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Performance: > 90

---

## 7. Accessibility (WCAG AA)

### 7.1 Requirements
- Contraste de cores AA (vermelho sobre escuro)
- Navegação por teclado
- ARIA labels em botões
- Focus indicators visíveis

---

## 8. Deployment

### 8.1 Vercel Configuration
```json
{
  "framework": "antigravity",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### 8.2 Environment Variables
- Nenhuma variável de ambiente necessária (site estático)

---

## 9. Git Strategy

- **Remote:** GitHub (`levi73designer-gif`)
- **Branch:** `main` (produção)
- **Deploy:** Auto-deploy on push to main via Vercel

---

*Arquitetura aprovada para implementação*
