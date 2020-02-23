import React from "react";
import "./assets/styles/index.css";
import "./assets/styles/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
