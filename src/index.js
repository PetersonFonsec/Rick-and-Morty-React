import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { litghTheme } from "./styles/theme";

import Character from "./pages/character/index";
import Episode from "./pages/episode/index";
import Location from "./pages/location/index";

import Menu from "./components/menu/Menu";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={litghTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route path="/character">
            <Character />
          </Route>

          <Route path="/episode">
            <Episode />
          </Route>

          <Route path="/location">
            <Location />
          </Route>

          <Route path="/">
            <Character />
          </Route>
        </Switch>

        <Menu />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
