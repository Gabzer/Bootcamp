import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Expenses } from "./Expenses";

function App() {
  const mesAtual = obtemMesAtual();
  return (
    <Router>
      <Switch>
        <Route path="/despesas/2021-01">
          <Expenses />
        </Route>
        <Route path="/despesas/:mes">
          <Expenses />
        </Route>
        {/* <Redirect to={{ pathname: "/despesas/2021-01" }} /> */}
        <Redirect to={{ pathname: "/despesas/" + mesAtual }} />
      </Switch>
    </Router>
  );
}

function obtemMesAtual(): string {
  const date = new Date();
  const year =date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}-${month.toString().padStart(2, '0')}`;
}

export default App;
