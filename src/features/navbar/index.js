import React from "react";
import { Link } from "@reach/router";

export default props => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);
