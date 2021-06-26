import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import CalendarScreen from "./CalendarScreen";
import { getToday } from "./dateFunctions";
import { LoginScreen } from "./LoginScreen";
import { getUserEndpoint, IUser } from "./backend";
import { authContext } from "./authContext";

function App() {
  const month = getToday().substring(0, 7);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndpoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    setUser(null);
  }

  if (user) {
    return (
      <authContext.Provider value={{ user, onSignOut }}>
        <Router>
          <Switch>
            <Route path="/calendar/:month">
              <CalendarScreen />
            </Route>
            <Redirect to={{ pathname: "/calendar/" + month }} />
          </Switch>
        </Router>
      </authContext.Provider>
    );
  } else {
    return <LoginScreen onSignIn={setUser} />;
  }
}

// CLASS COMPONENT
class App2 extends React.Component<{}, { user: IUser | null }> {
  setUser: (user: IUser) => void;
  onSignOut: () => void;

  constructor(props: {}) {
    super(props);
    this.state = {
      user: null,
    };
    this.setUser = (user: IUser) => {
      this.setState({ user });
    };
    this.onSignOut = () => {
      this.setState({ user: null });
    };
  }

  render() {
    const month = getToday().substring(0, 7);
    const { user } = this.state;

    if (user) {
      return (
        <authContext.Provider value={{ user, onSignOut: this.onSignOut }}>
          <Router>
            <Switch>
              <Route path="/calendar/:month">
                <CalendarScreen />
              </Route>
              <Redirect to={{ pathname: "/calendar/" + month }} />
            </Switch>
          </Router>
        </authContext.Provider>
      );
    } else {
      return <LoginScreen onSignIn={this.setUser} />;
    }
  }

  componentDidMount() {
    getUserEndpoint().then(this.setUser, this.onSignOut);
  }
}

export default App;
