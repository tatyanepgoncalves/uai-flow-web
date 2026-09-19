import {
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  RotateCcw,
  ShieldCheck,
  SlidersVertical,
  Sparkles,
} from 'lucide-react'

export const metrics = [
  {
    color: 'text-emerald-400',
    description: 'Sentenças avaliadas neste mês',
    info: '↑ Aumento de 34% na recuperação ativa de informações',
    number: '10,000+',
  },
  {
    color: 'text-sky-400',
    description: 'Taxa de consistência de hábitos diários',
    info: '⏱ Sequência média de 18 dias',
    number: '94%',
  },
  {
    color: 'text-violet-400',
    description: 'Tempo médio para concluir o exercício',
    info: '⚡ Microaprendizagem de alta densidade',
    number: '5 min',
  },
  {
    color: 'text-emerald-400',
    description: 'Caminho acelerado para a fluência',
    info: '✓ Critérios de avaliação calibrados pelo QCER',
    number: 'A1 → B2',
  },
]

export const socialProofLogos = [
  'Linear',
  'Cloudflare',
  'Vercel',
  'Stripe',
  'GitHub',
  'Datadog',
]

export const featuresInfo = [
  {
    badgeStyles: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    color: 'text-sky-400',
    description:
      'Esqueça os testes passivos de múltipla escolha. O UAIFlow força a produção lexical ativa utilizando diariamente três blocos linguísticos de alto rendimento, consolidando vias neurais diretas em vez de gerar latências associadas à tradução.',
    icon: <Code2 className="h-5 w-5" />,
    info: {
      icon: <RotateCcw className="h-3.5 w-3.5 text-zinc-600" />,
      text: 'chunk.synthesize(input)',
      textStyles: 'text-zinc-500',
    },
    title: 'Produção Sintática Ativa',
  },
  {
    badgeStyles: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
    color: 'text-violet-400',
    description:
      'Seus fragmentos de conteúdo são alimentados dinamicamente a partir do seu trabalho técnico real: discussões em pull requests, RFCs de arquitetura, análises pós-incidente e retrospectivas síncronas da equipe.',
    icon: <Cpu className="h-5 w-5" />,
    info: {
      icon: <SlidersVertical className="h-3.5 w-3.5 text-zinc-600" />,
      text: 'domain: "DevOps & Infra"',
      textStyles: 'text-zinc-500',
    },
    title: 'Contexto de IA Calibrado por Domínio',
  },
  {
    badgeStyles: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    color: 'text-emerald-400',
    description:
      'Receba avaliações com latência de milissegundos que abrangem gramática, registro, cadência coloquial e padrões de fraseado autênticos, utilizados no dia a dia por colegas internacionais experientes.',
    icon: <ShieldCheck className="h-5 w-5" />,
    info: {
      icon: <Sparkles className="h-3.5 w-3.5 text-emerald-400" />,
      text: 'evolução: "idiomatic"',
      textStyles: 'text-emerald-400',
    },
    title: 'Pedagogia Instantânea e Polimento de Nível Nativo',
  },
]

export const scienceLeft = [
  {
    icon: {
      bg: 'bg-violet-500/10',
      color: 'text-violet-400',
      icon: <Layers className="h-3.5 w-3.5 text-violet-400" />,
    },
    text: ' Recuperação Espaçada alinhada à curva de esquecimento de Ebbinghaus',
  },
  {
    icon: {
      bg: 'bg-sky-500/10',
      color: 'text-sky-400',
      icon: <Globe className="h-3.5 w-3.5 text-sky-400" />,
    },
    text: 'Voltado para o contexto de trabalho na área de tecnologia (transição do nível B1 para o B2)',
  },
  {
    icon: {
      bg: 'bg-emerald-500/10',
      color: 'text-emerald-400',
      icon: <Database className="h-3.5 w-3.5 text-emerald-400" />,
    },
    text: 'Sem interrupções: rotina matinal fluida de 5 minutos',
  },
]

export const tradicionalApp = [
  'Palavras isoladas, sem conexões sintáticas contextuais',
  'Tabelas de conjugação abstratas, desconectadas de situações reais de uso',
  '80% do conteúdo esquecido em 48 horas na ausência de produção ativa',
  'Gamificação infantilizada e vocabulário irrelevante sobre animais',
]

export const uaiflowEngine = [
  'Colocações prefabricadas de 3 palavras (agrupamentos lexicais)',
  'Diálogos técnicos reais: RFCs, reuniões diárias (stand-ups), Slack e incidentes',
  'O esforço de recuperação motora/digitação estimula a consolidação',
  'Correções de fraseado nativo em menos de 50 ms',
]

export const howItWorks = [
  {
    badge: 'CONFIG',
    description:
      'Selecione o nível do CEFR desejado (de A1 a B2), a especialidade técnica (Backend, Frontend, ML, Site Reliability) e o contexto de comunicação (Slack, reuniões diárias/stand-ups ou descoberta de clientes).',
    info: {
      color: 'text-zinc-500',
      text: ' &gt; uai set --role=sre --cefr=b2',
    },
    number: '01',
    title: 'Defina sua stack e função',
  },
  {
    badge: 'Recuperação',
    description:
      'Todas as manhãs, às 08h00, seu sistema apresenta 3 itens específicos — phrasal verbs, colocações ou expressões de transição pragmática — acompanhados de exemplos reais extraídos de um corpus de engenharia.',
    info: {
      color: 'text-violet-400',
      text: '["boil down to", "iron out", "roll back"]',
    },
    number: '02',
    title: 'Receba 3 fragmentos selecionados',
  },
  {
    badge: 'PRODUÇÃO',
    description:
      'Escreva sua frase no terminal do desenvolvedor. O avaliador neural verifica nuances, corrige preposições e sugere alternativas de nível avançado (equivalentes às de um falante nativo) em 50 ms.',
    info: {
      color: 'text-emerald-400',
      text: '✓ Accuracy 98% • Latency 42ms',
    },
    number: '03',
    title: 'Produza e receba uma avaliação de IA',
  },
]
