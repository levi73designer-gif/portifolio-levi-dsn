export interface PortfolioProject {
  id: string
  category: 'identity' | 'social' | 'digital'
  name: string
  type: string
  context: string
  deliveries?: string[]
  image: string
}

export const portfolioProjects: PortfolioProject[] = [
  // Identidade Visual
  {
    id: 'levi-dsn',
    category: 'identity',
    name: 'Levi.dsn',
    type: 'Identidade Visual — Marca Pessoal',
    context: 'Antes de criar para outros, precisei me encontrar. Conduzi um processo de autoentrevista para mapear valores, intenções e linguagem — e traduzi tudo isso em uma identidade consistente e autoral.',
    image: '/images/identity/levi-dsn.jpg'
  },
  {
    id: 'levaint-inc',
    category: 'identity',
    name: 'Levaint.inc',
    type: 'Identidade Visual — Estúdio Institucional',
    context: 'Uma marca que é um manifesto. Pesquisei os grandes movimentos culturais da história para construir uma identidade que não apenas comunica — mas declara uma visão de mundo.',
    image: '/images/identity/levaint-inc.jpg'
  },
  // Social Media Institucional
  {
    id: 'ieq',
    category: 'social',
    name: 'IEQ — 1ª Igreja Quadrangular de Santa Gertrudes',
    type: 'Social Media — Instituição Religiosa',
    deliveries: ['Flyers de cultos semanais', 'Treinamentos', 'Eventos', 'Vigílias', 'Cultos temáticos', 'Banners', 'Arte para telão', 'Datas comemorativas'],
    context: 'Comunicar fé exige respeito à identidade e sensibilidade com a comunidade. Desenvolvi materiais visuais para cada departamento da IEQ local — cultos, eventos, treinamentos e datas comemorativas — mantendo coerência com a identidade nacional da IEQ Brasil.',
    image: '/images/social/ieq.jpg'
  },
  {
    id: 'seec-sp',
    category: 'social',
    name: 'SEEC/SP — Secretaria Estadual de Educação e Cultura',
    type: 'Social Media — Instituição de Ensino',
    deliveries: ['Flyers de cursos livres de teologia', 'Cursos de idiomas', 'Eventos educacionais', 'Datas comemorativas'],
    context: 'Transformar educação em desejo. Criei materiais visuais para cursos livres e eventos da Secretaria Estadual de Educação e Cultura da Quadrangular — visual moderno que atrai novos alunos sem perder a identidade institucional.',
    image: '/images/social/seec-sp.jpg'
  },
  // Projetos Digitais
  {
    id: 'virada',
    category: 'digital',
    name: 'Virada',
    type: 'Landing Page de Lançamento — Projeto Fictício',
    context: 'Para quem está no meio do caos e precisa de direção. Desenvolvi a identidade visual e a estrutura de conversão de uma landing page de lançamento — com ganchos estratégicos para transformar visitantes em alunos.',
    image: '/images/digital/virada.jpg'
  },
  {
    id: 'tropa-recomeco',
    category: 'digital',
    name: 'Tropa do Recomeço',
    type: 'Apresentação de Projeto — Projeto Fictício',
    context: 'Um projeto que precisava sair do papel e chegar na mesa dos sócios certo. Criei a identidade visual e a estrutura de apresentação para alinhar visão, posicionamento e próximos passos com a equipe.',
    image: '/images/digital/tropa-recomeco.jpg'
  }
]

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'identity', label: 'Identidade Visual' },
  { id: 'social', label: 'Social Media' },
  { id: 'digital', label: 'Projetos Digitais' }
] as const

export type CategoryId = typeof categories[number]['id']
