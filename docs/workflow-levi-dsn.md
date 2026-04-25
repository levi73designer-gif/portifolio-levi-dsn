# Workflow: Levi.dsn Portfolio Development

**Workflow ID:** WF-001  
**Created:** 2026-04-24  
**Status:** Active

---

## Overview

Desenvolvimento do site portfólio one-page para Levi.dsn usando Antigravity + Vercel.

---

## Story Sequence

```
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.0 → Setup do Projeto e Ambiente                    │
│  └─ Git, Antigravity, Tailwind, Vercel, Fonts              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.1 → Seção Hero com CTAs                            │
│  └─ Nome, Tagline, Botões "Veja meu trabalho" e "Fale comigo" │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.2 → Seção Sobre                                    │
│  └─ Copy de posicionamento (3 parágrafos + CTA)             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.3 → Seção Portfólio com Filtro                     │
│  └─ 3 categorias, 6 projetos, filtro por abas               │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.4 → Seção Contato                                  │
│  └─ WhatsApp, E-mail, Instagram, Botão CTA                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  STORY 1.5 → Deploy e Configuração Vercel                   │
│  └─ Deploy, testes, performance, acessibilidade             │
└─────────────────────────────────────────────────────────────┘
```

---

## Quick Status

| Story | Title | Status | Ready for Review |
|-------|-------|--------|------------------|
| 1.0 | Setup do Projeto | [x] **DONE** | [x] |
| 1.1 | Seção Hero | [x] **DONE** | [x] |
| 1.2 | Seção Sobre | [x] **DONE** | [x] |
| 1.3 | Seção Portfólio | [ ] | [ ] |
| 1.4 | Seção Contato | [ ] | [ ] |
| 1.5 | Deploy Vercel | [ ] | [ ] |

---

## Agent Responsibilities

| Agente | Responsabilidade | Stories |
|--------|-----------------|---------|
| **@po (Pax)** | Validar stories, backlog | Todas |
| **@architect (Aria)** | Arquitetura frontend | 1.0 |
| **@ux-design-expert (Uma)** | Design tokens, UI | 1.0, 1.1 |
| **@dev (Dex)** | Implementação | 1.0 → 1.5 |
| **@qa (Quinn)** | Testes, qualidade | 1.0 → 1.5 |
| **@devops (Gage)** | Deploy, git push | 1.5 |

---

## Quality Gates

Antes de marcar story como **"Ready for Review"**:

- [ ] Todas tasks da story completas `[x]`
- [ ] Todos acceptance criteria validados
- [ ] Testes passam (`npm test`)
- [ ] Lint sem erros (`npm run lint`)
- [ ] Build local funciona (`npm run build`)
- [ ] File List atualizada na story
- [ ] CodeRabbit review (se aplicável)

---

## Definition of Done (DoD)

Uma story está **DONE** quando:

1. ✅ Implementação completa conforme tasks
2. ✅ Testes escritos e passando
3. ✅ Validações executadas
4. ✅ Code review aprovado
5. ✅ Documentação atualizada (File List)
6. ✅ Status: "Ready for Review"

---

## Next Steps

1. ~~Ativar @po para validar story drafts~~ ✅ DONE
2. ~~Ativar @architect para arquitetura~~ ✅ DONE
3. ~~Ativar @dev para implementação (Story 1.0)~~ ✅ DONE
4. ~~Ativar @dev para Story 1.1 (Seção Hero)~~ ✅ DONE
5. ~~Ativar @dev para Story 1.2 (Seção Sobre)~~ ✅ DONE
6. **Next:** Ativar @dev para Story 1.3 (Seção Portfólio)

---

*Workflow criado com base no briefing Levi-dsn-site-briefing.txt*
