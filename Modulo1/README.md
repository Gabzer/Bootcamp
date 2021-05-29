Prof. Bruno Augusto Teixeira



# Mapa de Eventos

## Manipuladores de Evento

Eventos de mutacao -> altera a estrutura do DOM
Eventos Logicos -> disparado pelo sistema
Eventos Interface do Usuario -> o user, a partir dos elementos do DOM, dispara o evento

o que acontece quando um evento eh disparado ?
as acoes que sao disparadas sao definidas pelos manipuladores de evento.

manipuladores in-line -> add diretamente no element (onclick)
propriedades dos elementos -> 1o buscar os elementos do DOM em um script, 2o add um onclick (ex.)
metodos DOM 2 -> addEventListener() e removeEventListener() em um script, 'click' + function (ex.)

**argumentos de eventos** - parametros que sao gerados em um evento, pode ser pego pelo proprio evento ou pelo _window_.


## 1.Arquitetura do Evento

Fases do evento: 
1. Capturing -> todos os eventos add nos ancestrais do target clicado (ex.) serao lancados;
2. Target;
3. Bubbling -> a acao ocorre primeiro no target e depois nos ancestrais.

## Interface Event

Event


## 2.UIEvent

Eventos da interface de usuario.
Eventos: load, unload, abort, error, select e resize.
Propriedades: view e detail.


## 3.MouseEvent

Eventos: mousedown, mouseup, mouseover, mouseout, mousemove.
        click, dblclick, mouseenter, mouseleave e contextmenu.

Ordem dos eventos: mousedown -> mouseup -> click

Propriedades (pegas pela propriedade do evento): screenX, screenY, clientX, clientY, altKey, ctrlKey, shiftKey, metaKey, button, buttons, relatedTargets.


## 4.KeyboardEvent

Eventos: keydown e keyup.

Ordem dos eventos: keydown, beforeinput, input e keyup.

Propriedades: key, code, location, altKey, shiftKey, ctrlKey, metaKey, repeat, isComposing.


## 5.FocusEvent

Eventos: focusin, blur e focus.

Ordem dos eventos: focusin -> focus.
                   focusout -> focusin->blur->focus

Propriedades: RelatedTarget.



# JavaScript Funcoes

## Escopos

Define a acessibilidade das variaveis declaradas na app.
Escopo: Global e 
        Local: funcao ou bloco
O _var_ nao cria escopo de bloco, soh se ela eh declarada dentro de um funcao.

**Hoisting**: algo eh usado antes de sua declaracao -> a engine do js coloca as coisa no lugar certo por isso nao causa erro.

```js
printName();
function printName() {
    console.log("nome: oi")
}
```

## Closures

Permete que funcoes acessem variaveis fora de seu escopo -> **encapsulamento**

```js
// exemplo encapsulamento
function Carro() {
    this.proprietario = "Marcos";
    let ano = 2020;
    this.getAno = function() {
        return ano;
    }
}
let carro = new Carro();
console.log(carro.proprietario);    // Marcos
console.log(carro.ano);             // undefined
console.log(carro.getAno());        // 2020
```

## Prototype

Eh um objeto na qual toda funcao recebe uma propriedade prototype - **heranca**.
A propriedade _prototype_ referencia a propriedade ___proto___ (Prototype Scope) que vem da heranca de Object()

```js
Carro.prototype.getAno = function() { ... }
// todas as instancias de carro terao essa funcao
```


## IIFE - Funcoes imediatas

Immediately Invoked Function Expression.

Antes de ver isso, tipos de functions:

```js
//  Function Declaration
function myFunction() { /* codigo */ } // aqui a gente pode colocar () para o js lancar imediatamente essa funcao
//  Function Expression
let myFunction = function() { /* codigo */ }; // aqui nao dah certo o ()
// IIFE
( function() {} ) ();
( function functionName() {} ) ();
let func = ( function() {} ) ();
```

Beneficios do IIFE:
1. poluicao do escopo global;
2. privaciodade de dados;
3. closures;
4. renomear variaveis;
5. capturar o objeto Global.


## Proxy

Conceito de meta programacao

<img src="proxy.png" alt="proxy" width="200"/>

A biblioteca Reflect ajuda na manipulacao do proxy.


## Curry

Conceito de programacao funcional, no qual tem uma funcao com varios parametros e a gente pode transforma-la em uma funcao com chamadas parciais que aceitam somente um parametro.



# JavaScript Assincrono

## Promises

Acao que vai ser executada no futuro.


## Event Loop

Pelo event loop o js enfilera todas as acoes que devem ser executadas -> sao armazenadas na **Stack**.
**Background**: onde eh enfileirado acoes de APIs nativas.
**Macrotask**: toda acao que sai do Background entra aqui antes de ir para o Stack.
**Microtask**: promises caem aqui e ela tem precedencia sobre a Macrotask.


## Iterators

Como iterar com nossos objetos segundo um padrao.

```js
interface Iterator {
    next() {
        //...
        return {
            value: <value>,
            done: <boolean>
        }
    }
}
```

Uma lista sem ser iterada dah problema em um FOR-OF.



# Aula Interativa 1

(() => {})() -> para a primeira chamada = FUNCAO IMEDIATA
bubble sort -> (x, y) => x === y ? 0 : x > y ? 1 : -1
KPI = Key Perfomance Indicator
.toLocaleString("PT") -> para ter esses pontos 1.000.000
DateFNS no lugar do MomentJS
o esquema de pegar dois dias anteriores eh de verdade mesmo
problema com EUA, Australia, França, Reino Unido e outros
innerHTML para add a img

JavaScript Assincrono:
<script></script>
<script async></script> carrega o html e o script em paralelo, para o html e processa o script
<script defer></script> carrega o html e o script em paralelo, faz todo o hmtl e no final processa o script

