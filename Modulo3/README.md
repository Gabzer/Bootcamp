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