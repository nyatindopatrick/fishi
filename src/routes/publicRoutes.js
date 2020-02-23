import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

export default () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path={`${path}/`} exact component={Home} />
      </Switch>
    </div>
  );
};
