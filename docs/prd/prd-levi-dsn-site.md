# Product Requirements Document — Levi.dsn Portfolio Site

**Document ID:** PRD-001  
**Version:** 1.0  
**Status:** Approved  
**Created:** 2026-04-24

---

## 1. Product Overview

### 1.1 Product Vision
Portfólio one-page de prospecção para mostrar trabalhos de design e captar contatos de potenciais clientes.

### 1.2 Target Audience
- Empresas que precisam de identidade visual
- Instituições que necessitam de presença visual
- Projetos que aguardam direção artística

### 1.3 Success Metrics
- Taxa de conversão de visitantes em contatos
- Tempo médio de permanência no site
- Clique nos CTAs (WhatsApp, E-mail)

---

## 2. Product Goals

### 2.1 Primary Goals
1. **Exibir portfólio** — Apresentar trabalhos em 3 categorias
2. **Comunicar posicionamento** — "Arte com propósito"
3. **Captar leads** — Facilitar contato via WhatsApp, E-mail, Instagram

### 2.2 Secondary Goals
1. Carregamento rápido (< 3s)
2. Responsivo (mobile-first)
3. SEO básico implementado

---

## 3. Functional Requirements

### 3.1 Site Architecture

```
SEÇÃO 1 — Hero
├── Nome: Levi.dsn
├── Tagline: Arte com propósito
└── CTAs:
    ├── Botão primário: "Veja meu trabalho" → âncora para Portfólio
    └── Botão secundário: "Fale comigo" → âncora para Contato

SEÇÃO 2 — Sobre
└── Texto de posicionamento (3 parágrafos + CTA final)

SEÇÃO 3 — Portfólio
├── Filtro/Abas navegáveis
├── Categoria 1: Identidade Visual (2 projetos)
├── Categoria 2: Social Media Institucional (2 projetos)
└── Categoria 3: Projetos Digitais (2 projetos)

SEÇÃO 4 — Contato
├── Headline: "Tem um projeto? Me chama."
├── WhatsApp: (+55 19 99953-1669)
├── E-mail: (levi73designer@gmail.com)
├── Instagram: (@levi.dsn)
└── CTA principal: Botão direto para WhatsApp
```

### 3.2 Portfolio Content

| Categoria | Projeto | Tipo | Contexto |
|-----------|---------|------|----------|
| Identidade Visual | Levi.dsn | Marca Pessoal | Autoentrevista, identidade consistente |
| Identidade Visual | Levaint.inc | Estúdio Institucional | Manifesto, visão de mundo |
| Social Media | IEQ | Instituição Religiosa | Flyers, eventos, treinamentos |
| Social Media | SEEC/SP | Instituição de Ensino | Cursos, eventos educacionais |
| Projetos Digitais | Virada | Landing Page | Identidade + estrutura de conversão |
| Projetos Digitais | Tropa do Recomeço | Apresentação | Identidade + pitch para sócios |

---

## 4. Non-Functional Requirements

### 4.1 Design Requirements
- **Cor primária:** Vermelho Quente `#E8181A`
- **Tipografia:** Archivo Black + Kanit
- **Estética:** Fundo escuro, identidade autoral
- **Layout:** One-page com scroll contínuo

### 4.2 Technical Requirements
- **Stack:** Antigravity + Deploy via Vercel
- **GitHub:** Username `levi73designer-gif`
- **Performance:** Lighthouse score > 90
- **Acessibilidade:** WCAG AA minimum

### 4.3 Content Requirements
- Imagens das peças serão inseridas manualmente após estrutura no ar
- **Exclusão:** Projeto PontoZero Reset™ NÃO deve ser incluído

---

## 5. User Stories Summary

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| 1.0 | Setup do projeto e ambiente | HIGH | Pending |
| 1.1 | Seção Hero com CTAs | HIGH | Pending |
| 1.2 | Seção Sobre | MEDIUM | Pending |
| 1.3 | Seção Portfólio com filtro | HIGH | Pending |
| 1.4 | Seção Contato | HIGH | Pending |
| 1.5 | Deploy e configuração Vercel | HIGH | Pending |

---

## 6. Acceptance Criteria (Global)

- [ ] Site one-page funcional com navegação por âncoras
- [ ] Todas as 4 seções implementadas
- [ ] Portfólio com filtro por categoria funcional
- [ ] CTAs funcionando (links para WhatsApp, E-mail, Instagram)
- [ ] Design responsivo (mobile, tablet, desktop)
- [ ] Deploy realizado na Vercel
- [ ] Domínio configurado e acessível

---

## 7. Out of Scope

- Backend ou CMS
- Autenticação de usuários
- Blog ou área administrativa
- Projeto PontoZero Reset™ (em construção)

---

## 8. Technical Constraints

- GitHub username: `levi73designer-gif`
- Deploy obrigatório via Vercel
- Imagens inseridas manualmente após estrutura

---

*Documento criado com base no briefing Levi-dsn-site-briefing.txt*
