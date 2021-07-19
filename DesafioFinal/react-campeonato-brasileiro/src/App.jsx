import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Championship from './components/Championship';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:ano">
          <Championship />
        </Route>

        <Redirect to={{ pathname: '/2015' }} />
      </Switch>
    </Router>
  );
}
