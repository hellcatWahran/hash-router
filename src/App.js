import React from "react";
// react router
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <a href="#/">Home</a>
        <a href="#/about">About</a>
        <a href="#/contact">Contact</a>
      </nav>
      <Switch>
        <Route path="/" exact>
          <h2 style={{ color: "red" }}>This is HomePage</h2>
        </Route>
        <Route path="/about" exact>
          <h2 style={{ color: "green" }}>This is AboutPage</h2>
        </Route>
        <Route path="/contact" exact>
          <h2 style={{ color: "darkblue" }}>This is ContactPage</h2>
        </Route>
      </Switch>
      <p>Just Testing something</p>
    </div>
  );
}

export default App;
