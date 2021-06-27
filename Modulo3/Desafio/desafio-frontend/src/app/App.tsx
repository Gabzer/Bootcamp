import { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { IUser } from "../services/tipos";
import { getUserEndpoint } from "../services/Api";
import { obtemMesAtual } from "../helpers/dateFunctions";

import DespesasScreen from "./DespesasScreen";
import LoginScreen from "./LoginScreen";
import { authContext } from "../helpers/authContext";

function App() {
  const mesAtual = obtemMesAtual();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndpoint().then(setUser);
  }, []);

  if (user) {
    return (
      <authContext.Provider value={{ user }}>
        <HashRouter>
          <Switch>
            <Route path="/despesas/:mes">
              <DespesasScreen />
            </Route>
            <Redirect to={{ pathname: "/despesas/" + mesAtual }} />
          </Switch>
        </HashRouter>
      </authContext.Provider>
    );
  } else {
    return <LoginScreen onSignIn={setUser} />;
  }
}

export default App;
