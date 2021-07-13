# CSS in Js e Styled Components

```bash
npx create-react-app weather --template typescript
npm run start
npm i styled-components
npm i --save-dev @types/styled-components
```

plugin: vscode-styled-components

criar conta na Weather API: https://home.openweathermap.org/users/sign_in
Criar uma api_key nesse site.

Pegar nesse site http://bulk.openweathermap.org/sample/ os nomes de cidade aceitos pela a API, na lista 'city.list.json.gz'

# React Query

## Server state vs cliente state

## Qual problema queremos resolver?

## Porque cache eh importante?

## O que eh o React Query

Numa loja onde se tem um burnout muito grande dos produtos vendidos, o que a app apresenta nao eh a mesma coisa q esta no BD. Pode ocorrer tbm de muitas pessoas modificarem a mesma info ao mesmo tempo.
Duas tecnicas para buscar info do BD:

1. **Pulling**: de tempos em tempos, esse tempo eh programado, o cliente vai e pede para o BD "executa a mesma query e deixa eu ver os results";
2. **Websocket**: olha BD, eu tenho interesse nessa info, ai sempre q ela modificar ele me avisa.

Mas isso nao funcionaria bem num caso como o sitado logo em cima.
Tradeoff dados novos vs Acessos a API: eis a questao.

Estado do servidor: eh aquele mostrado para o cliente.
O React Query permete usar a mesma cache em varios lugares.

```bash
npm i react-query
```

**jotai**: mais uma forma de fazer estados globais de uma app (simples, pequeno e rapido).

```bash
npm i jotai
```

# DisplayWeather

continuar a partir do 3.3

```bash
npm i react-switch
npm i react-icons
```

# Testes em JavaScript

Fazer teste para nao deixar seu codigo legado.

Tipos de testes:
1. Units Tests - testa o atomo;
2. Testes de integracao - testa a integracao de componentes;
3. Testes end to end - mock dos dados falsos da Api ate o atomo;
4. Testes de carga - ver se o sistema aguenta uma tal carga de acessos/requisicoes;
5. Testes de stress - ver ate aonde meu app aguenta para saber o limite da sua app;
6. Testes caixa preta/caixa branca - eu conheco ou nao o codigo;
7. Testes de usabilidade - ver se ficou facil de entender a usabilidade dos componentes da tela.

Piramide de testes:
           ^
         /   \
        / E2E \
       /-------\
      /         \
     /           \
    / Integration \
   /---------------\
  /       Unit      \
 /-------------------\

Boas praticas:
1. Teste o comportamento e nao a implementacao;
2. Codigo de teste deve ser simples. Ninguem testa codigos de teste;
3. Testes devem ser repetidos.

TDD - Test Driven Development:
1. Forma de desenvolvimento;
2. Ajuda a pensar no que realmente importa;
3. Tambem chamado de teste RED/GREEN.

BDD - Behavior Driven Development:
1. O que realemente importa sao comportamentos;
2. Nem toda linha de codigo precisa ser testada;
3. Por outro lado, todos os comportamentos precisam ser testados.

Ferramentas: React Testing Library, Jest, Cypress.

## Na pratica

Ajuda a ver o componente renderizado:

```js
render(<InputNumerico />);
screen.debug();
```

https://nextjs.org/docs/upgrading

# Introducao ao NextJS

Cria um Server Side Rendering.

```bash
npx create-next-app ecommerce
npm run dev
```