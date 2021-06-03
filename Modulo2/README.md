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