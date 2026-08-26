# Direção de design — Portfólio de Iverson Santos

## Três abordagens consideradas

### 1. Caderno de Produto
**Muito breve:** Um portfólio editorial que trata cada projeto como um estudo de caso de produto, com narrativa clara entre problema, solução e impacto. O tom é técnico, próximo e deliberadamente humano.

**Probabilidade:** 0,07

### 2. Terminal Contemporâneo
**Muito breve:** Uma leitura inspirada em ferramentas de engenharia, com superfícies escuras, dados em primeiro plano e sinais visuais precisos. A experiência reforça o perfil de construtor de sistemas.

**Probabilidade:** 0,03

### 3. Arquitetura Solar
**Muito breve:** Composições luminosas, tipografia expressiva e blocos assimétricos que traduzem clareza e ambição. O portfólio parece uma publicação de design orientada a resultados.

**Probabilidade:** 0,09

## Abordagem escolhida: Operações em Movimento

### Movimento de design

**Editorial técnico contemporâneo** que preserva a direção visual existente no arquivo de origem: grafite azulado, lavanda, azul-glacial, assimetria e sinais de sistemas em movimento. Os destaques funcionam como estudos de caso de produto, e não como cartões genéricos.

### Princípios centrais

1. **Problema antes da interface:** todo destaque apresenta a necessidade concreta que motivou a construção do sistema.
2. **Hierarquia narrativa:** os dois projetos em destaque ocupam uma composição mais ampla e guiam a leitura antes do conjunto dos demais trabalhos.
3. **Contraste com propósito:** superfícies de grafite, tipografia clara, lavanda e azul-glacial tornam a informação técnica legível e memorável.
4. **Detalhe funcional:** linhas de caderno, rótulos de índice e marcas de processo estruturam a página sem competirem com o conteúdo.

### Filosofia de cor

O grafite azulado sustenta profundidade e confiança para a leitura técnica. A lavanda introduz energia e autoria, enquanto o azul-glacial sinaliza conectividade e evolução. A cor assinatura é **Pulso Lavanda — #A78BFA**, aplicada a ações, indicadores e marcos de processo.

### Paradigma de layout

Em vez de uma grade centralizada de cartões idênticos, a página funciona como uma **linha editorial vertical**: abertura ampla, uma faixa de projetos selecionados com composição assimétrica e, depois, os demais projetos em uma sequência compacta. Em telas menores, a hierarquia é preservada por ordem de leitura, sem esconder contexto.

### Elementos de assinatura

1. Réguas finas, ruído em grade e pequenos rótulos numéricos para indicar seções e categorias.
2. Chips de problema, sistema e impacto que resumem o caso de uso.
3. Molduras técnicas recortadas com detalhe lavanda e azul-glacial nos projetos prioritários.

### Filosofia de interação

As interações devem apoiar a exploração: links e ações revelam direção com sublinhados deslizantes, os projetos elevam discretamente no hover e os controles têm retorno tátil breve. Nada deve parecer decorativo ou competir com a leitura.

### Animação

Elementos entram por opacidade e leve deslocamento vertical em cascata, sempre abaixo de 300 ms. Imagens usam uma aproximação discreta no hover; botões respondem com escala de 0,97 no clique. A experiência respeita `prefers-reduced-motion`.

### Sistema tipográfico

**Manrope** é usada no texto funcional pela legibilidade; **Space Grotesk** aparece em títulos e números de impacto, reforçando o gesto técnico. **JetBrains Mono** organiza rótulos, índices e sinais de sistema. Títulos grandes usam peso 600–700 e corpo usa 400–500, com entrelinhas confortáveis e frases curtas.

### Essência da marca

**Portfólio de produtos e sistemas digitais construídos para eliminar atrito em operações reais, para pessoas que valorizam clareza e execução.** Personalidade: **estratégica, direta e inventiva**.

### Voz da marca

Headlines descrevem resultado ou tensão de mercado; CTAs conduzem à próxima leitura sem frases genéricas. Exemplos: “Quando o processo manual vira produto.” e “Ver o caso completo”.

### Wordmark e logo

O monograma “IS” deve lembrar duas colunas de um diagrama de sistema: traço geométrico em branco-gelo, corte interno lavanda e sinal azul-glacial, com leitura nítida mesmo em tamanho reduzido. O nome permanece como uma assinatura tipográfica, nunca como logotipo padrão.

## Decisão de manutenção

O arquivo recebido é a **referência de identidade visual** do portfólio. Por isso, a manutenção preserva a linguagem “Operações em Movimento” já estabelecida, mas atualiza as imagens perdidas por assets armazenados de forma durável e promove “Casamento em Ordem” e “Sistema de Separação de Produtos” para uma faixa prioritária de estudos de caso.

## Style Decisions

- O monograma IS atua como uma assinatura de diagrama de sistema na navegação e no rodapé, com estrutura em branco-gelo, cortes em Pulso Lavanda e azul-glacial.
- Cada case prioritário traz um artefato de produto: fluxo integrado de convites, convidados e PIX no Casamento em Ordem; consulta de SKU e base de dados centralizada no Sistema de Separação de Produtos.
- Pulso Lavanda (`#A78BFA`) é a cor expressiva única de ações, filtros, marcadores e pulsos. Azul-glacial atua somente como sinal técnico secundário.
- Uma espinha editorial discreta conecta as seções principais para que a página seja percebida como um único sistema em movimento.
