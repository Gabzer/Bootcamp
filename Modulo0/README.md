Prof. Danilo
HTML, CSS e Javascript;
os frameworks criam uma camada de abstracao dos fundamentos;
NodeJS e live-server (npm install -g live-server)
VSCode portatil: baixar o zip e criar uma pasta 'data' dentro.
    -plugins: Debigger for Chrome e Prettier -Code formatter
terminal: live-server para o startar
debug dentro do VSCode: Run -> Start Debugging -> Chrome
    na aba de debug, clicar na engrenagem, vai abrir o file 'launch.json'
        mudar file por url e colocar: http://localhost:8080/    (live-server)

# HTML

Hipertexto: txt nao linear, com diversos conteudos interconectados (links);
elementos obrigatorios: <!DOCTYPE html> e <title>blablabla</title>
abrir nova aba: target="_blank"
se linka um input a um label por um 'for' no label com o id do input.

# CSS

folha de estilo em cascata

```html
<head>
    <link rel="stylesheet" href="styles.css"> mais indicada
    or
    <style>
        div {
            color: bleu;
        }
    </style>
</head>
```

## Combinador descendente e filho

E F   = elemento F descendente de E
E > F = elemento F filho de E

## Combinador + e ~

E ~ F = elemento F eh irmao de E e precedido por E
E + F = elemento F irmao de E e imediatamente precedido por E

## Seletor composto

a.destaque.grande:disabled

elemento a com as classes destaque e grande que esta desabilitado

## Seletor complexos

table.comBordas tr + tr

melhor lido de tras para a frente
elemento TR imediatamente precedido por um irmao que eh um elemento TR descendente de um elemento table com a classe comBordas

## Box Model

```css
div {
    box-sizing: content-box;
}
or
div {
    box-sizing: border-box;
}
```

## Flexbox layout

habilitado por meio da propriedade display:
1. flex: comporta como block box externamente e flexbox layout internamente;
2. inline-flex: comporta como inlie box externamente e flexbox layout internamente.

flex-direction: row or column



# Javascript

script externo: <script src="./js/meu-script.js"></script>
script inline:

```html
<script>
    console.log('Est eh um script');
</script>
```

