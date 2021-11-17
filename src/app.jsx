import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { darkTheme, litghTheme } from "./styles/theme";

import ButtonTheme from "./components/buttons/button-theme/ButtonTheme";

import Character from "./pages/character/index";
import Episode from "./pages/episode/index";
import Location from "./pages/location/index";

import Menu from "./components/menu/Menu";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeProvider theme={theme ? litghTheme : darkTheme}>
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
      <ButtonTheme click={() => setTheme(!theme)} />
    </ThemeProvider>
  );
}

export default App;
