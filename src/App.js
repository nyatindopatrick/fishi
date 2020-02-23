import React from "react";
import "./assets/styles/index.css";
import "./assets/styles/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./components/Login/Login";
import publicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" exact component={publicRoutes} />
        <Route path="/Login" exact component={Login} />
        <Redirect from="/" exact to="/app" />
      </Switch>
    </Router>
  );
}

export default App;
