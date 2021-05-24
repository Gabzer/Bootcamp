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


# Interacao com o DOM

Document Object Model

```js
document.getElementById('id_desejado');
document.querySelector('#id_desejado');
document.querySelectorAll('input');
```

## Eventos

```js
var el = document.getElementById('id_desejado');
el.addEventListener("click", my_function);
el.removeEventListener("click", my_function);
```

propagacao de eventos:

```html
<body>
    <div id="d1">
        <div id="d2"></div>
    </div>
</body>
```

1. usuario clica em #d2;
2. fase de **capturing**. Executa click handlers de: 1.body; 2.#d1; 3.#d2.
3. fase de **bubbling**. Executa click handlers de: 1.#d2; 2.#d1; 3.body.

```js
// registra na fase de capturing
el.addEventListener("click", my_function, true);
// registra na fase de bubbling
el.addEventListener("click", my_function, false);
```

event.stopPropagation = a propagacao do evento eh interrompida no ponto que estah.
event.preventDefault = o navegador nao executa a acao padrao associada ahquele evento.



# Orientacao a objetos em JavaScript

this depende de como a funcao eh chamada.

Heranca de propriedades: objetos possuem propriedades proprias, mas tambem podem herdar propriedades de outro objeto, o seu **prototype** (prototype chain).

Sintaxe moderna para declarar classes introduzida pelo ES6:

```js
class Retangulo {
    construtor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }

    imprimeNome() {
        console.log('Retangulo');
    }
}

class Quadrado extends Retangulo{
    construtor(dimensao) {
        super(dimensao, dimensao);
    }

    imprimeNome() {
        console.log('Quadrado');
    }
}
```



# JavaScript Moderno

let e const...
**var** tem como escopo o global, **let** tem como escopo o bloco onde ela foi declarada.

**Atribuicao via desestruturacao**:

```js
let primos = [2, 3, 5, 7, 11, 13];
let [p1, p2, ...resto] = primos;
// p1 = 2
// p2 = 3
// resto = [5, 7, 11, 13]

let curso = {
    nome: "Bootcamp",
    modulos: 4,
    presencial: false,
    turma: 1
}
let {nome: nomeCurso, turma, ...outrosCampos} = curso;
// nomeCurso = Bootcamp
// turma: 1
// outrosCampos = {modulos: 4,presencial: false}

function imprime({nome}) {
    console.log(nome);
}
imprime(curso); // Bootcamp

//  TEMPLATE LITERALS
console.log(`${primos[0]} eh isso ai`);
```

## Modulos

qdo a aplicacao fica muito grande, torna-se necessario modularizar.




# Requisicoes HTTP em JavaScript

## API Fetch

Carregamento dinamico de dados (AJAX) sem precisar carregar outra pagina.

```js
fetch("http://minha.api");
```

Executa de forma assincrona.
Resposta eh encapsulada em uma Promise.

**Opcoes do fetch**

```js
fetch("http://minha.api", {/* opcoes */});
```

_method_: GET, POST, PUT, DELETE, HEAD, etc.
_headers_: cabecalho HTTP.
_body_: corpo da requisicao (postar dados codificados em json, por exemplo).

## Async await

async = retorna sempre uma promise.
await = qdo temos uma chamada que retorna uma promise, a gente usa o await que ja vai retornar o resultado da promise.