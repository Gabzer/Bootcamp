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