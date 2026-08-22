# IversonSantos.dev

> Portfólio pessoal de **Iverson Santos**, desenvolvedor Full Stack focado em transformar fluxos complexos em produtos digitais claros, úteis e preparados para evoluir.

O projeto apresenta uma seleção de soluções para planejamento, logística, e-commerce, finanças e colaboração. A interface foi concebida como um relatório editorial de produto: combina uma narrativa de casos, linguagem visual de sistemas e interações discretas para evidenciar tanto a experiência de uso quanto a lógica que sustenta cada aplicação.

## Visão geral

| Área | Descrição |
| --- | --- |
| **Posicionamento** | Desenvolvimento Full Stack orientado a produto, interface, regras de negócio e dados. |
| **Direção visual** | `Operações em Movimento`: grafite azulado, Pulso Lavanda, molduras técnicas e linhas de sinal. |
| **Experiência** | Layout responsivo, filtros de projetos, animações com redução de movimento e links externos seguros. |
| **Stack do portfólio** | React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion e Lucide React. |

## Projetos em destaque

| Projeto | Foco | Demonstração | Código / documentação |
| --- | --- | --- | --- |
| **Casamento em Ordem** | Planejamento de casamentos, convidados, finanças e presentes. | [Acessar site](https://casamentoemordem.com.br/) | [README](https://github.com/IversonSantos-dev/CasamentoemOrdem-README) |
| **Separação de Produto** | Otimização de picking, conferência e controle de estoque. | [Acessar demo](https://separacaoprodu.lovable.app/) | [GitHub](https://github.com/IversonSantos-dev/separacaoprodu) |
| **Velas Aromáticas** | Catálogo e experiência de e-commerce para produtos artesanais. | [Acessar site](https://velaaromaticas.netlify.app) | [GitHub](https://github.com/IversonSantos-dev/VelasAromaticas) |
| **DigitalMarket** | Marketplace de produtos digitais e físicos com catálogo, pagamento e downloads protegidos. | [Acessar site](https://digitalmarketin.lovable.app/) | [GitHub](https://github.com/IversonSantos-dev/DigitalMarket) |
| **Fintrack** | Gestão financeira pessoal com acompanhamento de gastos e orçamentos. | [Acessar demo](https://fintrackfinancas.lovable.app/) | [GitHub](https://github.com/IversonSantos-dev/fintrack-digital-home) |
| **Compartilhando Memórias** | Galeria colaborativa com upload por QR Code e visualização em tempo real. | [Acessar demo](https://compartilhandomemorias.lovable.app) | [GitHub](https://github.com/IversonSantos-dev/compartilhandomemorias) |

## Arquitetura da interface

```text
Home
├── Navbar
├── Hero editorial
├── Projetos selecionados
│   └── Cards de case: problema → sistema → sinal de valor
├── Processo de trabalho
├── Habilidades técnicas
├── Sobre
├── Contato
└── Footer
```

Os cards de projetos usam cor de domínio, metadados monoespaçados e uma estrutura de case compacta. O sistema visual mantém linhas de sinal, bordas sutis e recortes técnicos como elementos recorrentes da navegação visual.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| **Interface** | React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React. |
| **Design** | Space Grotesk, Manrope, JetBrains Mono, gradientes discretos e acessibilidade orientada a contraste. |
| **Boas práticas** | Responsividade, foco visível por teclado, `prefers-reduced-motion`, `target="_blank"` com `rel="noreferrer"` e semântica de navegação. |

## Execução local

### Pré-requisitos

- Node.js 22 ou superior;
- pnpm 10 ou superior.

### Instalação

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd iverson-santos-portfolio
pnpm install
pnpm dev
```

Depois, acesse o endereço exibido pelo Vite, normalmente `http://localhost:3000`.

### Scripts disponíveis

| Comando | Ação |
| --- | --- |
| `pnpm dev` | Inicia o ambiente de desenvolvimento. |
| `pnpm check` | Executa a verificação de tipos TypeScript. |
| `pnpm build` | Gera a build otimizada de produção. |
| `pnpm start` | Inicia a aplicação construída em modo de produção. |

## Personalização

Os dados dos projetos ficam no início de `client/src/pages/Home.tsx`. Para adicionar ou alterar um case, atualize o objeto correspondente com título, categoria, contexto do problema, sistema, resultado, tecnologias e links.

As decisões de identidade visual estão registradas em [`ideas.md`](./ideas.md). A paleta, tipografia e os componentes de moldura técnica estão centralizados em `client/src/index.css`.

## Contato

- **GitHub:** [github.com/IversonSantos-dev](https://github.com/IversonSantos-dev)
- **LinkedIn:** [linkedin.com/in/iverson-santos-a96706193](https://www.linkedin.com/in/iverson-santos-a96706193/)

---

© 2026 Iverson Santos. Desenvolvido para comunicar soluções digitais com clareza, propósito e visão de produto.
