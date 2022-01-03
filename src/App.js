import Home from './Home';
import './App.css';
import Landing from './pages/Landing';
import { Route, Switch, useLocation } from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
