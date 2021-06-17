Prof. Raphael Gomide


# Ambiente

NodeJS - o React roda sobre ele.
npm - gerenciador de pacotes do node.
npx - executador de projetos.
yarn - gerenciador de pacotes aconselhado pela equipe do React (npm i -g yarn).
rimraf - exclui coisas bem mais rapido que o do padrao do Windows (npm i -g rimraf).
serve - pacote que levante um servidor web (npm i -g serve).

Criacao de um projeto react chamado ambiente: npx create-react-app ambiente

Limpeza do cra (create-react-app):
deletar - App.css, App.test.js, index.css, logo.svg, reportWebVitals.js, setupTests.js
Limpar o index.js

Plugins: Debugger for Chrome, ES7 React/Redux/GrapphQL/React-Native snippets, ESLint, PostCSS Language Support, Prettier, Tailwind CSS IntelliSense, vscode-icon, Wintere is Coming Theme.
Extensao para o Chrome: React Developer Tools
Power toys: controle da divisao da tela.
rimraf node_modules
no VSCode: F1 e reload, Enter




# Introducao ao React

o que eh React ? A Javascript library for building user interfaces.

Declarativo: vc fala o que tem que ser feito e o react ja sabe o como faze-lo.
Baseado em componentes: reutilizacao de codigo.

## Virtual DOM

Perfomatica!
o React soh modifica o DOM nos locais alterados, pois a sua manipulacao eh cara (lenta) - Reconciliation.
Componente: funcao que agrupa determinado comportamento.
JSX: JavaScript XML, utilizada pelo React para a escrita da renderizacao de componentes.
Props: considerada somente leitura.
Closure: funcao implementada dentro do escopo de outra funcao.
State: dado que pode ser modificado com o tempo.
Hooks: estrutura do React que pode ser vinculada (hooked) a componentes. Convencao: comecar com o prefixo 'use'.

## JSX

fragment: <>...</> nao tem necessidade de colocar uma div
_rfc + tab = cria um componente basico (react functional component)

## Hooks

useState = tem uma variavel(state) na posicao 0 e a funcao setter da mesma.
useEffect = substitui o componentDidMount, componentDidUpdate e componentDidWillAmount(nocao de live-cycle). Agora com esse hook, a nocao eh sincronicao com o estado do mundo com o da aplicacao. Ele eh chamado depois da renderizacao. Dep: o primeiro parametro de useEffect eh uma funcao, o segundo eh a dependencyList que eh o que o useEffect monitora (com uma array vazia ele executa uma soh vez). Coisa interessante: na funcao passada para o useEffect, pode-se retornar uma funcao(callback) que limpa a memoria.
efeito colateral(side effect): coisas que o React nao tem controle (ex.:backend). Palavra chave: sincronizacao.




# Criando componentes mais robustos

Renderizacao de arrays:
A **key** em um <li> eh super importante para a renderizacao feita pelo React.
O problema do **prop drilling**. Tecnica para resolve-lo: **Composition**.
prop drilling - passar props desnecessarias para os childrens.
uma das solucoes para esse problema: Composition - os componentes **containers** recebem _filhos_ atraves da prop _children_. A declaracao dos filhos ocorre no mesmo arquivo da declaracao do componente pai, evitando assim o problema do _prop drilling_.



# O projeto react-flash-cards-v1

Tecnica **Lifting State Up**: permite o compartilhamento de estado entre componentes 'irmaos', por exemplo. Ela consiste em 'subir' o estado para o componente 'pai' comum a todos os que precisam do valor do estado.

o useEffect update o componente quando a props recebida pelo mesmo muda.



# O projeto react-flash-cards-v2

Integracao com o Backend.
O backend pode ser considerado como 'estado do mundo'.
Sincronizar dados com o useEffect.

Criar um backend fake: biblioteca json-server.
  1. na pasta onde for criar esse backend, 'yarn init -y' que cria um package.json basico;
  2. yarn add --dev -E json-server, instala o json-server (-E instala a versao fixa);
  3. colocar um documento .json no local;
  4. no caso dessa aula, yarn add uuid -E;
  5. node .\generator.js;
  6. add no package.json isso:

```
"scripts": {
  "server": "json-server --watch flashcards.json --port 3001"
}
```

  7. yarn server

Instalacao de react-tabs: yarn add react-tabs.



# O projeto react-flash-cards-v3

DEPLOY DE APPS
**Glitch** - Oferece hospedagem gratuita (limitada) para o Back End. Nao exige cartao de credito. Permite upload de arquivos.
**Netlify** - Oferece hospedagem gratuita (limitada) para o Front End. Nao exige cartao de credito. Possui um CLI (Command Line Interface) compativel com Node.js.




# Aula Interativa Modulo 2

comparar strings: stringA.localeCompare(stringB)



# O projeto react-flash-cards-v3 - continuacao


## Glitch

No glitch, acessar o Terminal e :
npm install json-server --save-exact

Depois, no terminal, para atualizar a pagina:
refresh

-> new File -> Upload File -> generator.js

Instalar o uuid:
npm install uuid --save-exact

e por fim:
node generator.js

## Netlify

Preparacao: em local rodar o comando:
yarn prod:local

Instalar no PC:
npm i -g netlify-cli@3.29.14

netlify login

Depois lancar:
yarn prod:cloud

A url vai ser disponibilizada no terminal.

## Mensagens amigaveis

yarn add react-toastify

process.env.NODE_ENV - variavel para saber se eh prod ou dev (no NodeJS).




# Aula Interativa 2 - Modulo 2

calculo do percentual: (item.votes / city.presence) * 100
flex-grow