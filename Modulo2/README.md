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