Desafio:
developer roadmaps -> frontend e react
KPIs global
Pizza -new dados
Barras - em pareto(do maior para o menor) com os 10 primeiros



# ECMAScript

A ECMA define um protocolo e o javascript a implementa.

## ECMAScript 2015

ES6

```js
// Numa constante classe pode-se moudar o valor de seus atributos mas sua estrutura nao pode ser mudada
const Aluno = {
    nome: 'Gabriel'
}
Aluno.nom = 'Jah_era';      //OK
Aluno = {nome: 'Gabriel'}   //ERRO
```

template strings: `Eu sou um template string: ${message}`

destructing: let [a, b] = [item, goal];

swap: [a, b] = [b, a];

destructing em objetos: let {a, b} = {item: 'exemplo', goal: 'do palmeiras'};

conceito de DEFAULT:

```js
//ES5
var soma = function(a, b) {
    if(a === undefined) a=1;
    if(b === undefined) b=1;
    return  a+ b;
}
//ES6
let soma = (a=1, b=1) => a + b;
```

REST:

```js
function(...valores) {
    return  valores.reduce((anterior, atual) => { return anterior + atual});
}
```

for of: arrays, maps, strings, sets -> navega nos valores
for in: navega nas posicoes (nome de atributo ou index)

## ES7

ECMAScript 2016.
operador de exponenciacao: a gente fazia assim '3,14 * num * num', agora 'Math.PI * Math.pow(num, 2)' ou ainda 'Math.PI * (num**2)'.
.includes() para os arrays.

## ES8

string paddings - add ou substituir info numa determinada string:

```js
console.log('IGTI'.padStart(1)); //IGTI
console.log('IGTI'.padStart(6)); //  IGTI

console.log('IGTI'.padEnd(4)); //IGTI
console.log('IGTI'.padEnd(7)); //IGTI  .

console.log('IGTI'.padStart(6, 'D'));   //DDIGTI
console.log('IGTI'.padStart(7, 'DAJ')); //DAIGTI
```

Object.entries(), Object.values() e Object.getOwnPropertyDescriptors():

```js
const tipoLogradouro = {
    A: 'Area',
    AER: 'Aeroporto'
}
console.log(Object.entries(tipoLogradouro));
/*
[
    [ 'A', 'Area' ],
    [ 'AER', 'Aeroporto']
]
*/
console.log(Object.values(tipoLogradouro));
/*
[ 'Area', 'Aeroporto']
*/
let endereco = {logradouro: 'Brasil'};
console.log(Object.getOwnPropertyDescriptors(endereco, 'logradouro'));
/*
{
    logradouro: {
        value: 'Brasil',
        writable: true,
        enumerable: true,
        configurable: true
    }
}
*/
```

trailing commas: function(a,b,c,) nao dah erro por causa dessa uma virgula.

## ES9

Promises.prototype.finally:

```js
const api = new Promise((resolve, reject) => {
    if(Math.random() > 0.5) resolve('Sucesso');
    resolce('Falha');
})
function log() {
    console.log("chamada concluida");
}

// em vez de fazer isso:
api
.then(res => {
    console.log(res);
    log();
})
.catch(rej => {
    console.error(rej);
    log();
});
// fazer isso
api
.then(res => console.log(res))
.catch(rej => console.error(rej))
.finally(log());
```

## ES10

String.trimStart() e String.trimEnd().
O param do catch eh opcional.
Array.flat() e Array.flatMap():

```js
let arr = [1,2,[3,4,[5,6]]];
console.log(arr.flat());            //1,2,3,4,[5,6]
console.log(arr.flat(2));           //1,2,3,4,5,6
console.log(arr.flat(Infinity));    //faz todos os niveis

let arr2 = [1,2,3,,5,6];
console.log(arr.flat());            //1,2,3,5,6 - tira posicoes vazias
```

## ES11

BigInt:

```js
console.log(Number.MAX_SAFE_INTEGER);       // tamanho de um int normal
//modos de declarar um BigInt
let a = 1n;
let b = BigInt(2);
```

Promise.allSettled() - aguarda todas as promises acabarem, ele retorna mesmo as rejeitadas.
**globalThis**: variavel global para todos os tipos de client (window no navegador, global no NodeJS).
Optional Chaining: entity.car?.owner?.lastName; eh o ?
Nullish coalescing operator:

```js
let test = "";
console.log(test || "GET");       //GET
console.log(test ?? "GET");       //
```



# Bibliotecas

cleave.js - para os inputs
sweetalert2
howlerjs - medias
angolia places - localizacao

## Lodash

npm install lodash

```js
import _ from 'lodash';
let cars = ['Palio', 'Uno', 'Gol'];
console.log(_.first(cars));
console.log(_.last(cars));
console.log(_.nth(cars, 3));    //pega o item na posicao 3
console.log(_.nth(cars, -3));   //pega o item na posicao 3 de tras para a frente
console.log(_.sample(cars));    //elemento aleatorio
console.log(_.shuffle(cars));   //embaralha a array
console.log(_.random(10));      //gerar um num aleatorio
console.log(_.random(5, 10));   //gerar um num aleatorio entre 5 e 10
_.times(3, () => {});           // repete uma funcao 3 vezes
_.delay( () => {}, 150);        // atrasa a execucao da funcao
_.isNumber(3);                  // valida o tipo da variavel
_.isString(3);
_.isArray(3);
_.isObject(3);
let numbers = [-4,3,0,1,32,-12,9];
_.min(numbers);
_.max(numbers);
_.sum(numbers);
_.curry(func);                  //para fazer o currying de uma funcao
```

## Date-fns

npm install data-nfs

## Chart.js

npm install chart.js

## Axios

npm install axios