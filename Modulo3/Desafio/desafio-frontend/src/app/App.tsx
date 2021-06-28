import { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { IUser } from "../services/tipos";
import { getUserEndpoint, signOutEndpoint } from "../services/Api";
import { obtemMesAtual } from "../helpers/dateFunctions";
import { authContext } from "../helpers/authContext";

import DespesasScreen from "./DespesasScreen";
import LoginScreen from "./LoginScreen";

function App() {
  const mesAtual = obtemMesAtual();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndpoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    signOutEndpoint().then(() => setUser(null));
  }

  if (user) {
    return (
      <authContext.Provider value={{ user, onSignOut }}>
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
