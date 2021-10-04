import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Calculator } from "./components/Excercise-2/Calculator";
import { Colors } from "./components/Exercise-1/Colors";
import { CalculatorFetch } from "./Exercise-3/CalculatorFetch";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Ejercicio 1</Link>
            </li>
            <li>
              <Link to="/ejercicio2">Ejercicio 2 </Link>
            </li>
            <li>
              <Link to="/ejercicio3">Ejercicio 3</Link>
            </li>
            <li>
              <Link to="/ejercicio2">Dashboard</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Colors />
            </Route>
            <Route path="/ejercicio1">
              <Colors />
            </Route>
            <Route path="/ejercicio2">
              <Calculator />
            </Route>
            <Route path="/ejercicio3">
              <CalculatorFetch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
