import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./components/NotFound";
import "./index.css";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/all-expenses">
        <App />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);
