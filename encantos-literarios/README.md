# Encantos Literários

Landing page animada de um clube de assinatura de livros, feita a partir do Figma [LP de Clube de Assinatura](https://www.figma.com/community) da Rocketseat. HTML, CSS e um pouco de JavaScript, sem framework.

![Preview da hero](assets/preview.jpg)

## Seções e animações

| Seção | O que acontece |
|---|---|
| Hero | A camada escura some e revela a ilustração; título e subtítulo entram com fade-up em sequência |
| Parágrafo | Passar o mouse em **livro surpresa**, **brindes exclusivos** e **encantadora** acende o trecho e mostra um ícone (no celular, revela sozinho ao rolar) |
| Kit mensal | Ao entrar na tela, os marca-páginas abrem em leque, o broche sai de trás do livro e as setas "se desenham" |
| Assinatura | Os três cards começam empilhados e se abrem em leque (-8°, 0°, +8°); o coelho sobe atrás do card Semestral |
| Botões | O ponto de 4px no centro (do Figma) cresce e preenche o botão no hover |

As animações respeitam `prefers-reduced-motion`.

## Estrutura

```
index.html
scripts/main.js        # hover do parágrafo + IntersectionObserver das seções
styles/
  index.css            # importa os parciais abaixo
  global.css           # tokens do style guide (cores, tipografia) e botões
  header.css  hero.css  about.css  kit.css  pricing.css  footer.css
assets/                # exportados do Figma
```

## Rodando local

Abra o `index.html` com a extensão Live Preview do VS Code, ou:

```bash
python3 -m http.server 5510
```

## Tecnologias

- HTML semântico
- CSS com nesting, custom properties, `@keyframes`, transitions e `clip-path`
- JavaScript (`IntersectionObserver`)
- Fonte Raleway (Google Fonts)
