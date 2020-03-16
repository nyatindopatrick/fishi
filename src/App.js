import React from "react";
import "./static/styles/index.css";
import "./static/styles/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PrivateRoutes from "./routes/authRoutes";
import PublicRoutes from "./routes/publicRoutes";
import NotFound from "./components/NotFound/NotFound";

const Home = () => <Redirect from="/" to="/app" />;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <PrivateRoutes />
          </Route>
          <Route path="/app">
            <PublicRoutes />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
