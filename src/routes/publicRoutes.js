import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

export default props => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${path}/`} exact>
          <Home />
        </Route>
        <Route path={`${path}/products`} exact>
          <Products />
        </Route>
        <Route path={`${path}/products/:id`}>
          <Products />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};
