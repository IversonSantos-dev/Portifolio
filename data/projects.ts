export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export type ProjectCategory =
  | "All"
  | "Planejamento de eventos"
  | "Joalheria sacra e artesanato"
  | "Logística e estoque"
  | "Automação comercial e POS"
  | "NFT & Web3 Marketplace"
  | "E-commerce artesanal"
  | "Finanças pessoais"
  | "Galeria colaborativa";

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category:
    | "Planejamento de eventos"
    | "Joalheria sacra e artesanato"
    | "Logística e estoque"
    | "Automação comercial e POS"
    | "NFT & Web3 Marketplace"
    | "E-commerce artesanal"
    | "Finanças pessoais"
    | "Galeria colaborativa";
  year: string;
  role: string;
  timeline: string;
  client: string;
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  impact: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  featured: boolean;
  thumbnail: string;
  heroImage: string;
  previewPopImage: string;
  liveUrl: string;
  githubUrl: string;
  status: "Live" | "Preview" | "Em evolução";
}

export const PROJECTS: Project[] = [
  {
    id: "casamento-em-ordem",
    slug: "casamento-em-ordem",
    number: "01",
    title: "Casamento em Ordem",
    subtitle: "Planejamento de Casamento de Ponta a Ponta",
    tagline: "Planejamento de casamento, organizado de ponta a ponta.",
    category: "Planejamento de eventos",
    year: "2024",
    role: "Desenvolvedor & Designer de Produto",
    timeline: "Produção ativa",
    client: "Casamento em Ordem",
    overview:
      "Uma plataforma construída para ocupar um espaço pouco atendido no mercado: reunir criação livre de convites, lista de convidados e presentes em um único fluxo. Os noivos recebem organização, agilidade e controle visual sem perder a narrativa emocional do evento.",
    challenge:
      "Convites, confirmação de presença (RSVP) e lista de presentes tradicionalmente ficam dispersos em múltiplos serviços e planilhas, gerando atrito para os convidados e retrabalho para os noivos.",
    solution:
      "Desenvolvimento de um hub integrado permitindo criar convites digitais personalizáveis, gestão dinâmica de lista de convidados com confirmações em tempo real e lista de presentes com repasse direto via PIX.",
    architecture: [
      "Front-end moderno e reativo com React e TypeScript",
      "Estilização modular e responsiva com Tailwind CSS",
      "Banco de dados relacional e autenticação segura com Supabase",
      "Integração de pagamento instantâneo via PIX com reconciliação automática"
    ],
    impact: [
      "Fluxo 100% unificado eliminando a necessidade de ferramentas terceiras avulsas.",
      "Redução drástica no tempo gasto pelos noivos na organização de convidados e confirmações.",
      "Recebimento de presentes e felicitações em tempo real com transparência financeira."
    ],
    metrics: [
      { label: "Convites", value: "Criação livre" },
      { label: "Convidados", value: "Lista centralizada" },
      { label: "Presentes", value: "PIX imediato" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    previewPopImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://casamentoemordem.com.br/",
    githubUrl: "https://github.com/IversonSantos-dev/CasamentoemOrdem-README",
    status: "Live"
  },
  {
    id: "mimos-atelie",
    slug: "mimos-atelie",
    number: "02",
    title: "Mimos Ateliê",
    subtitle: "Catálogo Premium e Gestão de Pedidos",
    tagline: "Catálogo premium com pedidos mais rápidos e organização do estoque.",
    category: "Joalheria sacra e artesanato",
    year: "2024",
    role: "Desenvolvedor",
    timeline: "Produção ativa",
    client: "Mimos Ateliê",
    overview:
      "Uma vitrine digital desenvolvida para expor peças exclusivas de joalheria sacra e itens artesanais, centralizar o catálogo de produtos e simplificar a rotina de pedidos comerciais.",
    challenge:
      "Pedidos e controle de mercadorias dispersos entre redes sociais e planilhas, com baixa visibilidade do catálogo em tempo real e atendimento manual sujeito a gargalos.",
    solution:
      "Criação de um catálogo digital interativo e fluido com sistema integrado de gestão de estoque e geração de pedidos com checkout direto para o WhatsApp do vendedor.",
    architecture: [
      "Aplicação veloz construída com React 18, Vite e TypeScript",
      "Animações sensoriais de catálogo utilizando Framer Motion",
      "Persistência e catálogo em nuvem estruturados com Supabase",
      "Geração dinâmica de payload de pedidos formatados para a API do WhatsApp"
    ],
    impact: [
      "Aumento significativo na visibilidade e valor percebido das peças exclusivas.",
      "Redução no tempo de conversão de atendimento de novos pedidos via WhatsApp.",
      "Organização centralizada do estoque e controle em tempo real de disponibilidade."
    ],
    metrics: [
      { label: "Catálogo", value: "Centralizado" },
      { label: "Pedidos", value: "WhatsApp direto" },
      { label: "Operação", value: "Estoque ativo" }
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Framer Motion"],
    featured: true,
    thumbnail: "/terco.jpg",
    heroImage: "/terco.jpg",
    previewPopImage: "/terco.jpg",
    liveUrl: "https://mimosatelie.netlify.app/",
    githubUrl: "https://github.com/IversonSantos-dev/mimos_atelie",
    status: "Live"
  },
  {
    id: "separacao-produtos",
    slug: "separacao-produtos",
    number: "03",
    title: "Sistema de Separação de Produtos",
    subtitle: "Operação Logística Orientada a Dados",
    tagline: "Dados de produto disponíveis para acelerar cada separação.",
    category: "Logística e estoque",
    year: "2024",
    role: "Desenvolvedor",
    timeline: "Em evolução contínua",
    client: "Operação Logística & Estoque",
    overview:
      "Um sistema que transforma uma consulta antes lenta e manual em uma operação orientada por dados. Com o banco de produtos disponível em um único lugar, a equipe localiza as informações necessárias para separar e conferir pedidos com mais rapidez, reduzindo tempo de trabalho e retrabalho operacional.",
    challenge:
      "Processos logísticos de conferência e separação de pedidos dependentes de buscas manuais em cadernos ou planilhas lentas, causando erros de conferência e atrasos no picking.",
    solution:
      "Implementação de uma aplicação web com indexação de produtos pesquisável instantaneamente por código de barras, SKU ou descrição, otimizada para dispositivos móveis operacionais.",
    architecture: [
      "Interface responsiva voltada para agilidade operacional com React e Tailwind",
      "Consultas de baixa latência em base de dados Supabase",
      "Filtros de busca instantâneos no cliente com tolerância a digitação",
      "Arquitetura escalável para suportar catálogos com milhares de SKUs"
    ],
    impact: [
      "Redução drástica no tempo médio de conferência e separação por pedido.",
      "Eliminação quase total de erros por troca de produtos similares durante o picking.",
      "Acesso instantâneo a informações de localização de estoque direto no celular ou coletor."
    ],
    metrics: [
      { label: "Dados", value: "Base única" },
      { label: "Consulta", value: "Mobile first" },
      { label: "Operação", value: "Zero papel" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    featured: true,
    thumbnail: "/separacaoproduto.png",
    heroImage: "/separacaoproduto.png",
    previewPopImage: "/separacaoproduto.png",
    liveUrl: "https://separacaoprodu.lovable.app/",
    githubUrl: "https://github.com/IversonSantos-dev/separacaoprodu",
    status: "Em evolução"
  },
  {
    id: "desafio-frontend",
    slug: "desafio-frontend",
    number: "04",
    title: "Kurio — NFT Marketplace",
    subtitle: "Plataforma de Descoberta e Propriedade de Ativos Digitais",
    tagline: "Descubra e colecione arte digital rara de criadores emergentes.",
    category: "NFT & Web3 Marketplace",
    year: "2024",
    role: "Desenvolvedor Frontend",
    timeline: "Produção ativa",
    client: "Kurio Digital",
    overview:
      "Uma aplicação web moderna para marketplace de NFTs com catálogo visual refinado, simulação de transações, filtros dinâmicos de coleções e interface imersiva com tipografia monoespacial e suporte visual a ativos digitais.",
    challenge:
      "Criar uma experiência fluida de marketplace descentralizado/Web3 com simulação de API em mock (MSW), estados de carregamento elegantes e fidelidade total ao protótipo de design.",
    solution:
      "Construção de uma SPA performática utilizando React, Vite e Mock Service Worker (MSW) para mock de dados de alta fidelidade, além de animações de transição e responsividade completa.",
    architecture: [
      "Arquitetura em componentes modulares em React com TypeScript",
      "Simulação de camada de API com Mock Service Worker (MSW)",
      "Tipografia editorial e monoespacial com Space Mono",
      "Otimização de bundle e carregamento com Vite e Rolldown runtime"
    ],
    impact: [
      "Interface rica com navegação instantânea e zero atrito de renderização.",
      "Fluxo de visualização e detalhamento de tokens não-fungíveis interativo.",
      "Estrutura de código componentizada e de fácil manutenção."
    ],
    metrics: [
      { label: "Catálogo", value: "Coleções NFT" },
      { label: "Mock API", value: "MSW integrado" },
      { label: "Performance", value: "Vite ultra-rápido" }
    ],
    techStack: ["React", "TypeScript", "Vite", "MSW", "Tailwind CSS"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&q=85",
    previewPopImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://desafio-frontend-psi.vercel.app/",
    githubUrl: "https://github.com/IversonSantos-dev/Desafio_frontend",
    status: "Live"
  },
  {
    id: "dashboard-mercearia",
    slug: "dashboard-mercearia",
    number: "05",
    title: "Mercearia POS & Dashboard",
    subtitle: "Automação Comercial, Frente de Caixa & Inventário P7",
    tagline: "Frente de caixa ágil, baixa inteligente por valor-alvo e conciliação contábil.",
    category: "Automação comercial e POS",
    year: "2025",
    role: "Desenvolvedor Full Stack",
    timeline: "Produção ativa",
    client: "Comércio Varejista & Mercearia",
    overview:
      "Sistema full-stack de automação comercial e frente de caixa (POS) mobile-first com algoritmo inteligente de baixa por valor-alvo, controle diário de vendas discriminado (Cartão vs. Dinheiro), conciliação fiscal mensal e ingestão de inventário no padrão oficial Livro de Inventário Modelo P7.",
    challenge:
      "Varejos locais enfrentam gargalos no fechamento de caixa, erros de arredondamento monetário, lentidão na conferência de estoques extensos e interrupções nas vendas quando a conexão com a internet oscila.",
    solution:
      "Desenvolvimento de uma solução com precisão monetária em centavos inteiros (BigInt/Int, sem drift de ponto flutuante), arquitetura híbrida offline-first com sincronização em nuvem via Supabase/Prisma, algoritmo de baixa automática de múltiplos produtos e suíte de mais de 400 testes automatizados.",
    architecture: [
      "Next.js 15 App Router + React 19 com Server Components",
      "Banco local com SQLite (WAL Mode) via Prisma ORM e dual-write no Supabase (PostgreSQL)",
      "Algoritmo de otimização combinatória para baixa inteligente de estoque",
      "Processamento e parser de planilhas contábeis P7 (.xlsx / .csv) via SheetJS",
      "Suíte robusta com mais de 400 testes unitários e de integração com Vitest"
    ],
    impact: [
      "Operação de caixa ininterrupta com arquitetura resiliente offline-first.",
      "Fechamento e conciliação diária de vendas (dinheiro/cartão) em segundos.",
      "Confronto fiscal automatizado entre notas fiscais de entrada e saídas do caixa.",
      "Zero discrepância financeira através de aritmética estrita em centavos inteiros."
    ],
    metrics: [
      { label: "Precisão", value: "Centavos (Zero drift)" },
      { label: "Testes", value: "404 testes Vitest" },
      { label: "Operação", value: "Offline-First" }
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "SQLite", "Vitest"],
    featured: true,
    thumbnail: "/dashboardmercearia.jpg",
    heroImage: "/dashboardmercearia.jpg",
    previewPopImage: "/dashboardmercearia.jpg",
    liveUrl: "https://dashboardmercearia.netlify.app/",
    githubUrl: "https://github.com/IversonSantos-dev/DashboardMercearia",
    status: "Live"
  },
  {
    id: "velas-aromaticas",
    slug: "velas-aromaticas",
    number: "06",
    title: "Velas Aromáticas",
    subtitle: "Catálogo Sensorial de Produtos Artesanais",
    tagline: "Catálogo sensorial para produtos feitos à mão.",
    category: "E-commerce artesanal",
    year: "2024",
    role: "Desenvolvedor",
    timeline: "Preview funcional",
    client: "Ateliê de Velas Aromáticas",
    overview:
      "Uma vitrine digital pensada para tornar a descoberta de produtos artesanais mais envolvente, combinando apresentação visual refinada, navegação fluida e uma base pronta para comércio eletrônico.",
    challenge:
      "Transmitir a sofisticação, fragrância e valor estético de produtos aromáticos artesanais no ambiente digital sem cair em layouts engessados de e-commerce tradicional.",
    solution:
      "Desenvolvimento de um catálogo com estética editorial minimalista, paleta aconchegante, detalhes de notas olfativas e fluxo de escolha simplificado.",
    architecture: [
      "Build ultrarrápido com Vite e React",
      "TypeScript com tipagem estrita para modelos de produtos e variantes olfativas",
      "Tailwind CSS configurado com variáveis e tipografia fluida",
      "Deploy interativo com suporte a preview ao vivo no StackBlitz"
    ],
    impact: [
      "Elevação imediata do valor de marca percebido pelos clientes em potencial.",
      "Apresentação detalhada da pirâmide olfativa de cada vela para melhor decisão de compra.",
      "Experiência de navegação leve e fluida em qualquer tamanho de tela."
    ],
    metrics: [
      { label: "Estética", value: "Editorial" },
      { label: "Navegação", value: "Fluida" },
      { label: "Conversão", value: "Otimizada" }
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1600&q=85",
    previewPopImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://stackblitz.com/~/github.com/Nosrevi-tech/VelasAromaticas",
    githubUrl: "https://github.com/IversonSantos-dev/VelasAromaticas",
    status: "Preview"
  },
  {
    id: "fintrack",
    slug: "fintrack",
    number: "07",
    title: "Fintrack",
    subtitle: "Dashboard de Gestão Financeira Pessoal & Residencial",
    tagline: "Um dashboard para enxergar melhor cada decisão financeira.",
    category: "Finanças pessoais",
    year: "2024",
    role: "Desenvolvedor",
    timeline: "Preview funcional",
    client: "Fintrack Digital",
    overview:
      "Uma base de gestão financeira pessoal e residencial que organiza receitas, despesas e tendências visuais para tornar o acompanhamento do dinheiro mais simples, transparente e acionável no cotidiano.",
    challenge:
      "A maioria dos aplicativos financeiros peca pelo excesso de complexidade ou por interfaces pouco intuitivas, dificultando a constância no registro diário de transações e a visualização do fluxo de caixa real.",
    solution:
      "Dashboard dinâmico com métricas consolidadas, categorização inteligente de gastos, gráficos visuais de fluxo mensal e balanço consolidado em tempo real.",
    architecture: [
      "SPA rápida e reativa em React com TypeScript",
      "Banco de dados relacional Supabase com funções stored procedures em PL/pgSQL",
      "Gráficos visuais de evolução financeira e distribuição por categorias",
      "Camada de segurança com autenticação de usuário e isolamento de dados RLS"
    ],
    impact: [
      "Clareza instantânea de despesas fixas, variáveis e economia mensal.",
      "Registro de receitas e despesas em poucos cliques com conciliação imediata.",
      "Previsibilidade orçamentária com base no histórico consolidado de dados."
    ],
    metrics: [
      { label: "Visão", value: "Tempo real" },
      { label: "Controle", value: "Receitas/Despesas" },
      { label: "Insights", value: "Gráficos claros" }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PL/pgSQL"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    previewPopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://fintrackfinancas.lovable.app/",
    githubUrl: "https://github.com/IversonSantos-dev/fintrack-digital-home",
    status: "Preview"
  },
  {
    id: "compartilhando-memorias",
    slug: "compartilhando-memorias",
    number: "08",
    title: "Compartilhando Memórias",
    subtitle: "Galeria Privada & Colaborativa para Eventos",
    tagline: "Fotos compartilhadas, do QR Code à memória coletiva.",
    category: "Galeria colaborativa",
    year: "2024",
    role: "Desenvolvedor",
    timeline: "Produção ativa",
    client: "Compartilhando Memórias",
    overview:
      "Uma galeria privada e colaborativa criada para registrar momentos importantes com upload simplificado por QR Code ou link exclusivo, com atualização em tempo real e navegação cuidadosamente organizada.",
    challenge:
      "Em casamentos, formaturas e celebrações, as melhores fotos tiradas pelos convidados se perdem em grupos de mensagens com compressão agressiva ou nunca chegam aos anfitriões.",
    solution:
      "Plataforma onde os convidados escaneiam um QR Code nas mesas e enviam suas fotos instantaneamente sem necessidade de instalar aplicativos, alimentando uma galeria colaborativa em alta resolução.",
    architecture: [
      "Gerenciamento avançado de estado e cache de dados com TanStack Query",
      "Armazenamento de mídia em nuvem com distribuição de borda Cloudflare",
      "Banco de dados e feed em tempo real através do Supabase",
      "Layout responsivo com micro-interações elegantes em TypeScript"
    ],
    impact: [
      "Zero atrito: convidados enviam fotos diretamente pelo navegador do smartphone.",
      "Preservação da qualidade original das imagens registradas durante a celebração.",
      "Feed ao vivo projetável em telas no evento ou visualizado em tempo real pelos convidados."
    ],
    metrics: [
      { label: "Acesso", value: "QR Code direto" },
      { label: "Uploads", value: "Alta resolução" },
      { label: "Atualização", value: "Tempo real" }
    ],
    techStack: ["TanStack", "TypeScript", "Tailwind CSS", "Supabase", "Cloudflare"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85",
    previewPopImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
    liveUrl: "https://compartilhandomemorias.lovable.app",
    githubUrl: "https://github.com/IversonSantos-dev/compartilhandomemorias",
    status: "Live"
  }
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
