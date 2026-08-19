# Direção de design — Portfólio de Iverson Santos

## Três abordagens consideradas

### 1. Operações em Movimento

**Muito breve:** Um portfólio com linguagem editorial de produto, inspirado em sistemas, mapas de fluxo e dashboards premium. A intenção é transmitir domínio técnico sem reduzir o trabalho a uma coleção de cards genéricos.

**Probabilidade:** 0.07

### 2. Estúdio de Casos Digitais

**Muito breve:** Uma direção clara e clara, em tons de papel, grafite e verde esmeralda, com foco em textos de case study e ritmo de revista. A intenção é aproximar desenvolvimento e pensamento estratégico.

**Probabilidade:** 0.04

### 3. Interface Arquitetada

**Muito breve:** Uma estética de blueprint contemporâneo, com grades técnicas, tipografia precisa e microanimações discretas. A intenção é reforçar engenharia de produto e atenção aos detalhes.

**Probabilidade:** 0.09

---

## Abordagem escolhida: Operações em Movimento

### Movimento de design

**Editorial de produto contemporâneo**, combinando a confiança de um relatório técnico com o ritmo visual de um estúdio digital. A página deve se comportar como uma introdução a cases: expressiva no primeiro impacto, objetiva na informação e detalhista nas interações.

### Princípios centrais

1. **Produto antes de ornamento.** Elementos decorativos devem sugerir fluxo, conexão ou sistema; nunca existir apenas para preencher espaço.
2. **Hierarquia muito explícita.** Cada seção deve permitir uma leitura rápida por escaneamento e recompensar quem lê com profundidade.
3. **Densidade controlada.** O site deve ter substância técnica sem parecer uma parede de badges ou uma lista de currículos.
4. **Movimento com propósito.** Transições curtas devem indicar foco, avanço ou relação entre elementos, respeitando redução de movimento.

### Filosofia de cor

O fundo será **grafite azulado**, quase preto, para estabelecer concentração e contraste. Um branco mineral suaviza textos longos; lavanda elétrica e azul-glacial marcam estados, CTAs e linhas de fluxo. Cores auxiliares individuais aparecem apenas nos cards para preservar a leitura por domínio: planejamento em lavanda, logística em âmbar, comércio em terracota, operações em azul, finanças em verde e memórias em rosa.

### Paradigma de layout

Evitar uma página completamente centralizada. O hero terá uma coluna editorial ampla e um painel lateral de "sistema em movimento" com uma composição assimétrica de cartões, linhas e indicadores. As seções alternarão entre faixas de leitura, grids deslocados e módulos de dados, preservando linhas de alinhamento recorrentes.

### Elementos de assinatura

1. **Linha de sinal:** um traço com ponto luminoso que percorre divisores e representa a passagem de ideia a produto.
2. **Molduras de sistema:** cantos recortados e bordas finas em painéis, sem excesso de arredondamento.
3. **Índices editoriais:** numerais monoespaçados e rótulos em caixa alta para seções, tecnologias e categorias.

### Filosofia de interação

Interações devem parecer instrumentais. O hover nos projetos eleva a superfície apenas alguns pixels, acende a linha de borda e revela um cursor direcional. O menu troca de estado ao rolar, preservando contraste. CTAs têm resposta tátil pequena no clique e não dependem de movimento para serem compreendidos.

### Animação

Entradas em cascata de 40 a 70 ms entre itens de um mesmo bloco, usando apenas opacidade e transformação. O painel do hero pode ter pontos em deslocamento lento ao longo de linhas, com duração acima de 8 segundos, sem loops chamativos. Aplicar `prefers-reduced-motion` para reduzir todas as animações não essenciais.

### Sistema tipográfico

**Space Grotesk** para títulos, navegação e números de seção; **Manrope** para corpo e microcopy; **JetBrains Mono** para tecnologia, rótulos e metadados. Os títulos devem explorar contrastes de peso e tamanhos, usando blocos de linha bem definidos, enquanto o texto de corpo preserva legibilidade com comprimento moderado.

### Essência da marca

**Posicionamento:** Desenvolvimento Full Stack para transformar fluxos complexos em produtos digitais mais claros, úteis e prontos para evoluir.

**Personalidade:** Precisa, curiosa e orientada a produto.

### Voz da marca

Headlines devem ser diretas, com ambição concreta. CTAs devem convidar para uma ação específica, sem frases promocionais vazias. Exemplos: **“Transformo processo em produto.”** e **“Veja como cada solução foi arquitetada.”**

### Wordmark e símbolo

O wordmark será **IV. SANTOS**, com o ponto funcionando como nó de um sistema. O símbolo é formado pelas letras **I** e **S** abstraídas em dois módulos conectados por uma linha, criando um ícone compacto e reconhecível sem depender de texto.

### Cor de assinatura

**Pulso Lavanda — `#A78BFA`**. Um violeta de alta definição usado em CTAs, foco, índices ativos e pontos de conexão.

## Style Decisions

- A **linha de sinal** é um elemento recorrente: deve conectar índices, divisores, metadados e momentos de CTA em toda a página, e não permanecer restrita ao hero.
- Os projetos devem se comportar como **módulos compactos de case**, deixando visíveis domínio, problema operacional, sistema proposto e sinal de valor antes da stack.
- As superfícies de sistema devem priorizar **bordas finas, recortes técnicos, índices monoespaçados e destaques de aresta**. Cantos muito arredondados são exceção, não a linguagem predominante.
