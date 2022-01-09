import Home from './pages/Home';
import './App.css';
import Landing from './pages/Landing';
import { Route, Switch, useLocation } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Room from './pages/Room';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/Landing">
          <Landing/>
        </Route>
        <Route path="/room/:room_id">
          <Room/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
