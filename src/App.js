import React from "react";
import { Router, Link } from "@reach/router";
import Nav from "./features/navbar";
import Loading from "./features/loading";
import Loadable from "react-loadable";

const AsyncHome = Loadable({
  loader: () => import("./features/home/index"),
  loading: Loading
});

const AsyncDashboard = Loadable({
  loader: () => import("./features/dashboard"),
  loading: Loading
});
export default props => (
  <div>
    <Nav />
    <Router>
      <AsyncHome exact path="/" />
      <AsyncDashboard path="/dashboard" />
    </Router>
  </div>
);
