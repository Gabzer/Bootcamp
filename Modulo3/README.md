# Introduçao

Backend: npm install, npm start -- noauth ou npm start



# Typescript

Ele eh uma estensao do JavaScript q add tipagem estatica a linguagem. Assim, o compilador ja pode achar alguns erros antes da execucao.

Vantagens:
1. Verificaâo de erros em tempo de compilacao;
2. Maior facilidade para manter o codigo;
3. Melhor suporte ferramental (autocomplete).

Para criar uma aplicacao em typescript:

```bash
npx create-react-app my-app --template typescript
```

npm start para iniciar a app.



# Interface com Material-UI

Biblioteca de componentes visuais baseada no Material Design (da Google).

```bash
npm install @material-ui/core --save
```



# Roteamento com react-router

Aplicacoes tradicionais:
1. rotas (URLs) sao resolvidas pelo servidor (Back End);
2. botao voltar do navegador funciona normalmente.

Single Page Application:
1. se nao mudar a URL, botao voltar do navegador nao funciona;
2. rotas devem ser resolvidas no Front End (client-side routing);
3. uso da HTML5 History API.

```bash
npm install react-router-dom --save
npm install @types/react-router-dom --save
```

Podemos ainda usar o hook **useHistory** para obter informacoes sobre a rota ou manipular o historico programaticamente.



# Acesso direto ao DOM com useRef

Retorna um objeto que armazena um valor. Este objeto persiste durante toda a vida do componente.
Mas o componente **nao eh renderizado** ao mudar o valor!



# Primeira aula interativa

```ts
let valorTotal = despesas.reduce((total, despesa) => total + despesa.valor, 0); // o zero eh o valor inicial do total
```



# Autenticacao

GET /auth/user - Obtém info do user logado se houver sessao, caso contrario retorna erro 401;
POST /auth/login - Verifica email/senha e cria uma sessao no BackEnd. O id da sessao eh armazenado em um cookie HttpOnly (nao permete javascript injection, nao pode ser lido pelo javascript);
POST /auth/logout - destroi a sessao no Back End.



# A API Context

Objetivo dessa API: compartilhar info entre componentes sem preciser repassah-los via props explicitamente.

```ts
React.createContext<T>({default_value});
```

E no componente pai:

```ts
<userContext.Provider value={sameType_default_value}>
...
</userContext.Provider>
```



# Otimizacao de aplicacoes

useMemo, useCallback e React.memo
OBS.: um jeito legal de analisar os componentes React, eh soh instalar o React Dev Tools, ir na aba 'Components', clicar na engrenagem e marcar a box 'Highlight updates when components render.'

Comprendendo a renderizacao de componenetes no React:
1. a renderizacao consiste em gerar o virtual DOM, comparah-lo com o DOM, e aplicar as mudancas necessarias;
2. por padrao, toda vez que ocorre qualquer mudanca de estado em um componenete ele eh renderizado novamente, **assim como toda a subarvore abaixo dele**;
3. normalmente isso nao eh um problema pois a renderizacao eh rapida, mas podemos ter problemas de performance com componentes muito grandes.

O que podemos fazer ?
1. **useMemo**: hook que computa um valor apenas quando houver modificacoes em suas dependencias;
2. **React.memo**: funcao que, dado um componente, retorna uma versao otimizada do mesmo que soh renderiza quando algum prop recebido for alterado.

o **useCallback** eh igual ao useMemo mas especifico para funcoes.



# useReducer

Serve para controlar estado mais complicado, com um nivel de controle e abstracao maior.
**useReducer** eh uma alternativa ao _useState_ quando temos transicoes de estado mais complexas e desejamos maior controle.



# Hooks customizados

Criar hooks para modularizar melhor a app.
Hooks customizados podem chamar outros hooks mas nao se pode colocar uma chamada de um hook dentro de uma condicao.
Com eles podemos reutilizar codigo e modularizar a app.



# Class components

Antes do React 16.8, a unica forma de definir componentes contendo estado era por meio de classes.
O estado do componente eh armazenado na propriedade **state**, e atualizado via **setState**.
A exibicao do componente eh implementada no metodo **render**.
Ciclo de vida do componente: apenas class components podiam interagir com o ciclo de vida de componentes, sobrescrevendo os metodos _componentDidMount()_, _componentWillUnmount()_ e _componentDidUpdate(prevProps, prevState)_.
Nao precisamos usar Class Components em componentes novos, mas eh importante conhece-los para entender o codigo legado.



# Redux

Nos ajuda a genreciar o estado de nossa app com facilidade maior de a evoluir.
A arquitetura redux:
1. O estado global da app eh cnetralizado no **store**. Existe uma _unica fonte da verdade_.
2. O estado eh imutavel. A unica forma de altera-lo eh emitindo uma _action_, um objeto que representa uma acao.
3. Dado o estado atual e uma _action_, um novo estado eh calculado pela funcao _reducer_. Tal funcao nao possui nenhum tipo de efeito colateral.

```bash
npm install --save @reduxjs/toolkit react-redux
```

A ferramenta Redux DevTools ajuda a observar o redux.



# Segunda aula interativa

olhar a function q o prof criou calculaResumo() e TelaDespesas.tsx