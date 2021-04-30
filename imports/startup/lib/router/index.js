import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../../../ui/pages/Home";
import AddTest from "../../../ui/pages/AddTest";
import AddClient from "../../../ui/pages/AddClient";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-test" component={AddTest} />
        <Route exact path="/add-client" component={AddClient} />
      </Switch>
    </Router>
  );
};
