# Portfólio Digital — Iverson Santos

Portfólio moderno, responsivo, performático e minimalista desenvolvido com estética editorial inspirada no design de estúdio contemporâneo (paleta monocromática escura, tipografia fluida, seções numeradas e micro-interações refinadas).

🌐 **Acesse ao vivo:** [iversonsantos.dev](https://iversonsantos.dev)

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita)
- **Biblioteca Base:** [React 19](https://react.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (variáveis customizadas e tipografia com `clamp()`)
- **Animações:** [Framer Motion](https://www.framer.com/motion/) (transições de entrada, micro-interações, hover previews e modais)
- **Rolagem Suave:** [Lenis](https://lenis.darkroom.engineering/) (scroll cinemático desacoplado)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Performance & SEO:** Pontuação máxima no Google Lighthouse (Performance, Acessibilidade, Boas Práticas e SEO), geração estática SSG com `generateStaticParams`, OpenGraph dinâmico e schema estruturado JSON-LD.

---

## 💼 Projetos em Destaque

| # | Projeto | Categoria | Repositório | Demonstração | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **01** | **Casamento em Ordem** | Planejamento de eventos | [GitHub](https://github.com/IversonSantos-dev/CasamentoemOrdem-README) | [Site Oficial](https://casamentoemordem.com.br/) | `Live` |
| **02** | **Mimos Ateliê** | Joalheria sacra e artesanato | [GitHub](https://github.com/IversonSantos-dev/mimos_atelie) | [Site Oficial](https://mimosatelie.netlify.app/) | `Live` |
| **03** | **Sistema de Separação de Produtos** | Logística e estoque | [GitHub](https://github.com/IversonSantos-dev/separacaoprodu) | [Demo](https://separacaoprodu.lovable.app/) | `Em evolução` |
| **04** | **Kurio — NFT Marketplace** | NFT & Web3 Marketplace | [GitHub](https://github.com/IversonSantos-dev/Desafio_frontend) | [Demo Vercel](https://desafio-frontend-psi.vercel.app/) | `Live` |
| **05** | **Velas Aromáticas** | E-commerce artesanal | [GitHub](https://github.com/IversonSantos-dev/VelasAromaticas) | [Preview StackBlitz](https://stackblitz.com/~/github.com/Nosrevi-tech/VelasAromaticas) | `Preview` |
| **06** | **Fintrack** | Finanças pessoais | [GitHub](https://github.com/IversonSantos-dev/fintrack-digital-home) | [Demo Lovable](https://fintrackfinancas.lovable.app/) | `Preview` |
| **07** | **Compartilhando Memórias** | Galeria colaborativa | [GitHub](https://github.com/IversonSantos-dev/compartilhandomemorias) | [Demo Lovable](https://compartilhandomemorias.lovable.app) | `Live` |

---

## 🛠️ Arquitetura e Estrutura de Diretórios

```bash
├── app/
│   ├── layout.tsx             # Root layout com fontes, SEO, metadados e schema JSON-LD
│   ├── page.tsx               # Página principal modular
│   ├── not-found.tsx          # Página 404 customizada
│   ├── robots.ts              # Geração dinâmica do robots.txt
│   ├── sitemap.ts             # Geração dinâmica do sitemap.xml
│   ├── manifest.ts            # Web App Manifest
│   └── projects/
│       └── [slug]/
│           └── page.tsx       # Estudo de caso dinâmico por projeto (SSG estático)
├── components/
│   ├── hero.tsx               # Hero section com tipografia fluida e especificações rápidas
│   ├── navbar.tsx             # Navegação fixa com blur e links magnéticos
│   ├── project-grid.tsx       # Grade de projetos com filtro de categorias e alternância lista/grade
│   ├── project-card.tsx       # Linha de projeto estilo estúdio com hover popover
│   ├── project-modal.tsx      # Modal detalhado com contexto, arquitetura, métricas e links
│   ├── project-preview-popover.tsx # Popover flutuante que acompanha o cursor
│   ├── project-image.tsx      # Imagens com fallback SVG e otimização Next/Image
│   ├── skills-stack.tsx       # Arsenal técnico categorizado em abas
│   ├── about-philosophy.tsx   # Filosofia de desenvolvimento e trajetória profissional
│   ├── contact-section.tsx    # Formulário direto para WhatsApp e canais sociais
│   ├── footer.tsx             # Rodapé com relógio em tempo real de Brasília e voltar ao topo
│   ├── grain.tsx              # Textura sutil de filme granulado para profundidade
│   ├── magnetic-button.tsx    # Botões e links com micro-interações táteis
│   └── smooth-scroll.tsx      # Integração de rolagem cinemática com Lenis
├── data/
│   └── projects.ts            # Base de dados estruturada e fortemente tipada dos projetos
└── public/                    # Ativos estáticos, imagens e ícones vetoriais
```

---

## ⚡ Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/IversonSantos-dev/Portifolio.git
   cd Portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

4. **Gerar build de produção:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Contato

- **WhatsApp:** [+55 (32) 98430-3090](https://wa.me/5532984303090)
- **LinkedIn:** [linkedin.com/in/iverson-santos-a96706193](https://www.linkedin.com/in/iverson-santos-a96706193/)
- **GitHub:** [github.com/IversonSantos-dev](https://github.com/IversonSantos-dev)
- **E-mail:** [iverson.paiva11@gmail.com](mailto:iverson.paiva11@gmail.com)

---

Desenvolvido por **Iverson Santos**.
